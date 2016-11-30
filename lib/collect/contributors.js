require('dotenv').load()

const repos = require('../../')
const RateLimiter = require('limiter').RateLimiter
const limiter = new RateLimiter(1, 1000)
const Octokat = require('octokat')
const octo = new Octokat({token: process.env.GITHUB_ACCESS_TOKEN})

console.log('Collecting GitHub contributor data')

repos.forEach(repo => {
  if (repo.status === 404 || Array.isArray(repo.contributors)) return

  limiter.removeTokens(1, function () {
    octo.repos(repo.owner.login, repo.name).contributors.fetch({per_page: 100})
      .then(users => {
        repo.contributors = users.map(user => user.login)
        repo.save(`${repo.contributors.length} contributors`)
      })
  })
})
