const fs = require('fs')
const path = require('path')
const objectValues = require('object-values')
const requireDir = require('require-dir')
const Repo = require('../repo')
const shas = {}
const repos = objectValues(requireDir(path.join(__dirname, '../../repos')))
  .map(repoData => new Repo(repoData))
  .filter(repo => repo.valid)
  .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))

console.log(`Finding parent repos for former forks`)

repos.forEach(repo => {
  const sourceRepo = shas[repo.firstCommit.sha]

  if (sourceRepo) {
    var filename = path.join(__dirname, '../../repos', `${repo.fullName.replace('/', '___')}.json`)
    // Import the raw data file for modification
    var rawRepo = require(filename)
    rawRepo.sourceRepo = sourceRepo
    saveFile(rawRepo, filename)
  } else {
    // This is the first repo found with this SHA,
    // therefore it is a source repo
    shas[repo.firstCommit.sha] = repo.fullName
  }
})

function saveFile (repo, filename) {
  console.log(`${path.basename(filename)} (saved first commit)`)
  fs.writeFileSync(filename, JSON.stringify(repo, null, 2))
}
