const expect = require('chai').expect
const repos = require('..')
const they = it

describe('repos', function () {
  it('is an array with hella repos', function () {
    expect(repos).to.be.an('array')
    expect(repos.length).to.be.above(1000)
  })

  it('has npm package data', function () {
    // console.log(repos[1])
    const spectron = repos.find(repo => repo.fullName === 'electron/spectron')
    expect(spectron).to.be.an('object')
    expect(spectron.packageJSON).to.be.an('object')
    expect(spectron.packageJSON.dependsOn('dev-null')).to.equal(true)
  })

  they('always have a name', function () {
    expect(repos.every(repo => repo.name.length > 0)).to.equal(true)
  })

  they('always have a packageJSON object', function () {
    repos.forEach(repo => {
      expect(repo.packageJSON).to.be.an('object', `${repo.name} should have a packageJSON object`)
    })
  })
})
