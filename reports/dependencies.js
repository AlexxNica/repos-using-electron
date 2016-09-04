const count = require('count-array-values')
const flatten = require('lodash.flatten')
const fetch = require('fetch-nice-package')
const keyedArray = require('keyed-array')
const dedent = require('dedent')
const limit = 100
const repos = require('..').filter(repo => !repo.fork)

var depNames = flatten(repos.map(repo => repo.pkg.depNames))
const depCounts = count(depNames, 'package').slice(0, limit)
depNames = depCounts.map(c => c.package)

var devDepNames = flatten(repos.map(repo => repo.pkg.devDepNames))
const devDepCounts = count(devDepNames, 'package').slice(0, limit)
devDepNames = devDepCounts.map(c => c.package)

let fetches = depNames.concat(devDepNames).map(name => fetch(name))
let packages

Promise.all(fetches)
  .then(render)
  .catch(console.error)

function logPackage (pkg) {
  if (!packages[pkg] || typeof packages[pkg] !== 'object') return
  const {name, description} = packages[pkg]
  console.log(`1. [${name}](http://ghub.io/${name}) - ${description}`)
}

function render (result) {
  console.log(dedent`
    # Common Dependencies in Electron Apps

    The most-used npm package dependencies in all the public repos on Github that
    depend on \`electron\` or \`electron-prebuilt\`.
    Forks are excluded from this analysis.
  `)

  packages = keyedArray(result)
  console.log('\n\n## Dependencies\n')
  depNames.forEach(logPackage)

  console.log('\n\n## Dev Dependencies\n')
  devDepNames.forEach(logPackage)
}
