require('dotenv').load()

const repos = require('require-dir')('../../repos')
const fs = require('fs')
const path = require('path')
const pick = require('lodash').pick
const RateLimiter = require('limiter').RateLimiter
const limiter = new RateLimiter(1, 720) // 720 ms = 5000 per hour
const Octokat = require('octokat')
const octo = new Octokat({token: process.env.GITHUB_ACCESS_TOKEN})

console.log(`Filling ${Object.keys(repos).length} repos with first commit data`)

Object.keys(repos).forEach(basename => {
  var [owner, name] = basename.split('___')
  var filename = path.join(__dirname, '../../repos', `${basename}.json`)
  var repo = require(filename)

  // bail if commit is already present
  if (repo.status === 404 || Array.isArray(repo.firstCommit)) return

  limiter.removeTokens(1, function () {
    octo.repos(owner, name).commits.fetch({per_page: 1})
      .then(someCommits => {
        someCommits.lastPage()
        .then(lastPage => {
          repo.firstCommit = pick(lastPage[0], ['sha', 'commit'])
          saveFile(repo, filename)
        })
      })
  })
})

function saveFile (repo, filename) {
  console.log(`${path.basename(filename)} (saved first commit)`)
  fs.writeFileSync(filename, JSON.stringify(repo, null, 2))
}
