require('dotenv').load()

const repos = require('../all-repos')
const path = require('path')
const RateLimiter = require('limiter').RateLimiter
const limiter = new RateLimiter(1, 1000)
var Octokat = require('octokat')
var octo = new Octokat({token: process.env.GITHUB_ACCESS_TOKEN})

console.log('Collecting repo metadata from the GitHub API')

repos.forEach(repo => {
  if (repo.status) {
    console.log(`${repo.fullName} ${repo.status} (skipping)`)
    return
  }

  limiter.removeTokens(1, function () {
    const parts = path.basename(repo.filename).split('___')
    octo.repos(parts[0], parts[1]).fetch()
      .then(data => {
        Object.assign(repo, data, {status: 200})
        repo.save(`status: ${repo.status}`)
      })
      .catch(error => {
        console.error(error)
        Object.assign(repo, {status: 404})
        repo.save(`status: ${repo.status}`)
      })
  })
})
