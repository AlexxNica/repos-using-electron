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

When you require this module, you get a big object full of repository metadata.
Each key is in the form `user___repo`, and each value is that repository's
package.json content, plus extra metadata from libraries.io in the
`_librariesioMetadata` property.


```js
const repos = require('repos-using-electron')
```

## Development

To hack on this thing you'll need a
[Libraries.io API key](https://libraries.io/account) and a
[GitHub Personal Access Token](https://github.com/settings/tokens) with `repo`
access. Put your keys in a `.env` file:

```sh
touch .env
echo LIBRARIES_IO_API_KEY=foo
echo GITHUB_ACCESS_TOKEN=bar
```

Then:

```sh
npm run fetch
```

## Tests

```sh
npm install
npm test
```

## Dependencies

- [require-dir](https://github.com/aseemk/requireDir): Helper to require() directories.

## Dev Dependencies

- [dotenv](https://github.com/motdotla/dotenv): Loads environment variables from .env file
- [github-url-to-object](https://github.com/zeke/github-url-to-object): Extract user, repo, and other interesting properties from GitHub URLs
- [is-url](https://github.com/segmentio/is-url): Check whether a string is a URL.
- [limiter](https://github.com/jhurliman/node-rate-limiter): A generic rate limiter for node.js. Useful for API clients, web crawling, or other tasks that need to be throttled
- [request](https://github.com/request/request): Simplified HTTP request client.
- [standard](https://github.com/feross/standard): JavaScript Standard Style


## License

MIT
