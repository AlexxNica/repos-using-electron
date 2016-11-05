const expect = require('chai').expect
const repos = require('..')
const they = it

describe('repos', function () {
  it('is an array with hella repos', function () {
    expect(repos).to.be.an('array')
    expect(repos.length).to.be.above(4950)
  })

  it('is sorted by fork count', function () {
    expect(repos[0].forksCount).to.be.above(2000)
    expect(repos[repos.length - 1].forksCount).to.equal(0)
  })

  they('always have a status and packageStatus of 200', function () {
    expect(repos.every(repo => repo.status === 200)).to.equal(true)
    expect(repos.every(repo => repo.packageStatus === 200)).to.equal(true)
  })

  they('always have a name', function () {
    expect(repos.every(repo => repo.name.length > 0)).to.equal(true)
  })

  they('always have a packageJSON object', function () {
    repos.forEach(repo => {
      expect(repo.packageJSON).to.be.an('object', `${repo.name} should have a packageJSON object`)
      expect(repo.pkg).to.deep.equal(repo.packageJSON, `${repo.name} should have a 'pkg' alias`)
    })
  })

  they('have nice-package convenience methods', function () {
    const spectron = repos.find(repo => repo.fullName === 'electron/spectron')

    expect(spectron.pkg.dependsOn('dev-null')).to.equal(true)
    expect(spectron.pkg.devDependsOn('mocha')).to.equal(true)
    expect(spectron.pkg.somehowDependsOn('split')).to.equal(true)
  })

  they('all depend on electron or electron-prebuilt', function () {
    expect(repos.every(repo => repo.pkg.somehowDependsOn('electron') || repo.pkg.somehowDependsOn('electron-prebuilt'))).to.equal(true)
  })
})
