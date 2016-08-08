require('dotenv').load()

const repos = require('object-values')(require('require-dir')('./repos'))

console.log(repos)
const path = require('path')
const RateLimiter = require('limiter').RateLimiter
const limiter = new RateLimiter(1, 1000)
const getPackageJSON = require('get-repo-package-json')

repos.forEach(repo => {
  // For now, skip repos that already have some metadata
  if (repo.name) return

  let filename = path.join(__dirname, 'repos', `${repo._librariesioMetadata.full_name.replace('/', '___')}.json`)

  // console.log(repo.full_name)
  limiter.removeTokens(1, function () {
    getPackageJSON(repo.full_name, function (err, pkg) {
      if (err) throw err
      pkg._librariesioMetadata = repo
      let filename = path.join(__dirname, 'repos', `${repo.full_name.replace('/', '___')}.json`)
      console.log('  ' + filename)
      fs.writeFileSync(filename, JSON.stringify(pkg, null, 2))
    })
  })
