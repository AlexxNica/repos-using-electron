require('dotenv').load()

const repos = require('../../')
const RateLimiter = require('limiter').RateLimiter
const limiter = new RateLimiter(1, 1000)
const getPackageJSON = require('get-repo-package-json')

console.log('Filling repos with package.json metadata')

repos.forEach(repo => {
  if (repo.status === 404 || repo.packageStatus) return

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
