require('dotenv').load()

const repos = require('require-dir')('./repos')
const fs = require('fs')
const path = require('path')
const RateLimiter = require('limiter').RateLimiter
const limiter = new RateLimiter(1, 1000)
const getPackageJSON = require('get-repo-package-json')
const exists = require('path-exists').sync

console.log(`Filling ${Object.keys(repos).length} repos with metadata`)

Object.keys(repos).forEach(basename => {
  let fullname = basename.replace('___', '/')
  let filename = path.join(__dirname, 'repos', `${basename}.json`)
  console.log(fullname)
  fs.writeFileSync(filename, '{}')

  // limiter.removeTokens(1, function () {
  //   getPackageJSON(fullname, function (err, pkg) {
  //     if (err) throw err
  //     let extant = exists(filename) ? require(filename) : {}
  //     fs.writeFileSync(filename, JSON.stringify(Object.assign({}, extant, pkg), null, 2))
  //   })
  // })
})
