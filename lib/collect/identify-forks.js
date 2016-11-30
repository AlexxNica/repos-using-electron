const shas = {}
const repos = require('../../')
  .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))

console.log('Finding parent repos of repos that are pretending they\'re not forks')

repos.forEach(repo => {
  const sourceRepo = shas[repo.firstCommit.sha]

  if (sourceRepo) {
    repo.sourceRepo = sourceRepo
    repo.save('added firstCommit')
  } else {
    // This is the oldest repo with this SHA, therefore it is a source repo
    shas[repo.firstCommit.sha] = repo.fullName
  }
})
