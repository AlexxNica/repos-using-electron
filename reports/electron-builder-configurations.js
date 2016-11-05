const repos = require('..').filter(repo => !repo.fork)
const dedent = require('dedent')

repos
  .filter(repo => repo.pkg.somehowDependsOn('electron-builder'))
  .filter(repo => repo.pkg.build)
  .forEach(repo => {
    console.log(dedent`
### [${repo.fullName}](https://github.com/${repo.fullName}/tree/master/package.json)

> ${repo.pkg.description || repo.description || ''}

\`\`\`json
  ${JSON.stringify(repo.pkg.build, null, 2)}
\`\`\`
\n\n\n`)
  })
