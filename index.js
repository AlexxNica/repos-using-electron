const Repo = require('./lib/repo')
const requireDir = require('require-dir')
const path = require('path')
const uniqueBy = require('lodash').uniqBy
const repoObject = requireDir(path.join(__dirname, '/repos'))
const repos = Object.keys(repoObject).map(basename => {
  const repo = repoObject[basename]
  repo.filename = `${basename}.json`
  return repo
})
  .map(repoData => new Repo(repoData))
  .filter(repo => repo.valid)
  .sort((a, b) => b.forksCount - a.forksCount)

module.exports = uniqueBy(repos, 'fullName')
