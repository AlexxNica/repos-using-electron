# `electron-builder` configurations

A list of repositories that depend on `electron-rebuild`, sorted by
repository fork count. Each entry displays the value of the `build` and
`scripts` stanzas from the repo's `package.json`.
### [zeit/hyper](https://github.com/zeit/hyper/tree/master/package.json)

> A terminal built on web technologies

```json
{
"appId": "co.zeit.hyper",
"asar": false,
"extend-info": "build/Info.plist",
"linux": {
  "arch": [
    "ia32",
    "x64"
  ],
  "target": [
    "deb",
    "AppImage"
  ]
},
"mac": {
  "category": "public.app-category.developer-tools"
}
}
```

```json
{
"start": "concurrently --kill-others --raw \"npm run dev\" \"npm run app\"",
"app": "electron app",
"dev": "webpack -w",
"build": "NODE_ENV=production webpack",
"test": "npm run dist && xo && ava",
"prepush": "npm test",
"postinstall": "install-app-deps",
"pack": "npm run build && build --dir && babel --no-comments --compact --minified --out-file app/dist/bundle.js app/dist/bundle.js",
"dist": "npm run build && build"
}
```






### [chentsulin/electron-react-boilerplate](https://github.com/chentsulin/electron-react-boilerplate/tree/master/package.json)

> Electron application boilerplate based on React, React Router, Webpack, React Hot Loader for rapid application development

```json
{
"appId": "org.develar.ElectronReact",
"category": "public.app-category.tools",
"dmg": {
  "contents": [
    {
      "x": 410,
      "y": 150,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 150,
      "type": "file"
    }
  ]
},
"win": {
  "target": "nsis"
},
"linux": {
  "target": [
    "deb",
    "AppImage"
  ]
}
}
```

```json
{
"test": "cross-env NODE_ENV=test BABEL_DISABLE_CACHE=1 mocha --retries 2 --compilers js:babel-register --recursive --require ./test/setup.js test/**/*.spec.js",
"test-watch": "npm test -- --watch",
"test-e2e": "cross-env NODE_ENV=test BABEL_DISABLE_CACHE=1 mocha --retries 2 --compilers js:babel-register --require ./test/setup.js ./test/e2e.js",
"lint": "eslint --ignore-path .gitignore --format=node_modules/eslint-formatter-pretty app test *.js",
"hot-server": "cross-env NODE_ENV=development node --max_old_space_size=2096 -r babel-register server.js",
"build-main": "cross-env NODE_ENV=production node -r babel-register ./node_modules/webpack/bin/webpack --config webpack.config.electron.js --progress --profile --colors",
"build-renderer": "cross-env NODE_ENV=production node -r babel-register ./node_modules/webpack/bin/webpack --config webpack.config.production.js --progress --profile --colors",
"build": "npm run build-main && npm run build-renderer",
"start": "cross-env NODE_ENV=production electron ./app/",
"start-hot": "cross-env HOT=1 NODE_ENV=development electron -r babel-register -r babel-polyfill ./app/main.development",
"postinstall": "concurrently \"install-app-deps\" \"node node_modules/fbjs-scripts/node/check-dev-engines.js package.json\"",
"dev": "npm run hot-server -- --start-hot",
"package": "npm run build && build --publish never",
"package-win": "npm run build && build --win --x64",
"package-linux": "npm run build && build --linux",
"package-all": "npm run build && build -mwl",
"cleanup": "mop -v"
}
```






### [zeit/hyperterm](https://github.com/zeit/hyperterm/tree/master/package.json)

> HTML/JS/CSS Terminal

```json
{
"appId": "co.zeit.hyper",
"asar": false,
"extend-info": "build/Info.plist",
"linux": {
  "arch": [
    "ia32",
    "x64"
  ],
  "target": [
    "deb",
    "AppImage"
  ]
},
"mac": {
  "category": "public.app-category.developer-tools"
}
}
```

```json
{
"start": "concurrently --kill-others --raw \"npm run dev\" \"npm run app\"",
"app": "electron app",
"dev": "webpack -w",
"build": "NODE_ENV=production webpack",
"test": "npm run dist && xo && ava",
"prepush": "npm test",
"postinstall": "install-app-deps",
"pack": "npm run build && build --dir && babel --no-comments --compact --minified --out-file app/dist/bundle.js app/dist/bundle.js",
"dist": "npm run build && build"
}
```






### [shockone/black-screen](https://github.com/shockone/black-screen/tree/master/package.json)

> A terminal emulator for the 21st century.

```json
{
"appId": "com.github.shockone.black-screen",
"category": "public.app-category.developer-tools"
}
```

```json
{
"preinstall": "npm prune",
"postinstall": "electron-rebuild",
"pack": "npm run compile && build",
"release": "build --publish always --prerelease",
"electron": "electron .",
"prestart": "npm install && npm run compile",
"start": "bash housekeeping/start.sh",
"test": "npm run lint && npm run unit-tests && npm run integration-tests && build --publish never",
"unit-tests": "ELECTRON_RUN_AS_NODE=1 electron $(which mocha) --require ts-node/register $(find test -name '*_spec.ts')",
"integration-tests": "npm run compile && mocha",
"update-dependencies": "ncu -u",
"lint": "tslint `find src -name '*.ts*'`",
"cleanup": "rm -rf compiled/src",
"copy-html": "mkdir -p compiled/src/views && cp src/views/index.html compiled/src/views",
"compile": "npm run cleanup && npm run tsc && npm run copy-html",
"tsc": "tsc"
}
```






### [szwacz/electron-boilerplate](https://github.com/szwacz/electron-boilerplate/tree/master/package.json)

> Boilerplate application for Electron runtime

```json
{
"appId": "com.example.electron-boilerplate",
"app-category-type": "your.app.category.type",
"win": {
  "target": [
    "nsis"
  ],
  "icon": "resources/windows/icon.ico"
},
"nsis": {
  "oneClick": true,
  "installerHeaderIcon": "resources/windows/setup-icon.ico"
},
"mac": {
  "icon": "resources/osx/icon.icns"
},
"dmg": {
  "icon": "resources/osx/dmg-icon.icns",
  "background": "resources/osx/dmg-background.png"
}
}
```

```json
{
"postinstall": "install-app-deps",
"build": "gulp build",
"prerelease": "gulp build --env=production",
"release": "build --x64 --publish never",
"start": "gulp start",
"pretest": "gulp build-unit --env=test",
"test": "electron-mocha app/specs.js.autogenerated --renderer --require source-map-support/register",
"coverage": "npm test -- -R scripts/istanbul-reporter",
"pree2e": "gulp build-e2e --env=test",
"e2e": "mocha app/e2e.js.autogenerated --require source-map-support/register"
}
```






### [poooi/poi](https://github.com/poooi/poi/tree/master/package.json)

> poi the KanColle Browser Tool

```json
{
"appId": "org.poooi.poi",
"app-category-type": "public.app-category.games",
"extraResources": [
  "PepperFlash/${os}-${arch}"
],
"npmRebuild": false,
"mac": {
  "icon": "assets/icons/poi.icns",
  "target": "dmg"
},
"dmg": {
  "contents": [
    {
      "x": 410,
      "y": 220,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 220,
      "type": "file"
    }
  ]
},
"win": {
  "iconUrl": "https://github.com/poooi/poi/blob/master/assets/icons/poi.ico?raw=true",
  "target": [
    "squirrel",
    "7z"
  ]
},
"linux": {
  "target": [
    "7z",
    "deb",
    "rpm",
    "pacman",
    "AppImage"
  ]
}
}
```

```json
{
"test": "./node_modules/.bin/mocha --harmony --compilers coffee:coffee-script/register",
"deploy": "gulp deploy",
"build": "gulp build && build",
"build_win": "gulp build && build --win --x64 && build --win --ia32",
"start": "electron .",
"start_debug": "electron . --debug",
"clean": "gulp clean"
}
```






### [nicoschmitt/necrobotvisualizer](https://github.com/nicoschmitt/necrobotvisualizer/tree/master/package.json)

> 

```json
{
"appId": "nico.NecrobotVisualizer",
"productName": "NecrobotVisualizer",
"win": {
  "iconUrl": "https://raw.githubusercontent.com/nicoschmitt/NecrobotVisualizer/master/build/icon.ico"
}
}
```

```json
{
"start": "electron ./app --enable-logging",
"postinstall": "install-app-deps",
"pack": "build --dir",
"dist": "build --win --x64",
"dist32": "build --win --ia32",
"zip": "build --win zip --x64",
"zip32": "build --win zip --ia32"
}
```






### [saenzramiro/rambox](https://github.com/saenzramiro/rambox/tree/master/package.json)

> Free and Open Source messaging and emailing app that combines common web applications into one.

```json
{
"productName": "Rambox",
"appId": "com.saenzramiro.rambox",
"category": "public.app-category.productivity",
"asar": true,
"mac": {
  "target": [
    "default"
  ],
  "icon": "./resources/installer/Icon.icns"
},
"dmg": {
  "title": "Rambox",
  "icon": "./resources/installer/Icon.icns",
  "icon-size": 128,
  "contents": [
    {
      "x": 355,
      "y": 125,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 155,
      "y": 125,
      "type": "file"
    }
  ]
},
"win": {
  "title": "Rambox",
  "target": [
    "squirrel",
    "zip"
  ],
  "loadingGif": "./resources/installer/loading.gif",
  "iconUrl": "https://raw.githubusercontent.com/saenzramiro/rambox/master/resources/Icon.ico",
  "icon": "./resources/Icon.ico",
  "msi": false
},
"linux": {
  "target": [
    "AppImage",
    "deb",
    "rpm",
    "zip",
    "tar.gz"
  ],
  "icon": "./resources/Icon.png"
}
}
```

```json
{
"start": "electron electron/main.js",
"start:debug": "electron electron/main.js --enable-logging",
"test": "node electron/test.js",
"sencha:clean": "rm -rf ./build/production",
"sencha:compile": "sencha app build && cp app/package.json build/production/Rambox/ && npm --prefix ./build/production/Rambox/ install ./build/production/Rambox/",
"sencha:compile:build": "sencha app build && cp app/package.json build/production/Rambox/ && cp -R build/production/Rambox/* ../rambox-build",
"clean": "rm -rf ./dist",
"clean:osx": "rm -rf ./dist/Rambox-darwin-*",
"clean:win": "rm -rf ./dist/Rambox-win32-*",
"pack": "npm run pack:osx && npm run pack:win",
"pack:osx": "electron-packager \"./build/production/Rambox/\" \"Rambox\" --out=dist --platform=darwin --arch=x64 --version=1.3.4 --icon=resources/installer/Icon.icns --app-version=0.2.0 --build-version=64-bit --version-string.CompanyName=\"Rambox\" --version-string.ProductName=\"Rambox\" --asar --prune --overwrite",
"pack:win": "npm run pack:win32 && npm run pack:win64",
"pack:win32": "electron-packager \"./build/production/Rambox/\" \"Rambox\" --out=dist --platform=win32 --arch=ia32 --version=1.3.4 --icon=resources/installer/Icon.ico --app-version=0.2.0 --build-version=32-bit --version-string.CompanyName=\"Rambox\" --version-string.ProductName=\"Rambox\" --asar --prune --overwrite",
"pack:win64": "electron-packager \"./build/production/Rambox/\" \"Rambox\" --out=dist --platform=win32 --arch=x64 --version=1.3.4 --icon=resources/installer/Icon.ico --app-version=0.2.0 --build-version=64-bit --version-string.CompanyName=\"Rambox\" --version-string.ProductName=\"Rambox\" --asar --prune --overwrite",
"pack:linux": "npm run pack:linux32 && npm run pack:linux64",
"pack:linux32": "electron-packager \"./build/production/Rambox/\" \"Rambox\" --out=dist --platform=linux --arch=ia32 --version=1.3.4 --icon=resources/installer/Icon.ico --app-version=0.2.0 --build-version=64-bit --version-string.CompanyName=\"Rambox\" --version-string.ProductName=\"Rambox\" --asar --prune --overwrite",
"pack:linux64": "electron-packager \"./build/production/Rambox/\" \"Rambox\" --out=dist --platform=linux --arch=x64 --version=1.3.4 --icon=resources/installer/Icon.ico --app-version=0.2.0 --build-version=64-bit --version-string.CompanyName=\"Rambox\" --version-string.ProductName=\"Rambox\" --asar --prune --overwrite",
"build": "npm run build:linux && npm run build:osx && npm run build:win",
"build:osx": "build --osx",
"build:linux": "npm run build:linux32 && npm run build:linux64",
"build:linux32": "build --linux --ia32",
"build:linux64": "build --linux --x64",
"build:win32": "build --win --ia32",
"build:win64": "build --win --x64",
"setup:osx": "npm run sencha:clean && npm run sencha:compile && npm run clean:osx && npm run pack:osx && npm run build:osx",
"setup:win": "npm run sencha:clean && npm run sencha:compile && npm run clean:win && npm run pack:win && npm run build:win",
"all:win": "npm run sencha:clean && npm run sencha:compile && npm run clean:win && npm run pack:win && npm run zip:win32 && npm run zip:win64 && npm run build:win",
"all:linux": "npm run sencha:clean && npm run sencha:compile && npm run build:linux"
}
```






### [wulkano/kap](https://github.com/wulkano/kap/tree/master/package.json)

> An open-source screen recorder built with web technology

```json
{
"asar": false,
"appId": "com.wulkano.kap",
"category": "public.app-category.productivity",
"files": [
  "**/*",
  "!src",
  "!main.js"
]
}
```

```json
{
"test": "xo",
"build": "npm run test && gulp build",
"watch": "gulp watch",
"start": "electron app",
"dist": "npm run build && build",
"pack": "npm run build && build --dir",
"postinstall": "install-app-deps && npm run ffmpeg",
"prepush": "npm run test",
"ffmpeg": "node scripts/download-ffmpeg.js"
}
```






### [mattermost/desktop](https://github.com/mattermost/desktop/tree/master/package.json)

> Mattermost

```json
{
"appId": "com.mattermost.desktop",
"linux": {
  "category": "InstantMessaging",
  "target": [
    "deb",
    "tar.gz"
  ],
  "synopsis": "Mattermost",
  "extraFiles": [
    {
      "from": "resources",
      "filter": "icon.png"
    },
    {
      "from": "resources/linux",
      "filter": "create_desktop_file.sh"
    }
  ]
},
"mac": {
  "category": "public.app-category.productivity",
  "target": [
    "tar.gz"
  ]
},
"win": {
  "description": "Mattermost",
  "target": [
    "squirrel",
    "zip"
  ],
  "iconUrl": "https://raw.githubusercontent.com/mattermost/desktop/master/resources/icon.ico"
}
}
```

```json
{
"install": "cd src && npm install",
"postinstall": "npm run build",
"build": "npm run build:main && npm run build:renderer && gulp build",
"build:main": "cross-env NODE_ENV=production webpack --config webpack.config.main.js",
"build:renderer": "cross-env NODE_ENV=production webpack --config webpack.config.renderer.js",
"start": "electron dist",
"watch": "gulp watch",
"serve": "gulp watch",
"test": "npm run build && mocha --reporter mocha-circleci-reporter --recursive test/specs && gulp prettify:verify",
"package:all": "npm run package:windows && npm run package:mac && npm run package:linux",
"package:windows": "build --win --x64 --ia32 --em.name=mattermost && npm run manipulate-windows-zip",
"package:mac": "build --mac --x64 --ia32",
"package:linux": "build --linux --x64 --ia32 --em.name=mattermost-desktop",
"manipulate-windows-zip": "node scripts/manipulate_windows_zip.js",
"prettify": "gulp prettify"
}
```






### [sqlectron/sqlectron-gui](https://github.com/sqlectron/sqlectron-gui/tree/master/package.json)

> A simple and lightweight SQL client desktop with cross database and platform support.

```json
{
"app-bundle-id": "org.sqlectron.gui",
"app-category-type": "public.app-category.developer-tools",
"osx": {
  "contents": [
    {
      "x": 438,
      "y": 275,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 192,
      "y": 275,
      "type": "file"
    }
  ]
},
"linux": {
  "depends": [],
  "target": [
    "deb",
    "rpm",
    "sh",
    "freebsd",
    "pacman",
    "tar.xz",
    "tar.gz"
  ]
}
}
```

```json
{
"postinstall": "install-app-deps",
"dev": "concurrently --names 'webpack,electron' --prefix name 'npm run dev:webpack' 'npm run dev:electron'",
"dev:webpack": "webpack-dev-server --color --config ./webpack.dev.config.js",
"dev:electron": "cross-env DEBUG=sqlectron-gui:*,sqlectron-core:*,spawn-auto-restart node scripts/dev-auto-restart.js",
"lint": "eslint . --ext .js,.jsx",
"lint:fix": "npm run lint -- --fix",
"test": "npm run lint",
"clean": "rimraf dist",
"clean:osx": "rimraf dist/Sqlectron-darwin-*",
"clean:win": "rimraf dist/win* dist/Sqlectron-win*",
"clean:linux": "rimraf dist/Sqlectron-linux-* dist/*.deb",
"compile": "rimraf app/out && npm run compile:browser && npm run compile:renderer",
"compile:browser": "cross-env NODE_ENV=production babel ./src/browser -d app/out/browser",
"compile:renderer": "cross-env NODE_ENV=production webpack --progress --display-error-details --config ./webpack.prod.config",
"build:osx": "npm run clean:osx && build --osx",
"build:linux": "npm run clean:linux && build --linux",
"build:win": "npm run clean:win && build --windows",
"dist": "npm run compile && build",
"dist:all-arch": "npm run compile && build --ia32 --x64",
"dist:winlinux": "npm run compile && npm run build:linux && npm run build:win"
}
```






### [EragonJ/Kaku](https://github.com/EragonJ/Kaku/tree/master/package.json)

> The next generation music client

```json
{
"appId": "com.kaku.kaku-desktop",
"category": "public.app-category.music",
"files": [
  "**/*",
  "!dist/**/*",
  "!tests/**/*",
  "!kaku/**/*",
  "!bin/**/*"
],
"dmg": {
  "contents": [
    {
      "x": 410,
      "y": 190,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 190
    }
  ]
},
"win": {
  "iconUrl": "https://raw.githubusercontent.com/EragonJ/Kaku/master/src/public/images/icons/kaku.ico"
},
"linux": {
  "target": [
    "zip",
    "AppImage"
  ],
  "extraFiles": [
    {
      "from": "misc/${os}/create-desktop-icon.sh",
      "to": "create-desktop-icon.sh"
    }
  ]
}
}
```

```json
{
"dev": "./node_modules/.bin/webpack --watch",
"start": "./node_modules/.bin/electron .",
"compile:less": "./node_modules/.bin/lessc src/public/less/index.less src/public/css/index.css",
"compile:js": "./node_modules/.bin/webpack",
"compile:env": "./bin/compile-env",
"compile": "./bin/compile",
"build:mac": "CSC_NAME='HAX4 CO., LIMITED (RYA9J89ZQ5)' ./node_modules/.bin/build --mac",
"build:linux": "./node_modules/.bin/build --linux --x64 --ia32",
"build:windows": "./node_modules/.bin/build --windows",
"build": "NODE_ENV=production ./bin/build",
"build:development": "NODE_ENV=development ./bin/build",
"test": "./node_modules/mocha/bin/mocha -u tdd -t 5000 --reporter dot --compilers js:babel-core/register --require ./tests/unit/setup.js --harmony_arrow_functions 'tests/unit/*.test.js'",
"uitest-all": "npm run-script prepare-build && npm run-script uitest",
"uitest": "./node_modules/mocha/bin/mocha -u tdd -t 15000 --reporter dot --harmony_arrow_functions tests/ui/*.test.js"
}
```






### [rafajaques/php-assistant](https://github.com/rafajaques/php-assistant/tree/master/package.json)

> A cross-platform desktop app for testing PHP snippets

```json
{
"appId": "br.rafajaques.phpassistant",
"build.mac.category": "public.app-category.utilities",
"iconUrl": "http://rafajaques.com.br/php-assistant/icon.ico",
"asar": false,
"mac": {
  "files": [
    "**/*",
    "!**/node_modules/*/{README.md,README,readme.md,readme,test}",
    "!**/node_modules/.bin",
    "!**/*.{o,hprof,orig,pyc,pyo,rbc}",
    "!**/._*",
    "!**/{.DS_Store,.git,.hg,.svn,CVS,RCS,SCCS,__pycache__,thumbs.db,.gitignore,.gitattributes,.editorconfig,.idea,appveyor.yml,.travis.yml,circle.yml}",
    "!**/php/php.exe",
    "!**/php/php7.dll"
  ]
},
"win": {
  "files": [
    "**/*",
    "!**/node_modules/*/{README.md,README,readme.md,readme,test}",
    "!**/node_modules/.bin",
    "!**/*.{o,hprof,orig,pyc,pyo,rbc}",
    "!**/._*",
    "!**/{.DS_Store,.git,.hg,.svn,CVS,RCS,SCCS,__pycache__,thumbs.db,.gitignore,.gitattributes,.editorconfig,.idea,appveyor.yml,.travis.yml,circle.yml}",
    "!**/php/osx"
  ]
},
"linux": {
  "files": [
    "**/*",
    "!**/node_modules/*/{README.md,README,readme.md,readme,test}",
    "!**/node_modules/.bin",
    "!**/*.{o,hprof,orig,pyc,pyo,rbc}",
    "!**/._*",
    "!**/{.DS_Store,.git,.hg,.svn,CVS,RCS,SCCS,__pycache__,thumbs.db,.gitignore,.gitattributes,.editorconfig,.idea,appveyor.yml,.travis.yml,circle.yml}",
    "!**/php/osx",
    "!**/php/php.exe",
    "!**/php/php7.dll"
  ]
}
}
```

```json
{
"start": "electron ./app",
"dev": "electron ./app --debug",
"locale-sync": "/usr/bin/env php ./tools/locale-sync.php",
"test": "eslint ./app/main.js ./app/js/*",
"postinstall": "install-app-deps",
"pack": "build --target dir",
"dist": "build --windows --linux --osx",
"dist:osx": "build --osx",
"dist:linux": "build --linux deb rpm freebsd pacman tar.xz --ia32 --x64",
"dist:linux32": "build --linux tar.xz --ia32",
"dist:linux64": "build --linux tar.xz --x64",
"dist:win": "build --windows --ia32 --x64",
"dist:win32": "build --windows --ia32",
"dist:win64": "build --windows --x64",
"publish:osx": "build --osx --publish onTagOrDraft",
"publish:linux": "build --linux deb rpm freebsd pacman tar.xz --publish onTagOrDraft",
"publish:linux32": "build --linux tar.xz --ia32 --publish onTagOrDraft",
"publish:linux64": "build --linux tar.xz --x64 --publish onTagOrDraft",
"publish:win": "npm run publish:win32 && npm run publish:win64",
"publish:win32": "build --windows --ia32 --publish onTagOrDraft",
"publish:win64": "build --windows --x64 --publish onTagOrDraft"
}
```






### [nteract/nteract](https://github.com/nteract/nteract/tree/master/package.json)

> :notebook: It's an interactive notebook!

```json
{
"electronVersion": "1.4.5",
"appId": "io.nteract.nteract",
"fileAssociations": {
  "ext": "ipynb",
  "name": "ipynb"
},
"mac": {
  "category": "public.app-category.developer-tools"
},
"win": {
  "target": "nsis"
},
"extraResources": [
  "bin",
  "example-notebooks"
]
}
```

```json
{
"postinstall": "node scripts/check-deps.js && install-app-deps",
"reinstall": "npm run clean && rimraf node_modules app/node_modules/ && npm install",
"prestart": "npm run build",
"start": "cross-env NODE_ENV=development ./node_modules/electron/cli.js ./app/",
"clean": "rimraf ./app/build dist",
"lint": "eslint src",
"lint:fix": "eslint src --fix",
"prebuild": "rimraf ./app/build",
"build": "npm run build:renderer && npm run build:main",
"build:renderer": "webpack --progress --colors",
"build:renderer:watch": "npm run build:renderer -- --watch",
"build:main": "babel src/main --out-dir ./app/build/main && babel src/utils --out-dir ./app/build/utils",
"build:icon": "./scripts/make_icons.sh && cd static/icons && iconutil -c icns nteract.iconset && mv nteract.icns ../icon.icns",
"build:docs": "esdoc -c esdoc.json",
"test": "npm run test:unit",
"pretest:functional": "npm run build",
"sublaunch": "electron-mocha --compilers js:babel-core/register",
"test:functional:launch": "npm run sublaunch -- test/main/launch.js",
"test:functional:launchNewNotebook": "npm run sublaunch -- test/main/launchNewNotebook.js",
"test:functional": "npm run test:functional:launch && npm run test:functional:launchNewNotebook",
"test:coverage": "npm run coverage",
"test:unit": "cross-env NODE_PATH=app/node_modules/ mocha -r test/setup.js --compilers js:babel-core/register \"test/renderer/**/*.js\" \"test/utils/**/*.js\"",
"test:debug": "cross-env NODE_PATH=app/node_modules/ mocha --debug-brk --inspect -r test/setup.js --compilers js:babel-core/register \"test/renderer/**/*.js\" \"test/utils/**/*.js\"",
"test:unit:individual": "cross-env NODE_PATH=app/node_modules/ mocha -r test/setup.js --compilers js:babel-core/register ",
"test:watch": "watch 'npm run test' test/",
"test:lint": "npm run lint",
"test:flow": "npm run flow",
"precoverage": "mkdirp coverage && nyc npm run test:unit",
"coverage": "cross-env NODE_PATH=app/node_modules/ nyc report --reporter=text-lcov > coverage/lcov.info",
"pack": "npm install && npm run clean && npm run build && build --dir",
"dist": "npm install && npm run clean && npm run build && build",
"flow": "flow",
"diagnostics": "app/diagnostics/kernelspecs.js"
}
```






### [cheton/cnc](https://github.com/cheton/cnc/tree/master/package.json)

> A web-based interface for CNC milling controller running Grbl or TinyG2

```json
{
"appId": "com.github.cnc",
"asar": false,
"productName": "cnc",
"mac": {
  "category": "public.app-category.productivity",
  "target": "dmg",
  "icon": "build/icon.icns"
},
"dmg": {
  "background": "build/background.png",
  "icon": "build/icon.icns",
  "iconSize": 80,
  "iconTextSize": 12,
  "contents": [
    {
      "x": 448,
      "y": 344,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 192,
      "y": 344,
      "type": "file"
    }
  ]
},
"win": {
  "target": "nsis",
  "icon": "build/icon.ico"
},
"linux": {
  "target": "deb"
}
}
```

```json
{
"package-update": "babel-node package-update",
"prepublish": "npm run clean && npm run lint && npm run build",
"prebuild": "npm run prebuild-prod",
"prebuild-latest": "bash ./scripts/prebuild-latest.sh",
"prebuild-dev": "bash ./scripts/prebuild-dev.sh",
"prebuild-prod": "bash ./scripts/prebuild-prod.sh",
"build": "gulp prod",
"build-latest": "gulp prod",
"build-dev": "gulp dev",
"build-prod": "gulp prod",
"clean": "bash -c 'rm -rf ./dist ./output'",
"electron": "electron",
"electron-builder": "build",
"electron-packager": "electron-packager",
"electron-rebuild": "electron-rebuild",
"github-release": "babel-node github-release",
"pack:darwin-x64": "bash -c 'scripts/electron-packager.sh --platform=darwin --arch=x64'",
"pack:linux-ia32": "bash -c 'scripts/electron-packager.sh --platform=linux --arch=ia32'",
"pack:linux-x64": "bash -c 'scripts/electron-packager.sh --platform=linux --arch=x64'",
"pack:win32-ia32": "bash -c 'scripts/electron-packager.sh --platform=win32 --arch=ia32'",
"pack:win32-x64": "bash -c 'scripts/electron-packager.sh --platform=win32 --arch=x64'",
"build:mac-x64": "bash -c 'scripts/electron-builder.sh --mac --x64'",
"build:linux-ia32": "bash -c 'scripts/electron-builder.sh --linux --ia32'",
"build:linux-x64": "bash -c 'scripts/electron-builder.sh --linux --x64'",
"build:win-ia32": "bash -c 'scripts/electron-builder.sh --win --ia32'",
"build:win-x64": "bash -c 'scripts/electron-builder.sh --win --x64'",
"start": "./bin/cnc",
"start-electron": "electron ./dist/cnc/main",
"dev": "npm run build-dev && NODE_ENV=development ./bin/cnc -vv -p 8000 --mount /pendant:../../examples/tinyweb",
"prod": "npm run build-prod && NODE_ENV=production ./bin/cnc",
"lint": "npm run eslint && npm run stylint",
"eslint": "eslint --ext .js --ext .jsx *.js src bin gulp test",
"stylint": "stylint src/web",
"test": "node babel-tap --coverage test/*.js",
"coveralls": "node babel-tap --coverage --coverage-report=text-lcov test/*.js | node_modules/.bin/coveralls"
}
```






### [mycard/mycard](https://github.com/mycard/mycard/tree/master/package.json)

> mycard

```json
{
"productName": "MyCard",
"appId": "com.mycard.mycard",
"category": "public.app-category.social-networking",
"publish": [
  {
    "provider": "generic",
    "url": "https://wudizhanche.mycard.moe/downloads"
  },
  {
    "provider": "github"
  }
],
"extraResources": [
  "bin"
],
"win": {
  "target": [
    "nsis"
  ]
},
"dmg": {
  "contents": [
    {
      "x": 448,
      "y": 344,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 192,
      "y": 344,
      "type": "file"
    }
  ]
}
}
```

```json
{
"pack": "tsc && build --dir",
"dist": "tsc && build",
"release": "tsc && build",
"start": "tsc && electron .",
"postinstall": "typings install",
"tsc": "tsc",
"tsc:w": "tsc -w"
}
```






### [beakerbrowser/beaker](https://github.com/beakerbrowser/beaker/tree/master/package.json)

> An Experimental P2P Browser

```json
{
"appId": "com.pfrazee.beaker-browser",
"category": "public.app-category.productivity",
"copyright": "© 2016, Paul Frazee",
"npmRebuild": false,
"asar": false,
"protocols": [
  {
    "name": "URL",
    "schemes": [
      "http",
      "https"
    ]
  },
  {
    "name": "IPFS",
    "schemes": [
      "ipfs"
    ]
  },
  {
    "name": "dat",
    "schemes": [
      "dat"
    ]
  },
  {
    "name": "view-dat",
    "schemes": [
      "view-dat"
    ]
  }
],
"dmg": {
  "contents": [
    {
      "x": 410,
      "y": 220,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 220,
      "type": "file",
      "path": "dist/mac/Beaker Browser.app"
    },
    {
      "x": 50,
      "y": 400,
      "type": "position",
      "path": ".background"
    },
    {
      "x": 150,
      "y": 400,
      "type": "position",
      "path": ".DS_Store"
    },
    {
      "x": 250,
      "y": 400,
      "type": "position",
      "path": ".Trashes"
    },
    {
      "x": 350,
      "y": 400,
      "type": "position",
      "path": ".VolumeIcon.icns"
    }
  ]
}
}
```

```json
{
"postinstall": "cd app && npm install",
"build": "gulp build",
"rebuild": "(cd app && npm rebuild --runtime=electron --target=1.4.3 --disturl=https://atom.io/download/atom-shell --build-from-source); gulp build",
"burnthemall": "rm -Rf ./node_modules ./app/node_modules; npm i",
"release": "build -m -p never",
"start": "gulp start",
"watch": "gulp start-watch"
}
```






### [beakerbrowser/beaker](https://github.com/beakerbrowser/beaker/tree/master/package.json)

> An Experimental P2P Browser

```json
{
"appId": "com.pfrazee.beaker-browser",
"category": "public.app-category.productivity",
"copyright": "© 2016, Paul Frazee",
"npmRebuild": false,
"asar": false,
"protocols": [
  {
    "name": "URL",
    "schemes": [
      "http",
      "https"
    ]
  },
  {
    "name": "IPFS",
    "schemes": [
      "ipfs"
    ]
  },
  {
    "name": "dat",
    "schemes": [
      "dat"
    ]
  },
  {
    "name": "view-dat",
    "schemes": [
      "view-dat"
    ]
  }
],
"dmg": {
  "contents": [
    {
      "x": 410,
      "y": 220,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 220,
      "type": "file",
      "path": "dist/mac/Beaker Browser.app"
    },
    {
      "x": 50,
      "y": 400,
      "type": "position",
      "path": ".background"
    },
    {
      "x": 150,
      "y": 400,
      "type": "position",
      "path": ".DS_Store"
    },
    {
      "x": 250,
      "y": 400,
      "type": "position",
      "path": ".Trashes"
    },
    {
      "x": 350,
      "y": 400,
      "type": "position",
      "path": ".VolumeIcon.icns"
    }
  ]
}
}
```

```json
{
"postinstall": "cd app && npm install",
"build": "gulp build",
"rebuild": "(cd app && npm rebuild --runtime=electron --target=1.4.3 --disturl=https://atom.io/download/atom-shell --build-from-source); gulp build",
"burnthemall": "rm -Rf ./node_modules ./app/node_modules; npm i",
"release": "build -m -p never",
"start": "gulp start",
"watch": "gulp start-watch"
}
```






### [develar/onshape-desktop-shell](https://github.com/develar/onshape-desktop-shell/tree/master/package.json)

> Onshape desktop app (web application shell). Unofficial.

```json
{
"appId": "org.develar.onshape",
"category": "public.app-category.graphics-design",
"dmg": {
  "contents": [
    {
      "x": 110,
      "y": 150
    },
    {
      "x": 240,
      "y": 150,
      "type": "link",
      "path": "/Applications"
    }
  ]
},
"win": {
  "remoteReleases": "https://github.com/develar/onshape-desktop-shell",
  "publish": [
    "github",
    "bintray"
  ]
},
"linux": {
  "publish": null,
  "target": [
    "deb",
    "AppImage"
  ]
}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "npm install && npm run compile && electron ./app",
"compile": "rimraf app/out && tsc",
"pack": "npm run compile && build --dir",
"dist": "npm run compile && build",
"release": "npm run compile && build"
}
```






### [xwartz/PupaFM](https://github.com/xwartz/PupaFM/tree/master/package.json)

> douban.fm Music Desktop Player

```json
{
"appId": "org.develar.doubanfm",
"app-category-type": "public.app-category.music",
"dmg": {
  "contents": [
    {
      "x": 410,
      "y": 150,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 150,
      "type": "file"
    }
  ]
},
"win": {
  "iconUrl": "https://raw.githubusercontent.com/xwartz/PupaFM/master/build/icon.ico",
  "remoteReleases": true
},
"linux": {
  "target": [
    "deb",
    "AppImage"
  ]
}
}
```

```json
{
"test": "npm run lint",
"pretest": "node node_modules/fbjs-scripts/node/check-dev-engines.js package.json",
"postinstall": "install-app-deps",
"install-hook": "ln -s ../../git-hooks/pre-commit .git/hooks/pre-commit",
"lint": "eslint src test *.js",
"hot-server": "node -r babel-register dev-server.js",
"hot-start": "cross-env NODE_ENV=development electron -r babel-register ./src/main.dev",
"dev": "npm run hot-server && npm run hot-start",
"log": "pm2 logs",
"stop": "pm2 stop eco.json && pm2 delete eco.json",
"start": "npm run stop && pm2 start eco.json && npm run log",
"restart": "npm run stop && npm run start",
"build-render": "cross-env NODE_ENV=production node -r babel-register ./node_modules/.bin/webpack --config webpack.config.pro.js --progress --profile --colors",
"build-main": "cross-env NODE_ENV=production node -r babel-register ./node_modules/.bin/webpack --config webpack.config.electron.js --progress --profile --colors",
"pack": "build --dir",
"dist": "build",
"compile": "npm run build-render && npm run build-main",
"package": "npm run compile && npm run pack",
"builder": "npm run compile && npm run dist",
"builder:win": "npm run compile && build --win --x64",
"builder:linux": "npm run compile && build --linux"
}
```






### [amilajack/popcorn-time-desktop](https://github.com/amilajack/popcorn-time-desktop/tree/master/package.json)

> An experimental PopcornTime client

```json
{
"appId": "popcorn-time-desktop",
"category": "public.app-category.video",
"win": {
  "iconUrl": "https://cdn.rawgit.com/amilajack/popcorn-time-desktop/master/app/icons/app.ico"
}
}
```

```json
{
"bench-api": "cross-env NODE_ENV=test BABEL_DISABLE_CACHE=1 mocha --bail --slow 3000 --timeout 20000 --inline-diffs --async-only --compilers js:babel-register --recursive --require ./test/setup.js test/**/*.benchmark.js",
"build": "cross-env NODE_ENV=production FLAG_SEASON_COMPLETE=true FLAG_MANUAL_TORRENT_SELECTION=true parallel-webpack --config=webpack.config.build.js",
"dev": "cross-env NODE_ENV=development FLAG_SEASON_COMPLETE=true FLAG_MANUAL_TORRENT_SELECTION=true FLAG_SUBTITLES=true npm run start-hot-server",
"flow": "flow check-contents < app/components/loader/Loader.js --json",
"lint": "eslint --format=node_modules/eslint-formatter-pretty app test *.js && stylelint app/styles/*.scss app/styles/**/*.scss",
"lint-summary": "eslint-nibble app test *.js",
"lint-styles": "stylelint app/styles/*.scss app/styles/**/*.scss --syntax scss",
"postinstall": "node -r babel-register postinstall.js && node node_modules/fbjs-scripts/node/check-dev-engines.js package.json",
"package": "npm run postinstall && npm run build && build --publish never",
"package-all": "npm run build && build --publish never --mac --win --linux",
"precommit": "npm run test",
"test": "npm run lint && npm run lint-styles && npm run lint-summary && npm run build && npm run test-api && npm run test-e2e",
"test-api": "cross-env NODE_ENV=test BABEL_DISABLE_CACHE=1 CONFIG_ENDPOINT_TEST=test.org mocha --slow 3000 --timeout 15000 --inline-diffs --async-only --compilers js:babel-register --recursive --require ./test/setup.js test/*.spec.js test/**/*.spec.js",
"test-e2e": "cross-env NODE_ENV=test BABEL_DISABLE_CACHE=1 mocha --bail --slow 3000 --timeout 15000 --inline-diffs --compilers js:babel-register --require ./test/setup.js  ./test/e2e.js",
"test-screenshot": "cross-env API_USE_MOCK_DATA=true BABEL_DISABLE_CACHE=1 npm run build && mocha --bail --slow 3000 --timeout 20000 --inline-diffs --compilers js:babel-register --require ./test/setup.js  ./test/screenshot.e2e.js",
"test-watch": "npm test -- --watch",
"start": "cross-env NODE_ENV=production electron ./",
"start-hot": "cross-env HOT=1 NODE_ENV=development electron -r babel-register ./main.development",
"start-hot-server": "node -r babel-register server.js"
}
```






### [exponentjs/xde](https://github.com/exponentjs/xde/tree/master/package.json)

> The Exponent Development Environment

```json
{
"asar": false,
"appId": "host.exp.xde",
"dmg": {
  "contents": [
    {
      "x": 410,
      "y": 168,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 104,
      "y": 168,
      "type": "file"
    }
  ]
},
"mac": {
  "identity": "650 Industries, Inc. (C8D8QTF339)",
  "category": "public.app-category.developer-tools"
},
"win": {
  "remoteReleases": "https://github.com/exponentjs/xde"
},
"linux": {
  "category": "Development",
  "target": [
    "AppImage"
  ]
}
}
```

```json
{
"start": "gulp build && cross-env XDE_NPM_START=1 electron ./app",
"staging": "gulp build && cross-env XDE_NPM_START=1 EXPONENT_STAGING=1 electron ./app",
"lint": "eslint src",
"local": "gulp build && cross-env XDE_NPM_START=1 EXPONENT_LOCAL=1 electron ./app",
"dist": "gulp release",
"mac": "gulp release:mac",
"win": "gulp release:windows",
"linux": "gulp release:linux"
}
```






### [nodejs/installer](https://github.com/nodejs/installer/tree/master/package.json)

> **Clone and run for a quick way to see an Electron in action.**

```json
{
"appId": "org.nodejs.installer"
}
```

```json
{
"start": "electron .",
"pack": "build --dir",
"dist": "build",
"test": "standard"
}
```






### [G07cha/pomodoro](https://github.com/G07cha/pomodoro/tree/master/package.json)

> Pomodoro timer build with electron

```json
{
"productName": "Pomodoro",
"appId": "com.g07cha.pomodoro",
"category": "public.app-category.productivity",
"mac": {
  "icon": "build/icon.icns"
},
"win": {
  "target": "nsis",
  "icon": "build/icon.ico",
  "iconUrl": "https://github.com/G07cha/pomodoro/blob/master/icons/icon.ico?raw=true"
}
}
```

```json
{
"pretest": "electron-packager ./ --platform=darwin --arch=x64 --out=dist --overwrite",
"test": "ava",
"start": "electron .",
"package": "build -mw --ia32 --x64"
}
```






### [Maybulb/Nimble](https://github.com/Maybulb/Nimble/tree/master/package.json)

> A Wolfram|Alpha® menu bar app

```json
{
"mac": {
  "target": "default",
  "icon": "assets/512.icns"
},
"dmg": {
  "title": "Nimble",
  "icon": "assets/512.icns",
  "icon-size": 80,
  "background": "assets/nimback.png",
  "contents": [
    {
      "x": 438,
      "y": 344,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 192,
      "y": 344,
      "type": "file"
    }
  ]
}
}
```

```json
{
"start": "gulp && electron ."
}
```






### [AndikaTanpaH/NecrobotJavanHawk](https://github.com/AndikaTanpaH/NecrobotJavanHawk/tree/master/package.json)

> This visual Necrobot, like a Pokemon Manager

```json
{
"appId": "ah.NecrobotJavanHawk",
"productName": "NecrobotJavanHawk",
"win": {
  "iconUrl": "https://raw.githubusercontent.com/AndikaTanpaH/NecrobotJavanHawk/master/build/javanhawkcolor.ico"
}
}
```

```json
{
"start": "electron ./app --enable-logging",
"postinstall": "install-app-deps",
"pack": "build --dir",
"dist": "build --win --x64",
"dist32": "build --win --ia32",
"zip": "build --win zip --x64",
"zip32": "build --win zip --ia32"
}
```






### [zeit/now-app](https://github.com/zeit/now-app/tree/master/package.json)

> The native client for ZEIT's now

```json
{
"appId": "co.zeit.now",
"category": "public.app-category.developer-tools",
"asar": false
}
```

```json
{
"start": "electron app/dist/main",
"postinstall": "install-app-deps && webpack",
"dev": "webpack -w",
"clean": "chmod u+x dist && rm -rf node_modules app/node_modules dist app/dist",
"build": "NODE_ENV=production webpack",
"test": "npm run pack && xo && ava",
"pack": "npm run build && build --dir"
}
```






### [FormidableLabs/spectacle-editor](https://github.com/FormidableLabs/spectacle-editor/tree/master/package.json)

> Drag and drop Spectacle editor.

```json
{
"extraResources": "dist",
"appId": "com.formidable.spectacle-editor",
"category": "public.app-category.business",
"win": {
  "target": [
    "nsis"
  ],
  "icon": "resources/windows/icon.ico"
},
"nsis": {
  "oneClick": true,
  "installerHeaderIcon": "resources/windows/setup-icon.ico"
},
"mac": {
  "icon": "resources/osx/icon.icns"
},
"dmg": {
  "icon": "resources/osx/dmg-icon.icns"
}
}
```

```json
{
"check": "npm run lint && npm run test",
"test": "cross-env NODE_ENV=test mocha --recursive --compilers js:babel-register --require ./test/setup.js \"test/**/*.spec.js\"",
"test-watch": "npm test -- --watch",
"test-e2e": "cross-env NODE_ENV=test mocha --compilers js:babel-register --require ./test/setup.js --require co-mocha ./test/e2e.js",
"lint-js": "eslint app test *.js",
"lint-css": "stylelint \"app/**/*.css\" -s",
"lint": "npm run lint-js && npm run lint-css",
"fix-lint": "eslint --fix app test *.js",
"hot-server": "node -r babel-register server.js",
"build-main": "cross-env NODE_ENV=production node -r babel-register ./node_modules/webpack/bin/webpack --config webpack.config.electron.js --progress --profile --colors",
"build-renderer": "cross-env NODE_ENV=production node -r babel-register ./node_modules/webpack/bin/webpack --config webpack.config.production.js --progress --profile --colors",
"build": "npm run build-main && npm run build-renderer",
"start": "cross-env NODE_ENV=production electron ./",
"start-hot": "cross-env HOT=1 NODE_ENV=development electron -r babel-register ./app/main.development",
"postinstall": "install-app-deps && node node_modules/fbjs-scripts/node/check-dev-engines.js package.json",
"dev": "builder concurrent hot-server start-hot",
"release": "npm run build && npm run package-all",
"package-all": "build -mwl",
"package-mac": "build -m",
"package-win": "build -w",
"package-linux": "build -l"
}
```






### [redhat-developer-tooling/developer-platform-install](https://github.com/redhat-developer-tooling/developer-platform-install/tree/master/package.json)

> Red Hat Development Suite Installer

```json
{
"appId": "com.redhat.devsuite.installer",
"category": "public.app-category.developer-tools",
"mac": {
  "icon": "resources/devsuite.icns",
  "target": "zip"
}
}
```

```json
{
"start": "gulp run",
"generate": "gulp generate",
"package-bundle": "gulp package-bundle",
"package-simple": "gulp package-simple",
"dist": "gulp dist",
"test": "gulp test",
"ui-test": "gulp ui-test",
"system-test": "gulp system-test",
"dist:mac": "gulp clean && gulp transpile:app && gulp update-package-meta && node_modules/.bin/build"
}
```






### [HR/Crypter](https://github.com/HR/Crypter/tree/master/package.json)

> An innovative, convenient and secure cross-platform crypto app

```json
{
"appId": "com.github.hr.crypter",
"asar": false,
"files": [
  "**/*",
  "!**/node_modules/*/{README.md,README,readme.md,readme,test}",
  "!**/node_modules/.bin",
  "!**/._*",
  "!**/{.DS_Store,.git,.hg,.svn,CVS,RCS,SCCS,__pycache__,thumbs.db,.gitignore,.gitattributes,.editorconfig,.idea,appveyor.yml,.travis.yml,circle.yml,*.yml}",
  "!script/*.sh",
  "!script/debug",
  "!static/styles/*.less",
  "!test${/*}"
],
"compression": "normal",
"fileAssociations": {
  "ext": "crypto",
  "name": "CRYPTO"
},
"mac": {
  "category": "public.app-category.utilities",
  "publish": "github"
},
"dmg": {
  "background": "build/background.tif",
  "icon": "build/vicon.icns",
  "iconSize": 116,
  "iconTextSize": 13,
  "contents": [
    {
      "x": 240,
      "y": 135
    },
    {
      "x": 240,
      "y": 400,
      "type": "link",
      "path": "/Applications"
    }
  ],
  "window": {
    "width": "480",
    "height": "540"
  }
},
"linux": {
  "category": "Utility",
  "publish": "github"
},
"win": {
  "iconUrl": "https://dl.dropboxusercontent.com/s/oh66258p4pgwwpq/Crypter.ico",
  "target": [
    "nsis"
  ],
  "publish": "github"
},
"nsis": {}
}
```

```json
{
"pack": "build --dir",
"dist": "build -m",
"windist": "node_modules/.bin/build -w --x64 --ia32",
"electronVersion": "node_modules/.bin/electron -v | sed s/\\v//g",
"postinstall": "install-app-deps",
"nodeGypReBuild": "./node_modules/.bin/electron-rebuild .",
"test": "TEST_RUN=true mocha --compilers js:babel-core/register test/test.js",
"xltest": "unset TEST_RUN && rm -rf ~/Library/Application\\ Support/CrypterTest/ && mocha --compilers js:babel-core/register ./test/ui/*.js",
"xtest": "npm run xtestbuild && npm run xltest",
"xtestbuild": "npm_package_productName=CrypterTest && electron-packager . $npm_package_productName --out=dest --ignore='(test|dest|coverage|backups|github)' --asar=false --platform=darwin --arch=x64 --version=$(npm run electronVersion) --icon=app/icons/Crypter.icns --app-copyright=HR --overwrite && npm run productNameChange",
"xbuild": "electron-packager . $npm_package_productName --out=dest --ignore='(test|dest|coverage|github)' --asar=false --platform=darwin --arch=x64 --version=$(npm run electronVersion) --icon=app/icons/Crypter.icns --app-copyright=Habib_Rehman --overwrite",
"coverage": "TEST_RUN=true ./node_modules/.bin/babel-node ./node_modules/.bin/isparta cover --root src/ ./node_modules/.bin/_mocha -- test/test.js --reporter mocha-lcov-reporter",
"coveralls": "node ./node_modules/.bin/coveralls < coverage/lcov.info",
"codeclimate": "node ./node_modules/.bin/codeclimate-test-reporter < coverage/lcov.info",
"productNameChange": "perl -pi -e 's/\"Crypter\"/\"CrypterTest\"/g' ./dest/CrypterTest-darwin-x64/CrypterTest.app/Contents/Resources/app/package.json && perl -pi -e 's/Crypter/CrypterTest/g' ./dest/CrypterTest-darwin-x64/CrypterTest.app/Contents/Resources/app/index.js",
"start": "./node_modules/.bin/electron .",
"wbuild": "chmod +x script/win-build.sh && script/win-build.sh",
"build": "electron-packager . $npm_package_productName --out=dest --ignore='(test|dest|coverage)' --prune --asar --all --version=$(npm run electronVersion)"
}
```






### [pfrazee/beaker](https://github.com/pfrazee/beaker/tree/master/package.json)

> Beaker is a browser for IPFS and Dat. It's licensed MIT, and supports plugins for adding new protocols and Web APIs.

```json
{
"appId": "com.pfrazee.beaker-browser",
"category": "public.app-category.productivity",
"copyright": "© 2016, Paul Frazee",
"npmRebuild": false,
"asar": false,
"protocols": [
  {
    "name": "URL",
    "schemes": [
      "http",
      "https"
    ]
  },
  {
    "name": "IPFS",
    "schemes": [
      "ipfs"
    ]
  },
  {
    "name": "dat",
    "schemes": [
      "dat"
    ]
  },
  {
    "name": "view-dat",
    "schemes": [
      "view-dat"
    ]
  }
],
"dmg": {
  "contents": [
    {
      "x": 410,
      "y": 220,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 220,
      "type": "file",
      "path": "dist/mac/Beaker Browser.app"
    },
    {
      "x": 50,
      "y": 400,
      "type": "position",
      "path": ".background"
    },
    {
      "x": 150,
      "y": 400,
      "type": "position",
      "path": ".DS_Store"
    },
    {
      "x": 250,
      "y": 400,
      "type": "position",
      "path": ".Trashes"
    },
    {
      "x": 350,
      "y": 400,
      "type": "position",
      "path": ".VolumeIcon.icns"
    }
  ]
}
}
```

```json
{
"postinstall": "cd app && npm install",
"build": "gulp build",
"rebuild": "(cd app && npm rebuild --runtime=electron --target=1.4.3 --disturl=https://atom.io/download/atom-shell --build-from-source); gulp build",
"burnthemall": "rm -Rf ./node_modules ./app/node_modules; npm i",
"release": "build -m -p never",
"start": "gulp start",
"watch": "gulp start-watch"
}
```






### [james-proxy/james](https://github.com/james-proxy/james/tree/master/package.json)

> HTTP/HTTPS proxy built in Electron and React

```json
{
"appId": "com.jamesproxy.james",
"category": "public.app-category.productivity",
"productName": "James",
"mac": {
  "icon": "resource-compile/icon.icns"
},
"dmg": {
  "icon": "resource-compile/icon.icns",
  "background": "resource-compile/icon.png"
},
"win": {
  "iconUrl": "https://github.com/mitchhentges/james/blob/electron-builder/resource-compile/icon.ico?raw=true"
},
"linux": {
  "target": [
    "AppImage",
    "deb"
  ],
  "synopsis": "Web proxy"
}
}
```

```json
{
"build": "gulp",
"start": "electron ./build",
"watch": "gulp watch",
"development": "gulp livereload",
"lint": "eslint ./src ./test",
"test": "electron-mocha --renderer --reporter dot --recursive -r setup-referee-sinon/globals test/unit --compilers js:babel-core/register",
"test-ci": "npm run lint && npm run test",
"package": "npm run dist",
"predist": "gulp clean dist-prep",
"predist:win64": "gulp clean dist-prep",
"dist": "build --x64",
"dist:win64": "build --windows --x64"
}
```






### [Vj3k0/ea-todo](https://github.com/Vj3k0/ea-todo/tree/master/package.json)

> Simple TODO application built with Electron and AngularJS.

```json
{
"appId": "hr.creaticon.eatodo",
"app-category-type": "public.app-category.productivity",
"dmg": {
  "title": "EA Todo",
  "background": "build/background.png",
  "icon": "build/icon.icns",
  "icon-size": 128,
  "contents": [
    {
      "x": 355,
      "y": 125,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 155,
      "y": 125,
      "type": "file"
    }
  ]
},
"win": {
  "iconUrl": "http://eatodo.s3.amazonaws.com/icon.ico"
}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "electron ./app --enable-logging --remote-debugging-port=9222",
"dev": "NODE_ENV='development' npm run start",
"dist": "build -mwl --x64 --ia32",
"prerelease:osx": "rimraf release/osx && mkdirp release/osx",
"release:osx": "copyfiles -f dist/mac/*.{dmg,zip} release/osx && PACKAGE_VERSION=$(cat app/package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]') && echo $PACKAGE_VERSION >> ./release/osx/VERSION",
"prerelease:win32": "rimraf release/win32 && mkdirp release/win32",
"release:win32": "copyfiles -f dist/win-ia32/{RELEASES,*.nupkg,*.exe} release/win32",
"prerelease:win64": "rimraf release/win64 && mkdirp release/win64",
"release:win64": "copyfiles -f dist/win/{RELEASES,*.nupkg,*.exe} release/win64",
"release": "run-p release:*",
"deploy": "PACKAGE_VERSION=$(cat app/package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]') && aws s3 sync release/ s3://eatodo/updates/$PACKAGE_VERSION/ --acl public-read && aws s3 sync s3://eatodo/updates/$PACKAGE_VERSION/ s3://eatodo/updates/latest/ --delete --acl public-read",
"all": "run-s dist release deploy",
"reload": "live-reload app --port 35729"
}
```






### [zaaack/ELaunch](https://github.com/zaaack/ELaunch/tree/master/package.json)

> a launcher based on Electron and inspired by UAfred，now only support linux and macos

```json
{
"appId": "io.gitub.zaaack.elaunch",
"app-category-type": "public.app-category.productivity"
}
```

```json
{
"start": "cross-env NODE_ENV=development electron ./app/index.js",
"debug": "cross-env NODE_ENV=development electron ./app/index.js --debug=5858",
"debug-brk": "electron ./app/index.js --debug-brk=5858",
"inspect": "cross-env ELECTRON_RUN_AS_NODE=true electron node_modules/node-inspector/bin/inspector.js",
"test": "ava",
"init": "node scripts/init.js",
"dev:search": "node-sass --watch --output-style compressed --recursive --output app/browser/search/css --source-map true --source-map-contents app/browser/search/scss",
"dev:pref": "cross-env NODE_ENV=development webpack-dev-server --config ./webpack.config.pref.js --hot --inline",
"build:pref": "cross-env NODE_ENV=production webpack --config ./webpack.config.pref.js --progress --profile --colors",
"build:dll": "cross-env NODE_ENV=production webpack --config ./webpack.config.dll.js -p --progress --profile --colors",
"postinstall": "install-app-deps;",
"rebuild": "electron-rebuild",
"pack": "npm test && build --dir",
"dist": "npm test && npm run build:dll && npm run build:pref && build",
"dist-all": "npm run dist -- -l -w -m",
"patch-release": "node scripts/release.js patch",
"minor-release": "node scripts/release.js minor",
"major-release": "node scripts/release.js major"
}
```






### [phutchins/pipo](https://github.com/phutchins/pipo/tree/master/package.json)

> Encrypted chat server/client

```json
{
"appId": "pipo",
"category": "chat",
"asar": false,
"directories": {
  "output": "dist",
  "buildResources": "build"
},
"mac": {
  "icon": "public/img/pipo.icns"
},
"linux": {
  "maintainer": "Philip Hutchins"
}
}
```

```json
{
"test": "npm run testsuite && npm run linter",
"testsuite": "NODE_ENV=test ./node_modules/.bin/mocha test/** client/test/** --recursive",
"coverage": "NODE_ENV=test ./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha -- --recursive",
"linter": "jshint --config .jshintrc ./main.js ./server ./client/electronClient.js ./client/js ./client/views ./test || true",
"build": "browserify client/js/network/socketClient.js -s pipo -o client/js/bundle.js",
"packager": "NODE_ENV=production ./node_modules/electron-packager/cli.js . --out ./packages --all --overwrite",
"builder": "node_modules/.bin/build --mac --linux --win",
"make-docs": "mkdir -p ./jsdoc && rm -r ./jsdoc && ./node_modules/.bin/jsdoc index.js lib -r -R README.md -u ./doc -c .jsdoc.json --verbose -d ./jsdoc && cp -r doc/assets jsdoc/assets",
"publish-docs": "npm run make-docs && node script/publishdoc.js",
"start": "node ./main.js",
"start-dev": "nodemon main",
"setup": "node ./scripts/setup.js",
"start-client": "electron ."
}
```






### [q-nick/npm-gui](https://github.com/q-nick/npm-gui/tree/master/package.json)

> Graphic User Interface for NPM packages/tasks for front and back -end users.

```json
{
"app-bundle-id": "your.id",
"app-category-type": "your.app.category.type"
}
```

```json
{
"start": "node bin/npm-gui",
"test": "node node_modules/mocha/bin/mocha ./lib/modules/**/*.js ./lib/helpers/**/*.js && node node_modules/mocha/bin/mocha responses.test.js",
"buildd": "node node_modules/webpack/bin/webpack.js -p --config webpack.client.config.js && node node_modules/webpack/bin/webpack.js -p --config webpack.server.config.js",
"dev": "node bin/_npm-gui 0.0.0.0:9001 & node node_modules/webpack/bin/webpack.js --progress --colors --watch --config webpack.client.config.js",
"app": "node bin/npm-gui-app",
"postinstall": "install-app-deps",
"pack": "build --target dir",
"dist": "build",
"test-web-client": "node node_modules/karma/bin/karma start",
"test-web-server": "node node_modules/mocha/bin/mocha ./web-server/**/*.test.js",
"test-web-server2": "node node_modules/mocha/bin/mocha ./web-server/service/project/*.test.js ./web-server/service/utils/*.test.js ./web-server/service/console/*.test.js ./web-server/service/dependencies/*.test.js"
}
```






### [Mercateo/dwatch](https://github.com/Mercateo/dwatch/tree/master/package.json)

> Manage your docker containers, images and networks in a nice and clean way.

```json
{
"app-bundle-id": "com.mercateo.dwatch",
"app-category-type": "public.app-category.developer-tools",
"iconUrl": "https://raw.githubusercontent.com/Mercateo/dwatch/master/assets/icon.ico"
}
```

```json
{
"postinstall": "install-app-deps && typings i",
"watch": "npm run build && cross-env NODE_ENV=development webpack-dev-server --config webpack-dev.config.js",
"start": "cross-env NODE_ENV=development electron ./app",
"build": "cross-env NODE_ENV=development webpack --config webpack-dev.config.js",
"build-release": "cross-env NODE_ENV=production webpack --config webpack-prod.config.js",
"dist:all": "npm run test && npm run build-release && build -l -o -w --x64",
"dist": "build",
"test": "cross-env NODE_ENV=production webpack --config webpack-test.config.js && karma start && remap-istanbul -i app/generated/coverage.json > app/generated/coverage-final.json && node scripts/generate-coverage.js text",
"coverage-html": "npm run test && node scripts/generate-coverage.js html",
"coverage-lcovonly": "npm run test && node scripts/generate-coverage.js lcovonly"
}
```






### [supnate/command-pad](https://github.com/supnate/command-pad/tree/master/package.json)

> GUI for running terminal commands.

```json
{
"compression": "normal",
"appId": "com.webows.commandpad",
"dmg": {
  "icon": "build/icon.icns"
},
"mac": {
  "category": "Tools",
  "target": "mas"
},
"win": {
  "target": "nsis",
  "iconUrl": "https://github.com/supnate/command-pad"
}
}
```

```json
{
"postinstall": "install-app-deps",
"electron": "cross-env NODE_ENV=development electron ./",
"electron:dist": "electron ./app",
"pkg:osx": "electron-packager ./build",
"start": "node ./tools/server.js",
"build": "node ./tools/build.js",
"test": "node ./tools/run_test.js app",
"test:app": "node ./tools/run_test.js app",
"test:cli": "node ./tools/run_test.js cli",
"build:test": "node ./tools/build_test_server.js",
"add:feature": "node ./tools/cli/add_feature.js",
"add:action": "node ./tools/cli/add_action.js",
"add:async-action": "node ./tools/cli/add_async_action.js",
"add:page": "node ./tools/cli/add_page.js",
"add:component": "node ./tools/cli/add_component.js",
"rm:feature": "node ./tools/cli/rm_feature.js",
"rm:action": "node ./tools/cli/rm_action.js",
"rm:async-action": "node ./tools/cli/rm_async_action.js",
"rm:page": "node ./tools/cli/rm_page.js",
"rm:component": "node ./tools/cli/rm_component.js",
"pack": "build --dir",
"dist": "npm run build && build"
}
```






### [MayGo/tockler](https://github.com/MayGo/tockler/tree/master/package.json)

> Automatically track applications usage and working time

```json
{
"npmRebuild": true,
"appId": "ee.trimatech.Tockler",
"iconUrl": "shared/img/icon/timetracker_icon.ico",
"asar": false,
"mac": {
  "category": "public.app-category.productivity",
  "icon": "shared/img/icon/timetracker_icon.icns",
  "icon-size": 40,
  "contents": [
    {
      "x": 438,
      "y": 144,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 192,
      "y": 144,
      "type": "file"
    }
  ]
},
"win": {
  "iconUrl": "https://raw.githubusercontent.com/MayGo/tockler/master/build/icon.ico",
  "icon": "build/icon.ico"
},
"linux": {
  "target": "deb"
}
}
```

```json
{
"pack": "build --dir",
"dist": "build",
"postinstall": "install-app-deps",
"test": "echo \"Please use gulp instead.\" && exit 1",
"rebuild-sqlite-win": "electron-rebuild -f -w sqlite3 && rmdir .\\app\
ode_modules\\sqlite3 /s && xcopy .\
ode_modules\\sqlite3 .\\app\
ode_modules\\sqlite3 /s /e /h",
"rebuild-sqlite-osx": "electron-rebuild -f -w sqlite3 && rm -rf ./app/node_modules/sqlite3 && cp -R ./node_modules/sqlite3 ./app/node_modules/sqlite3"
}
```






### [MayGo/tockler](https://github.com/MayGo/tockler/tree/master/package.json)

> Automatically track applications usage and working time

```json
{
"npmRebuild": true,
"appId": "ee.trimatech.Tockler",
"iconUrl": "shared/img/icon/timetracker_icon.ico",
"asar": false,
"mac": {
  "category": "public.app-category.productivity",
  "icon": "shared/img/icon/timetracker_icon.icns",
  "icon-size": 40,
  "contents": [
    {
      "x": 438,
      "y": 144,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 192,
      "y": 144,
      "type": "file"
    }
  ]
},
"win": {
  "iconUrl": "https://raw.githubusercontent.com/MayGo/tockler/master/build/icon.ico",
  "icon": "build/icon.ico"
},
"linux": {
  "target": "deb"
}
}
```

```json
{
"pack": "build --dir",
"dist": "build",
"postinstall": "install-app-deps",
"test": "echo \"Please use gulp instead.\" && exit 1",
"rebuild-sqlite-win": "electron-rebuild -f -w sqlite3 && rmdir .\\app\
ode_modules\\sqlite3 /s && xcopy .\
ode_modules\\sqlite3 .\\app\
ode_modules\\sqlite3 /s /e /h",
"rebuild-sqlite-osx": "electron-rebuild -f -w sqlite3 && rm -rf ./app/node_modules/sqlite3 && cp -R ./node_modules/sqlite3 ./app/node_modules/sqlite3"
}
```






### [vdemedes/npm-search](https://github.com/vdemedes/npm-search/tree/master/package.json)

> My excellent app

```json
{
"appId": "com.vdemedes.npm-search",
"app-category-type": "public.app-category.developer-tools"
}
```

```json
{
"test": "xo",
"start": "electron .",
"postinstall": "install-app-deps",
"pack": "build --dir",
"build": "build"
}
```






### [entrylabs/entry-offline](https://github.com/entrylabs/entry-offline/tree/master/package.json)

> entry-offline

```json
{
"osx": {
  "icon": "build/icon.icns",
  "icon-size": 80,
  "background": "build/background.png",
  "contents": [
    {
      "x": 240,
      "y": 380,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 240,
      "y": 120,
      "type": "file",
      "path": "Entry.app"
    },
    {
      "x": 380,
      "y": 250,
      "type": "file",
      "path": "./app/README.md"
    }
  ]
},
"win": {
  "loadingGif": "build/install-spinner.gif",
  "title": "Entry",
  "icon": "./icon/app.ico",
  "authors": "EntryLabs"
},
"asar": false,
"app-bundle-id": "entry-offline",
"app-category-type": "org.play-entry.entry-offline",
"iconUrl": "https://raw.githubusercontent.com/entrylabs/entry-hw/feature/electron/build/icon.ico",
"icon": "app/icon/app"
}
```

```json
{
"clean": "rimraf dist",
"pack": "build",
"dist": "build",
"dist:win": "build --arch ia32",
"dist:win64": "build --arch x64",
"pack:win": "electron-packager ./dist --platform=win32 --arch=ia32",
"dist:osx": "build",
"start": "set NODE_ENV=development&&electron -d app",
"test": "mocha test/default.js"
}
```






### [wireapp/wire-desktop](https://github.com/wireapp/wire-desktop/tree/master/package.json)

> Wire for Desktop

```json
{
"npmRebuild": false,
"linux": {
  "category": "Network",
  "target": [
    "AppImage",
    "deb"
  ]
}
}
```

```json
{
"preinstall": "cd electron && yarn",
"install": "yarn run rebuild-native-modules",
"start": "electron electron --debug=5858 --devtools --enable-logging",
"staging": "electron electron --debug=5858 --devtools --enable-logging --env=https://wire-webapp-staging.zinfra.io",
"prod": "electron electron --debug=5858 --devtools --enable-logging --env=https://app.wire.com",
"localhost": "electron electron --debug=5858 --devtools --enable-logging --env=http://localhost:8888",
"test": "eslint electron && electron-mocha tests",
"rebuild-native-modules": "electron-rebuild -m ./electron/node_modules -f",
"linux32": "build --linux --ia32",
"linux64": "build --linux --x64"
}
```






### [tylerl0706/boltly](https://github.com/tylerl0706/boltly/tree/master/package.json)

> Boltly: The complete Socket.io test client!

```json
{
"app-bundle-id": "org.boltly.boltly",
"app-category-type": "public.app-category.developer-tools",
"osx": {
  "contents": [
    {
      "x": 510,
      "y": 220,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 230,
      "y": 220,
      "type": "file",
      "path": "computed path to artifact, do not specify it - will be overwritten"
    }
  ]
}
}
```

```json
{
"install-app-deps": "install-app-deps",
"postinstall": "install-app-deps",
"start": "npm install && npm run compile && electron ./app",
"start-no-install": "npm run compile && electron ./app",
"clean": "rimraf dist",
"clean:osx": "rimraf dist/Boltly-darwin-x64",
"clean:win": "rimraf dist/win",
"compile": "rimraf app/out && gulp compile",
"pack": "npm run compile && build",
"dist": "npm run compile && build -d",
"release": "npm run compile && build",
"dist:win64": "npm run compile && ./node_modules/.bin/build --platform win32 --arch x64",
"dist:win32": "npm run compile && ./node_modules/.bin/build --platform win32 --arch ia32",
"dist:linux32": "npm run compile && ./node_modules/.bin/build --platform linux --arch ia32",
"dist:linux64": "npm run compile && ./node_modules/.bin/build --platform linux --arch x64"
}
```






### [radiant-player/radiant-player-electron](https://github.com/radiant-player/radiant-player-electron/tree/master/package.json)

> Unofficial desktop client for Google Play Music

```json
{
"app-bundle-id": "com.github.radiant-player",
"app-category-type": "public.app-category.music",
"publish": "onTagOrDraft",
"asar": false,
"win": {
  "msi": true
}
}
```

```json
{
"build": "gulp build",
"build:dist": "cross-env NODE_ENV=production gulp build",
"clean": "gulp clean",
"dist:all": "cross-env NODE_ENV=production gulp dist",
"dist:osx": "cross-env NODE_ENV=production gulp dist:osx",
"postinstall": "electron-rebuild",
"start": "electron .",
"test": "gulp test",
"watch": "gulp watch"
}
```






### [SmithersAssistant/smithers](https://github.com/SmithersAssistant/smithers/tree/master/package.json)

> Your personal assistant

```json
{
"appId": "com.robinmalfait.smithers",
"category": "app-category-type=public.app-category.developer-tools"
}
```

```json
{
"start": "package-scripts",
"test": "package-scripts test"
}
```






### [jackhumbert/qmk_firmware_flasher](https://github.com/jackhumbert/qmk_firmware_flasher/tree/master/package.json)

> GUI app to load firmware onto atmega32u4 chips.

```json
{
"app-bundle-id": "com.github.dfu-programmer-app",
"app-category-type": "public.app-category.utilities",
"win": {
  "iconUrl": "https://github.com/skullydazed/dfu-programmer-app/blob/master/build/windows.ico?raw=true"
}
}
```

```json
{
"start": "electron main.js",
"postinstall": "install-app-deps",
"pack": "build",
"dist": "build"
}
```






### [tingbot/tide-electron](https://github.com/tingbot/tide-electron/tree/master/package.json)

> Simple cross-platform IDE for developing Tingbot apps (still in early development)

```json
{
"asar": false,
"appId": "com.tingbot.tide-electron",
"app-category-type": "public.app-category.developer-tools",
"extraResources": [
  "default.tingapp",
  "vendor",
  "vendor/**/.*",
  "vendor/**/.*/**",
  "assets/TingappIcon.icns"
],
"linux": {
  "target": [
    "deb",
    "rpm",
    "tar.gz"
  ]
},
"deb": {
  "depends": [
    "python2.7",
    "python-cryptography"
  ]
},
"rpm": {
  "depends": [
    "python",
    "python2-cryptography"
  ]
},
"dmg": {
  "title": "Install Tide",
  "icon": "assets/dmgicon.icns",
  "icon-size": 100,
  "window": {
    "size": {
      "width": 562,
      "height": 400
    }
  },
  "contents": [
    {
      "x": 425,
      "y": 235,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 140,
      "y": 235,
      "type": "file"
    }
  ]
},
"extend-info": "assets/ExtraInfo.plist"
}
```

```json
{
"start": "electron app/app.js",
"postinstall": "install-app-deps",
"build-python": "python scripts/build-python-env.py",
"pack": "npm run build-python && webpack -p && build",
"dist": "npm run build-python && webpack -p && build",
"cibuild": "npm run build-python && webpack -p && build --publish never",
"dev": "concurrently --raw 'webpack --progress --watch' 'npm run start'"
}
```






### [donnycrash/react-redux-electron-starter-kit](https://github.com/donnycrash/react-redux-electron-starter-kit/tree/master/package.json)

> An Electron starter with Dave Zuko's React Redux Starter Kit intergration

```json
{
"productName": "React Redux Electron Starter",
"appId": "YourBundleId",
"app-category-type": "public.app-category.yourCategory",
"win": {
  "iconUrl": "",
  "setupIcon": ""
},
"mac": {
  "icon": "app_build/icon.icns"
},
"asar": true
}
```

```json
{
"start": "better-npm-run start",
"start-app": "better-npm-run start-app",
"start-app-hot": "better-npm-run start-app-hot",
"dev": "better-npm-run dev",
"dev:nw": "npm run dev -- --nw",
"dev:no-debug": "npm run dev -- --no_debug",
"test": "better-npm-run test",
"test:dev": "npm run test -- --watch",
"flow:check": "babel-node bin/flow-check",
"lint": "eslint .",
"lint:fix": "npm run lint -- --fix",
"codecov": "cat coverage/*/lcov.info | codecov",
"compile:dev": "better-npm-run compile:prod",
"compile:prod": "better-npm-run compile:prod",
"compile-prepare": "node bin/build-app-packagejson && install-app-deps",
"compile-app": "babel-node bin/compile && cp main.js app/",
"compile-electron": "babel -d app/dist/electron electron",
"pack": "better-npm-run compile:dev && build --dir",
"dist": "better-npm-run compile:prod && build",
"dist:linux": "better-npm-run compile:prod && build --linux",
"dist:mac": "better-npm-run compile:prod && build --mac",
"dist:win32": "better-npm-run compile:prod && build --win"
}
```






### [nirgn975/Elmctron](https://github.com/nirgn975/Elmctron/tree/master/package.json)

> A todo app.

```json
{
"appId": "your.id",
"app-category-type": "public.app-category.productivity",
"dmg": {
  "contents": [
    {
      "x": 410,
      "y": 150,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 150,
      "type": "file"
    }
  ]
},
"win": {
  "iconUrl": "https://github.com/nirgn975/Elmctron"
},
"linux": {
  "target": [
    "deb",
    "AppImage"
  ]
}
}
```

```json
{
"gulp": "gulp",
"gulp build": "gulp build",
"pack": "build --dir",
"dist-mac": "gulp build; build --macos",
"dist-linux": "gulp build; build --linux",
"dist-win": "gulp build; build --win",
"dist": "gulp build; build -mwl"
}
```






### [zlepper/go-modpack-packer](https://github.com/zlepper/go-modpack-packer/tree/master/package.json)

> Packs mods for modpacks

```json
{
"appId": "dk.zlepper.modpackpacker",
"app-category-type": "public.app-category.developer-tools",
"win": {
  "iconUrl": "https://raw.githubusercontent.com/zlepper/TechnicSolderHelper/master/TechnicSolderHelper/modpackhelper.ico"
},
"compression": "maximum"
}
```

```json
{
"pack": "build --target dir",
"dist": "build",
"test": "echo \"Error: no test specified\" && exit 1",
"postinstall": "typings install && echo To run the app please run npm start",
"start": "cd app && electron . --dev",
"prestart": "gulp"
}
```






### [Robert-Frampton/lexicon-customizer](https://github.com/Robert-Frampton/lexicon-customizer/tree/master/package.json)

> A desktop app for customizing lexicon look and feel that integrates with Liferay themes.

```json
{
"app-category-type": "public.app-category.developer-tools",
"appId": "com.robframpton.lexicon_customizer"
}
```

```json
{
"clean": "electron scripts/clean.js",
"dev": "cross-env NODE_ENV=development electron ./app",
"release": "build",
"start": "cross-env NODE_ENV=production electron ./app",
"test": "xo"
}
```






### [todbot/Blink1Control2](https://github.com/todbot/Blink1Control2/tree/master/package.json)

> Blink1Control2 GUI app for blink(1) devices

```json
{
"appId": "com.thingm.blink1control2",
"category": "public.app-category.utilities",
"asar": true,
"npmRebuild": false,
"options": {
  "prune": true,
  "overwrite": true,
  "outzz": "dist"
},
"mac": {
  "title": "Blink1Control2",
  "icon": "build/icon.icns"
},
"win": {
  "target": [
    "squirrel",
    "zip"
  ],
  "remoteReleases": true,
  "icon": "build/icon.ico",
  "iconUrl": "https://github.com/todbot/Blink1Control2/blob/master/build/icon.ico?raw=true"
},
"dmg": {
  "title": "Blink1Control2 Install",
  "icon": "build/icon.icns",
  "background": "build/background.png",
  "contents": [
    {
      "x": 355,
      "y": 140,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 155,
      "y": 140,
      "type": "file"
    }
  ]
}
}
```

```json
{
"startdev": "NODE_ENV=development npm run start",
"startdev:win": "set NODE_ENV=development&& npm run start",
"start": "electron app",
"watch": "NODE_ENV=development webpack-dev-server --hot --inline",
"watch:win": "set NODE_ENV=development&& webpack-dev-server --hot --inline",
"webpack": "webpack -p ",
"pkg:mac": "electron-packager app Blink1Control2 --overwrite --out=dist --prune --asar --platform=darwin --arch=x64 --icon=app/images/icons/blink1mk2-icon2-128px.icns --ignore='^/dist$'",
"pkg:win": "electron-packager app Blink1Control2 --overwrite --out=dist --prune --asar --platform=win32 --arch=x64 --icon=app/images/icons/blink1mk2-icon2-128px.ico --ignore='^/dist$'",
"dist:test": "build --dir",
"dist:mac": "build --mac",
"dist:win": "build --win",
"clean": "rimraf app/node_modules node_modules",
"env": "env",
"postinstall": "install-app-deps && electron-rebuild --force --module-dir app --pre-gyp-fix "
}
```






### [electrode-io/electrode-ota-desktop](https://github.com/electrode-io/electrode-ota-desktop/tree/master/package.json)

> Electrode OTA (CodePush)

```json
{
"appId": "com.electrode.ota",
"dmg": {
  "background": "./app/images/background.png",
  "contents": [
    {
      "x": 110,
      "y": 300
    },
    {
      "x": 240,
      "y": 300,
      "type": "link",
      "path": "/Applications"
    }
  ]
},
"mac": {
  "category": "public.app-category.developer-tools",
  "icon": "./electrode-icon.png",
  "target": "dmg"
},
"win": {
  "iconUrl": "(windows-only) https link to icon"
}
}
```

```json
{
"postinstall": "install-app-deps",
"hot": "concurrently --kill-others \"npm run eb:dev\"",
"distro": "npm run eb:release",
"eb:run": "cross-env NODE_ENV=development  electron --dev app",
"eb:dev": "npm run eb:webpack-dev-server & cross-env NODE_ENV=development HOT=1 electron --dev app",
"eb:pack": "npm run eb:compile && build --dir",
"eb:release": " cross-env NODE_ENV=production build",
"eb:webpack-dev-server": "cd ../electrode-ota-ui && cross-env NODE_ENV=development HOT=1 PORT=4002 ENTRY_FILE=../electrode-ota-desktop/app/renderer/index ./node_modules/.bin/webpack-dev-server --hot --inline --devtool inline-source-map  --config ./webpack.electron.config.js",
"eb:sign": "CSC_NAME=\"Mac Developer: jspears\" NODE_ENV=production DEBUG=electron-osx-sign*  build --osx"
}
```






### [emmanuelroecker/GL-Browser](https://github.com/emmanuelroecker/GL-Browser/tree/master/package.json)

> A custom browser

```json
{
"appId": "com.glicer.browser",
"category": "public.app-category.productivity",
"linux": {
  "fpm": [
    "--depends",
    "libappindicator1"
  ]
},
"mac": {
  "contents": [
    {
      "x": 410,
      "y": 150,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 150,
      "type": "file"
    }
  ]
}
}
```

```json
{
"test": "npm run lint && npm run mocha",
"test-cov": "npm run lint && npm run cover && npm run mocha-cov && npm run report-cov",
"start": "electron app/app.js",
"start-debug": "electron app/app.js --debug --userdata=./userdata",
"start-screencast": "electron app/app.js --userdata=./userdata --windowsize=600x400",
"lint": "eslint app/js",
"compile": "riot -m ./riot ./app/js/riot",
"mocha-cov": "electron-mocha --renderer --recursive ./tests/js ./tests/riot --require ./tests/setup-cov.js --reporter tests/coverage",
"mocha": "electron-mocha --renderer --recursive ./tests/js ./tests/riot --require ./tests/setup.js",
"cover": "rimraf app/js-cov && istanbul instrument -o app/js-cov app/js",
"report-cov": "istanbul report lcovonly",
"postinstall": "install-app-deps",
"pack": "rimraf app/js-cov && build",
"dist": "rimraf app/js-cov && build",
"release": "rimraf app/js-cov && build"
}
```






### [emsk/redmine-notifier](https://github.com/emsk/redmine-notifier/tree/master/package.json)

> Updated issues checker for Redmine

```json
{
"appId": "redmine-notifier",
"category": "public.app-category.productivity",
"asar": {
  "unpack": "**/app/{node_modules/node-notifier/vendor,images}/**"
},
"files": [
  "**/*",
  "!**/npm-debug\\.log",
  "!etc"
],
"copyright": "Copyright (c) 2015-2016 emsk",
"mac": {
  "target": "dmg"
},
"dmg": {
  "icon-size": 120,
  "contents": [
    {
      "x": 370,
      "y": 300,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 300,
      "type": "file"
    }
  ]
}
}
```

```json
{
"start": "electron ./app/main.js",
"prepare": "./bin/prepare.sh",
"lint": "npm run lint:js && npm run lint:css && npm run lint:text",
"lint:js": "./bin/lint-js.sh",
"lint:css": "./bin/lint-css.sh",
"lint:text": "./bin/lint-text.sh",
"build": "npm run build:mac && npm run build:win",
"build:mac": "./bin/build-mac.sh",
"build:win": "./bin/build-win.sh",
"pack": "npm run pack:mac && npm run pack:win",
"pack:mac": "./bin/pack-mac.sh",
"pack:win": "./bin/pack-win.sh",
"test": "./bin/test.sh",
"release": "npm run prepare && npm run pack"
}
```






### [mayflower/marley](https://github.com/mayflower/marley/tree/master/package.json)

> a modern ini editor

```json
{
"appId": "ini-editor.mayflower.app",
"app-category-type": "editor",
"win": {
  "iconUrl": "https://github.com/mayflower/marley/raw/master/build/icon.png"
}
}
```

```json
{
"start": "electron .",
"postinstall": "install-app-deps",
"pack": "build --dir",
"dist": "build"
}
```






### [mglaman/conductor](https://github.com/mglaman/conductor/tree/master/package.json)

> A Composer user interface

```json
{
"appId": "com.mglaman.conductor",
"productName": "Conductor",
"extraResources": [
  "composer.phar"
],
"mac": {
  "category": "public.app-category.developer-tools"
},
"win": {
  "publish": [
    "github"
  ]
},
"linux": {
  "publish": [
    "github"
  ],
  "target": [
    "deb",
    "AppImage"
  ],
  "category": "Development",
  "synopsis": "A Composer user interface"
}
}
```

```json
{
"start": "electron .",
"pack": "build --dir",
"dist": "build",
"dist-all": "build -mwl"
}
```






### [michaelbromley/skqw](https://github.com/michaelbromley/skqw/tree/master/package.json)

> Audio visualizations in JavaScript

```json
{
"appId": "skqw.skqw",
"files": [
  "**/*",
  "../visualizations/**/*"
],
"asar": false,
"mac": {
  "category": "public.app-category.entertainment"
},
"win": {
  "iconUrl": "https://raw.githubusercontent.com/michaelbromley/skqw/master/build/icon.ico"
},
"nodeGypRebuild": false
}
```

```json
{
"typings:install": "typings install",
"electron:rebuild": "electron-rebuild -m src/node_modules",
"app:watch": "webpack --watch --progress --profile",
"app:build": "rimraf app && webpack --progress --profile",
"app:build-aot": "rimraf app && webpack --progress --profile --env aot",
"electron:start": ".\
ode_modules\\electron-prebuilt\\dist\\electron.exe ./app/index.js",
"dist:win64": "build --platform win32 --arch x64",
"dist:osx": "build --osx"
}
```






### [fmaru/fmaru](https://github.com/fmaru/fmaru/tree/master/package.json)

> free marumaru 혹은 fuck marumaru

```json
{
"app-bundle-id": "org.fmaru.fmaru",
"app-category-type": "public.app-category.entertainment"
}
```

```json
{
"start_web": "gulp start_web",
"start_server": "node ./server/server.js",
"build_electron": "gulp build_electron; cd app; npm install; cd ..; ./node_modules/.bin/build -d",
"build_electron:win": "gulp build_electron && cd app && npm install && cd .. && .\
ode_modules\\.bin\\build --arch ia32"
}
```






### [Tympanix/Electorrent](https://github.com/Tympanix/Electorrent/tree/master/package.json)

> An Electron/Node/AngularJS remote client app for uTorrent server

```json
{
"appId": "dk.sparken.electorrent",
"app-category-type": "public.app-category.utilities"
}
```

```json
{
"start": "electron --debug .",
"build": "gulp build",
"install": "bower install",
"postinstall": "install-app-deps",
"pack": "build --dir",
"predist": "gulp build",
"dist": "build",
"dist:win": "build --win --x64",
"dist:mac": "build --mac",
"prerelease": "gulp build",
"release": "build"
}
```






### [codefoxes/firebase-admin](https://github.com/codefoxes/firebase-admin/tree/master/package.json)

> Firebase Management Cross Platform Application

```json
{
"appId": "com.firebaseadmin.firebase-admin",
"compression": "maximum",
"dmg": {
  "contents": [
    {
      "x": 410,
      "y": 150,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 150,
      "type": "file"
    }
  ]
},
"linux": {
  "target": "deb",
  "maintainer": "dev@codefoxes.com"
}
}
```

```json
{
"start": "mode=dev electron .",
"test": "mocha tests",
"package": "node ./build.js",
"build": "build"
}
```






### [hovancik/stretchly](https://github.com/hovancik/stretchly/tree/master/package.json)

> break time reminder app

```json
{
"appId": "net.hovancik.stretchly",
"category": "public.app-category.healthcare-fitness",
"productName": "stretchly",
"dmg": {
  "icon": "build/icon.icns",
  "iconSize": 128,
  "contents": [
    {
      "x": 355,
      "y": 125,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 155,
      "y": 125,
      "type": "file"
    }
  ]
},
"linux": {
  "target": [
    "deb",
    "rpm",
    "sh",
    "freebsd",
    "pacman",
    "tar.xz",
    "tar.gz"
  ]
},
"win": {
  "target": [
    "squirrel",
    "nsis",
    "7z",
    "zip"
  ],
  "msi": true
}
}
```

```json
{
"start": "electron ./app --enable-logging --remote-debugging-port=9222",
"dev": "NODE_ENV='development' npm run start",
"postinstall": "install-app-deps",
"pack-all": "build --dir -mwl --x64 --ia32",
"dist-all": "build -mwl --x64 --ia32",
"pack": "build --dir",
"dist": "build",
"test": "mocha tests"
}
```






### [LiskHQ/lisk-nano](https://github.com/LiskHQ/lisk-nano/tree/master/package.json)

> Lisk Nano

```json
{
"appId": "io.lisk.nano",
"category": "finance",
"productName": "Lisk Nano",
"win": {
  "target": "nsis"
}
}
```

```json
{
"start": "electron app",
"dist:win": "build --win",
"dist:osx": "build --osx",
"dist:linux": "build --linux"
}
```






### [DracotMolver/Soube](https://github.com/DracotMolver/Soube/tree/master/package.json)

> Simple music player

```json
{
"copyright": "Copyright © 2016 Diego Molina Vera.",
"asar": false,
"linux": {
  "category": "Audio",
  "packageCategory": "sound",
  "target": [
    "rpm",
    "deb"
  ],
  "synopsis": "Soube — Simple music player",
  "desktop": {
    "Type": "Application",
    "Encoding": "UTF-8",
    "Name": "Soube",
    "Exec": "soube",
    "Terminal": false,
    "Version": "1.3.2",
    "Categories": "Audio;Music;Player;AudioVideo"
  }
},
"win": {
  "target": [
    "nsis",
    "squirrel"
  ]
},
"mac": {
  "category": "public.app-category.music",
  "target": "dmg"
}
}
```

```json
{
"pack": "build --dir",
"dist": "build",
"build": "electron-packager ./app soube --out=dist --platform=linux --ignore='^/dist$' --arch=all --prune --icon='./app/assets/img/icon.png'"
}
```






### [willyb321/elite-journal](https://github.com/willyb321/elite-journal/tree/master/package.json)

> Parsing the elite dangerous journal and putting it in a cool format!

```json
{
"appId": "com.willyb321.elite-journal",
"nsis": {
  "oneClick": true
},
"win": {
  "target": [
    "nsis"
  ],
  "publish": [
    "bintray",
    "github"
  ],
  "iconUrl": "https://github.com/willyb321/elite-journal/blob/master/build/icon.ico?raw=true",
  "remoteReleases": true
}
}
```

```json
{
"test": "mocha --reporter mocha-circleci-reporter ./test.js && xo",
"start": "electron .",
"build": "electron-zip-packager . --out=dist --overwrite --platform=win32 --arch=x64 --prune --asar",
"pack": "build --dir",
"dist": "build -w --x64",
"release": "build -w --x64",
"tag": "release-it"
}
```






### [karyfoundation/graph](https://github.com/karyfoundation/graph/tree/master/package.json)

> The most powerful programming environments for graphs!

```json
{
"appId": "org.karyfoundation.graph",
"copyright": "Copyright 2016 by Kary Foundation, Inc. All right reserved.",
"dmg": {
  "contents": [
    {
      "x": 410,
      "y": 220,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 220,
      "type": "file"
    }
  ]
}
}
```

```json
{
"start": "electron ./_compiled/main.js --enable-logging",
"dev": "NODE_ENV='development' npm run start",
"dist": "node_modules/.bin/build --mac --x64 --version=1.3.3"
}
```






### [kumpelblase2/proxtop](https://github.com/kumpelblase2/proxtop/tree/master/package.json)

> A desktop application for proxer.me

```json
{
"appId": "de.eternalwings.proxtop",
"app-category-type": "public.app-category.entertainment",
"mac": {
  "target": [
    "zip",
    "tar.gz",
    "dmg"
  ]
},
"win": {
  "target": [
    "squirrel",
    "zip"
  ],
  "msi": true
}
}
```

```json
{
"test": "electron-mocha --opts mocha.opts",
"start": "./run.sh",
"dist": "make package",
"debug": "electron --debug ."
}
```






### [fermio/motorsport-display](https://github.com/fermio/motorsport-display/tree/master/package.json)

> Fermio Motorsport Display

```json
{
"asar": true,
"compression": "maximum",
"win": {
  "target": "squirrel",
  "iconUrl": "https://github.com/fermio/motorsport-display/blob/master/build/icon.ico?raw=true",
  "loadingGif": "build/install-spinner.gif"
}
}
```

```json
{
"postinstall": "install-app-deps",
"gulp": "gulp fonts styles scripts",
"build": "npm run gulp && build --win --x64",
"app": "electron app"
}
```






### [liuhong1happy/E360Player](https://github.com/liuhong1happy/E360Player/tree/master/package.json)

> E360Player is the 360° Video Player with electron.

```json
{
"osx": {
  "contents": [
    {
      "x": 410,
      "y": 150,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 150,
      "type": "file"
    }
  ]
}
}
```

```json
{
"start": "electron ./app/main.js",
"pack-osx": "electron-packager ./app E360Player --platform=darwin --arch=x64 --version=0.36.9",
"pack-win32": "electron-packager ./app E360Player --platform=win32 --arch=ia32 --version=0.36.9",
"pack-win64": "electron-packager ./app E360Player --platform=win32 --arch=x64 --version=0.36.9",
"pack-linux": "electron-packager ./app E360Player --platform=linux --arch=x64 --version=0.36.9",
"postinstall": "install-app-deps",
"pack": "build",
"dist": "build",
"release": "build"
}
```






### [mccxiv/tc](https://github.com/mccxiv/tc/tree/master/package.json)

> A desktop chat client for Twitch

```json
{
"appId": "zyx.gettc.tc",
"category": "public.app-category.social-networking",
"asar": true,
"npmRebuild": false,
"copyright": "Copyright 2015 Andrea Stella. All rights reserved",
"version-string": {
  "CompanyName": "Mccxiv Software",
  "FileDescription": "Tc, the chat client for Twitch",
  "ProductName": "Tc"
},
"dmg": {
  "background": "src/assets/dmg-background.png"
},
"mac": {
  "icon": "src/assets/icon.icns",
  "identity": "Andrea Stella (42XGWVW434)"
},
"win": {
  "loadingGif": "src/assets/install.gif",
  "authors": "Mccxiv Software",
  "description": "Tc, the chat client for Twitch",
  "title": "Tc, the chat client for Twitch",
  "setupIcon": "src/assets/icon.ico"
}
}
```

```json
{
"start": "gulp launch",
"postinstall": "gulp postinstall",
"reinstall": "gulp reinstall",
"build": "gulp build",
"don't touch pack & dist": "",
"pack": "build",
"dist": "build"
}
```






### [gamestailer94/quest-editor](https://github.com/gamestailer94/quest-editor/tree/master/package.json)

> 

```json
{
"app-bundle-id": "com.gamestailer94.QuestEditor",
"app-category-type": "public.app-category.developer-tools",
"asar": true,
"win": {
  "iconUrl": "https://raw.githubusercontent.com/gamestailer94/quest-editor/master/build/icon.ico"
}
}
```

```json
{
"postinstall": "install-app-deps",
"pack": "build --arch all",
"dist": "build --arch all",
"release": "build",
"dist:ia32": "./node_modules/.bin/build --platform win32 --arch ia32"
}
```






### [muffinista/before-dawn](https://github.com/muffinista/before-dawn/tree/master/package.json)

> screensaver fun

```json
{
"appId": "Before Dawn",
"app-category-type": "public.app-category.entertainment",
"win": {
  "verbosity": 1,
  "perMachine": "false"
},
"asar": "false",
"dmg": {
  "contents": [
    {
      "x": 338,
      "y": 14,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 192,
      "y": 14,
      "type": "file"
    }
  ]
},
"linux": {
  "arch": 64,
  "target": "deb",
  "title": "Before Dawn",
  "executable": "before-dawn",
  "comment": "Before Dawn",
  "maintainer": "Colin Mitchell <colin@muffinlabs.com>"
}
}
```

```json
{
"postinstall": "install-app-deps",
"pack": "build --dir",
"dist": "build"
}
```






### [cold-logic/heos-controller](https://github.com/cold-logic/heos-controller/tree/master/package.json)

> Controller for Denon Heos speakers

```json
{
"appId": "me.christopherd.heos-controller",
"mac": {
  "icon": "icon.icns",
  "category": "public.app-category.music"
}
}
```

```json
{
"setup": "npm install;bower install",
"pack": "build --dir",
"dist": "build",
"start": "electron app",
"test": "echo \"Error: no test specified\" && exit 1"
}
```






### [nikhiljha/nemwallet-desktop](https://github.com/nikhiljha/nemwallet-desktop/tree/master/package.json)

> NEM Desktop Wallet

```json
{
"appId": "nem.wallet",
"app-category-type": "finance",
"win": {
  "iconUrl": "https://raw.githubusercontent.com/nikhiljha/nemwallet-desktop/master/nemLogoV2_shieldOnly.ico"
}
}
```

```json
{
"pack": "build --dir",
"dist": "build"
}
```






### [Trevelopment/MZD-AIO-TI](https://github.com/Trevelopment/MZD-AIO-TI/tree/master/package.json)

> An Installer/Uninstaller for Over 40 System Tweaks for the Mazda MZD Infotainment System.

```json
{
"appId": "com.trevelopment.mzd-aio-ti",
"productName": "MZD-AIO-TI",
"copyright": "Copyright © 2016 Trevelopment By Trevor G Martin",
"extraResources": "background-images/**/*",
"extraFiles": "background/*.png",
"compression": "maximum",
"dmg": {
  "iconSize": 120,
  "iconTextSize": 14,
  "contents": [
    {
      "x": 478,
      "y": 170,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 170,
      "type": "file"
    }
  ]
},
"mac": {
  "category": "com.trevelopment.mzd-aio-ti"
},
"linux": {
  "category": "Development"
},
"squirrelWindows": {
  "iconUrl": "https://trevelopment.com/icon.ico",
  "msi": true
},
"win": {
  "target": [
    "nsis",
    "squirrel"
  ]
},
"nsis": {}
}
```

```json
{
"test": "standard && mocha --recursive",
"unit": "standard && mocha test/unit --recursive",
"integration": "standard && mocha test/integration --recursive",
"coverage": "istanbul cover node_modules/.bin/_mocha -- --recursive",
"depcheck": "dependency-check app --entry main.js --unused --no-dev",
"lint": "standard",
"start": "electron ./app/main",
"clean:linux": "rimraf releases/linux* release/*.deb release/*.AppImage",
"clean:osx": "rimraf releases/mac",
"clean:win": "rimraf releases/win*",
"clean": "npm run clean:linux && npm run clean:win && npm run clean:osx",
"pack:osx": "build --dir --mac",
"pack:win": "build --dir --win --x64",
"pack:linux": "build --dir --linux --x64",
"pack": "build --dir",
"prebuild": "node build/target.js",
"build:osx": "npm run prebuild && build --mac && npm run postbuild",
"build:win": "npm run prebuild && build --win --x64 --em.author.name=Trevelopment && npm run postbuild",
"build:linux": "npm run prebuild && build --linux deb AppImage --x64 && npm run postbuild",
"build": "build",
"postbuild": "node build/target.js --clean",
"postinstall": "install-app-deps",
"pack-win": "electron-packager ./app/ MZD-AIO-TI --asar --asar-unpack=protocol-link.html --overwrite --platform=win32 --arch=ia32 --icon=favicon.ico --prune=true --out=out --version-string.CompanyName='Trevelopment' --version-string.FileDescription='MZD-AIO-TI' --version-string.ProductName='MZD-AIO-TI'"
}
```






### [harshjv/donut](https://github.com/harshjv/donut/tree/master/package.json)

> Cross platform cryptocurrency tracker

```json
{
"appId": "com.harshjv.donut",
"productName": "Donut",
"mac": {
  "category": "public.app-category.productivity"
},
"linux": {
  "category": "Utility",
  "target": [
    "AppImage",
    "deb",
    "rpm",
    "freebsd",
    "zip"
  ]
}
}
```

```json
{
"setup": "bower install && cd src && npm install && cd .. && gulp setup && install-app-deps ",
"start": "electron ./app",
"pack": "build --dir",
"dist": "build",
"postinstall": "npm run setup"
}
```






### [dzt/jetta](https://github.com/dzt/jetta/tree/master/package.json)

> Multi-platform Bandcamp/Souldcloud Downloader built with Electron.

```json
{
"productName": "Jetta",
"asar": false,
"mac": {
  "target": "default",
  "icon": "assets/logo.icns"
},
"win": {
  "title": "Jetta",
  "icon": "assets/logo.ico",
  "version": "1.0.1",
  "target": "squirrel",
  "authors": "Peter Soboyejo"
}
}
```

```json
{
"start": "electron .",
"dev": "electron . --debug",
"dist:win": "build --windows --x64 --dir",
"dist:mac": "build --mac",
"installer": "node scripts/installer.js",
"dist": "npm run dist:win && npm run installer"
}
```






### [paulolc/snaptron](https://github.com/paulolc/snaptron/tree/master/package.json)

> It's snap, the visual, blocks based programming language stuffed in electron to control mBots.

```json
{
"win": {
  "iconUrl": "https://media.githubusercontent.com/media/develar/onshape-desktop-shell/master/build/icon.ico",
  "title": "Snaptron",
  "msi": false
}
}
```

```json
{
"install": "install-app-deps",
"compile": "node-pre-gyp install --fallback-to-build --runtime=electron --target=1.1.0 --target_arch=x64 --directory=app/node_modules/serialport/ --update-binary --dist-url=https://atom.io/download/atom-shell",
"postinstall": "npm run compile",
"start": "electron ./app",
"clean": "rimraf -f dist",
"cleanmodules": "rimraf -f app/node_modules && rimraf -f node_modules",
"cleanall": "npm run clean && npm run cleanmodules",
"dist": "npm install && npm run compile && build"
}
```






### [hzeroo/pokemon-go-stats](https://github.com/hzeroo/pokemon-go-stats/tree/master/package.json)

> Pokemon Go IV Calculator

```json
{
"appId": "org.pokemongo.pokemongo-stats",
"category": "public.app-category.entertainment",
"iconUrl": "https://raw.githubusercontent.com/hzeroo/pokemon-go-stats/master/build/icon.ico",
"linux": {
  "target": [
    "deb",
    "rpm",
    "zip"
  ]
}
}
```

```json
{
"build-main": "webpack --config webpack.config.electron-main.js --progress --profile -d",
"build-renderer": "webpack --config webpack.config.electron-renderer.js --progress --profile -d",
"build-main:prod": "webpack --config webpack.config.electron-main.js --progress --profile -p",
"build-renderer:prod": "webpack --config webpack.config.electron-renderer.js --progress --profile -p",
"build": "npm run build-main && npm run build-renderer",
"build:prod": "npm run build-main:prod && npm run build-renderer:prod",
"start": "electron app",
"dist": "build"
}
```






### [ReactivePixels/slinky](https://github.com/ReactivePixels/slinky/tree/master/package.json)

> A GUI for npm link management

```json
{
"appId": "com.example.electron-boilerplate",
"app-category-type": "your.app.category.type",
"win": {
  "target": [
    "nsis"
  ],
  "icon": "resources/windows/icon.ico"
},
"nsis": {
  "oneClick": true,
  "installerHeaderIcon": "resources/windows/setup-icon.ico"
},
"mac": {
  "icon": "resources/osx/icon.icns"
},
"dmg": {
  "icon": "resources/osx/dmg-icon.icns",
  "background": "resources/osx/dmg-background.png"
}
}
```

```json
{
"postinstall": "install-app-deps",
"build": "gulp build",
"prerelease": "gulp build --env=production",
"release": "build --x64 --publish never",
"start": "gulp start",
"pretest": "gulp build-unit --env=test",
"test": "xvfb-maybe electron-mocha app/specs.js.autogenerated --renderer --require source-map-support/register",
"coverage": "npm test -- -R scripts/istanbul-reporter",
"pree2e": "gulp build-e2e --env=test",
"e2e": "mocha app/e2e.js.autogenerated --require source-map-support/register"
}
```






### [ikogan/farnsworth](https://github.com/ikogan/farnsworth/tree/master/package.json)

> Fullscreen Application Launcher for TVs

```json
{
"app-bundle-id": "org.mythicnet.farnsworth",
"app-category-type": "public.app-category.utilities",
"linux": {
  "target": [
    "deb",
    "rpm",
    "tar.gz"
  ]
}
}
```

```json
{
"clean": "rimraf dist",
"postinstall": "install-app-deps",
"debug": "npm install && electron --debug --debug-brk ./app",
"start": "npm install && electron ./app",
"dist": "build --win --osx --linux --x64 && build --win --linux --ia32",
"dist:darwin": "build --osx",
"dist:win64": "build --win --x64",
"dist:win32": "build --win --ia32",
"dist:linux64": "build --linux --x64",
"dist:linux32": "build --linux --ia32"
}
```






### [Meadowcottage/TwitchAlerts](https://github.com/Meadowcottage/TwitchAlerts/tree/master/package.json)

> :bell: TwitchAlerts (UNOFFICIAL) Web App

```json
{
"appId": "uk.meadowcottage.StreamLabs",
"category": "public.app-category.social",
"productName": "StreamLabs",
"dmg": {
  "contents": [
    {
      "x": 410,
      "y": 150,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 150,
      "type": "file"
    }
  ]
},
"win": {
  "remoteReleases": "https://github.com/meadowcottage/StreamLabs",
  "loadingGif": "build/install-spinner.gif"
}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "npm install && npm run compile && electron ./app",
"test": "mocha",
"compile": "rimraf app/out",
"pack": "npm run compile && build --dir",
"dist": "npm run compile && build"
}
```






### [ivanseidel/TournamenterApp](https://github.com/ivanseidel/TournamenterApp/tree/master/package.json)

> Tournamenter Manager

```json
{
"appId": "com.tournamenter",
"asar": true,
"app-category-type": "public.app-category.productivity",
"mac": {
  "title": "Tournamenter Manager",
  "target": [
    "dmg"
  ],
  "icon-size": 120,
  "icon": "build/icon.icns"
},
"dmg": {
  "background": "build/background.png",
  "contents": [
    {
      "x": 610,
      "y": 150,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 150,
      "y": 150,
      "type": "file"
    }
  ]
},
"win": {
  "target": [
    "squirrel"
  ],
  "iconUrl": "https://raw.githubusercontent.com/ivanseidel/TournamenterApp/master/build/icon.ico",
  "icon": "build/icon.ico",
  "msi": false
},
"linux": {
  "description": "Tournamenter Manager App"
}
}
```

```json
{
"test": "make test",
"start": "electron ./",
"postinstall": "bower install && bower-installer",
"pack": "build --dir",
"dist": "build",
"release": "build"
}
```






### [MaraniMatias/grunt-electron-packager-builder](https://github.com/MaraniMatias/grunt-electron-packager-builder/tree/master/package.json)

> Package Electron apps. Grunt task to electron-prebuilt , electron-packager and electron-builder.

```json
{
"compression": "maximum",
"app-bundle-id": "test",
"app-category-type": "public.app-category.developer-tools",
"osx": {
  "title": "CNC-ino",
  "background": "./recursos/installer.png",
  "icon": "./recursos/cnc-ino.icns",
  "icon-size": 80,
  "contents": [
    {
      "x": 438,
      "y": 344,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 192,
      "y": 344,
      "type": "file"
    }
  ]
},
"win": {
  "title": "CNC-ino",
  "icon": "./recursos/cnc-ino.ico",
  "version": "0.1.2",
  "publisher": "Publisher Info"
},
"linux": {
  "compression": "deb",
  "version": "0.1.2",
  "icon": "./recursos/cnc-ino.ico",
  "comment": "This is a comment",
  "executable": "electron-builder-example",
  "maintainer": "Dummy Maintainer <dummy@maintainer.org>"
}
}
```

```json
{
"postinstall": "cd app && npm install",
"test": ""
}
```






### [shahidhk/iitm-network-auth-app](https://github.com/shahidhk/iitm-network-auth-app/tree/master/package.json)

> Cross platform application for authentication inside IIT Madras campus network.

```json
{
"appId": "in.shahidh.iitmnetworkauthapp",
"app-category-type": "public.app-category.utilities",
"productName": "IIT Madras Network Auth",
"dmg": {
  "title": "IIT Madras Network Auth",
  "background": "build/background.png",
  "icon": "build/icon.icns",
  "icon-size": 128,
  "contents": [
    {
      "x": 355,
      "y": 125,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 155,
      "y": 125,
      "type": "file"
    }
  ]
},
"win": {
  "iconUrl": "https://github.com/shahidhk/iitm-network-auth-app/blob/master/build/icon.ico?raw=true"
},
"linux": {
  "target": [
    "deb",
    "AppImage",
    "tar.gz"
  ]
}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "electron ./app --enable-logging --remote-debugging-port=9222",
"dev": "NODE_ENV='development' npm run start",
"dist": "build --publish onTagOrDraft --x64 --ia32",
"prerelease:osx": "rimraf release/osx && mkdirp release/osx",
"release:osx": "copyfiles -f dist/mac/*.{dmg,zip} release/osx && PACKAGE_VERSION=$(cat app/package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]') && echo $PACKAGE_VERSION >> ./release/osx/VERSION",
"prerelease:win32": "rimraf release/win32 && mkdirp release/win32",
"release:win32": "copyfiles -f dist/win-ia32/{RELEASES,*.nupkg,*.exe} release/win32",
"prerelease:win64": "rimraf release/win64 && mkdirp release/win64",
"release:win64": "copyfiles -f dist/win/{RELEASES,*.nupkg,*.exe} release/win64",
"release": "run-p release:*",
"reload": "live-reload app --port 35729"
}
```






### [smiled0g/knowledge-explorer](https://github.com/smiled0g/knowledge-explorer/tree/master/package.json)

> A desktop app that generated knowledge graph from resources in DBPedia.

```json
{
"appId": "rellink.knowledgeexplorer",
"mac": {
  "category": "references"
},
"win": {
  "iconUrl": "https://raw.githubusercontent.com/smiled0g/knowledge-explorer/master/icon/Icon.png"
}
}
```

```json
{
"start": "npm install && ./node_modules/.bin/electron .",
"pack": "build --dir",
"dist": "build"
}
```






### [Hatisoft/koteky](https://github.com/Hatisoft/koteky/tree/master/package.json)

> crossplatform social network manager

```json
{
"asar": false,
"compression": "maximum",
"osx": {
  "target": "dmg"
}
}
```

```json
{
"start": "electron .",
"dev": "electron . --dev",
"test": "mocha test",
"dist": "build --publish=onTag"
}
```






### [dabblewriter/dabble](https://github.com/dabblewriter/dabble/tree/master/package.json)

> An application for writing organized manuscripts.

```json
{
"appId": "com.dabblewriter.dabble",
"category": "public.app-category.productivity",
"dmg": {
  "backgroundColor": "#000000",
  "contents": [
    {
      "x": 402,
      "y": 75,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 108,
      "y": 75,
      "type": "file"
    }
  ]
},
"win": {}
}
```

```json
{
"start": "gulp watch",
"build": "gulp build",
"clean": "gulp clean",
"tdd": "gulp tdd",
"test": "gulp test",
"electron": "electron app",
"pack": "build --dir",
"dist": "build -mw"
}
```






### [toolkit-for-ynab/unofficial-desktop-for-ynab](https://github.com/toolkit-for-ynab/unofficial-desktop-for-ynab/tree/master/package.json)

> A desktop wrapper for YNAB

```json
{
"appId": "com.toolkit-for-ynab.unofficial-desktop-for-ynab",
"app-category-type": "public.app-category.finance",
"fileAssociations": [
  {
    "ext": "qif",
    "name": "Quicken Interchange Format"
  },
  {
    "ext": "ofx",
    "name": "Open Financial Exchange"
  },
  {
    "ext": "csv",
    "name": "Comma Separated Values"
  }
],
"extend-info": "./build/Add-Info.plist",
"dmg": {
  "contents": [
    {
      "x": 410,
      "y": 150,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 150,
      "type": "file"
    }
  ]
},
"linux": {
  "target": [
    "deb",
    "AppImage"
  ]
}
}
```

```json
{
"start": "electron --enable-logging ./app",
"debug": "electron --debug=5858 ./app",
"node-debugger": "ELECTRON_RUN_AS_NODE=true electron node_modules/node-inspector/bin/inspector.js",
"postinstall": "install-app-deps",
"pack": "build --dir",
"dist": "build",
"dist-mac": "build -m --publish onTagOrDraft",
"dist-lin-win": "build -lw --publish onTagOrDraft",
"clean": "rm -rf dist"
}
```






### [Dischan/dismae-ui](https://github.com/Dischan/dismae-ui/tree/master/package.json)

> User interface to help with dismae game development.

```json
{
"app-bundle-id": "co.dischan.dismae",
"app-category-type": "public.app-category.developer-tools",
"productName": "Dismae"
}
```

```json
{
"postinstall": "install-app-deps",
"lint": "standard --verbose",
"pack": "build",
"dist": "build",
"app": "electron app",
"build-all": "./node_modules/.bin/build --platform all --arch all --dist",
"windows": "./node_modules/.bin/build --platform win32 --arch all --dist",
"darwin": "./node_modules/.bin/build --platform darwin --arch all --dist",
"linux": "./node_modules/.bin/build --platform linux --arch all --dist"
}
```






### [warnoleto/electron-filewatcher](https://github.com/warnoleto/electron-filewatcher/tree/master/package.json)

> monitor de arquivos

```json
{
"win": {
  "noMsi": true
}
}
```

```json
{
"start": "npm install && electron ./app",
"pack": "build",
"dist": "build"
}
```






### [wmhilton/ransomAware](https://github.com/wmhilton/ransomAware/tree/master/package.json)

> Detect ransomware before it does damage.

```json
{
"appId": "com.npmjs.package.ransomaware",
"app-category-type": "public.app-category.utilities",
"win": {
  "iconUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Folder-saved-search.svg/240px-Folder-saved-search.svg.png"
}
}
```

```json
{
"start": "electron src/app.js",
"test": "echo \"Error: no test specified\" && exit 1",
"pack": "build --dir --x64",
"dist": "build --win --x64",
"release": "build --win --x64 --publish onTagOrDraft"
}
```






### [ybak/watcher](https://github.com/ybak/watcher/tree/master/package.json)

> watcher for some websites

```json
{
"asar": false,
"appId": "org.ybak",
"category": "public.app-category.graphics-design",
"dmg": {
  "contents": [
    {
      "x": 410,
      "y": 150,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 150,
      "type": "file"
    }
  ]
},
"win": {
  "publish": [
    "github",
    "bintray"
  ]
},
"linux": {
  "publish": null,
  "target": [
    "deb",
    "AppImage"
  ]
}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "electron ./app",
"compile": "rimraf app/out && tsc",
"pack": "npm run compile && build --dir",
"dist": "npm run compile && build",
"release": "npm run compile && build"
}
```






### [AwesomeApp/awesome-app](https://github.com/AwesomeApp/awesome-app/tree/master/package.json)

> A reader for Awesome

```json
{
"appId": "awesome.app",
"category": "awesome.app"
}
```

```json
{
"dev": "node build/dev-server.js",
"build": "node build/build.js",
"build:mac": "NODE_ELECTRON=true npm run build && electron-packager . Awesome --platform=darwin --out ./dist/$npm_package_version",
"build:linux": "NODE_ELECTRON=true npm run build && electron-packager . Awesome --platform=linux --out ./dist/$npm_package_version",
"build:win": "NODE_ELECTRON=true npm run build && electron-packager . Awesome --platform=win32 --out ./dist/$npm_package_version",
"unit": "karma start test/unit/karma.conf.js --single-run",
"e2e": "node test/e2e/runner.js",
"test": "npm run unit && npm run e2e",
"lint": "eslint --ext .js,.vue src test/unit/specs test/e2e/specs"
}
```






### [yun2win/yun2win-sdk-desktop](https://github.com/yun2win/yun2win-sdk-desktop/tree/master/package.json)

> Yun2win为企业和开发者提供最安全的即时通讯(IM)云服务和基于Web RTC下的融合通讯云服务，通过yun2win的SDK及API，快速拥有IM(instant messaging)、实时音视频（Audio and video Communication）、屏幕共享（Screen sharing）、电子白板（whiteboard）通讯能力。

```json
{
"asar": false,
"appId": "org.develar.quick",
"mac": {
  "icon": "app/assets/osx/icon.icns",
  "background": "app/assets/osx/installer.png",
  "dmg": {
    "contents": [
      {
        "x": 410,
        "y": 150,
        "type": "link",
        "path": "/Applications"
      },
      {
        "x": 130,
        "y": 150,
        "type": "file"
      }
    ]
  }
},
"win": {
  "icon": "app/assets/win/icon.ico",
  "iconUrl": "http://121.40.215.56:8888/icon.ico"
}
}
```

```json
{
"pack": "electron-packager ./app quick --all --version=1.2.5 --out=./pack --overwrite",
"dist:win": "rm -rf ./dist && build -w",
"dist:mac": "rm -rf ./dist && build -m",
"dist": "rm -rf ./dist && build -mw"
}
```






### [A3ReallifeRPG/RealLifeRPGLauncher](https://github.com/A3ReallifeRPG/RealLifeRPGLauncher/tree/master/package.json)

> RealLifeRPG Launcher

```json
{
"appId": "realliferpg.de",
"app-category-type": "launcher.application",
"win": {
  "title": "RealLifeRPG Launcher",
  "iconUrl": "https://static.realliferpg.de/img/launcher/icon.ico",
  "remoteReleases": "https://static.realliferpg.de/remoteReleases/"
},
"squirrelWindows": {
  "loadingGif": "build/install-spinner.gif",
  "setupIcon": "build/icon.ico"
}
}
```

```json
{
"start": "electron .",
"postinstall": "install-app-deps",
"pack": "build --target dir",
"dist": "build",
"install": "npm install --prefix ./app"
}
```






### [zerkz/HOTSBA](https://github.com/zerkz/HOTSBA/tree/master/package.json)

> A draft helper/ban aid for Heroes of the Storm.

```json
{
"appId": "com.zdware.hotsba",
"category": "public.app-category.games",
"asar": false,
"dmg": {
  "title": "HOTSBA"
}
}
```

```json
{
"start": "electron ./app/ --NODE_ENV=development",
"api": "node ./app/api.js",
"postinstall": "install-app-deps",
"test": "mocha test",
"genTemplates": "hulk ./app/ui/templates/*.mustache -o ./app/ui/templates/",
"pack": "build --dir",
"dist": "build"
}
```






### [zerojuan/electioneers-designer](https://github.com/zerojuan/electioneers-designer/tree/master/package.json)

> Designer tool for Electioneers

```json
{
"app-bundle-id": "xyz.electioneers.electioneersdesigner",
"app-category-type": "public.app-category.games",
"osx": {
  "contents": [
    {
      "x": 410,
      "y": 150,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 150,
      "type": "file"
    }
  ]
}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "npm install && electron ./app",
"local": "gulp watch",
"localelectron": "gulp copy-assets && electron ./app",
"clean": "rimraf dist/",
"clean:osx": "rimraf dist/ElectioneersDesigner-darwin-x64",
"clean:win": "rimraf dist/win",
"compile": "rimraf ./app/out && mkdir app/out && cp -r assets/** app/out",
"compile:win": "rimraf app/out && mkdir app\\out && xcopy assets app\\out",
"pack": "./node_modules/.bin/gulp build && npm run compile && build",
"dist": "npm run compile && ./node_modules/.bin/gulp build && build --dist",
"dist:win": "npm run compile:win && gulp build && build --dist",
"test": "babel-tape-runner test/**/*.js",
"test-ci": "babel-tape-runner test/**/*.js | tap-xunit"
}
```






### [AidanNichol/StEdsElectron](https://github.com/AidanNichol/StEdsElectron/tree/master/package.json)

> Electron Application for St. Edwards Fellwalkers booking system

```json
{
"appId": "co.uk.stedwardsfellwalkers.bookings",
"win": {
  "iconUrl": "http://stedwardsfellwalkers.co.uk/favicon.ico",
  "remoteReleases": "https://github.com/AidanNichol/StEdsElectron",
  "certificateFile": "../SelfSignedCert.pfx",
  "certificatePassword": "a1dan!",
  "target": "NSIS",
  "publish": [
    "github"
  ]
}
}
```

```json
{
"postinstall": "install-app-deps",
"pack": "build --win --ia32",
"dist": "build --win --ia32",
"release": "build",
"debug": "DEBUG=steds:* electron .",
"start": "gulp serve",
"deploy": "gulp build && dist",
"build:js": "babel -d app/ src/",
"watch:js": "npm run build:js -- --watch",
"build:css": "postcss -c postcss.json",
"watch:css": "npm run build:css -- --watch",
"build:package": "babel-node scripts/buildPackage --dest=app",
"build:html": "babel-node scripts/buildHtml.js --src=src/*html --dest=app --css=src/styles/*.css",
"rollup:js": "rollup -w -c config/dev.js",
"copy:assets": "cp -R assets app/assets",
"copy:fonts": "cp -R fonts app/fonts",
"build:dist": "npm run build:js && npm run build:css && npm run copy:assets && npm run copy:fonts && npm run build:html && npm run build:package",
"watch:dist": "npm run watch:js && npm run watch:css && npm run copy:assets && npm run copy:fonts && npm run build:html && npm run build:package",
"run:dist": "npm run build:dist && electron app/app.js",
"open:dev": "electron app/app.js",
"watch:build": "watch 'npm run build:dist' .",
"dev": "npm run copy:assets & npm run copy:fonts & npm run build:html & npm run build:package & npm run open:dev & parallelshell 'npm run watch:js' 'npm run watch:css' ",
"devm": "parallelshell 'npm run watch:js' 'npm run watch:css' 'npm run open:dev'",
"test": "NODE_PATH=src ava"
}
```






### [bahmutov/todomvc-electron-test](https://github.com/bahmutov/todomvc-electron-test/tree/master/package.json)

> TodoMVC Electron application

```json
{
"appId": "",
"mac": {
  "category": ""
},
"protocols": [
  {
    "name": "todo2",
    "role": "Viewer",
    "schemes": [
      "todo2",
      "todos2"
    ]
  }
],
"win": {
  "target": "nsis"
},
"nsis": {
  "perMachine": true
}
}
```

```json
{
"start": "electron .",
"pack": "build --dir",
"dist": "build",
"win": "build --win"
}
```






### [baptistedonaux/deezer-desktop-linux](https://github.com/baptistedonaux/deezer-desktop-linux/tree/master/package.json)

> Deezer Desktop for Linux

```json
{
"app-bundle-id": "1",
"app-category-type": "public.app-category.developer-tools"
}
```

```json
{
"build": "electron-packager ./app/ deezer-desktop-linux --platform=linux --arch=all --overwrite",
"dist": "build",
"pepper": "rm -rf /data/app/plugins && mkdir /data/app/plugins && ./extract-linux-pepperflash.sh && cd /opt/google/chrome/PepperFlash && mv libpepflashplayer.so /data/app/plugins/ && mv manifest.json /data/app/plugins/",
"start": "electron app/main.js"
}
```






### [berwyn/pvl-electron](https://github.com/berwyn/pvl-electron/tree/master/package.json)

> Ponyville Live! Bringing pony people together.

```json
{
"asar": false,
"appId": "com.ponyvillelive.electron",
"category": "public.app-category.music",
"copyright": "Copyright © 2016 Ponyville Live!",
"productName": "Ponyville Live!",
"files": [
  "**/*.js",
  "**/*.css",
  "**/*.html"
]
}
```

```json
{
"pack": "build --dir",
"dist": "build"
}
```






### [binjospookie/--shots](https://github.com/binjospookie/--shots/tree/master/package.json)

> An application for creating screenshots

```json
{
"maintainer": "Victor Pasynok",
"copyright": "Copyright © 2016 Victor Pasynok",
"dmg": {
  "icon": "./build/icon.icns"
}
}
```

```json
{
"start": "electron .",
"compile": "rimraf build/out",
"pack": "npm run compile && build --dir",
"dist": "npm run compile && build",
"release": "npm run compile && build"
}
```






### [caibirdme/testautoupdate](https://github.com/caibirdme/testautoupdate/tree/master/package.json)

> 

```json
{
"win": {
  "iconUrl": "http://172.16.1.5:6808/icon.ico",
  "loadingGif": "./build/install.gif",
  "remoteReleases": "http://127.0.0.1:8080/download"
}
}
```

```json
{
"postinstall": "install-app-deps",
"compile": "babel src -d app",
"start": "electron ./app",
"build": "build",
"dist": "build"
}
```






### [catalinmiron/electron-react-weather-app](https://github.com/catalinmiron/electron-react-weather-app/tree/master/package.json)

> Reactjs app using Open Weather API - http://openweathermap.org/api

```json
{
"appId": "org.BatmanCodes.WeatheReact",
"app-category-type": "public.app-category.weather-icon-small",
"dmg": {
  "contents": [
    {
      "x": 410,
      "y": 150,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 150,
      "type": "file"
    }
  ]
},
"win": {
  "remoteReleases": "https://github.com/catalinmiron/electron-react-weather-app"
},
"linux": {
  "target": [
    "deb",
    "AppImage"
  ]
}
}
```

```json
{
"start": "webpack-dev-server",
"build": "webpack",
"deploy": "npm run build && surge -p dist -d javascript.xyz",
"run": "electron -r babel/register .",
"package": "NODE_ENV=production node package.js",
"package-all": "npm run package -- --all",
"postinstall": "install-app-deps",
"pack": "build --dir",
"dist": "build",
"release": "hdiutil create -format UDZO -volname WeatheReact -srcfolder release/darwin-x64/WeatheReact-darwin-x64/ WeatheReact-$npm_package_version-osx.dmg"
}
```






### [chbachman/Jam](https://github.com/chbachman/Jam/tree/master/package.json)

> Desktop application build with Electron

```json
{
"app-bundle-id": "com.chbachman.jam",
"app-category-type": "your.app.category.type",
"win": {
  "iconUrl": "https://github.com/railsware/bozon/blob/master/lib/templates/images/electron.ico?raw=true"
},
"osx": {
  "icon": "resources/icon.icns",
  "target": "dmg"
}
}
```

```json
{
"postinstall": "install-app-deps",
"test": "xo"
}
```






### [christianheyn/remmy](https://github.com/christianheyn/remmy/tree/master/package.json)

> px to rem calculator

```json
{
"appId": "remmyApp",
"mac": {
  "category": "calculator"
}
}
```

```json
{
"start": "electron app/",
"test": "npm run lint:js && npm run lint:js:test && node test/resources/js/test.js",
"postinstall": "npm run browserify && npm run compile:scss",
"compile:scss": "node-sass app/style/scss/main.scss 'app/resources/css/app.css' --output",
"browserify": "browserify app/js/app.js -o app/resources/js/app.js -t [ babelify --presets [ es2015 ] ]",
"browserify:test": "browserify test/js/test.js -o test/resources/js/test.js -t [ babelify --presets [ es2015 ] ]",
"watch:scss": "watch-run -p 'app/style/scss/**/*.scss' 'npm run compile:scss'",
"watch:js": "watch-run -p 'app/js/**/*.js' npm run browserify",
"watch:js:test": "watch-run -p 'test/js/**/*.js' npm run browserify:test",
"watch:all": "npm run watch:scss & npm run watch:js & npm run watch:js:test",
"analyse:css": "parker app/resources/css/app.css",
"lint:js": "eslint app/js/**/*.js",
"lint:js:test": "eslint test/js/**/*.js",
"commit": "git-cz",
"pack": "build --dir",
"dist": "build"
}
```






### [clementlamoureux/documentation-editor](https://github.com/clementlamoureux/documentation-editor/tree/master/package.json)

> Electron app to easily edit Markdown file in a Git Repository

```json
{
"appId": "io.documentation.editor",
"category": "public.app-category.utilities",
"win": {
  "iconUrl": "app/src/assets/app_icon",
  "target": "squirrel",
  "msi": true
},
"linux": {
  "target": "deb"
},
"mac": {
  "target": "default"
}
}
```

```json
{
"postinstall": "install-app-deps",
"dep-install": "npm install && cd app && bower install",
"clear": "rm -rf dist/*",
"start": "cd app/ && bower install && cd .. && NODE_ENV='dev' electron ./app --enable-logging",
"compile-linux": "NODE_ENV='prod' && npm run clear && build --linux --x64",
"compile-mac": "NODE_ENV='prod' && npm run clear && build --mac",
"dist": "npm run dep-install && NODE_ENV='prod' && build -wml --x64"
}
```






### [comp500/proton-downloader](https://github.com/comp500/proton-downloader/tree/master/package.json)

> A youtube downloader with a GUI made using Electron.

```json
{
"app-bundle-id": "prtdl",
"app-category-type": "public.app-category.utilities"
}
```

```json
{
"postinstall": "install-app-deps",
"pack": "build",
"dist": "build",
"test": "electron app"
}
```






### [cyclone-project/xpra-electron-client](https://github.com/cyclone-project/xpra-electron-client/tree/master/package.json)

> An Xpra client created with Electron

```json
{
"appId": "org.cyclone.xpraclient",
"asar": false,
"win": {
  "target": [
    "nsis"
  ]
}
}
```

```json
{
"start": "electron .",
"pack": "build --dir",
"dist": "build --win --x64"
}
```






### [daniel-inka/hello-world](https://github.com/daniel-inka/hello-world/tree/master/package.json)

> Hello from the other side~

```json
{
"appId": "com.pallycon.electron",
"app-category-type": "public.app-category.video",
"iconUrl": "http://pallycon.com/media/pallycon-icon.ico",
"win": {
  "iconUrl": "http://pallycon.com/media/pallycon-icon.ico"
},
"extraResources": [
  "widevine"
],
"protocols": [
  {
    "name": "PallyconElectron",
    "schemes": [
      "pallycon-electron"
    ]
  }
]
}
```

```json
{
"postinstall": "install-app-deps",
"start": "electron ./app --enalbe-logging",
"test": "electron ./app test1 test2",
"dev": "NODE_ENV='development' npm run start",
"dist": "npm run dist:osx && npm run dist:win32 && npm run dist:win64",
"dist:osx": "build --platform darwin",
"dist:win32": "build --platform win32 --arch ia32",
"dist:win64": "build --platform win32 --arch x64"
}
```






### [dannyakakong/PowerPlanDisplay](https://github.com/dannyakakong/PowerPlanDisplay/tree/master/package.json)

> Shows your active Windows powerplan in a window containing all the available powerplans, and allows you to change powerplan with a single click.

```json
{
"appId": "uk.ltd.wonderscore.powerplandisplay",
"asar": false,
"win": {
  "icon": "src/img/icon.ico",
  "iconUrl": "https://raw.githubusercontent.com/dannyakakong/PowerPlanDisplay/master/src/img/icon.ico",
  "msi": true
}
}
```

```json
{
"prepublish": "cd app && npm install && cd .. && gulp release",
"start": "electron ./app",
"debug": "electron --enable-logging ./app -d",
"pack": "build --dir",
"dist": "npm run prepublish && build --win",
"release": "npm run prepublish && build --win"
}
```






### [danschultzer/blazing-bookkeeper](https://github.com/danschultzer/blazing-bookkeeper/tree/master/package.json)

> Who has got time to read receipts? Let Blazing Bookkeeper blaze through all your receipts in no time.

```json
{
"appId": "com.blazing-bookkeeper.blazing-bookkeeper",
"copyright": "Copyright © 2016. MIT licensed.",
"win": {
  "target": [
    "nsis"
  ],
  "icon": "resources/windows/icon.ico"
},
"nsis": {
  "oneClick": true,
  "installerHeaderIcon": "resources/windows/setup-icon.ico"
},
"mac": {
  "category": "productivity",
  "icon": "resources/osx/icon.icns"
},
"dmg": {
  "icon": "resources/osx/dmg-icon.icns",
  "background": "resources/osx/dmg-background.png"
},
"mas": {
  "entitlements": "resources/osx/entitlements.mas.plist",
  "entitlementsInherit": "resources/osx/entitlements.mas.inherit.plist"
},
"osx-sign": {
  "binaries": [
    "thirdparty/poppler/bin/pdftotext",
    "thirdparty/poppler/bin/pdfimages",
    "thirdparty/tesseract/bin/tesseract"
  ]
},
"extraResources": [
  "thirdparty"
]
}
```

```json
{
"postinstall": "install-app-deps",
"build": "gulp build",
"prerelease": "gulp build --env=production",
"release": "build --x64",
"start": "gulp start",
"pretest": "gulp build-unit --env=test",
"test": "electron-mocha app/specs.js.autogenerated --renderer --require source-map-support/register",
"coverage": "npm test -- -R scripts/istanbul-reporter",
"pree2e": "gulp build-e2e --env=test",
"e2e": "mocha app/e2e.js.autogenerated --require source-map-support/register"
}
```






### [dasrick/tox-electron-whatsapp](https://github.com/dasrick/tox-electron-whatsapp/tree/master/package.json)

> Unofficial WhatsApp Desktop Client for OSX based on electron

```json
{
"app-bundle-id": "de.dasrick.tox-electron-whatsapp",
"app-category-type": "public.app-category.social-networking",
"osx": {
  "title": "toxWhatsApp",
  "icon": "build/icon.icns",
  "icon-size": 80,
  "background": "build/background.png",
  "contents": [
    {
      "x": 438,
      "y": 344,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 192,
      "y": 344,
      "type": "file"
    }
  ]
},
"win": {
  "title": "toxWhatsApp",
  "icon": "build/icon.ico"
}
}
```

```json
{
"start": "electron ./app",
"start-dev": "export NODE_ENV=development && electron ./app",
"test": "echo \"Error: no test specified\" && exit 1",
"postinstall": "install-app-deps",
"pack": "export CSC_NAME='Developer ID Application: Enrico Hoffmann (M9E3AF4GW4)' && build",
"dist": "npm run dist:osx && npm run dist:win64 && npm run dist:linux",
"dist:osx": "export CSC_NAME='Developer ID Application: Enrico Hoffmann (M9E3AF4GW4)' && build --platform darwin",
"dist:win64": "build --platform win32 --arch x64",
"dist:linux": "build --platform linux --arch x64"
}
```






### [ddwag1/electron-development-kit](https://github.com/ddwag1/electron-development-kit/tree/master/package.json)

> Easily Test, Build and Distribute Electron Apps

```json
{
"app-bundle-id": "0.0.1",
"app-category-type": "typeName",
"osx": {
  "background": "build/background.jpg"
},
"win": {
  "iconUrl": "http://www.example.com/favicon.ico",
  "loadingGif": "build/loading.gif",
  "noMsi": false
}
}
```

```json
{
"open": "electron .",
"build": "sh scripts/build.sh",
"build:options": "epi",
"dist": "build",
"_comment postinstall": "install-app-deps"
}
```






### [dmytromushenko/avrc](https://github.com/dmytromushenko/avrc/tree/master/package.json)

> Electron application boilerplate based on React, React Router, Webpack, React Hot Loader for rapid application development

```json
{
"appId": "org.develar.ElectronReact",
"category": "public.app-category.tools",
"dmg": {
  "contents": [
    {
      "x": 410,
      "y": 150,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 150,
      "type": "file"
    }
  ]
},
"win": {
  "target": "nsis"
},
"linux": {
  "target": [
    "deb",
    "AppImage"
  ]
}
}
```

```json
{
"test": "cross-env NODE_ENV=test BABEL_DISABLE_CACHE=1 mocha --retries 2 --compilers js:babel-register --recursive --require ./test/setup.js test/**/*.spec.js",
"test-watch": "npm test -- --watch",
"test-e2e": "cross-env NODE_ENV=test BABEL_DISABLE_CACHE=1 mocha --retries 2 --compilers js:babel-register --require ./test/setup.js ./test/e2e.js",
"lint": "eslint --ignore-path .gitignore --format=node_modules/eslint-formatter-pretty app test *.js",
"hot-server": "cross-env NODE_ENV=development node --max_old_space_size=2096 -r babel-register server.js",
"build-main": "cross-env NODE_ENV=production node -r babel-register ./node_modules/webpack/bin/webpack --config webpack.config.electron.js --progress --profile --colors",
"build-renderer": "cross-env NODE_ENV=production node -r babel-register ./node_modules/webpack/bin/webpack --config webpack.config.production.js --progress --profile --colors",
"build": "npm run build-main && npm run build-renderer",
"start": "cross-env NODE_ENV=production electron ./app/",
"start-hot": "cross-env HOT=1 NODE_ENV=development electron -r babel-register -r babel-polyfill ./app/main.development",
"postinstall": "concurrently \"install-app-deps\" \"node node_modules/fbjs-scripts/node/check-dev-engines.js package.json\"",
"dev": "npm run hot-server -- --start-hot",
"package": "npm run build && build --publish never",
"package-win": "npm run build && build --win --x64",
"package-linux": "npm run build && build --linux",
"package-all": "npm run build && build -mwl",
"cleanup": "mop -v"
}
```






### [HoverBaum/BlankUp-Electron](https://github.com/HoverBaum/BlankUp-Electron/tree/master/package.json)

> BlankUp wrapped in Electron.

```json
{
"appId": "de.hendrikwallbaum.blankUpElectron",
"app-category-type": "public.app-category.productivity"
}
```

```json
{
"start": "electron .",
"stylus": "stylus styl/style.styl --out app/css --use url --with \"{limit: false}\" --watch",
"dev": "set DEV=true && concurrently --kill-others \"npm run stylus\" \"npm start\"",
"postinstall": "install-app-deps",
"pack": "build --dir",
"dist": "build",
"dist-x": "build -ml",
"release": "build"
}
```






### [JPSchellenberg/Lise](https://github.com/JPSchellenberg/Lise/tree/master/package.json)

> Lowcost interface for science experiments

```json
{
"appId": "your.id",
"category": "your.app.category.type"
}
```

```json
{
"test": "echo \"Error: no test specified\" && exit 1",
"build": "make",
"postinstall": "./node_modules/.bin/typings install"
}
```






### [entrylabs/entry-offline-mini](https://github.com/entrylabs/entry-offline-mini/tree/master/package.json)

> Entry Offline Mini

```json
{
"osx": {
  "icon": "build/icon.icns",
  "icon-size": 80,
  "background": "build/background.png",
  "contents": [
    {
      "x": 240,
      "y": 380,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 240,
      "y": 120,
      "type": "file",
      "path": "Entry.app"
    },
    {
      "x": 380,
      "y": 250,
      "type": "file",
      "path": "./app/README.md"
    }
  ]
},
"win": {
  "loadingGif": "build/install-spinner.gif",
  "title": "Entry_Mini",
  "icon": "./icon/app.ico",
  "authors": "EntryLabs"
},
"asar": true,
"app-bundle-id": "entry_offline_mini",
"app-category-type": "org.play-entry.entry-offline",
"icon": "app/icon/app"
}
```

```json
{
"clean": "rimraf dist",
"start": "set NODE_ENV=development&&electron -d app",
"test": "mocha test/default.js",
"dist": "build",
"dist:win": "build --arch ia32",
"dist:win64": "build --arch x64",
"pack:win": "electron-packager ./dist --platform=win32 --arch=ia32",
"dist:osx": "build"
}
```






### [esonderegger/plaster](https://github.com/esonderegger/plaster/tree/master/package.json)

> A Desktop App for Making Great Podcasts

```json
{
"appId": "xyz.rpy.plaster",
"asar": false,
"mac": {
  "category": "public.app-category.utilities",
  "files": [
    "**/*",
    "!compiled/ffmpeg.exe",
    "!compiled/ffprobe.exe",
    "!compiled/ffmpeg_linux",
    "!compiled/ffprobe_linux"
  ]
},
"win": {
  "iconUrl": "https://esonderegger.github.io/plaster/icon.ico",
  "files": [
    "**/*",
    "!compiled/ffmpeg_mac",
    "!compiled/ffprobe_mac",
    "!compiled/ffmpeg_linux",
    "!compiled/ffprobe_linux"
  ]
},
"linux": {
  "target": [
    "AppImage"
  ],
  "files": [
    "**/*",
    "!compiled/ffmpeg.exe",
    "!compiled/ffprobe.exe",
    "!compiled/ffmpeg_mac",
    "!compiled/ffprobe_mac"
  ]
}
}
```

```json
{
"test": "echo \"Error: no test specified\" && exit 1",
"buildapp": "./node_modules/.bin/gulp buildapp",
"watchapp": "./node_modules/.bin/gulp watchapp",
"docs": "./node_modules/.bin/gulp docs",
"electron": "./node_modules/.bin/electron .",
"postinstall": "npm run appinstall",
"appinstall": "cd app && npm install",
"deletepackages": "node delete-packages.js",
"zippackages": "node zip-packages.js",
"package": "npm run deletepackages && npm run buildapp && npm run dist && npm run zippackages",
"dev": "concurrently --kill-others \"npm run watchapp\" \"npm run electron\"",
"pack": "build --dir",
"dist": "build -mwl"
}
```






### [flesler/electron-wi-fine](https://github.com/flesler/electron-wi-fine/tree/master/package.json)

> A connectivity monitoring app, built on Electron

```json
{
"appId": "com.flesler.wifine",
"copyright": "Copyright @ 2016 Ariel Flesler",
"productName": "Wi-Fine",
"compression": "maximum",
"publish": [
  "github"
],
"mac": {
  "category": "public.app-category.utilities"
},
"win": {
  "iconUrl": "https://github.com/flesler/electron-wi-fine/raw/master/build/icon.ico"
}
}
```

```json
{
"start": "electron app/ --enable-logging",
"pack": "build --dir",
"dist": "build",
"release": "build --publish always",
"postinstall": "install-app-deps"
}
```






### [floriandj/JokesOnYou](https://github.com/floriandj/JokesOnYou/tree/master/package.json)

> An Electron background app to spit out some reddit/r/jokes every five minutes.

```json
{
"appId": "com.example.electron-boilerplate",
"app-category-type": "your.app.category.type",
"win": {
  "target": [
    "nsis"
  ],
  "icon": "resources/windows/icon.ico"
},
"nsis": {
  "oneClick": true,
  "installerHeaderIcon": "resources/windows/setup-icon.ico"
},
"mac": {
  "icon": "resources/osx/icon.icns"
},
"dmg": {
  "icon": "resources/osx/dmg-icon.icns",
  "background": "resources/osx/dmg-background.png"
}
}
```

```json
{
"postinstall": "install-app-deps",
"build": "gulp build",
"prerelease": "gulp build --env=production",
"release": "build --x64 --publish never",
"start": "gulp start",
"pretest": "gulp build-unit --env=test",
"test": "electron-mocha app/specs.js.autogenerated --renderer --require source-map-support/register",
"coverage": "npm test -- -R scripts/istanbul-reporter",
"pree2e": "gulp build-e2e --env=test",
"e2e": "mocha app/e2e.js.autogenerated --require source-map-support/register"
}
```






### [frntl/frontal](https://github.com/frntl/frontal/tree/master/package.json)

> Markdown powered presentation tool build on Electron / Node.js still WIP

```json
{
"appId": "me.fabianmoronzirfas.frontal",
"asar": false,
"extraResources": "./help/*"
}
```

```json
{
"start": "NODE_ENV=development ./node_modules/.bin/electron app/main.js",
"prewatch": "echo ' cleaning app/ folder except node_modules' && find app/* -maxdepth 0 -name 'node_modules' -prune -o -exec rm -rf '{}' ';'",
"watch": "./node_modules/.bin/babel src -w -d app -D",
"sassgh": "./node_modules/.bin/node-sass -w src/views/themes/github/scss/ -o src/views/themes/github/css/ --output-style=compact",
"sassblank": "./node_modules/.bin/node-sass -w src/views/themes/blank/scss/ -o src/views/themes/blank/css/ --output-style=compact",
"sassdefault": "./node_modules/.bin/node-sass -w src/views/themes/default/scss/ -o src/views/themes/default/css/ --output-style=compact",
"test": "./node_modules/.bin/mocha --compilers js:babel-register",
"pandoc": "echo 'trying to create markdown via pandoc for testing css in ./test/index.html' && sh bin/pandoc.sh",
"postinstall": "install-app-deps",
"pack": "build --dir",
"dist": "build",
"predist": "echo 'removing dist/ folder' && rm -rf dist/ && npm run prestart",
"prepack": "npm run predist",
"prestart": "echo 'building help' && ./bin/build-help-html.js",
"yaml": "echo 'parsing yaml at ./src/help/_frontal.yaml' && ./bin/test-yaml.sh",
"changelog": "log=$(git log  --pretty=format:'<li> <a href=\"http://github.com/frntl/frontal/commit/%H\">view commit &bull;</a> %s</li> '); echo \"CHANGELOG
=======
${log}\" > CHANGELOG.md",
"rebuild": "npm rebuild --runtime=electron --target=1.4.3 --disturl=https://atom.io/download/atom-shell --abi=48"
}
```






### [funyx/simple-chat-app](https://github.com/funyx/simple-chat-app/tree/master/package.json)

> An Angular 2 Webpack Starter kit featuring Angular 2 (Router, Http, Forms, Services, Tests, E2E, Coverage), Karma, Protractor, Jasmine, Istanbul, TypeScript, Webpack, Electron, Bootstrap@4

```json
{
"appId": "simple_chat",
"category": "chat"
}
```

```json
{
"electron:prod:mac": "npm run electron:build:mac && npm run electron:pack:mac && npm run electron:image:mac",
"electron:build:mac": "rimraf ./build/mac && npm run build:prod && electron-packager ./dist SimpleChat --out=./build/mac --platform=darwin --arch=x64 --version=1.2.4",
"electron:pack:mac": "asar pack ./build/mac/SimpleChat-darwin-x64/SimpleChat.app/Contents/Resources/app ./build/mac/SimpleChat-darwin-x64/SimpleChat.app/Contents/Resources/app.asar && rm -rf ./build/mac/SimpleChat-darwin-x64/SimpleChat.app/Contents/Resources/app",
"electron:image:mac": "cp ./Icon.icns build/mac/SimpleChat-darwin-x64/SimpleChat.app/Contents/Resources/electron.icns",
"electron": "npm run build:dev && ./node_modules/.bin/electron dist/electronApp.js",
"build:dev": "webpack --config config/webpack.dev.js --progress --profile",
"build:docker": "npm run build:prod && docker build -t angular2-webpack-start:latest .",
"build:prod": "webpack --config config/webpack.prod.js  --progress --profile --bail",
"build": "npm run build:dev",
"ci": "npm run lint && npm test && npm run e2e",
"clean:dist": "npm run rimraf -- dist",
"clean:install": "npm set progress=false && npm install",
"clean:start": "npm start",
"clean": "npm cache clean && npm run rimraf -- node_modules doc coverage dist",
"docker": "docker",
"docs": "npm run typedoc -- --options typedoc.json --exclude '**/*.spec.ts' ./src/",
"e2e:live": "npm run e2e -- --elementExplorer",
"e2e": "npm run protractor",
"github-deploy:dev": "webpack --config config/webpack.github-deploy.js --progress --profile --github-dev",
"github-deploy:prod": "webpack --config config/webpack.github-deploy.js --progress --profile --github-prod",
"github-deploy": "npm run github-deploy:dev",
"lint": "npm run tslint \"src/**/*.ts\"",
"postversion": "git push && git push --tags",
"prebuild:dev": "npm run clean:dist",
"prebuild:prod": "npm run clean:dist",
"preclean:install": "npm run clean",
"preclean:start": "npm run clean",
"pree2e": "npm run webdriver:update -- --standalone",
"preversion": "npm test",
"protractor": "protractor",
"rimraf": "rimraf",
"server:dev:hmr": "npm run server:dev -- --inline --hot",
"server:dev": "webpack-dev-server --config config/webpack.dev.js --progress --profile --watch --content-base src/",
"server:prod": "http-server dist --cors",
"server": "npm run server:dev",
"start:hmr": "npm run server:dev:hmr",
"start": "npm run server:dev",
"test": "karma start",
"tslint": "tslint",
"typedoc": "typedoc",
"version": "npm run build",
"watch:dev:hmr": "npm run watch:dev -- --hot",
"watch:dev": "npm run build:dev -- --watch",
"watch:prod": "npm run build:prod -- --watch",
"watch:test": "npm run test -- --auto-watch --no-single-run",
"watch": "npm run watch:dev",
"webdriver-manager": "webdriver-manager",
"webdriver:start": "npm run webdriver-manager start",
"webdriver:update": "npm run webdriver-manager update",
"webpack-dev-server": "webpack-dev-server",
"webpack": "webpack"
}
```






### [Josh-G/Hydrogen-win](https://github.com/Josh-G/Hydrogen-win/tree/master/package.json)

> A cross-platform floating media window

```json
{
"appId": "uk.grantj.hydrogen"
}
```

```json
{
"pack": "build --dir",
"dist": "build",
"start": "electron app"
}
```






### [gasolin/bottler](https://github.com/gasolin/bottler/tree/master/package.json)

> Express.js web server wrapped in Electron desktop runtime for any desktop application

```json
{
"app-bundle-id": "org.expretron.boilerplate",
"app-category-type": "public.app-category.productivity"
}
```

```json
{
"postinstall": "install-app-deps",
"lint": "npm run eslint && npm run stylelint",
"eslint": "eslint app/*.js app/routes app/views app/public/js",
"stylelint": "stylelint app/public/style/**/*.css",
"prestart": "npm run setup",
"start": "electron ./dist --enable-logging",
"dev": "NODE_ENV='development' npm run start",
"pack": "npm run dist",
"dist": "npm run dist:osx && npm run dist:win64 && npm run dist:linux64",
"dist:osx": "build --platform darwin",
"dist:win": "build --platform win32 --arch ia32",
"dist:win64": "build --platform win32 --arch x64",
"dist:linux": "build --platform linux --arch ia32",
"dist:linux64": "build --platform linux --arch x64",
"start:watch": "watch 'npm run lint && npm start'",
"clean": "shx rm -Rf dist",
"presetup": "npm run clean && cp -r app/ dist/ && shx mkdir dist/public/vendor",
"setup": "npm run setup:materialize && npm run setup:jquery",
"setup:materialize": "shx cp -r node_modules/materialize-css/dist dist/public/vendor/materialize",
"presetup:jquery": "shx mkdir dist/public/vendor/jquery",
"setup:jquery": "shx cp node_modules/materialize-css/node_modules/jquery/dist/jquery.min.js dist/public/vendor/jquery/jquery.min.js",
"test": "echo \"Error: no test specified\" && exit 1"
}
```






### [gasolin/expretron](https://github.com/gasolin/expretron/tree/master/package.json)

> Express.js web server wrapped in Electron desktop runtime for any desktop application

```json
{
"app-bundle-id": "org.expretron.boilerplate",
"app-category-type": "public.app-category.productivity"
}
```

```json
{
"postinstall": "install-app-deps",
"lint": "npm run eslint && npm run stylelint",
"eslint": "eslint app/*.js app/routes app/views app/public/js",
"stylelint": "stylelint app/public/style/**/*.css",
"prestart": "npm run setup",
"start": "electron ./dist --enable-logging",
"dev": "NODE_ENV='development' npm run start",
"pack": "npm run dist",
"dist": "npm run dist:osx && npm run dist:win64 && npm run dist:linux64",
"dist:osx": "build --platform darwin",
"dist:win": "build --platform win32 --arch ia32",
"dist:win64": "build --platform win32 --arch x64",
"dist:linux": "build --platform linux --arch ia32",
"dist:linux64": "build --platform linux --arch x64",
"start:watch": "watch 'npm run lint && npm start'",
"clean": "shx rm -Rf dist",
"presetup": "npm run clean && shx cp -r app dist && shx mkdir dist/public/vendor",
"setup": "npm run setup:materialize && npm run setup:jquery",
"setup:materialize": "shx cp -r node_modules/materialize-css/dist dist/public/vendor/materialize",
"presetup:jquery": "shx mkdir dist/public/vendor/jquery",
"setup:jquery": "shx cp node_modules/materialize-css/node_modules/jquery/dist/jquery.min.js dist/public/vendor/jquery/jquery.min.js",
"test": "echo \"Error: no test specified\" && exit 1"
}
```






### [githayu/nicotunes](https://github.com/githayu/nicotunes/tree/master/package.json)

> ニコニコ動画の音楽再生に特化したデスクトップ向け音楽プレイヤー

```json
{
"app-bundle-id": "net.nanoway.nicotunes",
"app-category-type": "public.app-category.music",
"osx": {
  "contents": [
    {
      "x": 410,
      "y": 150,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 150,
      "type": "file"
    }
  ]
}
}
```

```json
{
"compile": "gulp js css html",
"start": "electron ./app",
"pack": "./scripts/package.sh",
"dist": "build --platform all --arch all"
}
```






### [gomeplusFED/FET](https://github.com/gomeplusFED/FET/tree/master/package.json)

> 前端工具集

```json
{
"productName": "FE-Tools",
"copyright": "Copyright © 2016 gomeplusFED",
"dmg": {
  "title": "FE-Tool",
  "icon": "./build/icon.icns",
  "background": "./build/background.png",
  "contents": [
    {
      "x": 460,
      "y": 250,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 150,
      "y": 250,
      "type": "file"
    }
  ]
},
"win": {
  "target": [
    "nsis"
  ],
  "iconUrl": "https://github.com/gomeplusFED/FET/blob/master/build/icon.ico?raw=true"
},
"nsis": {
  "runAfterFinish": false
}
}
```

```json
{
"dev:render": "node script/render.dev.babel.js --env=dev",
"dev:main": "node script/main.dev.babel.js --env=dev",
"build": "node script/main.build.babel.js --env=production",
"asar": "node script/asar.build.babel.js --env=production",
"changelog": "node script/changelog.js"
}
```






### [gumbyscout/fireemblem-cipher-utils](https://github.com/gumbyscout/fireemblem-cipher-utils/tree/master/package.json)

> Utils that help managing a collection of Fire Emblem Cipher cards

```json
{
"app-bundle-id": "com.github.gumbyscout.Fire_Emblem_Cipher_Utils",
"app-category-type": "public.app-category.utilities",
"asar": false,
"compression": "maximum",
"win": {
  "remoteReleases": "https://github.com/gumbyscout/fireemblem-cipher-utils",
  "iconUrl": "https://github.com/gumbyscout/fireemblem-cipher-utils/blob/master/build/icons/256x256.png"
}
}
```

```json
{
"test": "karma start",
"start": "cross-env NODE_ENV=PROD ./node_modules/.bin/electron .",
"start-hot": "cross-env NODE_ENV=DEV ./node_modules/.bin/electron .",
"compile:electron": "./node_modules/.bin/webpack --config=webpack.electron.config.js",
"compile:web": "./node_modules/.bin/webpack --config=webpack.web.config.js",
"watch:electron": "./node_modules/.bin/webpack-dev-server --hot --inline --config=webpack.electron.dev.config.js",
"watch:web": "./node_modules/.bin/webpack-dev-server --hot --inline --config=webpack.web.dev.config.js",
"rebuild-native": "./node_modules/.bin/electron-rebuild",
"dev:electron": "concurrently --kill-others \"npm run watch:electron\" \"npm run start-hot\"",
"dev:web": "cross-env NODE_ENV=DE npm run watch:web",
"postinstall": "install-app-deps",
"release": "build --publish always",
"pack": "build --dir",
"dist": "build"
}
```






### [hakantaskin/simbalauncher](https://github.com/hakantaskin/simbalauncher/tree/master/package.json)

> 

```json
{
"appId": "com.example.electron-boilerplate",
"app-category-type": "your.app.category.type",
"win": {
  "target": [
    "nsis"
  ],
  "icon": "resources/windows/icon.ico"
},
"nsis": {
  "oneClick": true,
  "installerHeaderIcon": "resources/windows/setup-icon.ico"
},
"mac": {
  "icon": "resources/osx/icon.icns"
},
"dmg": {
  "icon": "resources/osx/dmg-icon.icns",
  "background": "resources/osx/dmg-background.png"
}
}
```

```json
{
"postinstall": "install-app-deps",
"build": "gulp build",
"prerelease": "gulp build --env=production",
"release": "build --x64 --publish never",
"start": "gulp start",
"pretest": "gulp build --env=test",
"test": "electron-mocha build --renderer"
}
```






### [healthage/app](https://github.com/healthage/app/tree/master/package.json)

> A minimal Electron application

```json
{
"appId": "healthage.healthage",
"category": "health",
"asar": false
}
```

```json
{
"start": "electron app",
"build": "./build-both.sh",
"build-mac": "build --mac",
"build-pc": "build --win"
}
```






### [hzeroo/twitch-desktop](https://github.com/hzeroo/twitch-desktop/tree/master/package.json)

> Twitch Desktop Client

```json
{
"app-bundle-id": "org.twitch.twitchdesktop",
"app-category-type": "public.app-category.entertainment",
"iconUrl": "https://raw.githubusercontent.com/hzeroo/twitch-desktop/master/build/icon.ico",
"linux": {
  "target": [
    "deb",
    "rpm",
    "zip"
  ]
}
}
```

```json
{
"build-renderer:dev": "webpack -d --config webpack.config.electron-renderer.js --progress --profile --colors --watch",
"build-main": "webpack -p --config webpack.config.electron-main.js --progress --profile --colors",
"build-renderer": "webpack -p --config webpack.config.electron-renderer.js --progress --profile --colors",
"build": "npm run build-main && npm run build-renderer",
"build:dev": "npm run build-main && npm run build-renderer:dev",
"start": "electron app",
"postinstall": "install-app-deps",
"dist": "build"
}
```






### [inka-pallycon/pallycon-electron-player](https://github.com/inka-pallycon/pallycon-electron-player/tree/master/package.json)

> Electron-based DASH video player application for PC

```json
{
"appId": "com.pallycon.electron",
"app-category-type": "public.app-category.video",
"iconUrl": "http://pallycon.com/media/pallycon-icon.ico",
"win": {
  "iconUrl": "http://pallycon.com/media/pallycon-icon.ico"
},
"extraResources": [
  "widevine"
],
"protocols": [
  {
    "name": "PallyconElectron",
    "schemes": [
      "pallycon-electron"
    ]
  }
]
}
```

```json
{
"postinstall": "install-app-deps",
"start": "electron ./app --enalbe-logging",
"test": "electron ./app test1 test2",
"dev": "NODE_ENV='development' npm run start",
"dist": "npm run dist:osx && npm run dist:win32 && npm run dist:win64",
"dist:osx": "build --platform darwin",
"dist:win32": "build --platform win32 --arch ia32",
"dist:win64": "build --platform win32 --arch x64"
}
```






### [Logophile/logophile](https://github.com/Logophile/logophile/tree/master/package.json)

> A Book Reader that is build for humans

```json
{
"appId": "io.bhanu.logophile",
"app-category-type": "Education",
"win": {
  "target": [
    "nsis"
  ],
  "icon": "resources/windows/icon.ico"
},
"nsis": {
  "oneClick": true,
  "installerHeaderIcon": "resources/windows/setup-icon.ico"
},
"mac": {
  "icon": "resources/osx/icon.icns"
},
"dmg": {
  "icon": "resources/osx/dmg-icon.icns",
  "background": "resources/osx/dmg-background.png"
}
}
```

```json
{
"postinstall": "install-app-deps",
"build": "gulp build",
"prerelease": "gulp build --env=production",
"release": "build --x64 --publish never",
"start": "gulp start",
"pretest": "gulp build-unit --env=test",
"test": "electron-mocha app/specs.js.autogenerated --renderer --require source-map-support/register",
"coverage": "npm test -- -R scripts/istanbul-reporter",
"pree2e": "gulp build-e2e --env=test",
"e2e": "mocha app/e2e.js.autogenerated --require source-map-support/register"
}
```






### [MBALOTA/grepolis-desktop](https://github.com/MBALOTA/grepolis-desktop/tree/master/package.json)

> Grepolis as a desktop application, instead of a browser game.

```json
{
"appId": "me.balota.grepolis-desktop",
"app-category-type": "your.app.category.type",
"win": {
  "target": [
    "nsis"
  ],
  "icon": "resources/windows/icon.ico"
},
"nsis": {
  "oneClick": true,
  "installerHeaderIcon": "resources/windows/setup-icon.ico"
},
"mac": {
  "icon": "resources/osx/icon.icns"
},
"dmg": {
  "icon": "resources/osx/dmg-icon.icns",
  "background": "resources/osx/dmg-background.png"
}
}
```

```json
{
"postinstall": "install-app-deps",
"build": "gulp build",
"prerelease": "gulp build --env=production",
"release": "build --win --publish never",
"start": "gulp start",
"pretest": "gulp build-unit --env=test",
"test": "electron-mocha app/specs.js.autogenerated --renderer --require source-map-support/register",
"coverage": "npm test -- -R scripts/istanbul-reporter",
"pree2e": "gulp build-e2e --env=test",
"e2e": "mocha app/e2e.js.autogenerated --require source-map-support/register"
}
```






### [jf908/AnimeTwist-Desktop](https://github.com/jf908/AnimeTwist-Desktop/tree/master/package.json)

> Anime Twist

```json
{
"appId": "animetwist-desktop",
"win": {
  "iconUrl": "http://xyfe.net/animetwist.ico",
  "loadingGif": "installer.gif",
  "icon": "icon.ico"
},
"mac": {
  "icon": "icon.icns"
}
}
```

```json
{
"start": "electron src",
"build": "build"
}
```






### [jojobyte/git-electron](https://github.com/jojobyte/git-electron/tree/master/package.json)

> Electronified Git

```json
{
"appId": "com.jojobyte.git-electron",
"app-category-type": "public.app-category.developer-tools",
"compression": "store",
"asar": false,
"nodeGypRebuild": false,
"mac": {
  "protocols": [
    {
      "name": "com.jojobyte.git-protocols",
      "schemes": [
        "github-windows",
        "github-mac",
        "sourcetree"
      ]
    }
  ]
},
"win": {
  "msi": false
}
}
```

```json
{
"clean": "rimraf dist",
"postinstall": "install-app-deps",
"start": "electron .",
"pack": "build --dir",
"dist": "build",
"dev": "webpack-dev-server --inline --hot --port 8888",
"xbuild": "cross-env NODE_ENV=production webpack --progress --hide-modules"
}
```






### [jonatasfreitasv/mindmeister_desktop](https://github.com/jonatasfreitasv/mindmeister_desktop/tree/master/package.json)

> Mindmeister desktop version

```json
{
"appId": "mindmesiter_desktop.id",
"category": "mindmesiter.desktop.mindmap.app",
"win": {
  "iconUrl": "http://www.iconarchive.com/download/i89758/alecive/flatwoken/Apps-Mindmeister.ico"
}
}
```

```json
{
"start": "electron .",
"pack": "build --dir",
"dist": "build"
}
```






### [Meadowcottage/MyStudyLife](https://github.com/Meadowcottage/MyStudyLife/tree/master/package.json)

> :pencil2: My Study Life (UNOFFICIAL) Web App

```json
{
"appId": "xyz.meadowcottage.MyStudyLife",
"category": "public.app-category.education",
"productName": "MyStudyLife",
"dmg": {
  "contents": [
    {
      "x": 410,
      "y": 150,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 150,
      "type": "file"
    }
  ]
},
"win": {
  "remoteReleases": "https://github.com/meadowcottage/MyStudyLife",
  "loadingGif": "build/install-spinner.gif",
  "msi": true
}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "npm install && npm run compile && electron ./app",
"test": "mocha",
"compile": "rimraf app/out",
"pack": "npm run compile && build --dir",
"dist": "npm run compile && build"
}
```






### [Meadowcottage/appear.in](https://github.com/Meadowcottage/appear.in/tree/master/package.json)

> :video_camera: Appear.in (UNOFFICIAL) Web App

```json
{
"appId": "xyz.Meadowcottage.appear.in",
"category": "public.app-category.social",
"productName": "appear.in",
"dmg": {
  "background": "build/background.png",
  "contents": [
    {
      "x": 410,
      "y": 150,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 150,
      "type": "file"
    }
  ]
},
"win": {
  "target": [
    "squirrel",
    "zip"
  ],
  "remoteReleases": "https://github.com/Meadowcottage/appear.in",
  "loadingGif": "build/install-spinner.gif",
  "msi": true
}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "npm install && npm run compile && electron ./app",
"test": "mocha",
"compile": "rimraf app/out",
"pack": "npm run compile && build --dir",
"dist": "npm run compile && build"
}
```






### [jreziga/desktop-app-nodemcu-pinstates](https://github.com/jreziga/desktop-app-nodemcu-pinstates/tree/master/package.json)

> Simple electron app for driving my nodemcu's gpios

```json
{
"appId": "com.example.electron-boilerplate",
"app-category-type": "your.app.category.type",
"win": {
  "target": [
    "nsis"
  ],
  "icon": "resources/windows/icon.ico"
},
"nsis": {
  "oneClick": true,
  "installerHeaderIcon": "resources/windows/setup-icon.ico"
},
"mac": {
  "icon": "resources/osx/icon.icns"
},
"dmg": {
  "icon": "resources/osx/dmg-icon.icns",
  "background": "resources/osx/dmg-background.png"
}
}
```

```json
{
"postinstall": "install-app-deps",
"build": "gulp build",
"prerelease": "gulp build --env=production",
"release": "build --x64 --publish never",
"start": "gulp start",
"pretest": "gulp build-unit --env=test",
"test": "electron-mocha app/specs.js.autogenerated --renderer --require source-map-support/register",
"pree2e": "gulp build-e2e --env=test",
"e2e": "mocha app/e2e.js.autogenerated --require source-map-support/register"
}
```






### [jzvelc/angular2-electron](https://github.com/jzvelc/angular2-electron/tree/master/package.json)

> An Angular 2 Webpack Starter kit featuring Angular 2 (Router, Http, Forms, Services, Tests, E2E, Coverage), Karma, Protractor, Jasmine, Istanbul, TypeScript, and Webpack by AngularClass

```json
{
"appId": "org.jzvelc.angular2electron",
"app-category-type": "public.app-category.utilities",
"dmg": {
  "contents": [
    {
      "x": 410,
      "y": 220,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 220,
      "type": "file"
    }
  ]
},
"mac": {
  "target": [
    "dmg",
    "zip"
  ]
},
"win": {
  "target": [
    "squirrel",
    "zip"
  ],
  "msi": true,
  "remoteReleases": true
},
"linux": {
  "target": [
    "deb",
    "rpm",
    "tar.gz"
  ]
}
}
```

```json
{
"postinstall": "install-app-deps",
"rimraf": "rimraf",
"tslint": "tslint",
"typedoc": "typedoc",
"webpack": "webpack",
"webpack-dev-server": "webpack-dev-server",
"webdriver-manager": "webdriver-manager",
"protractor": "protractor",
"clean": "npm cache clean && npm run rimraf -- node_modules doc coverage dist",
"clean:dist": "npm run rimraf -- dist",
"preclean:install": "npm run clean",
"clean:install": "npm set progress=false && npm install",
"preclean:start": "npm run clean",
"clean:start": "npm start",
"watch": "npm run watch:dev",
"watch:dev": "npm run build:dev -- --watch",
"watch:dev:hmr": "npm run watch:dev -- --hot",
"watch:test": "npm run test -- --auto-watch --no-single-run",
"watch:prod": "npm run build:prod -- --watch",
"build": "npm run build:dev",
"prebuild:dev": "npm run clean:dist",
"build:dev": "webpack --config config/webpack.dev.js --progress --profile --colors --display-error-details --display-cached",
"prebuild:prod": "npm run clean:dist",
"build:prod": "webpack --config config/webpack.prod.js  --progress --profile --colors --display-error-details --display-cached --bail",
"github-deploy": "npm run github-deploy:dev",
"github-deploy:dev": "webpack --config config/webpack.github-deploy.js --progress --profile --colors --display-error-details --display-cached --github-dev",
"github-deploy:prod": "webpack --config config/webpack.github-deploy.js --progress --profile --colors --display-error-details --display-cached --github-prod",
"server": "npm run server:dev",
"server:dev": "webpack-dev-server --config config/webpack.dev.js --progress --profile --colors --watch --display-error-details --display-cached --content-base src/",
"server:dev:hmr": "npm run server:dev -- --inline --hot",
"server:prod": "http-server dist --cors",
"webdriver:update": "npm run webdriver-manager update",
"webdriver:start": "npm run webdriver-manager start",
"lint": "npm run tslint \"src/**/*.ts\"",
"pree2e": "npm run webdriver:update -- --standalone",
"e2e": "npm run protractor",
"e2e:live": "npm run e2e -- --elementExplorer",
"test": "karma start",
"ci": "npm run lint && npm test && npm run e2e",
"docs": "npm run typedoc -- --options typedoc.json --exclude '**/*.spec.ts' ./src/",
"start": "npm run server:dev",
"start:hmr": "npm run server:dev:hmr",
"preversion": "npm test",
"version": "npm run build",
"postversion": "git push && git push --tags"
}
```






### [MikeLP/uCard](https://github.com/MikeLP/uCard/tree/master/package.json)

> uCard - application of cards management

```json
{
"appId": "hr.creaticon.eatodo",
"app-category-type": "public.app-category.productivity",
"asar": {
  "unpack": "**/database/*"
},
"mac": {
  "icon": "./sources/app/resources/icons/app/buildings.icns"
},
"win": {}
}
```

```json
{
"lint": "node_modules/.bin/eslint ./sources/",
"test": "npm run lint",
"start": "NODE_ENV='development' electron .",
"start:dev": "NODE_ENV='development' electron .",
"dist:osx": "build --platform darwin"
}
```






### [landon9720/JavaScriptMIDISequencer](https://github.com/landon9720/JavaScriptMIDISequencer/tree/master/package.json)

> 

```json
{
"appId": "com.example.electron-boilerplate",
"app-category-type": "your.app.category.type",
"win": {
  "target": [
    "nsis"
  ],
  "icon": "resources/windows/icon.ico"
},
"nsis": {
  "oneClick": true,
  "installerHeaderIcon": "resources/windows/setup-icon.ico"
},
"mac": {
  "icon": "resources/osx/icon.icns"
},
"dmg": {
  "icon": "resources/osx/dmg-icon.icns",
  "background": "resources/osx/dmg-background.png"
}
}
```

```json
{
"postinstall": "install-app-deps",
"build": "gulp build",
"prerelease": "gulp build --env=production",
"release": "build --x64 --publish never",
"start": "gulp start",
"pretest": "gulp build-unit --env=test",
"test": "electron-mocha app/specs.js.autogenerated --renderer --require source-map-support/register",
"pree2e": "gulp build-e2e --env=test",
"e2e": "mocha app/e2e.js.autogenerated --require source-map-support/register"
}
```






### [leemm/secure-url-manager](https://github.com/leemm/secure-url-manager/tree/master/package.json)

> URL Manager for Mac OSX via Menubar

```json
{
"appId": "co.uk.chewedup.secure-url-manager",
"app-category-type": "public.app-category.productivity",
"iconUrl": "https://s3-eu-west-1.amazonaws.com/unofficial-player/icon.ico",
"osx": {}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "electron ./app --enable-logging",
"dev": "NODE_ENV='development' npm run start",
"dist": "npm run dist:osx"
}
```






### [leemm/unofficial-amazon-cloud-player](https://github.com/leemm/unofficial-amazon-cloud-player/tree/master/package.json)

> Unofficial Amazon Music Player with Last.FM support

```json
{
"appId": "co.uk.chewedup.cloud-player",
"app-category-type": "public.app-category.music",
"iconUrl": "https://s3-eu-west-1.amazonaws.com/unofficial-player/icon.ico",
"osx": {}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "electron ./app --enable-logging",
"dev": "NODE_ENV='development' npm run start",
"dist": "npm run dist:osx && npm run dist:win32 && npm run dist:win64",
"dist:osx": "build --platform darwin",
"dist:win32": "build --platform win32 --arch ia32",
"dist:win64": "build --platform win32 --arch x64"
}
```






### [legendecas/devdocupp](https://github.com/legendecas/devdocupp/tree/master/package.json)

> An electron wrapper app for devdocs.io

```json
{
"appId": "com.github.legendecas.devdocupp",
"app-category-type": "public.app-category.developer-tools"
}
```

```json
{
"start": "electron app",
"dev": "webpack --watch",
"build": "NODE_ENV=production webpack",
"pack": "npm run build && build --dir",
"dist": "npm run build && build"
}
```






### [lolleko/donkey](https://github.com/lolleko/donkey/tree/master/package.json)

> A Editor for Valve's KeyValue1 Format (VDF)

```json
{
"appId": "com.dotashelter.donkey",
"category": "public.app-category.developer-tools",
"asar": false,
"dmg": {
  "contents": [
    {
      "x": 410,
      "y": 150,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 150,
      "type": "file"
    }
  ]
}
}
```

```json
{
"dist": "build",
"release": "build",
"test": "standard",
"postinstall": "echo 'Installing app dependencies!' && npm --prefix ./app install ./app && node rebuild.js",
"start": "electron ./app"
}
```






### [lotosbin/binbin-reader-electron](https://github.com/lotosbin/binbin-reader-electron/tree/master/package.json)

> electron  reader

```json
{
"appId": "binbin.reader.electron",
"mac": {
  "category": "your.app.category.type"
},
"win": {
  "iconUrl": "(windows-only) https link to icon"
}
}
```

```json
{
"test": "echo \"Error: no test specified\" && exit 1",
"pack": "build --dir",
"dist": "build"
}
```






### [mathiasrw/electron-demo](https://github.com/mathiasrw/electron-demo/tree/master/package.json)

> A minimal Electron application

```json
{
"appId": "dk.eupry.tempcontrole",
"app-category-type": "public.app-category.graphics-design",
"dmg": {
  "contents": [
    {
      "x": 410,
      "y": 150,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 150,
      "type": "file"
    }
  ]
}
}
```

```json
{
"start": "electron .",
"postinstall": "install-app-deps",
"pack": "build --dir",
"dist": "build"
}
```






### [matikbird/textile](https://github.com/matikbird/textile/tree/master/package.json)

> ☘ Build your own tree, where each branch it's a book

```json
{
"appId": "com.Textile.App",
"app-category-type": "words.time",
"win": {
  "target": [
    "nsis"
  ],
  "icon": "resources/windows/icon.ico"
},
"nsis": {
  "oneClick": true,
  "installerHeaderIcon": "resources/windows/setup-icon.ico"
},
"mac": {
  "icon": "resources/osx/icon.icns"
},
"dmg": {
  "icon": "resources/osx/dmg-icon.icns",
  "background": "resources/osx/dmg-background.png"
}
}
```

```json
{
"postinstall": "install-app-deps",
"build": "gulp build",
"prerelease": "gulp build --env=production",
"release": "build --x64 --publish never",
"start": "gulp start",
"pretest": "gulp build --env=test",
"test": "electron-mocha build --renderer"
}
```






### [PanRada/electron-boilerplate-offline](https://github.com/PanRada/electron-boilerplate-offline/tree/master/package.json)

> 

```json
{
"appId": "com.volvo.electron-boilerplate",
"app-category-type": "mobibox.app.category.type",
"win": {
  "target": [
    "nsis"
  ],
  "icon": "resources/windows/icon.ico"
},
"nsis": {
  "oneClick": true,
  "installerHeaderIcon": "resources/windows/setup-icon.ico"
},
"mac": {
  "icon": "resources/osx/icon.icns"
},
"dmg": {
  "icon": "resources/osx/dmg-icon.icns",
  "background": "resources/osx/dmg-background.png"
}
}
```

```json
{
"postinstall": "install-app-deps",
"build": "gulp build",
"prerelease": "gulp build --env=production",
"release": "build --x64 --publish never",
"start": "gulp start",
"pretest": "gulp build-unit --env=test",
"test": "electron-mocha app/specs.js.autogenerated --renderer --require source-map-support/register",
"coverage": "npm test -- -R scripts/istanbul-reporter",
"pree2e": "gulp build-e2e --env=test",
"e2e": "mocha app/e2e.js.autogenerated --require source-map-support/register"
}
```






### [mattvoss/checkin-app](https://github.com/mattvoss/checkin-app/tree/master/package.json)

> Desktop Check In Application

```json
{
"app-bundle-id": "xyz.vosswerks.checkin",
"app-category-type": "public.app-category.productivity"
}
```

```json
{
"postinstall": "install-app-deps",
"dev": "npm run compile:dev && npm run run:dev",
"run": "npm run compile && NODE_ENV=production electron ./app",
"run:dev": "NODE_ENV=development electron app",
"start": "npm install && npm run compile && NODE_ENV=production electron ./app",
"clean": "rimraf dist",
"clean:osx": "rimraf dist/Checkin-darwin-x64",
"clean:win": "rimraf dist/win",
"compile:dev": "grunt dev",
"compile": "grunt build",
"pack": "npm run compile && build",
"dist": "npm run compile && build",
"release": "npm run compile && build",
"dist:osx": "build --platform osx",
"dist:win64": "build --platform win32 --arch x64"
}
```






### [Penagwin/LabelMaker](https://github.com/Penagwin/LabelMaker/tree/master/package.json)

> A label creator

```json
{
"appId": "your.id",
"category": "your.app.category.type"
}
```

```json
{
"test": "echo \"Error: no test specified\" && exit 1"
}
```






### [melchor629/chromecaster-gui](https://github.com/melchor629/chromecaster-gui/tree/master/package.json)

> Cast your computer audio to a Chromecast (Audio)

```json
{
"appId": "me.melchor9000.chromecaster-gui",
"category": "public.app-category.music",
"asar": true,
"files": [
  "**/*",
  "!node_modules/*/build/**/*",
  "node_modules/*/build/Release/*.node",
  "!node_modules/lame/deps${/*}",
  "!node_modules/lame/examples${/*}",
  "!**/*.c?(pp|c)",
  "!**/*.h?(pp)",
  "!material-kit/**/*",
  "material-kit/assets/+(js|css)/*"
],
"extraResources": [
  "lib/${os}/*"
],
"compression": "normal",
"mac": {
  "icon": "app/icons/icon.icns"
},
"linux": {
  "compression": "xz",
  "depends": [
    "libpulse0",
    "libavahi-compat-libdnssd1",
    "libappindicator1",
    "libnotify-bin",
    "libflac8"
  ]
},
"win": {
  "target": [
    "squirrel",
    "zip"
  ],
  "iconUrl": "https://github.com/melchor629/chromecaster-gui/blob/master/app/icons/icon.ico?raw=true",
  "icon": "app/icons/icon.ico"
}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "electron ./app --dev",
"debug": "electron ./app --debug-brk=9222 --dev",
"pack": "build --x64 --dir --publish never",
"dist": "build --x64 --publish never"
}
```






### [memonono94/electron-test](https://github.com/memonono94/electron-test/tree/master/package.json)

> An electron app basic structure

```json
{
"productName": "Electron Test",
"license": "ISC",
"app-bundle-id": "electron-test-id",
"app-category-type": "private.tools.monitoring-tools",
"iconUrl": "http://www.github.com/memonono94/electron-test/app/icons/icon.ico",
"compression": "maximum",
".build.osx": {
  "icon": "build/icon.icns",
  "background": "build/background.png"
},
".build.win": {
  "loadingGif": "build/install-spinner.gif",
  "noMsi": "false"
},
".build.lin": {
  "compression": "gz"
}
}
```

```json
{
"postinstall": "install-app-deps",
"pack": "build",
"dist": "build"
}
```






### [Praseetha-KR/postit-todo](https://github.com/Praseetha-KR/postit-todo/tree/master/package.json)

> postit todo list

```json
{
"productName": "PostIt Todo",
"appId": "com.Praseetha-KR.postit",
"category": "public.app-category.developer-tools",
"asar": false
}
```

```json
{
"dev": "cross-env HOT=1 NODE_ENV=development webpack-dev-server",
"lint": "eslint .",
"build": "cross-env NODE_ENV=production webpack",
"test": "npm run lint",
"start": "cross-env HOT=1 NODE_ENV=development electron app",
"postinstall": "install-app-deps",
"pack": "npm run build && build --dir && babel --no-comments --compact --minified --out-file app/dist/bundle.js app/dist/bundle.js",
"dist": "npm run build && build",
"release": "npm run build && build --publish=onTagOrDraft"
}
```






### [meznaric/ServerStatusApp](https://github.com/meznaric/ServerStatusApp/tree/master/package.json)

> Server monitor app that lives in you status bar.

```json
{
"productName": "ServerStatusApp",
"asar": false,
"appId": "server.status.app",
"category": "public.app-category.developer-tools",
"win": {
  "iconUrl": "https://otivia.co.uk/img/serverstatusapp128x128.png"
}
}
```

```json
{
"postinstall": "install-app-deps",
"test": "echo \"Error: no test specified\" && exit 1",
"start": "(cd react && cross-env NODE_ENV=development npm start) & (sleep 3 && cross-env NODE_ENV=development ./node_modules/.bin/electron ./app/index.js)",
"dist": "(cd react && cross-env NODE_ENV=production npm run build) && cross-env NODE_ENV=production build -mwl",
"pack": "build --dir"
}
```






### [mudio/bos](https://github.com/mudio/bos/tree/master/package.json)

> 百度云-对象存储BOS-客户端

```json
{
"appId": "com.baidu.bce",
"category": "public.app-category.tools",
"dmg": {
  "contents": [
    {
      "x": 400,
      "y": 150,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 150,
      "type": "file"
    }
  ]
}
}
```

```json
{
"test": "cross-env NODE_ENV=test mocha --compilers js:babel-register --recursive --require ./test/setup.js test/**/*.spec.js",
"pretest": "node node_modules/fbjs-scripts/node/check-dev-engines.js package.json",
"postinstall": "install-app-deps",
"test-e2e": "cross-env NODE_ENV=test mocha --compilers js:babel-register --require ./test/setup.js ./test/e2e.js",
"lint": "eslint app test *.js",
"build-main": "cross-env NODE_ENV=production node -r babel-register ./node_modules/webpack/bin/webpack --config webpack.config.electron.js --progress --profile --colors",
"build-renderer": "cross-env NODE_ENV=production node -r babel-register ./node_modules/webpack/bin/webpack --config webpack.config.production.js --progress --profile --colors",
"preview": "cross-env NODE_ENV=production electron ./static/",
"start": "cross-env DEBUG=bce-client:*,bce-sdk:* HOT=1 NODE_ENV=development electron -r babel-register -r babel-polyfill ./app/main",
"server": "cross-env NODE_ENV=development node -r babel-register server.js",
"dev": "concurrently --kill-others \"npm run server\" \"npm run start\"",
"compile": "npm run build-main && npm run build-renderer",
"build": "npm run compile && build",
"build:win": "build --x64 --win squirrel nsis --publish never",
"build:osx": "build --mac --publish never",
"publish:bos": "node -r babel-register ./publish/bosPublisher.js",
"publish:github": "node -r babel-register ./publish/githubPublisher.js"
}
```






### [muletter/muletter](https://github.com/muletter/muletter/tree/master/package.json)

> Desktop mass mailer

```json
{
"app-bundle-id": "muletter",
"app-category-type": "email",
"iconUrl": ""
}
```

```json
{
"bundle": "webpack",
"bundle:watch": "webpack --watch",
"start": "electron app/main.js",
"minify": "webpack --config webpack.config.min.js",
"postinstall": "install-app-deps && webpack",
"pack": "build",
"dist": "build"
}
```






### [mweibel/esrscan-desktop](https://github.com/mweibel/esrscan-desktop/tree/master/package.json)

> Desktop app for ESRScan

```json
{
"appId": "net.openflex.desktop.ESRScan",
"app-category-type": "public.app-category.productivity",
"osx": {
  "title": "ESRScan",
  "icon-size": 80,
  "identity": "Michael Weibel (A3Q6Z5FR3P)",
  "contents": [
    {
      "x": 460,
      "y": 250,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 180,
      "y": 250,
      "type": "file"
    }
  ]
},
"linux": {
  "synopsis": "Receives invoice scans from the ESRScan mobile app and displays them.",
  "target": "deb"
}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "NODE_ENV=development electron src/main.js & webpack-dev-server --hot --inline --content-base src/frontend/",
"test": "mocha --compilers js:babel-core/register",
"lint": "./node_modules/.bin/standard",
"clean": "rm -rf ./dist ./app/out",
"clean:osx": "rm -rf ./dist/osx",
"clean:win": "rm -rf ./dist/win",
"clean:linux": "rm -rf ./dist/linux",
"compile": "npm run clean && npm run compile:webpack && npm run copy:compiled",
"compile:webpack": "NODE_ENV=production ./node_modules/.bin/webpack --config webpack.config.js --bail",
"copy:compiled": "cp ./src/frontend/index.html ./src/index.js ./src/server.js ./README.md ./app/out",
"build": "npm run build:osx && npm run build:win && npm run build:linux",
"build:osx": "npm run clean:osx && build --osx --publish=never",
"build:win": "npm run clean:win && build --win --publish=never",
"build:linux": "npm run clean:linux && build --linux --publish=never",
"semantic-release-prepare": "semantic-release pre",
"semantic-release-publish": "semantic-release post"
}
```






### [n6g7/stylay](https://github.com/n6g7/stylay/tree/master/package.json)

> Compile your Stylus with ease

```json
{
"appId": "fr.gnab.stylay",
"category": "public.app-category.developer-tools"
}
```

```json
{
"pretest": "eslint --ext js,jsx src test",
"test": "mocha --compilers js:babel-core/register --require test/helper.js --recursive",
"start": "electron .",
"build": "webpack && rm -r dist || build -mwl",
"dev": "NODE_ENV=dev electron ."
}
```






### [nathanbuchar/hoodline-mini](https://github.com/nathanbuchar/hoodline-mini/tree/master/package.json)

> 📰 macOS menu bar notification app for Hoodline.

```json
{
"appId": "com.nathanbuchar.hoodline-mini",
"category": "public.app-category.news",
"productName": "Hoodline Mini",
"compression": "store",
"files": [
  "**/*",
  "!assets/+(js|css)/*.map",
  "!assets/+(js|css)/src${/*}"
],
"mac": {
  "icon": "build/Icon.icns",
  "identity": "Nathaniel Buchar (CAN92U6WU7)"
},
"dmg": {
  "icon": "build/Icon-dmg.icns",
  "background": "build/Background.png",
  "contents": [
    {
      "x": 360,
      "y": 210,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 141,
      "y": 210,
      "type": "file",
      "path": "computed path to artifact, do not specify it - will be overwritten"
    }
  ]
}
}
```

```json
{
"start": "electron app",
"setup": "npm install && npm run setup:app",
"setup:app": "(cd app && npm run setup) && npm run build:frontend",
"build:frontend": "gulp build",
"watch:frontend": "export NODE_ENV=\"development\" && gulp build:watch",
"build": "npm run build:frontend && build && open -a Finder dist/mac"
}
```






### [nicoschmitt/srtrenamer](https://github.com/nicoschmitt/srtrenamer/tree/master/package.json)

> 

```json
{
"appId": "nico.srtrenamer",
"productName": "SRT Renamer",
"win": {
  "iconUrl": "https://raw.githubusercontent.com/nicoschmitt/srtrenamer/master/build/icon.ico"
}
}
```

```json
{
"start": "electron ./app --enable-logging",
"postinstall": "install-app-deps",
"pack": "build --dir",
"dist": "build"
}
```






### [nodecg/dashboard](https://github.com/nodecg/dashboard/tree/master/package.json)

> NodeCG Dashboard

```json
{
"appId": "org.nodecg.dashboard",
"app-category-type": "public.app-category.utilities",
"productName": "NodeCG Dashboard",
"iconUrl": "https://raw.githubusercontent.com/nodecg/dashboard/master/build/icon.ico",
"osx": {
  "icon-size": 128,
  "contents": [
    {
      "x": 425,
      "y": 200,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 120,
      "y": 200,
      "type": "file",
      "path": "computed path to artifact, do not specify it - will be overwritten"
    }
  ]
}
}
```

```json
{
"test": "npm run static",
"static": "eslint app/**/*.js",
"postinstall": "install-app-deps",
"pack": "build",
"dist": "build",
"start": "electron app/server/main.js --enable-logging"
}
```






### [ScottyKim/NaverDeview2016-Electron-Demo](https://github.com/ScottyKim/NaverDeview2016-Electron-Demo/tree/master/package.json)

> Naver Deivew 2016 Demo 1

```json
{
"appId": "scotty.naverdeview",
"mac": {
  "category": "io.protopie.scotty.naverdeview"
}
}
```

```json
{
"start": "electron .",
"dist": "build"
}
```






### [ondrejsika/electron-build-example](https://github.com/ondrejsika/electron-build-example/tree/master/package.json)

> Example of .EXE build of Electron JS app

```json
{
"app-bundle-id": "cz.sikaapp.electron-example",
"app-category-type": "public.app-category.graphics-design",
"osx": {
  "contents": [
    {
      "x": 410,
      "y": 150,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 150,
      "type": "file"
    }
  ]
}
}
```

```json
{
"start": "./node_modules/.bin/electron ./app/index.js",
"build:win64": "./node_modules/.bin/build --platform win32 --arch x64"
}
```






### [SnapShotsApp/uploader](https://github.com/SnapShotsApp/uploader/tree/master/package.json)

> Snapshots Uploader app

```json
{
"appId": "com.snapshots.Snapshots",
"dmg": {
  "contents": [
    {
      "x": 410,
      "y": 150,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 150,
      "type": "file"
    }
  ]
},
"win": {
  "target": "nsis"
},
"linux": {
  "publish": null,
  "target": [
    "deb",
    "AppImage"
  ]
}
}
```

```json
{
"lint": "eslint --ignore-path .gitignore --format=node_modules/eslint-formatter-pretty app test *.js",
"postinstall": "install-app-deps"
}
```






### [Some-Team/vk_music](https://github.com/Some-Team/vk_music/tree/master/package.json)

> VK Music Player

```json
{
"app-bundle-id": "vk.music.player",
"app-category-type": "public.app-category.developer-tools",
"compression": "maximum"
}
```

```json
{
"start": "electron .",
"postinstall": "install-app-deps",
"dist": "build --platform=win32 --arch=ia32"
}
```






### [paulmaclean/relax](https://github.com/paulmaclean/relax/tree/master/package.json)

> 

```json
{
"appId": "hr.appcompany.appname",
"app-category-type": "public.app-category.productivity",
"iconUrl": "http://icehockeysoftware.com/css/images/icon.ico",
"osx": {},
"win": {}
}
```

```json
{
"start": "electron ./dev/src/electron-main.js  --enable-logging",
"postinstall": "install-app-deps",
"dev": "NODE_ENV='development' npm run start",
"dist": "grunt requirejs:distribute && npm run dist:osx && npm run dist:win64",
"dist:osx": "build --platform darwin",
"dist:win64": "build --platform win32 --arch x64"
}
```






### [pfan123/svgtool](https://github.com/pfan123/svgtool/tree/master/package.json)

> svgtool

```json
{
"appId": "svgtool.id",
"app-category-type": "svgtool.app.category.type",
"win": {
  "iconUrl": "http://jdc.jd.com/svg/static/images/icon.ico"
}
}
```

```json
{
"dev": "electron .",
"clean": "rm -rf ./dist",
"clean:osx": "rm -rf ./dist/osx",
"clean:win": "rm -rf ./dist/win",
"packager": "npm run clean && npm run packager:osx && npm run packager:win",
"packager:osx": "npm run clean:osx && electron-packager . \"svgtool\" --out=./dist/osx --platform=darwin --arch=x64 --version=1.2.4 --icon=./static/images/icon.icns --ignore=.git --ignore=dist --ignore=.sass-cache --ignore=node_modules/electron-prebuilt --ignore=node_modules/electron-packager --prune",
"packager:win": "npm run clean:win && electron-packager . \"svgtool\" --out=./dist/win --platform=win32 --arch=x64 --version=1.2.4 --icon=./static/images/icon.ico --ignore=.git --ignore=dist --ignore=.sass-cache --ignore=node_modules/electron-prebuilt --ignore=node_modules/electron-packager --prune",
"pack": "build --target dir",
"dist": "rimraf dist && build"
}
```






### [SurenderLohia/ea-todo](https://github.com/SurenderLohia/ea-todo/tree/master/package.json)

> Electron Angular Todo App

```json
{
"app-bundle-id": "hr.creaticon.eatodo",
"app-category-type": "public.app-category.productivity",
"iconUrl": "http://eatodo.s3.amazonaws.com/icon.ico"
}
```

```json
{
"start": "electron ./app",
"postinstall": "install-app-deps",
"pack": "build --target dir",
"dist": "build"
}
```






### [pierophp/handview-desktop](https://github.com/pierophp/handview-desktop/tree/master/package.json)

> Cliente Desktop para o Hand View

```json
{
"appId": "org.handview",
"app-category-type": "public.app-category.graphics-design",
"iconUrl": "https://raw.githubusercontent.com/pierophp/handview-desktop/master/build/icon.ico",
"mac": {
  "contents": [
    {
      "x": 410,
      "y": 150,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 150,
      "type": "file"
    }
  ]
},
"win": {
  "msi": true
}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "npm install && electron ./app",
"clean": "rimraf dist",
"clean:osx": "rimraf dist/HandView-darwin-x64",
"clean:win": "rimraf dist/win",
"pack": "build",
"dist": "build",
"release": "build",
"dist:win64": "./node_modules/.bin/build --platform win32 --arch x64"
}
```






### [Thebigbignooby/learn-electron](https://github.com/Thebigbignooby/learn-electron/tree/master/package.json)

> A minimal Electron application

```json
{
"app-bundle-id": "learn.electron",
"app-category-type": "your.app.category.type",
"iconUrl": "(windows only)"
}
```

```json
{
"start": "electron ./app/main.js",
"build-all": "electron-packager ./app --all --out dist/",
"linux-installer": "electron-installer-debian --src dist/learn-electron-linux-x64/ --dest dist/installers/ --arch amd64",
"postinstall": "install-app-deps"
}
```






### [raluka/msos](https://github.com/raluka/msos/tree/master/package.json)

> Greatest desktop application since forever

```json
{
"appId": "msos.electron",
"app-category-type": "public.app-category.productivity",
"dmg": {
  "title": "MS OS App",
  "background": "build/background.png",
  "icon": "build/icon.icns",
  "icon-size": 128,
  "contents": [
    {
      "x": 355,
      "y": 125,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 155,
      "y": 125,
      "type": "file"
    }
  ]
},
"win": {
  "remoteReleases": "https://github.com/raluka/msos",
  "iconUrl": "http://eatodo.s3.amazonaws.com/icon.ico"
}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "electron ./app --enable-logging",
"dev": "NODE_ENV='development' npm run start",
"dist": "build -mwl --x64 --ia32",
"prerelease:osx": "rimraf release/osx && mkdirp release/osx",
"release:osx": "copyfiles -f dist/mac/*.{dmg,zip} release/osx && PACKAGE_VERSION=$(cat app/package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]') && echo $PACKAGE_VERSION >> ./release/osx/VERSION",
"prerelease:win32": "rimraf release/win32 && mkdirp release/win32",
"release:win32": "copyfiles -f dist/win-ia32/{RELEASES,*.nupkg,*.exe} release/win32",
"prerelease:win64": "rimraf release/win64 && mkdirp release/win64",
"release:win64": "copyfiles -f dist/win/{RELEASES,*.nupkg,*.exe} release/win64",
"release": "run-p release:*"
}
```






### [raphaelbs/curva-aluguel](https://github.com/raphaelbs/curva-aluguel/tree/master/package.json)

> Descreve a curva de gastos entre ficar com o aluguel atual e trocar de aluguel.

```json
{
"appId": "com.github.raphaelbs.curva_aluguel"
}
```

```json
{
"start": "electron .",
"init": "npm install && npm prune && bower install && bower prune && gulp init",
"build": "npm run init && build --win --x64",
"gulp": "gulp"
}
```






### [rinocloud/rinobot](https://github.com/rinocloud/rinobot/tree/master/package.json)

> Automatically process scientific data

```json
{
"appId": "co.rinocloud.rinobot",
"category": "public.app-category.science-tools",
"asar": false,
"iconUrl": "https://raw.githubusercontent.com/rinocloud/logos/master/icon.ico",
"win": {
  "certificateFile": "/Users/eoinmurray/Documents/crypto/helena_startssl/rinocloud-win-cert.p12"
}
}
```

```json
{
"postinstall": "install-app-deps",
"dev": "concurrently --kill-others \"npm run dev:hot-server\" \"npm run dev:fork\"",
"dev:hot-server": "webpack-dashboard -p 3002 -- node -r babel-register server.js",
"dev:fork": "cross-env NODE_ENV=development webpack-dashboard -- node -r babel-register ./node_modules/webpack/bin/webpack --config webpack.config.fork.js --progress --watch",
"start-hot": "cross-env HOT=1 NODE_ENV=development electron -r babel-register -r babel-polyfill ./app/index.dev",
"start": "cross-env NODE_ENV=production electron ./app",
"build": "npm run build:lib && npm run build:app && npm run build:fork",
"build:app": "cross-env NODE_ENV=production node -r babel-register ./node_modules/webpack/bin/webpack --config webpack.config.electron.js --progress",
"build:lib": "cross-env NODE_ENV=production node -r babel-register ./node_modules/webpack/bin/webpack --config webpack.config.js --progress",
"build:fork": "cross-env NODE_ENV=production node -r babel-register ./node_modules/webpack/bin/webpack --config webpack.config.fork.js --progress",
"dist": "build",
"dist:win": "build --platform win",
"dist:osx": "build --platform darwin",
"release": "npm run build && npm run dist:osx && npm run dist:win",
"docs:clean": "rimraf _book",
"docs:prepare": "gitbook install",
"docs:build": "npm run docs:prepare && gitbook build",
"docs:watch": "npm run docs:prepare && gitbook serve",
"docs:publish": "npm run docs:clean && npm run docs:build && cd _book && git init && git commit --allow-empty -m 'update book' && git checkout -b gh-pages && touch .nojekyll && git add . && git commit -am 'update book' && git push git@github.com:rinocloud/rinobot gh-pages --force",
"test": "node ./node_modules/mocha/bin/mocha --require babel-register --recursive ./app/test/"
}
```






### [rishabhbhardwaj/DictionaryPlus](https://github.com/rishabhbhardwaj/DictionaryPlus/tree/master/package.json)

> A Dictionary App for MacOS, Windows and Linux.

```json
{
"appId": "dictionaryplus",
"mac": {
  "category": "education"
},
"win": {
  "iconUrl": "http://assets2.merriam-webster.com/mw/static/app-standalone-images/MW_logo.png"
}
}
```

```json
{
"start": "electron .",
"pack": "build --dir",
"dist": "build -mwl"
}
```






### [UFABC-NoBox/RobotPlanner](https://github.com/UFABC-NoBox/RobotPlanner/tree/master/package.json)

> Controlls robots for NoBox Team

```json
{
"appId": "com.tournamenter",
"asar": false,
"app-category-type": "public.app-category.productivity",
"mac": {
  "title": "NoRobotPlanner",
  "target": [
    "dmg"
  ],
  "icon-size": 120,
  "icon": "build/icon.icns"
},
"dmg": {
  "background": "build/background.png",
  "contents": [
    {
      "x": 610,
      "y": 150,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 150,
      "y": 150,
      "type": "file"
    }
  ]
},
"win": {
  "target": [
    "squirrel"
  ],
  "iconUrl": "https://raw.githubusercontent.com/ivanseidel/TournamenterApp/master/build/icon.ico",
  "icon": "build/icon.ico",
  "msi": false
},
"linux": {
  "description": "NoRobotPlanner"
}
}
```

```json
{
"test": "make test",
"start": "electron ./",
"postinstall": "bower install && bower-installer",
"pack": "build --dir",
"dist": "build",
"release": "build"
}
```






### [roymj88/electron-boilerplate](https://github.com/roymj88/electron-boilerplate/tree/master/package.json)

> Sample Electron based app

```json
{
"appId": "com.example.electron-boilerplate",
"app-category-type": "your.app.category.type",
"win": {
  "target": [
    "nsis"
  ],
  "icon": "resources/windows/icon.ico"
},
"nsis": {
  "oneClick": true,
  "installerHeaderIcon": "resources/windows/setup-icon.ico"
},
"mac": {
  "icon": "resources/osx/icon.icns"
},
"dmg": {
  "icon": "resources/osx/dmg-icon.icns",
  "background": "resources/osx/dmg-background.png"
}
}
```

```json
{
"postinstall": "install-app-deps",
"build": "gulp build",
"prerelease": "gulp build --env=production",
"release": "build --x64 --publish never",
"start": "gulp start",
"pretest": "gulp build --env=test",
"test": "electron-mocha build --renderer"
}
```






### [ryan-nauman/spotify-mini](https://github.com/ryan-nauman/spotify-mini/tree/master/package.json)

> 

```json
{
"appId": "com.example.electron-boilerplate",
"app-category-type": "your.app.category.type",
"win": {
  "target": [
    "nsis"
  ],
  "icon": "resources/windows/icon.ico"
},
"nsis": {
  "oneClick": true,
  "installerHeaderIcon": "resources/windows/setup-icon.ico"
},
"mac": {
  "icon": "resources/osx/icon.icns"
},
"dmg": {
  "icon": "resources/osx/dmg-icon.icns",
  "background": "resources/osx/dmg-background.png"
},
"protocols": {
  "name": "Bowtie theme installation",
  "schemes": [
    "bowtie"
  ]
}
}
```

```json
{
"postinstall": "install-app-deps",
"build": "gulp build",
"prerelease": "gulp build --env=production",
"release": "build --x64 --publish never",
"start": "gulp start",
"pretest": "gulp build-unit --env=test",
"test": "electron-mocha app/specs.js.autogenerated --renderer --require source-map-support/register",
"pree2e": "gulp build-e2e --env=test",
"e2e": "mocha app/e2e.js.autogenerated --require source-map-support/register"
}
```






### [samiconductor/chromiarm](https://github.com/samiconductor/chromiarm/tree/master/package.json)

> Minimal electron browser app for ARM systems.

```json
{
"appId": "com.samiconductor.chromiarm",
"category": "public.app-category.utilities"
}
```

```json
{
"start": "electron app",
"test": "node test",
"postinstall": "install-app-deps",
"clean": "rimraf dist",
"clean:linux64": "rimraf dist/linux",
"clean:linux32": "rimraf dist/linux-ia32",
"pack": "npm run pack:linux",
"pack:linux": "npm run pack:linux64 && npm run pack:linux32",
"pack:linux64": "build --dir --x64 --linux",
"pack:linux32": "build --dir --ia32 --linux",
"prepack:linux64": "npm run clean:linux64",
"prepack:linux32": "npm run clean:linux32",
"dist": "npm run dist:linux",
"predist": "npm test && npm run clean",
"dist:linux": "npm run dist:linux64 && npm run dist:linux32",
"dist:linux64": "electron-installer-debian --src dist/linux --dest dist --arch amd64 --config debian.json",
"dist:linux32": "electron-installer-debian --src dist/linux-ia32 --dest dist --arch i386 --config debian.json",
"predist:linux64": "npm run pack:linux64",
"predist:linux32": "npm run pack:linux32"
}
```






### [scoiatael/Jarvis](https://github.com/scoiatael/Jarvis/tree/master/package.json)

> 

```json
{
"appId": "io.github.scoiatael.jarvis",
"category": "public.app-category.developer-tools",
"linux": {
  "target": [
    "deb",
    "rpm",
    "pacman",
    "apk",
    "AppImage"
  ]
}
}
```

```json
{
"start": "electron app/",
"pack": "build --dir",
"dist": "build -mwl",
"postinstall": "install-app-deps"
}
```






### [sdllc/constructr](https://github.com/sdllc/constructr/tree/master/package.json)

> Electron-based R shell

```json
{
"asar": true,
"asar-unpack": "**/*.R",
"asar-unpack-dir": "**/{R-3.*,node_modules/controlr,library,R}/**/*",
"win": {
  "iconUrl": "https://raw.githubusercontent.com/sdllc/constructr/master/build/icon.ico"
},
"linux": {
  "depends": [
    "r-base-core",
    "r-base",
    "r-recommended",
    "libappindicator1",
    "libnotify-bin"
  ],
  "fpm": [
    "--deb-priority",
    "optional",
    "--category",
    "devel"
  ]
}
}
```

```json
{
"start": "electron app/main.js",
"dist": "build"
}
```






### [seekwell/playground-1](https://github.com/seekwell/playground-1/tree/master/package.json)

> Unofficial Electron Template Application

```json
{
"app-bundle-id": "skelektron",
"app-category-type": "public.app-category.business",
"osx": {
  "title": "SkelEktron",
  "icon-size": 120,
  "contents": [
    {
      "x": 478,
      "y": 170,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 170,
      "type": "file"
    }
  ]
},
"win": {
  "msi": false
}
}
```

```json
{
"test": "standard && mocha --recursive",
"unit": "standard && mocha test/unit --recursive",
"integration": "standard && mocha test/integration --recursive",
"coverage": "istanbul cover node_modules/.bin/_mocha -- --recursive",
"depcheck": "dependency-check app --entry main.js --unused --no-dev",
"lint": "standard",
"start": "electron ./app/main",
"clean:linux": "rimraf dist/linux",
"clean:osx": "rimraf dist/darwin-x64",
"clean:win": "rimraf dist/win",
"clean": "npm run clean:linux && npm run clean:win && npm run clean:osx",
"pack:osx": "build --platform=darwin",
"pack:win": "npm run pack:win64 && npm run pack:win32",
"pack:win32": "build --platform=win32 --arch=ia32",
"pack:win64": "build --platform=win32 --arch=x64",
"pack:linux": "npm run pack:lin64 && npm run pack:lin32",
"pack:lin32": "build --platform=linux --arch=ia32",
"pack:lin64": "build --platform=linux --arch=x64",
"pack": "build --platform=all --arch=x64,ia32",
"prebuild": "node build/target.js",
"postbuild": "node build/target.js --clean",
"prebuild:osx": "npm run prebuild",
"postbuild:osx": "npm run postbuild",
"build:osx": "build --platform=darwin -d",
"build:win": "npm run build:win64 && npm run build:win32",
"build:win32": "build --platform=win32 --arch=ia32 -d",
"build:win64": "build --platform=win32 --arch=x64 -d",
"build:linux": "npm run build:lin64 && npm run build:lin32 -d",
"build:lin32": "build --platform=linux --arch=ia32 -d",
"build:lin64": "build --platform=linux --arch=x64 -d",
"build": "build --platform=all --arch=x64,ia32 -d",
"postinstall": "install-app-deps"
}
```






### [seekwell/playground-2](https://github.com/seekwell/playground-2/tree/master/package.json)

> Unofficial Electron Template Application

```json
{
"app-bundle-id": "skelektron",
"app-category-type": "public.app-category.business",
"osx": {
  "title": "SkelEktron",
  "icon-size": 120,
  "contents": [
    {
      "x": 478,
      "y": 170,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 170,
      "type": "file"
    }
  ]
},
"win": {
  "msi": false
}
}
```

```json
{
"test": "standard && mocha --recursive",
"unit": "standard && mocha test/unit --recursive",
"integration": "standard && mocha test/integration --recursive",
"coverage": "istanbul cover node_modules/.bin/_mocha -- --recursive",
"depcheck": "dependency-check app --entry main.js --unused --no-dev",
"lint": "standard",
"start": "electron ./app/main",
"clean:linux": "rimraf dist/linux",
"clean:osx": "rimraf dist/darwin-x64",
"clean:win": "rimraf dist/win",
"clean": "npm run clean:linux && npm run clean:win && npm run clean:osx",
"pack:osx": "build --platform=darwin",
"pack:win": "npm run pack:win64 && npm run pack:win32",
"pack:win32": "build --platform=win32 --arch=ia32",
"pack:win64": "build --platform=win32 --arch=x64",
"pack:linux": "npm run pack:lin64 && npm run pack:lin32",
"pack:lin32": "build --platform=linux --arch=ia32",
"pack:lin64": "build --platform=linux --arch=x64",
"pack": "build --platform=all --arch=x64,ia32",
"prebuild": "node build/target.js",
"postbuild": "node build/target.js --clean",
"prebuild:osx": "npm run prebuild",
"postbuild:osx": "npm run postbuild",
"build:osx": "build --platform=darwin -d",
"build:win": "npm run build:win64 && npm run build:win32",
"build:win32": "build --platform=win32 --arch=ia32 -d",
"build:win64": "build --platform=win32 --arch=x64 -d",
"build:linux": "npm run build:lin64 && npm run build:lin32 -d",
"build:lin32": "build --platform=linux --arch=ia32 -d",
"build:lin64": "build --platform=linux --arch=x64 -d",
"build": "build --platform=all --arch=x64,ia32 -d",
"postinstall": "install-app-deps"
}
```






### [sergeybekrin/npmkit](https://github.com/sergeybekrin/npmkit/tree/master/package.json)

> Ultimate toolkit to control npm chaos

```json
{
"appId": "org.npmkit.npmkit",
"category": "public.app-category.developer-tools",
"productName": "npmkit",
"files": [
  "package.json",
  "main.js",
  "build/**/*"
],
"dmg": {
  "contents": [
    {
      "x": 410,
      "y": 150,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 150,
      "type": "file"
    }
  ]
},
"win": {
  "remoteReleases": true
},
"linux": {
  "target": [
    "AppImage",
    "deb"
  ]
}
}
```

```json
{
"test": "cross-env NODE_ENV=test BABEL_DISABLE_CACHE=1 mocha --compilers js:babel-register --recursive --require ./tests/setup.js app/**/*.spec.js",
"test-watch": "npm test -- --watch",
"lint": "eslint app tests webpack *.js",
"hot-server": "node -r babel-register server.js",
"build-main": "cross-env NODE_ENV=production node -r babel-register ./node_modules/webpack/bin/webpack --config webpack/main.production.js --profile --colors",
"build-renderer": "cross-env NODE_ENV=production node -r babel-register ./node_modules/webpack/bin/webpack --config webpack/renderer.production.js --profile --colors",
"build": "npm run build-main && npm run build-renderer",
"start": "cross-env NODE_ENV=production electron ./",
"start-hot": "cross-env HOT=1 NODE_ENV=development electron -r babel-register ./app/main",
"dev": "concurrently --kill-others \"npm run hot-server\" \"npm run start-hot\"",
"dist-macos": "npm run build && build --macos",
"dist-linux": "npm run build && build --linux",
"dist-win": "npm run build && build --win --x64",
"dist-all": "npm run build && build -mwl",
"postinstall": "node node_modules/fbjs-scripts/node/check-dev-engines.js package.json",
"docs-serve": "http-server ./docs",
"docs-build": "esdoc -c ./.esdoc docs",
"generate-icns": "nicns --in ./assets/npmkit-icon.png --out ./assets/icon.icns"
}
```






### [sgtaziz/RemoteMessages-Client](https://github.com/sgtaziz/RemoteMessages-Client/tree/master/package.json)

> Remote Messages

```json
{
"appId": "com.sgtaziz.RemoteMessages.RemoteMessages",
"linux": {
  "target": "AppImage"
}
}
```

```json
{
"test": "mocha scripts/run-test.js",
"publish": "build -mwl --publish always",
"build": "build -mwl"
}
```






### [Xaeonn/s3sync](https://github.com/Xaeonn/s3sync/tree/master/package.json)

> A simple folder syncing application for S3

```json
{
"appId": "eu.boles.sam.s3sync",
"dmg": {
  "contents": [
    {
      "x": 110,
      "y": 150
    },
    {
      "x": 240,
      "y": 150,
      "type": "link",
      "path": "/Applications"
    }
  ]
},
"mac": {
  "category": "public.app-category.developer-tools",
  "target": "dmg"
}
}
```

```json
{
"postinstall": "install-app-deps",
"test": "test",
"doc": "jsdoc -c ./jsdoc_conf.json",
"start": "electron ./app",
"pack": "build --dir",
"dist": "build"
}
```






### [Zamiell/isaac-racing-client](https://github.com/Zamiell/isaac-racing-client/tree/master/package.json)

> A racing mod for The Binding of Isaac: Afterbirth+.

```json
{
"appId": "org.electron.isaacRacingClient",
"squirrelWindows": {
  "iconUrl": "https://github.com/Zamiell/isaac-racing-client/blob/master/build/icon.ico?raw=true",
  "remoteReleases": true
}
}
```

```json
{
"start": "electron ./app",
"postinstall": "install-app-deps",
"pack": "build --dir",
"dist": "build"
}
```






### [slbucur/sqlrel](https://github.com/slbucur/sqlrel/tree/master/package.json)

> Electron app to view relations using SQL queries

```json
{
"app-bundle-id": "org.sqlectron.gui",
"app-category-type": "public.app-category.developer-tools",
"osx": {
  "contents": [
    {
      "x": 438,
      "y": 275,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 192,
      "y": 275,
      "type": "file"
    }
  ]
},
"linux": {
  "depends": [],
  "target": [
    "deb",
    "rpm",
    "sh",
    "freebsd",
    "pacman",
    "tar.xz",
    "tar.gz"
  ]
}
}
```

```json
{
"postinstall": "install-app-deps",
"dev:webpack": "webpack-dev-server --config ./webpack.dev.config.js",
"dev:electron": "cross-env DEBUG=sqlectron-gui:*,sqlectron-core:*,spawn-auto-restart node scripts/dev-auto-restart.js",
"lint": "eslint . --ext .js,.jsx",
"lint:fix": "npm run lint -- --fix",
"test": "npm run lint",
"clean": "rimraf dist",
"clean:osx": "rimraf dist/Sqlectron-darwin-*",
"clean:win": "rimraf dist/win* dist/Sqlectron-win*",
"clean:linux": "rimraf dist/Sqlectron-linux-* dist/*.deb",
"compile": "rimraf app/out && npm run compile:browser && npm run compile:renderer",
"compile:browser": "cross-env NODE_ENV=production babel ./src/browser -d app/out/browser",
"compile:renderer": "cross-env NODE_ENV=production webpack --progress --display-error-details --config ./webpack.prod.config",
"build:osx": "npm run clean:osx && build --osx",
"build:linux": "npm run clean:linux && build --linux",
"build:win": "npm run clean:win && build --windows",
"dist": "npm run compile && build",
"dist:all-arch": "npm run compile && build --ia32 --x64",
"dist:winlinux": "npm run compile && npm run build:linux && npm run build:win"
}
```






### [sswayney/docexp](https://github.com/sswayney/docexp/tree/master/package.json)

> Microsemi Document Explorer

```json
{
"app-bundle-id": "docexp",
"app-category-type": "public.app-category.business",
"osx": {
  "title": "DocumentExplorer",
  "icon-size": 120,
  "contents": [
    {
      "x": 478,
      "y": 170,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 170,
      "type": "file"
    }
  ]
},
"win": {
  "msi": false
}
}
```

```json
{
"test": "standard && mocha --recursive",
"unit": "standard && mocha test/unit --recursive",
"integration": "standard && mocha test/integration --recursive",
"coverage": "istanbul cover node_modules/.bin/_mocha -- --recursive",
"depcheck": "dependency-check app --entry main.js --unused --no-dev",
"lint": "standard",
"start": "electron ./app/main",
"clean:linux": "rimraf dist/linux",
"clean:osx": "rimraf dist/darwin-x64",
"clean:win": "rimraf dist/win",
"clean": "npm run clean:linux && npm run clean:win && npm run clean:osx",
"pack:osx": "build --platform=darwin",
"pack:win": "npm run pack:win64 && npm run pack:win32",
"pack:win32": "build --platform=win32 --arch=ia32",
"pack:win64": "build --platform=win32 --arch=x64",
"pack:linux": "npm run pack:lin64 && npm run pack:lin32",
"pack:lin32": "build --platform=linux --arch=ia32",
"pack:lin64": "build --platform=linux --arch=x64",
"pack": "build --platform=all --arch=x64,ia32",
"prebuild": "node build/target.js",
"postbuild": "node build/target.js --clean",
"prebuild:osx": "npm run prebuild",
"postbuild:osx": "npm run postbuild",
"build:osx": "build --platform=darwin -d",
"build:win": "npm run build:win64 && npm run build:win32",
"build:win32": "build --platform=win32 --arch=ia32 -d",
"build:win64": "build --platform=win32 --arch=x64 -d",
"build:linux": "npm run build:lin64 && npm run build:lin32 -d",
"build:lin32": "build --platform=linux --arch=ia32 -d",
"build:lin64": "build --platform=linux --arch=x64 -d",
"build": "build --platform=all --arch=x64,ia32 -d",
"postinstall": "install-app-deps"
}
```






### [stoufa88/lawd-reloaded](https://github.com/stoufa88/lawd-reloaded/tree/master/package.json)

> 

```json
{
"appId": "com.getlawd.desktop",
"category": "entertainment",
"win": {
  "target": "nsis",
  "remoteReleases": "https://github.com/stoufa88/lawd-reloaded",
  "publish": [
    "github"
  ]
}
}
```

```json
{
"postinstall": "install-app-deps",
"build": "cross-env NODE_ENV=production webpack --config webpack.config.production.js --progress --profile --colors",
"hot-server": "node server.js",
"pack": "build --dir",
"dist-windows": "build -w --x64",
"dist-linux": "build -l --ia32 x64",
"dist-mac": "build -m",
"start-hot": "cross-env HOT=1 NODE_ENV=development electron ./app/browser/index.js",
"dev": "concurrently --kill-others \"npm run hot-server\" \"npm run start-hot\""
}
```






### [AcklenAvenue/blueJediVersionManager](https://github.com/AcklenAvenue/blueJediVersionManager/tree/master/package.json)

> Common Framework App

```json
{
"appId": "cfapp",
"category": "public.app-category.developer-tools",
"copyright": "Copyright © 2016 Seed Company",
"productName": "CFApp",
"compression": "maximum",
"win": {
  "target": "nsis"
},
"dmg": {
  "title": "CFApp",
  "contents": [
    {
      "x": 448,
      "y": 344,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 192,
      "y": 344,
      "type": "file",
      "path": "cfapp.app"
    }
  ]
}
}
```

```json
{
"install": "tsd reinstall --save --overwrite",
"start": "npm install && npm run compile && electron ./app",
"postinstall": "bower install && jspm install",
"pack": "build --dir",
"dist": "build"
}
```






### [sztupy/tumblr-exif-check](https://github.com/sztupy/tumblr-exif-check/tree/master/package.json)

> Checks if your location is exposed on Tumblr

```json
{
"appId": "hu.sztupy.tumblrexifcheck",
"mac": {
  "category": "public.app-category.social-networking",
  "target": "zip"
},
"win": {
  "icon": "build/icon.ico",
  "target": "zip"
},
"linux": {
  "target": "zip"
}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "npm install && electron ./app",
"pack": "build --dir",
"dist": "build",
"release": "build"
}
```






### [taksan/octane-skype](https://github.com/taksan/octane-skype/tree/master/package.json)

> An unofficial version of skype with several extra features

```json
{
"appId": "org.github.taksan.octane-skype",
"app-category-type": "instant messenger",
"win": {
  "target": [
    "nsis"
  ],
  "icon": "resources/windows/icon.ico"
},
"nsis": {
  "oneClick": true,
  "installerHeaderIcon": "resources/windows/setup-icon.ico"
},
"mac": {
  "icon": "resources/osx/icon.icns"
},
"dmg": {
  "icon": "resources/osx/dmg-icon.icns"
},
"linux": {
  "depends": [
    "libappindicator1",
    "libnotify-bin",
    "libgif-dev",
    "libcairo2-dev",
    "libjpeg8-dev",
    "libpango1.0-dev",
    "libgif-dev",
    "libxss1",
    "libgconf-2-4",
    "libnss3",
    "libasound2"
  ]
},
"npmRebuild": false
}
```

```json
{
"postinstall": "install-app-deps && cd app && npm install",
"start": "electron app",
"release": "build --x64 --publish never"
}
```






### [taosx/metaldown](https://github.com/taosx/metaldown/tree/master/package.json)

> Warehouse management

```json
{
"asar": false,
"appId": "com.management.metaldown",
"category": "public.app-category.management",
"copyright": "Copyright © 2016-2017 Soukoulis E. Anastasios",
"productName": "Αποθήκη - Δάφνη Ο.Ε.",
"compression": "store",
"win": {
  "loadingGif": "build/installation.gif",
  "icon": "build/icon.ico"
}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "npm install && npm run compile && electron ./app",
"compile": "rimraf app/out && tsc",
"pack": "npm run compile && build --dir",
"dist": "npm run compile && build",
"release": "npm run compile && build"
}
```






### [tboeker/tbelectrondemo](https://github.com/tboeker/tbelectrondemo/tree/master/package.json)

> tb demo electron

```json
{
"appId": "tb.demo.electron",
"category": "public.app-category.productivity",
"win": {
  "certificateFile": "tbdemoelectron.pfx",
  "certificatePassword": "Password",
  "appIconPath": "./resources/icon.ico",
  "loadingGif": "./resources/install-spinner.gif",
  "setupIcon": "./resources/icon.ico",
  "iconUrl": "https://raw.githubusercontent.com/tboeker/tbelectrondemo/master/resources/icon.ico"
},
"outDirectory": "./dist",
"appDirectory": "./app",
"appCopyright": "2016 (C) TB",
"companyName": "TB CompanyName",
"releaseRepoOwner": "tboeker",
"releaseRepoWin64": "tbdemoelectron-win64",
"releaseRepoWin32": "tbdemoelectron-win32"
}
```

```json
{
"postinstall_old": "install-app-deps",
"clean": "rimraf dist",
"prebuild": "npm run clean",
"build": "echo running build..",
"test": "echo running tests.. && exit 0",
"compile": "npm run build && npm test",
"preversion": "npm run compile",
"postversion": "git push && git push --tags",
"release": "npm run release:patch",
"release:major": "npm version major -m \"Release Major Upgrade %s\"",
"prerelease:major_old": "cd app && npm version major --no-git-tag-version && git commit -a -m \"Release Major App-Upgrade\"",
"release:minor": "npm version minor -m \"Release Minor Upgrade %s\"",
"prerelease:minor_old": "cd app && npm version minor --no-git-tag-version && git commit -a -m \"Release Minor App-Upgrade\"",
"release:patch": "npm version patch -m \"Release Patch Upgrade %s\"",
"prerelease:patch_old": "cd app && npm version patch --no-git-tag-version && git commit -a -m \"Release Patch App-Upgrade\"",
"start": "electron ./app --enable-logging",
"dev": "SET NODE_ENV=development && npm run start",
"electron:pack:win": "npm run compile && node scripts/electron-pack-win.js",
"electron:dist:win64": "node scripts/electron-dist-win64.js",
"electron:upload:win64": "node scripts/electron-upload-win64.js",
"electron:dist:win32": "node scripts/electron-dist-win32.js",
"electron:upload:win32": "node scripts/electron-upload-win32.js"
}
```






### [thomasjbradley/markbot](https://github.com/thomasjbradley/markbot/tree/master/package.json)

> An automated marking application for code projects in the Algonquin College Graphic Design program.

```json
{
"appId": "ca.thomasjbradley.markbot",
"copyright": "© Thomas J Bradley",
"productName": "Markbot",
"compression": "maximum",
"extend-info": "markbot-extra.plist",
"asar": {
  "unpackDir": "vendor"
},
"mac": {
  "target": "dmg",
  "category": "public.app-category.developer-tools"
},
"win": {
  "iconUrl": "https://raw.githubusercontent.com/thomasjbradley/markbot/master/build/icon.ico",
  "target": "nsis"
},
"dmg": {
  "title": "Install Markbot",
  "iconSize": 100,
  "window": {
    "x": 200,
    "y": 200
  },
  "contents": [
    {
      "x": 494,
      "y": 270,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 210,
      "y": 270,
      "type": "file"
    }
  ]
}
}
```

```json
{
"start": "electron markbot.js",
"pack-mac": "build -m --dir",
"pack-win": "build -w --dir",
"pack": "build -mw --dir",
"pack-bg": "tiffutil -cathidpicheck ./build/background.png ./build/background@2x.png -out ./build/background.tiff",
"build-mac": "npm run pack-bg && build -m",
"build-win": "build -w",
"build": "build -mw",
"hash-passcode": "node ./scripts/hash-passcode.js"
}
```






### [aicodes/dashboard](https://github.com/aicodes/dashboard/tree/master/package.json)

> AI-based code completion

```json
{
"appId": "codes.ai.language.server",
"category": "public.app-category.developer-tools",
"win": {
  "target": [
    "nsis"
  ],
  "icon": "resources/windows/icon.ico"
},
"nsis": {
  "oneClick": true,
  "installerHeaderIcon": "resources/windows/setup-icon.ico"
},
"mac": {
  "icon": "resources/osx/icon.icns"
},
"dmg": {
  "icon": "resources/osx/dmg-icon.icns",
  "background": "resources/osx/dmg-background.png"
}
}
```

```json
{
"postinstall": "install-app-deps",
"build": "gulp build",
"prerelease": "gulp build --env=production",
"release": "build --x64 --publish never",
"start": "gulp start",
"pretest": "gulp build-unit --env=test",
"test": "electron-mocha app/specs.js.autogenerated --renderer --require source-map-support/register",
"pree2e": "gulp build-e2e --env=test",
"e2e": "mocha app/e2e.js.autogenerated --require source-map-support/register",
"lint": "eslint --fix src"
}
```






### [tmpethick/campusnet-electron](https://github.com/tmpethick/campusnet-electron/tree/master/package.json)

> Sync CampusNet files to your computer

```json
{
"app-bundle-id": "dk.pethick.campusnetsync.mac",
"app-category-type": "public.app-category.utilities",
"extraResources": [
  "app/app"
],
"osx": {
  "contents": [
    {
      "x": 410,
      "y": 100,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 100,
      "type": "file"
    }
  ]
}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "NODE_ENV=development electron ./app",
"watch": "NODE_ENV=development webpack-dev-server --hot --inline",
"test": "mocha --watch",
"test-debug": "node --harmony $(which bugger) ./node_modules/mocha/bin/_mocha --watch",
"compile": "NODE_ENV=production webpack -p",
"pack": "source .config && npm run compile && build --arch all --platform darwin win32",
"dist": "source .config && npm run compile && build --arch all --platform darwin win32",
"release:osx": "source .config && npm run compile && build --dist --platform darwin --publish always",
"release:win": "source .config && npm run compile && build --dist --platform win32 --arch ia32 --publish always",
"release": "npm run release:osx && npm run release:win",
"publish-gh-pages": "git subtree push --prefix gh-pages/build origin gh-pages"
}
```






### [uraway/todo-electron](https://github.com/uraway/todo-electron/tree/master/package.json)

> Electron application

```json
{
"appId": "MasatoUrai.TodoElectron",
"app-category-type": "public.app-category.productivity",
"compression": "store"
}
```

```json
{
"test": "cross-env NODE_ENV=test mocha --compilers js:babel-register --recursive --require ./test/setup.js",
"test-watch": "npm test -- --watch",
"lint": "eslint src test *.js",
"hot-server": "node -r babel-register server.js",
"build-main": "cross-env NODE_ENV=production node -r babel-register ./node_modules/webpack/bin/webpack --config webpack.config.electron.js --progress --profile --colors",
"build-renderer": "cross-env NODE_ENV=production node -r babel-register ./node_modules/webpack/bin/webpack --config webpack.config.production.js --progress --profile --colors",
"build-all": "npm run build-main && npm run build-renderer && npm run prepare",
"prepare": "node -r babel-register ./scripts/prepare.js",
"package": "npm run build-all && build",
"release": "npm run build-all && build --publish=always --mac --win --x64",
"start": "cross-env NODE_ENV=production electron ./app",
"start-hot": "cross-env HOT=1 NODE_ENV=development electron -r babel-register -r babel-polyfill ./src/main.development.js",
"postinstall": "install-app-deps",
"dev": "concurrently --kill-others \"npm run hot-server\" \"npm run start-hot\""
}
```






### [alan850627/auto-update-test](https://github.com/alan850627/auto-update-test/tree/master/package.json)

> A minimal Electron application

```json
{
"appId": "your.id",
"category": "your.app.category.type",
"mac": {},
"dmg": {},
"win": {},
"linux": {}
}
```

```json
{
"start": "electron .",
"pack": "build --dir",
"dist": "build"
}
```






### [va2ron1/Teleprompter-Electron](https://github.com/va2ron1/Teleprompter-Electron/tree/master/package.json)

> The most complete and professional free software teleprompter app on the web.

```json
{
"app-bundle-id": "hr.creaticon.eatodo",
"app-category-type": "public.app-category.productivity",
"iconUrl": "http://eatodo.s3.amazonaws.com/icon.ico"
}
```

```json
{
"postinstall": "install-app-deps",
"start": "electron ./app --enable-logging",
"dev": "NODE_ENV='development' npm run start",
"dist": "npm run dist:osx && npm run dist:win32 && npm run dist:win64 && npm run dist:linux",
"dist:osx": "build --platform darwin",
"dist:win32": "build --platform win32 --arch ia32",
"dist:win64": "build --platform win32 --arch x64",
"dist:linux": "build --platform linux"
}
```






### [alchapone/carhunt](https://github.com/alchapone/carhunt/tree/master/package.json)

> Side by side car listing offers from http://otomoto.pl

```json
{
"app-bundle-id": "your.id",
"app-category-type": "your.app.category.type",
"win": {
  "iconUrl": "https://github.com/railsware/bozon/blob/master/lib/templates/images/electron.ico?raw=true"
},
"osx": {
  "icon": "resources/icon.icns",
  "target": "dmg"
}
}
```

```json
{
"postinstall": "install-app-deps"
}
```






### [vincent/trippy](https://github.com/vincent/trippy/tree/master/package.json)

> A place to list, search and run your games from different vendors.

```json
{
"appId": "vlark.trippy",
"category": "public.app-category.games",
"productName": "Trippy",
"compression": "normal",
"asar": true,
"mac": {
  "contents": [
    {
      "x": 448,
      "y": 344,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 192,
      "y": 344,
      "type": "file",
      "path": "Trippy.app"
    }
  ]
}
}
```

```json
{
"test": "cross-env NODE_ENV=test mocha --compilers js:babel-register --recursive --require ./test/setup.js test/**/*.spec.js",
"test-watch": "npm test -- --watch",
"test-e2e": "cross-env NODE_ENV=test mocha --compilers js:babel-register --require ./test/setup.js --require co-mocha ./test/e2e.js",
"lint": "eslint app test *.js",
"hot-server": "node -r babel-register server.js",
"build-main": "cross-env NODE_ENV=production node -r babel-register ./node_modules/webpack/bin/webpack --config webpack.config.electron.js --progress --profile --colors && cp app/package.json dist/",
"build-renderer": "cross-env NODE_ENV=production node -r babel-register ./node_modules/webpack/bin/webpack --config webpack.config.production.js --progress --profile --colors && cp -R app/renderer/assets dist/renderer",
"build": "npm run build-main && npm run build-renderer",
"start": "cross-env NODE_ENV=production electron ./",
"start-hot": "cross-env HOT=1 NODE_ENV=development electron -r babel-register -r babel-polyfill ./app/main/index",
"dev": "concurrently --kill-others \"npm run hot-server\" \"npm run start-hot\"",
"webfont:roboto": "webfont-dl \"https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en\" -o app/renderer/assets/css/fonts/roboto.global.css --woff1=data --svg=omit --ttf=omit --eot=omit",
"webfont:material-icons": "webfont-dl \"https://fonts.googleapis.com/icon?family=Material+Icons\" -o app/renderer/assets/css/fonts/material-icons.global.css --woff1=data --svg=omit --ttf=omit --eot=omit",
"postinstall": "cd app/ && npm install",
"pack": "npm run build && ./node_modules/.bin/build",
"dist": "npm run build && ./node_modules/.bin/build",
"release": "npm run build && ./node_modules/.bin/build"
}
```






### [aletocar/memoriaylegado](https://github.com/aletocar/memoriaylegado/tree/master/package.json)

> La aplicación es una herramienta pedagógica para apoyar a los docentes al momento de trabajar distintos ejes temáticos relacionados con la historia, los derechos humanos y la convivencia. Tiene como objetivo contribuir a una educación sobre la diversidad y nutrirla de valores como la coexistencia y la tolerancia. Mediante información histórica y fidedigna de primer nivel, combinada con fotos, audiovisuales y testimonios, provee material para complementar las clases y configurar espacios de reflexión interdisciplinarios.

```json
{
"app-bundle-id": "org.proyectoshoa.app",
"app-category-type": "public.app-category.graphics-design",
"asar": false,
"linux": {
  "synopsis": "La aplicación es una herramienta pedagógica para apoyar a los docentes al momento de trabajar distintos ejes temáticos relacionados con la historia, los derechos humanos y la convivencia. Tiene como objetivo contribuir a una educación sobre la diversidad y nutrirla de valores como la coexistencia y la tolerancia. Mediante información histórica y fidedigna de primer nivel, combinada con fotos, audiovisuales y testimonios, provee material para complementar las clases y configurar espacios de reflexión interdisciplinarios.",
  "vendor": "Proyecto Shoa"
}
}
```

```json
{
"start": "npm install && electron ./app",
"pack": "build",
"dist": "build",
"dist:linux32": "build --platform linux --arch ia32"
}
```






### [vysl19/DesktopApps](https://github.com/vysl19/DesktopApps/tree/master/package.json)

> Launcher.Electron

```json
{
"appId": "org.test.mytest",
"app-category-type": "public.app-category.graphics-design",
"win": {
  "target": [
    "nsis"
  ],
  "icon": "resources/windows/icon.ico"
},
"nsis": {
  "oneClick": true,
  "installerHeaderIcon": "resources/windows/setup-icon.ico"
},
"authors": "Author"
}
```

```json
{
"start": "electron .",
"build": "build"
}
```






### [alexcroox/video-tools](https://github.com/alexcroox/video-tools/tree/master/package.json)

> Video Tools

```json
{
"appId": "com.titan.videotools",
"win": {
  "iconUrl": "https://d3vv6lp55qjaqc.cloudfront.net/items/0U353n2H2B3V1R3i0o0a/icon.ico",
  "remoteReleases": "https://github.com/alexcroox/video-tools",
  "publish": [
    "github"
  ]
}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "npm install && gulp assets && electron ./app",
"pack": "build --dir",
"dist": "build",
"release": "build --publish always"
}
```






### [wellandlighthouse/wl-hashfile-generator](https://github.com/wellandlighthouse/wl-hashfile-generator/tree/master/package.json)

> 

```json
{
"appId": "com.wellandlighthouse.wl-hashfile-generator",
"dmg": {},
"win": {}
}
```

```json
{
"start": "ng serve",
"lint": "tslint \"src/**/*.ts\"",
"test": "ng test",
"pree2e": "webdriver-manager update",
"e2e": "protractor",
"build-electron": "tsc --outDir dist src/electron/main.ts && cp src/electron/package.json dist",
"build": "ng build && npm run build-electron",
"electron": "electron dist/main.js",
"electron-build": "npm run build && build"
}
```






### [wellgrisa/store-simple](https://github.com/wellgrisa/store-simple/tree/master/package.json)

> This is the first version of a simple storage app.

```json
{
"appId": "store.org"
}
```

```json
{
"pack": "build --dir",
"dist": "npm run compile && build",
"start": "babel-node cross.js run",
"win": "set NODE_ENV=development&&npm run electron",
"production": "set NODE_ENV=production&&npm run electron",
"lin": "NODE_ENV=development npm run electron",
"test": "echo \"Error: no test specified\" && exit 1",
"build-webpack": "webpack src/index.js --config webpack.config.js",
"watch": "./node_modules/.bin/webpack-dev-server --hot --inline --port 8080",
"dev": "webpack-dev-server --progress --colors --hot --inline --port 8080",
"clean:win": "rm -rf ./dist/win",
"dist-old": "./node_modules/.bin/build \"dist/win/src-win32-ia32\" --platform=win",
"postinstall": "install-app-deps",
"dev:webpack": "./node_modules/.bin/webpack-dev-server --hot --inline --port 8080 --config webpack.dev.config.js",
"dev:electron": "cross-env NODE_ENV=DEVELOPMENT&&electron app/out/browser/main.js --dev",
"compile": "rimraf app/out && npm run compile:browser && npm run compile:renderer",
"compile:browser": "cross-env NODE_ENV=production babel ./src/browser -d app/out/browser",
"compile:renderer": "cross-env NODE_ENV=production webpack --progress --display-error-details --config ./webpack.prod.config"
}
```






### [wy182000/electron_hello_world](https://github.com/wy182000/electron_hello_world/tree/master/package.json)

> A minimal Electron application

```json
{
"asar": true,
"appId": "hello_world.isoyo.cn",
"app-category-type": "public.app-category.productivity",
"win": {
  "msi": true,
  "iconUrl": "https://github.com/${u}/${p}/blob/master/build/icon.ico?raw=true"
}
}
```

```json
{
"start": "electron .",
"pack": "electron-packager ./ hello_world --platform=win32 --arch=x64 --asar --overwrite --out ./pack --app-version=1.0.0",
"build": "build --platform win32 --arch x64"
}
```






### [amatho/sftployapp](https://github.com/amatho/sftployapp/tree/master/package.json)

> Deploy via SFTP

```json
{
"appId": "com.amatho.SFTPloy",
"app-category-type": "public.app-category.developer-tools",
"files": [
  "**/*"
],
"asar": false,
"win": {
  "iconUrl": "https://raw.githubusercontent.com/amatho/sftployapp/master/build/icon.ico"
}
}
```

```json
{
"start": "electron app",
"test": "eslint",
"postinstall": "install-app-deps",
"pack": "build --dir",
"dist": "build",
"bump": "echo \"Enter type for npm version and press [ENTER]: \" && read bump_version && cd app && PACKAGE_VERSION=$(npm --no-git-tag-version version $bump_version) && git add package.json && git commit -m \"Release $PACKAGE_VERSION\" && git tag -a $PACKAGE_VERSION -m \"$PACKAGE_VERSION\""
}
```






### [zerojuan/electron-circleci-boilerplate](https://github.com/zerojuan/electron-circleci-boilerplate/tree/master/package.json)

> Boilerplate code for continuous deploying an Electron based app

```json
{
"app-bundle-id": "xyz.electronapp.electioneersdesigner",
"app-category-type": "public.app-category.games",
"osx": {
  "contents": [
    {
      "x": 410,
      "y": 150,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 150,
      "type": "file"
    }
  ]
}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "npm install && electron ./app",
"clean": "rimraf dist/",
"pack": "build",
"dist": "npm run clean && build -d",
"dist:x64": "npm run clean && build -d",
"test": "node test",
"test-ci": "node test | tap-xunit"
}
```






### [andypinet/electron-ui-startkit](https://github.com/andypinet/electron-ui-startkit/tree/master/package.json)

> electon ui startkit

```json
{
"app-bundle-id": "hr.creaticon.electron-ui-startkit",
"app-category-type": "public.app-category.productivity",
"iconUrl": "file://build/icon.ico",
"osx": {
  "title": "electron-ui-startkit",
  "background": "build/background.png",
  "icon": "build/icon.icns",
  "icon-size": 128,
  "contents": [
    {
      "x": 355,
      "y": 125,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 155,
      "y": 125,
      "type": "file"
    }
  ]
}
}
```

```json
{
"postinstall": "install-app-deps",
"buildapp": "bower install && cd app && npm install --production && cd ..",
"workapp": "cd app && npm install && cd ..",
"start": "./node_modules/.bin/electron ./app --enable-logging --remote-debugging-port=9222",
"dev": "NODE_ENV='development' npm run start",
"pack": "npm run pack:osx && npm run pack:win",
"pack:osx": "build --platform darwin",
"pack:win": "build --platform win32 --arch all",
"dist": "npm run dist:osx",
"dist:osx": "npm run pack:osx -- -d",
"dist:win": "npm run pack:win -- -d",
"prerelease:osx": "rm -rf release/osx && mkdirp release/osx",
"release:osx": "cp -rv dist/electron-ui-startkit-darwin-x64/*.{dmg,zip} release/osx && PACKAGE_VERSION=$(cat app/package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]') && echo $PACKAGE_VERSION >> ./release/osx/VERSION",
"prerelease:win32": "rm -rf release/win32 && mkdirp release/win32",
"release:win32": "cp -v dist/win/{RELEASES,*.nupkg,*.exe} release/win32",
"prerelease:win64": "rm -rf release/win64 && mkdirp release/win64",
"release:win64": "cp -v dist/win-x64/{RELEASES,*.nupkg,*.exe} release/win64",
"release": "npm run release:osx",
"deploy": "PACKAGE_VERSION=$(cat app/package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]') && aws s3 sync release/ s3://electron-ui-startkit/updates/$PACKAGE_VERSION/ --acl public-read && aws s3 sync s3://electron-ui-startkit/updates/$PACKAGE_VERSION/ s3://electron-ui-startkit/updates/latest/ --delete --acl public-read",
"all": "npm run dist && npm run release",
"mac": "npm run dist:osx",
"win": "npm run dist:win"
}
```






### [zooeydavechapelle/currency-exporter](https://github.com/zooeydavechapelle/currency-exporter/tree/master/package.json)

> Exports currency data from AnkhBotR2, Deepbot and Revlo

```json
{
"appId": "com.electron.currency-exporter"
}
```

```json
{
"pack": "build --dir",
"dist": "build"
}
```






### [Cobbleopolis/RainMachine](https://github.com/Cobbleopolis/RainMachine/tree/master/package.json)

> A simple rain machine web app

```json
{
"appId": "com.cobble.rainMachine"
}
```

```json
{
"start": "cross-env NODE_ENV=development concurrently -k \"npm run webpackServer\" \"npm run electron\"",
"webpackServer": "babel-node webpackServer.js",
"webpack": "webpack --config webpack.config.production",
"electron": "electron .",
"test": "echo \"Error: no test specified\" && exit 1",
"pack": "build --dir",
"dist": "cross-env NODE_ENV=production npm run webpack && build",
"clean": "rimraf app/*.eot app/*.svg app/*.ttf app/*.woff app/*.woff2 app/js dist"
}
```






