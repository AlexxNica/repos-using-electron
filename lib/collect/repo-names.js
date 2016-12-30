require('dotenv').load()

const fs = require('fs')
const path = require('path')
const pify = require('pify')
const request = require('request')
const exists = require('path-exists').sync
const RateLimiter = require('limiter').RateLimiter
const limiter = new RateLimiter(5000, 'hour')
const URL = require('url')
const PER_PAGE = 100

// getRepos('electron-prebuilt')
// getRepos('electron')
getRepos('electron-prebuilt-compile')

function getRepos (packageName) {
  pify(getTotalDependentCount)(packageName)
    .then(function (totalDeps) {
      console.log(`Found ${totalDeps} repos that depend on ${packageName}\n`)

      for (let page = 1; page <= Math.ceil(totalDeps / PER_PAGE); page++) {
        limiter.removeTokens(1, function () {
          let url = getDependentsPageURL(packageName, page)
          console.log(url)
          request(url, {json: true}, function (err, resp, repos) {
            if (err || !repos || repos.error || !Array.isArray(repos)) return
            repos.forEach(function (repo) {
              let filename = path.join(__dirname, '../../repos', `${repo.full_name.replace('/', '___')}.json`)
              if (!exists(filename)) {
                fs.writeFileSync(filename, JSON.stringify({}))
                console.log(`                    ${repo.full_name} (NEW)`)
              } else {
                console.log(`  ${repo.full_name}`)
              }
            })
          })
        })
      }
    })
}

function getTotalDependentCount (packageName, callback) {
  let url = getDependentsPageURL(packageName, 1)
  console.log(url)
  request.get(url, {json: true}, function (err, resp, body) {
    if (err) return callback(err)
    return callback(null, resp.headers.total)
  })
}

function getDependentsPageURL (packageName, page) {
  return URL.format({
    protocol: 'https:',
    host: 'libraries.io',
    pathname: `/api/npm/${packageName}/dependent_repositories/`,
    query: {
      api_key: process.env.LIBRARIES_IO_API_KEY,
      page: page,
      per_page: PER_PAGE
    }
  })
}
