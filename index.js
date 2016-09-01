const Repo = require('./lib/repo')

module.exports = require('object-values')(require('require-dir')('./repos'))
  .map(repoData => new Repo(repoData))
  .filter(repo => repo.packageStatus === 200)
