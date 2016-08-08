#!/usr/bin/env node

require('dotenv').load()
require('shelljs/global')

const fs = require('fs')
const path = require('path')
const pify = require('pify')
const request = require('request')
const exists = require('path-exists').sync
const RateLimiter = require('limiter').RateLimiter
const limiter = new RateLimiter(1, 1000)
const URL = require('url')
const PER_PAGE = 100

let packageName = 'electron-prebuilt'

pify(getTotalDependentCount)(packageName)
  .then(function (totalDeps) {
    console.log(`Found ${totalDeps} repos that depend on ${packageName}\n`)

    for (let page = 1; page <= (totalDeps/PER_PAGE); page++) {
      limiter.removeTokens(1, function () {
        let url = getDependentsPageURL(packageName, page)
        console.log(url)
        request(url, {json: true}, function (err, resp, repos) {
          if (err || !repos || repos.error || !Array.isArray(repos)) return
          repos.forEach(function (repo) {
            let filename = path.join(__dirname, 'repos', `${repo.full_name.replace('/', '___')}.json`)
            let pkg = exists(filename) ? require(filename) : {}
            pkg._librariesioMetadata = repo
            fs.writeFileSync(filename, JSON.stringify(pkg, null, 2))
            console.log('  ' + filename)
          })
        })
      })
    }
  })

function getTotalDependentCount (packageName, callback) {
  let url = getDependentsPageURL(packageName, 1)
  request.get(url, {json: true}, function(err, resp, body) {
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
