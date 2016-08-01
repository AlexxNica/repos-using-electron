require('dotenv').load()

const fs = require('fs')
const path = require('path')
const request = require('request')
const RateLimiter = require('limiter').RateLimiter
const librariesLimiter = new RateLimiter(1, 1000)
const githubLimiter = new RateLimiter(1, 1000)
const gh = require('github-url-to-object')
const URL = require('url')
const isURL = require('is-url')

function download () {
  for (let page=1; page<500; page++) {
    librariesLimiter.removeTokens(1, function () {
      let url = getURLForPage(page)
      request(url, {json: true}, function(err, resp, repos) {

        // crude way to ignore 404s
        if (!repos || repos.error || !Array.isArray(repos)) return

        repos.forEach(function (repository) {
          if (!isURL(repository.repository_url)) return
          let repoParts = gh(repository.repository_url)
          if (!repoParts) return
          let {user, repo} = repoParts

          if (!repo || !user) return
          let pkgURL = getPackageJSONURLForRepository(user, repo)


          githubLimiter.removeTokens(1, function () {
            request(pkgURL, {json: true, headers: {'user-agent': 'repos-using-electron'}}, function(err, resp, packageJSON) {
              console.log(packageJSON)
              if (!packageJSON.content || !packageJSON.content.length) return
              let content = Buffer(packageJSON.content, packageJSON.encoding).toString()

              content = JSON.parse(content)
              content._librariesioMetadata = repository

              let filename = path.join(__dirname, 'repos', `${user}___${repo}.json`)
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

function getPackageJSONURLForRepository(user, repo) {
  return URL.format({
    protocol: 'https:',
    host: 'api.github.com',
    pathname: `/repos/${user}/${repo}/contents/package.json`,
    query: {
      access_token: process.env.GITHUB_PERSONAL_ACCESS_TOKEN
    }
  })
}

function getURLForPage(page, perPage) {
  return URL.format({
    protocol: 'https:',
    host: 'libraries.io',
    pathname: '/api/npm/electron-prebuilt/dependents/',
    query: {
      api_key: process.env.LIBRARIES_IO_API_KEY,
      page: page,
      per_page: perPage || 100
    }
  })
}
if (!process.parent) download()

module.exports = download
