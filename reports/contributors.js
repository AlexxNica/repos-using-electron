const flatten = require('lodash.flatten')
const count = require('count-array-values')
const repos = require('..')
  .filter(repo => !repo.fork && repo.contributors && repo.contributors.length)

const reposByMaintainerCount = repos
  .sort((a,b) => b.contributors.length - a.contributors.length)
  .slice(0, 250)

console.log(`# Top Electron apps by contributor count\n\n`)

reposByMaintainerCount.forEach(repo => {
  let {name, fullName, description} = repo
  if (!description) description = repo.pkg.description
  let keywords = ''
  if (repo.pkg.keywords) keywords = ' [' + repo.pkg.keywords.join(', ') + ']'
  console.log(`1. [${name}](https://github.com/${fullName}) - ${description} _(${repo.contributors.length} contributors)_ ${keywords}`)
})

console.log(`\n\n# Top Electron users by project count\n\n`)
let contributors = flatten(repos.map(repo => repo.contributors))
const contributorCounts = count(contributors, 'user').slice(0, 100)

contributorCounts.forEach(_ => {
  let {count, user} = _
  console.log(`1. [${user}](https://github/${user}) _(${count} projects)_`)
})
