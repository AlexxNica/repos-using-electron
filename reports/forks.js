const repos = require('..')
  .filter(repo => !repo.fork)
  .sort((a, b) => b.forksCount - a.forksCount)
  .slice(0, 250)

console.log(`# The most forked Electron apps on GitHub\n\n`)

repos.forEach(repo => {
  let {name, fullName, description} = repo
  if (!description) description = repo.pkg.description
  let keywords = ''
  if (repo.pkg.keywords) keywords = ' [' + repo.pkg.keywords.join(', ') + ']'
  console.log(`1. [${name}](https://github.com/${fullName}) - ${description} _(${repo.forksCount} forks)_ ${keywords}`)
})
