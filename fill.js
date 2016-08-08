require('dotenv').load()

const repos = require('object-values')(require('require-dir')('./repos'))
const fs = require('fs')
const path = require('path')
const RateLimiter = require('limiter').RateLimiter
const limiter = new RateLimiter(1, 1000)
const getPackageJSON = require('get-repo-package-json')
const exists = require('path-exists').sync

console.log(`Filling ${repos.length} repos with metadata`)

repos.forEach(repo => {

  let full_name = repo._librariesioMetadata.full_name
  let filename = path.join(__dirname, 'repos', `${full_name.replace('/', '___')}.json`)

  // skip repos that already have package.json metadata
  if (repo.name) {
    return console.log(`${full_name} (skip)`)
  } else {
    console.log(full_name)
  }

  limiter.removeTokens(1, function () {
    getPackageJSON(full_name, function (err, pkg) {
      if (err) throw err
      let extant = exists(filename) ? require(filename) : {}
      fs.writeFileSync(filename, JSON.stringify(Object.assign({}, extant, pkg), null, 2))
    })
  })
})
