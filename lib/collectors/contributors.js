require('dotenv').load()

const repos = require('require-dir')('../../repos')
const fs = require('fs')
const path = require('path')
const RateLimiter = require('limiter').RateLimiter
const limiter = new RateLimiter(1, 1000)
const Octokat = require('octokat')
const octo = new Octokat({token: process.env.GITHUB_ACCESS_TOKEN})

console.log(`Filling ${Object.keys(repos).length} repos with contributor data`)

Object.keys(repos).forEach(basename => {
  var [owner, name] = basename.split('___')
  var filename = path.join(__dirname, '../../repos', `${basename}.json`)
  var repo = require(filename)

  // bail if metadata is already present
  if (repo.status === 404 || repo.contributors) return

  limiter.removeTokens(1, function () {
    octo.repos(owner, name).contributors.fetch({per_page: 100, limit: 100})
      .then(users => {
        repo.contributors = users.map(user => user.login)
        console.log(repo.contributors)
        saveFile(repo, filename)
      })
  })
})

function saveFile (repo, filename) {
  console.log(`${path.basename(filename)} (${repo.status})`)
  fs.writeFileSync(filename, JSON.stringify(repo, null, 2))
}
