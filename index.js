const Repo = require('./lib/repo')
const objectValues = require('object-values')
const requireDir = require('require-dir')
const path = require('path')
const uniqueBy = require('lodash').uniqBy

const repos = objectValues(requireDir(path.join(__dirname, '/repos')))
  .map(repoData => new Repo(repoData))
  .filter(repo => repo.valid)
  .sort((a, b) => b.forksCount - a.forksCount)

module.exports = uniqueBy(repos, 'fullName')
