const Repo = require('./lib/repo')

module.exports = require('object-values')(require('require-dir')('./repos'))
  .map(repoData => new Repo(repoData))
  .filter(repo => {
    return repo.packageStatus === 200 &&
    (repo.pkg.somehowDependsOn('electron') || repo.pkg.somehowDependsOn('electron-prebuilt'))
  })
  .sort((a, b) => b.forksCount - a.forksCount)
