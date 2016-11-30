require('dotenv').load()

const repos = require('../../')
const pick = require('lodash').pick
const RateLimiter = require('limiter').RateLimiter
const limiter = new RateLimiter(1, 720) // 720 ms = 5000 per hour
const Octokat = require('octokat')
const octo = new Octokat({token: process.env.GITHUB_ACCESS_TOKEN})

console.log(`Filling ${Object.keys(repos).length} repos with first commit data`)

repos.forEach(repo => {
  // bail if commit is already present
  if (repo.status === 404 || repo.firstCommit) {
    console.log(`${repo.fullName} (skipping)`)
    return
  }

  limiter.removeTokens(1, function () {
    octo.repos(repo.owner.login, repo.name).commits.fetch({per_page: 1})
      .then(someCommits => {
        someCommits.lastPage()
        .then(lastPage => {
          repo.firstCommit = pick(lastPage[0], ['sha', 'commit'])
          repo.save('saved source repo')
        })
      })
  })
})
