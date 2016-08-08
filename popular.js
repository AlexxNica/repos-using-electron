const repos = require('object-values')(require('require-dir')('./repos'))
const sortBy = require('lodash.sortby')

console.log('\n\n\nMost Starred\n')
sortBy(repos, '_librariesioMetadata.stargazers_count')
  .reverse()
  .slice(0, 100)
  .forEach(repo => {
    let _ = repo._librariesioMetadata
    console.log(`${_.full_name} ${_.description} (${_.stargazers_count} stars)`)
  })

console.log('\n\n\nMost Forked\n')
sortBy(repos, '_librariesioMetadata.forks_count')
  .reverse()
  .slice(0, 100)
  .forEach(repo => {
    let _ = repo._librariesioMetadata
    console.log(`${_.full_name} ${_.description} (${_.forks_count} forks)`)
  })

console.log('\n\n\nMost Contributions\n')
sortBy(repos, '_librariesioMetadata.github_contributions_count')
  .reverse()
  .slice(0, 100)
  .forEach(repo => {
    let _ = repo._librariesioMetadata
    console.log(`${_.full_name} ${_.description} (${_.github_contributions_count} contributions)`)
  })
