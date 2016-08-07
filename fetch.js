require('dotenv').load()

const fs = require('fs')
const request = require('request')
const RateLimiter = require('limiter').RateLimiter
const librariesLimiter = new RateLimiter(1, 1000)
const githubLimiter = new RateLimiter(1, 1000)
const getPackageJSON = require('get-repo-package-json')
const URL = require('url')

function downloadPackageJSONFiles () {
  for (let page = 1; page < 1000; page++) {
    librariesLimiter.removeTokens(1, function () {
      let url = getURLForDependentsPage(page)
      console.log(url)
      request(url, {json: true}, function (err, resp, repos) {
        console.log('repos', repos)
        // ignore 404s
        if (err || !repos || repos.error || !Array.isArray(repos)) return

        repos.forEach(function (repoData) {
          console.log(repoData.full_name)
          githubLimiter.removeTokens(1, function () {
            getPackageJSON(repoData.full_name, function (err, pkg) {
              if (err) throw err
              console.log('  ' + repoData.full_name)
              pkg._librariesioMetadata = repoData
              fs.writeFileSync(filename, JSON.stringify(pkg, null, 2))
            })
          })
        })
      })
    })
  }
}

function getURLForDependentsPage (page, perPage) {
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
