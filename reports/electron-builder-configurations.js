const repos = require('..').filter(repo => !repo.fork)
const dedent = require('dedent')

console.log(dedent`
  # \`electron-builder\` configurations

  A list of repositories that depend on \`electron-rebuild\`, sorted by
  repository fork count. Each entry displays the value of the \`build\` and
  \`scripts\` stanzas from the repo's \`package.json\`.
`)


repos
  .filter(repo => repo.pkg.somehowDependsOn('electron-builder'))
  .filter(repo => repo.pkg.build)
  .filter(repo => repo.pkg.scripts)
  .forEach(repo => {
    console.log(dedent`
### [${repo.fullName}](https://github.com/${repo.fullName}/tree/master/package.json)

> ${repo.pkg.description || repo.description || ''}

\`\`\`json
  ${JSON.stringify(repo.pkg.build, null, 2)}
\`\`\`

\`\`\`json
  ${JSON.stringify(repo.pkg.scripts, null, 2)}
\`\`\`


\n\n\n`)
  })
