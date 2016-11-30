require('dotenv').load()

const repos = require('../all-repos')
const RateLimiter = require('limiter').RateLimiter
const limiter = new RateLimiter(5000, 'hour')
const getPackageJSON = require('get-repo-package-json')

console.log('Filling repos with package.json metadata')

repos.forEach(repo => {
  if (repo.status === 404) {
    console.log(`${repo.fullName} (${repo.status} status, skipping)`)
    return
  }

  if (repo.packageStatus) {
    console.log(`${repo.fullName} (${repo.packageStatus} packageStatus, skipping)`)
    return
  }

  limiter.removeTokens(1, function () {
    getPackageJSON(repo.fullName, function (err, pkg) {
      if (err) {
        Object.assign(repo, {packageStatus: 404})
      } else {
        Object.assign(repo, {packageJSON: pkg, packageStatus: 200})
      }
      repo.save(`status: ${repo.packageStatus}`)
    })
  })
})
