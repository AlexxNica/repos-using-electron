require('dotenv').load()

const repos = require('../all-repos')
const pick = require('lodash').pick
const RateLimiter = require('limiter').RateLimiter
const limiter = new RateLimiter(5000, 'hour')
const Octokat = require('octokat')
const octo = new Octokat({token: process.env.GITHUB_ACCESS_TOKEN})

console.log(`Filling ${Object.keys(repos).length} repos with first commit data`)

repos.forEach(repo => {
  if (repo.status === 404) {
    console.log(`${repo.fullName} (${repo.status} status, skipping)`)
    return
  }

  if (repo.firstCommit) {
    console.log(`${repo.fullName} (already has firstCommit data, skipping)`)
    return
  }

  limiter.removeTokens(1, function () {
    octo.repos(repo.owner.login, repo.name).commits.fetch({per_page: 1})
      .then(someCommits => {
        limiter.removeTokens(1, function () {
          someCommits.lastPage()
          .then(lastPage => {
            repo.firstCommit = pick(lastPage[0], ['sha', 'commit'])
            repo.save('saved source repo')
          })
        })
      })
  })
})
