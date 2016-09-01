require('dotenv').load()

const repos = require('require-dir')('./repos')
const fs = require('fs')
const path = require('path')
const RateLimiter = require('limiter').RateLimiter
const limiter = new RateLimiter(1, 1000)
const getPackageJSON = require('get-repo-package-json')

console.log(`Filling ${Object.keys(repos).length} repos with metadata`)

Object.keys(repos).forEach(basename => {
  let [owner, name] = basename.split('___')
  let filename = path.join(__dirname, 'repos', `${basename}.json`)
  let repo = require(filename)

  // bail if metadata is already present
  if (repo.status === 404 || repo.packageStatus) return

  limiter.removeTokens(1, function () {
    getPackageJSON(`${owner}/${name}`, function (err, pkg) {
      if (err) {
        Object.assign(repo, {packageStatus: 404})
      } else {
        Object.assign(repo, {packageJSON: pkg, packageStatus: 200})
      }
      console.log(`${path.basename(filename)} (${repo.packageStatus})`)
      fs.writeFileSync(filename, JSON.stringify(repo, null, 2))
    })
  })
})
