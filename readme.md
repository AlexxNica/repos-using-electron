# repos-using-electron [![Build Status](https://travis-ci.org/zeke/repos-using-electron.svg?branch=master)](https://travis-ci.org/zeke/repos-using-electron)

A collection of all public repositories on GitHub that depend on `electron-prebuilt`

Uses the [libraries.io](https://libraries.io/api) to find dependent repos,
and the [GitHub](https://developer.github.com/v3/) API to fetch latest
`package.json` for each repo.

## Installation

```sh
npm install repos-using-electron --save
```

## Usage

When you require this module, you get a big array full of repository objects.

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
hyperterm.dependsOn('object-values') // true
hyperterm.devDependsOn('webpack') // true
hyperterm.somehowDependsOn('hoarders') // false
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
- [require-dir](https://github.com/aseemk/requireDir): Helper to require() directories.

## Dev Dependencies

- [chai](https://github.com/chaijs/chai): BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
- [dotenv](https://github.com/motdotla/dotenv): Loads environment variables from .env file
- [get-repo-package-json](https://github.com/zeke/get-repo-package-json): Fetch a GitHub repository&#39;s package.json file using the GitHub API
- [limiter](https://github.com/jhurliman/node-rate-limiter): A generic rate limiter for node.js. Useful for API clients, web crawling, or other tasks that need to be throttled
- [lodash.sortby](https://github.com/lodash/lodash): The lodash method `_.sortBy` exported as a module.
- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework
- [object-values](https://github.com/sindresorhus/object-values): Get the values of an object
- [octokat](https://github.com/philschatz/octokat.js): Javascript GitHub client for NodeJS or a browser using promises or callbacks
- [path-exists](https://github.com/sindresorhus/path-exists): Check if a path exists
- [pify](https://github.com/sindresorhus/pify): Promisify a callback-style function
- [request](https://github.com/request/request): Simplified HTTP request client.
- [standard](https://github.com/feross/standard): JavaScript Standard Style
- [standard-markdown](https://github.com/zeke/standard-markdown): Test your Markdown files for Standard JavaScript Style™

## License

MIT
