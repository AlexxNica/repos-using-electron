require('dotenv').load()

const repos = require('../all-repos')
const RateLimiter = require('limiter').RateLimiter
const limiter = new RateLimiter(5000, 'hour')
const Octokat = require('octokat')
const octo = new Octokat({token: process.env.GITHUB_ACCESS_TOKEN})

console.log('Collecting GitHub releases data')

repos.forEach(repo => {
  if (repo.status === 404) {
    console.log(`${repo.fullName} (${repo.status} status, skipping)`)
    return
  }

  if (Array.isArray(repo.releases)) {
    console.log(`${repo.fullName} (already has ${repo.releases.length} releases, skipping)`)
    return
  }

  limiter.removeTokens(1, function () {
    octo.repos(repo.owner.login, repo.name).releases.fetch({per_page: 100})
      .then(releases => {
        repo.releases = releases
        repo.save(`${repo.releases.length} releases`)
      })
  })
})
