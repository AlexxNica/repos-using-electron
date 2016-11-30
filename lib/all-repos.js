const Repo = require('./repo')
const requireDir = require('require-dir')
const path = require('path')
const repoObject = requireDir(path.join(__dirname, '../repos'))

module.exports = Object.keys(repoObject).map(basename => {
  const repo = repoObject[basename]
  repo.filename = `${basename}.json`
  return repo
}).map(repoData => new Repo(repoData))
