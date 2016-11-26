# repos-using-electron [![Build Status](https://travis-ci.org/electron/repos-using-electron.svg?branch=master)](https://travis-ci.org/electron/repos-using-electron)

A collection of all public GitHub repositories that depend on `electron`
or `electron-prebuilt`.

Uses the [libraries.io](https://libraries.io/api) to find dependent repos,
and the [GitHub](https://developer.github.com/v3/) API to fetch latest
`package.json` for each repo.

## Installation

```sh
npm install repos-using-electron --save
```

## Usage

When you require this module, you get an array of repository objects.

```js
const repos = require('repos-using-electron')
```

To find a specific repo:

```js
const hyperterm = repos.find(repo => repo.fullName === 'zeit/hyperterm')
```

Each repo has a `pkg` property that is a [nice package](http://ghub.io/nice-package).
This gives you some convenience functions:

```js
hyperterm.pkg.dependsOn('object-values') // true
hyperterm.pkg.devDependsOn('webpack') // true
hyperterm.pkg.somehowDependsOn('hoarders') // false
```

Find the top 30 repos that depend on `electron-builder` (repos are sorted by
`forksCount` by default):

```js
repos
  .filter(repo => repo.pkg.somehowDependsOn('electron-builder'))
  .slice(0, 30)
  .map(repo => repo.fullName)
```

Open those top 30 repos in your browser:

```js
const open = require('open')

repos
  .filter(repo => repo.pkg.somehowDependsOn('electron-builder'))
  .slice(0, 30)
  .map(repo => open(repo.htmlUrl))
```

## Development

To hack on this thing you'll need a
[Libraries.io API key](https://libraries.io/account) and a
[GitHub Personal Access Token](https://github.com/settings/tokens) with `repo`
access. Put your keys in a `.env` file; they'll be loaded into the environment
at runtime:

```sh
touch .env
echo LIBRARIES_IO_API_KEY=foo >> .env
echo GITHUB_ACCESS_TOKEN=bar >> .env
```

Then list the scripts you can run:

```sh
npm run
```

## Tests

```sh
npm install
npm test
```

## Dependencies

- [nice-package](https://github.com/zeke/nice-package): Clean up messy package metadata from the npm registry
- [object-values](https://github.com/sindresorhus/object-values): Get the values of an object
- [require-dir](https://github.com/aseemk/requireDir): Helper to require() directories.

## Dev Dependencies

- [chai](https://github.com/chaijs/chai): BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
- [count-array-values](https://github.com/zeke/count-array-values): Count the instances of each value in an array
- [dedent](https://github.com/dmnd/dedent): An ES6 string tag that strips indentation from multi-line strings
- [dotenv](https://github.com/motdotla/dotenv): Loads environment variables from .env file
- [fetch-nice-package](https://github.com/hemanth/fetch-nice-package): fetch cleaned package metadata from the npm registry.
- [get-repo-package-json](https://github.com/zeke/get-repo-package-json): Fetch a GitHub repository&#39;s package.json file using the GitHub API
- [keyed-array](https://github.com/zeke/keyed-array): Recursively add named keys to arrays of objects
- [limiter](https://github.com/jhurliman/node-rate-limiter): A generic rate limiter for node.js. Useful for API clients, web crawling, or other tasks that need to be throttled
- [lodash.flatten](https://github.com/lodash/lodash): The lodash method `_.flatten` exported as a module.
- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework
- [npm-run-all](https://github.com/mysticatea/npm-run-all): A CLI tool to run multiple npm-scripts in parallel or sequential.
- [octokat](https://github.com/philschatz/octokat.js): Javascript GitHub client for NodeJS or a browser using promises or callbacks
- [path-exists](https://github.com/sindresorhus/path-exists): Check if a path exists
- [pify](https://github.com/sindresorhus/pify): Promisify a callback-style function
- [request](https://github.com/request/request): Simplified HTTP request client.
- [standard](https://github.com/feross/standard): JavaScript Standard Style
- [standard-markdown](https://github.com/zeke/standard-markdown): Test your Markdown files for Standard JavaScript Style™

## License

MIT
