const Repo = require('./lib/repo')
const requireDir = require('require-dir')
const path = require('path')
const chain = require('lodash').chain
const repoObject = requireDir(path.join(__dirname, '/repos'))

module.exports = chain(Object.keys(repoObject))
  .map(basename => {
    const repoData = repoObject[basename]
    repoData.filename = `${basename}.json`
    return new Repo(repoData)
  })
  .filter(repo => repo.valid)
  .uniqBy('fullName')
  .sort((a, b) => b.forksCount - a.forksCount)
  .value()
