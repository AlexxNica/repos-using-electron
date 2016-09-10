require('dotenv').load()

const repos = require('require-dir')('../../repos')
const fs = require('fs')
const path = require('path')
const RateLimiter = require('limiter').RateLimiter
const limiter = new RateLimiter(1, 1000)
var Octokat = require('octokat')
var octo = new Octokat({token: process.env.GITHUB_ACCESS_TOKEN})

console.log(`Filling ${Object.keys(repos).length} repos with metadata`)

Object.keys(repos).forEach(basename => {
  let [owner, name] = basename.split('___')
  let filename = path.join(__dirname, '../../repos', `${basename}.json`)
  let repo = require(filename)

  // bail if metadata is already present
  if (repo.status) return

  limiter.removeTokens(1, function () {
    octo.repos(owner, name).fetch()
      .then(data => {
        repo = Object.assign(repo, data, {status: 200})

        // remove unhelpful URLs from object
        Object.keys(repo).forEach(key => {
          if (key.match(/url$/i)) delete repo[key]
        })

        saveFile(repo, filename)
      })
      .catch(error => {
        console.error(error)
        repo = Object.assign(repo, {status: 404})
        saveFile(repo, filename)
      })
  })
})

function saveFile (repo, filename) {
  console.log(`${path.basename(filename)} (${repo.status})`)
  fs.writeFileSync(filename, JSON.stringify(repo, null, 2))
}
