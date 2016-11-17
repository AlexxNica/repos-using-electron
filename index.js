const Repo = require('./lib/repo')
const objectValues = require('object-values')
const requireDir = require('require-dir')
const path = require('path')
const uniqueBy = require('lodash.uniqby')

const repos = objectValues(requireDir(path.join(__dirname, '/repos')))
  .map(repoData => new Repo(repoData))
  .filter(repo => {
    return repo.packageStatus === 200 &&
    repo.name &&
    repo.name.length &&
    (repo.pkg.somehowDependsOn('electron') || repo.pkg.somehowDependsOn('electron-prebuilt'))
  })
  .sort((a, b) => b.forksCount - a.forksCount)

module.exports = uniqueBy(repos, 'fullName')
