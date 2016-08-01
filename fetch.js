require('dotenv').load()

const fs = require('fs')
const path = require('path')
const request = require('request')
const RateLimiter = require('limiter').RateLimiter
const librariesLimiter = new RateLimiter(1, 1000)
const githubLimiter = new RateLimiter(1, 1000)
const URL = require('url')
const isURL = require('is-url')

function downloadPackageJSONFiles () {
  for (let page=1; page<500; page++) {
    librariesLimiter.removeTokens(1, function () {
      let url = getURLForDependentsPage(page)
      request(url, {json: true}, function(err, resp, repos) {
        // ignore 404s
        if (err || !repos || repos.error || !Array.isArray(repos)) return

        repos.forEach(function (repo) {
          let [user, project] = repo.full_name.split('/')
          let pkgURL = getURLForPackageJSON(user, project)

          githubLimiter.removeTokens(1, function () {
            request(pkgURL, {json: true, headers: {'user-agent': 'repos-using-electron'}}, function(err, resp, packageJSON) {
              console.log(packageJSON)
              if (!packageJSON.content || !packageJSON.content.length) return
              let content = Buffer(packageJSON.content, packageJSON.encoding).toString()

              content = JSON.parse(content)
              content._librariesioMetadata = repo

              let filename = path.join(__dirname, 'repos', `${user}___${project}.json`)
              console.log('\n\n\n')
              console.log(filename)
              console.log(content)
              fs.writeFileSync(filename, JSON.stringify(content, null, 2))
            })
          })
        })
      })
    })
  }
}

function getURLForPackageJSON(user, repo) {
  return URL.format({
    protocol: 'https:',
    host: 'api.github.com',
    pathname: `/repos/${user}/${repo}/contents/package.json`,
    query: {
      access_token: process.env.GITHUB_PERSONAL_ACCESS_TOKEN
    }
  })
}

function getURLForDependentsPage(page, perPage) {
  return URL.format({
    protocol: 'https:',
    host: 'libraries.io',
    pathname: '/api/npm/electron-prebuilt/dependent_repositories/',
    query: {
      api_key: process.env.LIBRARIES_IO_API_KEY,
      page: page,
      per_page: perPage || 100
    }
  })
}

if (!process.parent) downloadPackageJSONFiles()

module.exports = downloadPackageJSONFiles
