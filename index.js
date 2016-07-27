require('dotenv').load()

const request = require('request')
const RateLimiter = require('limiter').RateLimiter
const limiter = new RateLimiter(1, 1000)
const gh = require('github-url-to-object')
const URL = require('url')

function download () {
  for (let page=1; page<500; page++) {
    limiter.removeTokens(1, function() {
      let url = getURLForPage(page)
      console.log('\n\n\n')
      console.log(url)
      request(url, {json: true}, function(err, resp, repos) {
        repos.forEach(function(repo) {
          let repoParts = gh(repo.repository_url)
          if (repoParts) {
            let packageJsonUrl = repoParts.api_url + '/contents/package.json'
            console.log(packageJsonUrl)
            // https://api.github.com/repos/steelbrain/denode/contents/package.json
            // https://cdn.rawgit.com/steelbrain/denode/master/package.json
          }
        })
      })
    })
  }
}

function getURLForPage(page) {
  return URL.format({
    protocol: 'https:',
    host: 'libraries.io',
    pathname: '/api/npm/electron-prebuilt/dependents/',
    query: {
      api_key: process.env.LIBRARIES_IO_API_KEY,
      page: page
    }
  })
}

if (!process.parent) download()

module.exports = download

// Readme
// Set `LIBRARIES_IO_API_KEY`. You can create one here: https://libraries.io/account

// Feedback for @teabass
// Is repo a fork?
// Use real repo URL instead of package.json repo URL
