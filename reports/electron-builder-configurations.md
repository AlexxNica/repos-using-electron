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





### [evolus/pencil](https://github.com/evolus/pencil/tree/master/package.json)

> The Pencil Project's unique mission is to build a free and opensource tool for making diagrams and GUI prototyping that everyone can use. 

```json
{
"app-bundle-id": "vn.evolus.pencil",
"app-category-type": "public.app-category.graphics-design",
"iconUrl": "https://raw.githubusercontent.com/evolus/pencil/master/build/icon.ico",
"productName": "Pencil",
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
},
"linux": {
  "description": "An open-source GUI prototyping tool that is available for ALL platforms.",
  "synopsis": "An open-source GUI prototyping tool that is available for ALL platforms.",
  "maintainer": "Nguyen Tien Dzung <ngtdungnt@gmail.com>",
  "vendor": "Evolus",
  "target": [
    "deb",
    "rpm",
    "tar.gz"
  ],
  "depends": []
},
"win": {
  "authors": "Evolus",
  "owners": "Evolus",
  "description": "An open-source GUI prototyping tool that is available for ALL platforms.",
  "copyright": "Copyright © 2008-2016 Evolus. All rights reserved."
},
"download": {
  "cache": ".electron-cache"
}
}
```

```json
{
"postinstall": "install-app-deps",
"install-app-deps": "node ./node_modules/electron-builder/out/install-app-deps.js",
"start": "./node_modules/.bin/electron ./app",
"start:dev": "./node_modules/.bin/electron ./app --enable-dev --disable-gpu",
"clean": "rimraf dist",
"pack": "build",
"dist": "build",
"release": "build",
"dist:linux": "./node_modules/.bin/build --linux --x64",
"dist:win32": "./node_modules/.bin/build --windows --x64",
"dist:darwin": "./node_modules/.bin/build --osx"
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





### [entrylabs/entry-hw](https://github.com/entrylabs/entry-hw/tree/master/package.json)

> 

```json
{
"win": {
  "loadingGif": "build/install-spinner.gif",
  "title": "Entry-HW",
  "icon": "./build/icon.ico",
  "authors": "EntryLabs"
},
"app-bundle-id": "entry-hw",
"app-category-type": "org.playentry.entry-hw",
"iconUrl": "https://raw.githubusercontent.com/entrylabs/entry-hw/feature/electron/build/icon.ico",
"icon": "app/icon"
}
```

```json
{
"clean": "rimraf dist",
"pack": "build",
"dist": "build --arch ia32",
"start": "set NODE_ENV=development&&electron -d app"
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





### [listen1/listen1_desktop](https://github.com/listen1/listen1_desktop/tree/master/package.json)

> One for all free music in China

```json
{
"app-bundle-id": "com.listen1.listen1",
"app-category-type": "public.app-category.productivity",
"iconUrl": "https://github.com/listen1/listen1_chrome_extension/raw/master/images/logo.png",
"osx": {
  "title": "Listen 1",
  "icon": "build/disk.icns",
  "background": "build/background.png",
  "icon-size": 80,
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
      "path": "computed path to artifact, do not specify it - will be overwritten"
    }
  ]
},
"win": {}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "electron ./app --enable-logging",
"dev": "NODE_ENV='development' npm run start",
"dist": "build --platform win32 --platform darwin --platform linux --arch all",
"dist:osx": "build --platform darwin",
"dist:win32": "build --platform win32 --arch ia32",
"dist:win64": "build --platform win32 --arch x64",
"dist:linux32": "build --platform linux --arch ia32",
"dist:linux64": "build --platform linux --arch x64"
}
```





### [joeferraro/MavensMate-Desktop](https://github.com/joeferraro/MavensMate-Desktop/tree/master/package.json)

> Packaged desktop app for MavensMate server

```json
{
"appId": "com.mavens.mavensmate",
"app-category-type": "public.app-category.developer-tools",
"asar": false,
"productName": "MavensMate",
"linux": {},
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
},
"windows": {
  "loadingGif": "./build/squirrel/loading.gif"
}
}
```

```json
{
"postinstall": "install-app-deps",
"dist": "build",
"dist:win": "build --win --ia32",
"release": "build",
"start": "NODE_ENV=dev electron src/main",
"dev": "NODE_ENV=dev node_modules/.bin/webpack-dev-server",
"stage:win": "node bin\\build.js",
"stage": "node bin/build.js",
"build:win": "set NODE_ENV=production && webpack -p --config webpack.config.prod.js",
"build": "NODE_ENV=production webpack -p --config webpack.config.prod.js"
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





### [evothings/evothings-studio](https://github.com/evothings/evothings-studio/tree/master/package.json)

> Evothings Studio

```json
{
"linux": {
  "synopsis": "IoT hybrid mobile app development tool",
  "vendor": "Evothings <info@evothings.com>"
},
"app-bundle-id": "com.evothings.studio",
"app-category-type": "public.app-category.developer-tools",
"iconUrl": "http://evothings.com/evothings-logo.ico"
}
```

```json
{
"libs": "ruby init.rb",
"devdeps": "npm install",
"deps": "npm install app",
"pack": "build",
"dist": "build --linux --win --osx --x64",
"dist:osx": "build --osx --x64",
"dist:linux": "build --linux --x64",
"dist:win": "build --win --x64",
"start": "cd app && electron --enable-logging main.js"
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





### [buttercup-pw/buttercup](https://github.com/buttercup-pw/buttercup/tree/master/package.json)

> Free and Open Source password vault

```json
{
"appId": "pw.buttercup.desktop",
"copyright": "Copyright © 2016 Buttercup and Contributors",
"mac": {
  "category": "public.app-category.productivity"
},
"dmg": {
  "contents": [
    {
      "x": 438,
      "y": 364,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 192,
      "y": 364,
      "type": "file"
    }
  ]
},
"linux": {
  "target": [
    "rpm",
    "AppImage",
    "deb"
  ],
  "packageCategory": "utils",
  "synopsis": "Free and Open Source password vault"
},
"fileAssociations": {
  "ext": "bcup",
  "name": "Buttercup Archive",
  "icon": "icon.icns"
},
"files": [
  "dist/**",
  "package.json"
]
}
```

```json
{
"test": "xo",
"build:main": "cross-env NODE_ENV=production node -r babel-register ./node_modules/webpack/bin/webpack --config ./config/webpack.config.electron --progress --profile --colors",
"build:renderer": "cross-env NODE_ENV=production node -r babel-register ./node_modules/webpack/bin/webpack --config ./config/webpack.config.production --progress --profile --colors",
"build": "npm run build:main && npm run build:renderer",
"dev": "concurrently --kill-others \"npm run hot-server\" \"npm run start-hot\"",
"hot-server": "node -r babel-register ./tools/server.js",
"start-hot": "cross-env HOT=1 NODE_ENV=development electron -r babel-register -r babel-polyfill ./src/main/app",
"release:linux": "build --linux --ia32 --x64",
"release:mac": "build --mac",
"release:win": "build --win --ia32 --x64",
"release": "build --mac --linux --win --ia32 --x64",
"release:current": "build"
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





### [Meadowcottage/devRant](https://github.com/Meadowcottage/devRant/tree/master/package.json)

> :rage: devRant (UNOFFICIAL) Web App

```json
{
"appId": "xyz.meadowcottage.devRant",
"category": "public.app-category.social",
"productName": "devRant",
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
  "remoteReleases": "https://github.com/meadowcottage/devrant",
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





### [imanel/deezplayer](https://github.com/imanel/deezplayer/tree/master/package.json)

> Best way to experience Deezer

```json
{
"appId": "org.imanel.deezplayer",
"extraResources": [
  {
    "from": "flash/${os}",
    "to": "flash"
  }
],
"linux": {
  "target": "deb"
},
"mac": {
  "category": "public.app-category.music",
  "target": "dmg"
},
"win": {
  "target": "nsis"
}
}
```

```json
{
"start": "electron ./app --enable-logging",
"build": "npm run build-linux && npm run build-mac && npm run build-windows",
"build-linux": "build --linux --x64",
"build-mac": "build --mac --x64",
"build-windows": "build --win --ia32",
"postinstall": "install-app-deps"
}
```





### [monterey-framework/monterey](https://github.com/monterey-framework/monterey/tree/master/package.json)

> Monterey is an extensible application that provides a graphical user interface for a collection of tools to simplify the creation, configuration and maintenance of Aurelia applications.

```json
{
"appId": "monterey",
"app-category-type": "monterey",
"win": {
  "iconUrl": "https://i.imgur.com/bC47YNC.png"
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
"postinstall": "install-app-deps",
"pack": "build --dir",
"dist": "gulp clean-logs && build",
"setup": "node utils -setup && node utils -rebuild-native",
"rebuild-native": "node utils -rebuild-native",
"test-build": "gulp rename-index && build && gulp rename-index-back"
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





### [Faceboard/FaceBoard](https://github.com/Faceboard/FaceBoard/tree/master/package.json)

> All in one collabration application

```json
{
"appId": "com.hrr17-cauliflower.faceboard",
"app-category-type": "public.app-category.video",
"win": {
  "iconUrl": "https://s3.amazonaws.com/hrr17faceboard/logo.ico"
},
"mac": {
  "icon": "client/static/imgs/logo.icns"
},
"asar": "false"
}
```

```json
{
"test": "mocha --require test/withDom.js --compilers js:babel-core/register --recursive test/*.js --watch",
"webwatch": "webpack --watch",
"start": "webpack && electron main.js",
"build": "webpack && build -mw"
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





### [Heat-Ledger-Ltd/heat-ui](https://github.com/Heat-Ledger-Ltd/heat-ui/tree/master/package.json)

> Heat Ledger Generic Client Framework

```json
{
"appId": "com.heatledger.heat-ui",
"copyright": "Copyright © 2016 Heat Ledger Ltd",
"productName": "Heat",
"asar": false,
"compression": "maximum",
"mac": {
  "category": "public.app-category.finance"
},
"win": {
  "iconUrl": "https://raw.githubusercontent.com/Heat-Ledger-Ltd/heat-ui/master/build/icon.ico",
  "target": [
    "squirrel"
  ]
},
"linux": {
  "category": "Office",
  "description": "Heat Ledger Wallet",
  "synopsis": "Heat Ledger Wallet",
  "desktop": ""
}
}
```

```json
{
"test": "echo \"Error: no test specified\" && exit 1",
"start": "electron ."
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





### [talhasch/ling](https://github.com/talhasch/ling/tree/master/package.json)

> REST client

```json
{
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





### [benmag/Timetable](https://github.com/benmag/Timetable/tree/master/package.json)

> Plan your perfect timetable with this free, open-source utility for QUT students.

```json
{
"app-bundle-id": "qut.timetable.app",
"app-category-type": "public.app-category.productivity",
"iconUrl": "https://raw.githubusercontent.com/benmag/Timetable/master/app/img/icon.ico"
}
```

```json
{
"start": "electron ./app",
"postinstall": "install-app-deps",
"dev": "NODE_ENV='development' npm run start",
"dist": "npm run dist:osx && npm run dist:win32 && npm run dist:win64",
"dist:osx": "build --platform darwin",
"dist:win32": "build --platform win32 --arch ia32",
"dist:win64": "build --platform win32 --arch x64"
}
```





### [JonnyBGod/angular2-webpack-advance-starter](https://github.com/JonnyBGod/angular2-webpack-advance-starter/tree/master/package.json)

> An Angular 2 Webpack Starter kit featuring Angular 2 (Router, Http, Forms, Services, Tests, E2E, Coverage), Karma, Protractor, Jasmine, Istanbul, TypeScript, and Webpack by AngularClass

```json
{
"appId": "org.develar.onshape",
"build.mac.category": "public.app-category.graphics-design",
"asar": false
}
```

```json
{
"rimraf": "rimraf",
"tslint": "tslint",
"typedoc": "typedoc",
"webpack": "webpack",
"webpack-dev-server": "webpack-dev-server",
"webdriver-manager": "webdriver-manager",
"protractor": "protractor",
"docker": "docker",
"clean": "npm cache clean && npm run rimraf -- node_modules doc coverage dist desktop _temp",
"clean:dist": "npm run rimraf -- dist",
"clean:dist:desktop": "npm run rimraf -- dist desktop",
"clean:tests": "npm run rimraf -- _temp/tests",
"preclean:install": "npm run clean",
"clean:install": "npm set progress=false && npm i",
"preclean:start": "npm run clean",
"clean:start": "npm start",
"watch": "npm run watch:dev",
"watch:dev": "npm run build:dev -- --watch",
"watch:dev:hmr": "npm run watch:dev -- --hot",
"watch:test": "npm run test -- --auto-watch --no-single-run",
"watch:prod": "npm run build:prod -- --watch",
"build": "npm run build:dev",
"prebuild:dev": "npm run clean:dist",
"build:dev": "webpack --config config/advance/webpack.web.dev.js --progress --profile",
"prebuild:prod": "npm run clean:dist",
"build:docker": "npm run build:prod && docker build -t angular2-webpack-advance-start:latest .",
"build:prod": "webpack --config config/advance/webpack.web.prod.js  --progress --profile --bail",
"build:prod:desktop:renderer": "webpack --config config/advance/webpack.desktop.build.renderer.js  --progress --profile --bail",
"build:prod:desktop:main": "webpack --config config/advance/webpack.desktop.build.main.js  --progress --profile --bail",
"build:prod:desktop": "npm run build:prod:desktop:renderer && npm run build:prod:desktop:main",
"build:desktop": "npm run clean:dist:desktop && rimraf desktop/** && npm run build:prod:desktop && build -mwl --x64",
"build:desktop:mac": "npm run clean:dist:desktop && rimraf desktop/mac/* && npm run build:prod:desktop && build --macos --x64",
"build:desktop:windows": "npm run clean:dist:desktop && rimraf desktop/win/* && npm run build:prod:desktop && build --win --x64",
"build:desktop:linux": "npm run clean:dist:desktop && rimraf desktop/linux/* && npm run build:prod:desktop && build --linux --x64",
"github-deploy:dev": "webpack --config config/webpack.github-deploy.js --progress --profile --github-dev",
"github-deploy:prod": "webpack --config config/webpack.github-deploy.js --progress --profile --github-prod",
"github-deploy": "npm run github-deploy:dev",
"git:merge": "git fetch upstream && git merge upstream/master --allow-unrelated-histories",
"git:merge:preview": "git fetch upstream && git merge --no-commit upstream/master --allow-unrelated-histories",
"git:prepare": "git add . && git add -f tools/install.js && git commit -m'setup'",
"git:setup": "git init && git remote add upstream https://github.com/JonnyBGod/angular2-webpack-advance-starter.git",
"server": "npm run server:dev",
"server:dev": "webpack-dev-server --config config/advance/webpack.web.dev.js --progress --profile --watch --content-base src/",
"server:dev:hmr": "npm run server:dev -- --inline --hot",
"server:prod": "http-server dist --cors",
"server:dev:desktop": "webpack --config config/advance/webpack.desktop.dev.js --progress --profile",
"server:e2e": "webpack --config config/advance/webpack.web.e2e.js --progress --profile",
"webdriver:update": "npm run webdriver-manager update",
"webdriver:start": "npm run webdriver-manager start",
"lint": "npm run tslint \"src/**/*.ts\"",
"pree2e": "npm run clean:tests && npm run server:e2e && npm run webdriver:update -- --standalone",
"e2e": "npm run protractor",
"e2e:live": "npm run e2e -- --elementExplorer",
"poste2e": "npm run clean:tests",
"test": "karma start",
"ci": "npm run lint && npm test && npm run e2e",
"docs": "npm run typedoc -- --options typedoc.json --exclude '**/*.+(spec|e2e).ts' ./src/",
"start": "npm run server:dev",
"start:hmr": "npm run server:dev:hmr",
"start:desktop": "npm run server:dev:desktop && NODE_ENV=development electron ./dist/main.desktop.js",
"start:desktop:windows": "npm run server:dev:desktop && SET NODE_ENV=development && electron ./dist/main.desktop.js",
"preversion": "npm test",
"version": "npm run build",
"postversion": "git push && git push --tags"
}
```





### [mzdr/timestamp](https://github.com/mzdr/timestamp/tree/master/package.json)

> ⏰ A better macOS menu bar clock.

```json
{
"appId": "com.mzdr.timestamp",
"category": "public.app-category.utilities",
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
"start": "DEBUG=1 electron ./app --enable-logging",
"pack": "build --dir",
"dist": "build",
"postinstall": "install-app-deps"
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





### [Meadowcottage/Ionic-Creator](https://github.com/Meadowcottage/Ionic-Creator/tree/master/package.json)

> :iphone: Ionic Creator (UNOFFICIAL) Web app

```json
{
"appId": "xyz.meadowcottage.ionic_creator",
"category": "public.app-category.tools",
"productName": "Ionic Creator",
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
  "target": [
    "squirrel",
    "zip"
  ],
  "remoteReleases": "https://github.com/meadowcottage/Ionic-Creator",
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





### [OpenTrons/otone_frontend](https://github.com/OpenTrons/otone_frontend/tree/master/package.json)

> 

```json
{
"asar": true,
"appId": "ot.one.opentrons",
"electronVersion": "1.3.1",
"app-category-type": "public.app-category.productivity",
"productName": "OpenTrons",
"dmg": {
  "background-color": "white",
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
"mac": {
  "target": [
    "dmg",
    "zip"
  ]
}
}
```

```json
{
"postinstall": "install-app-deps",
"clean": "rm -rf ./out && rm -rf ./releases/*",
"build:backend": "python3.4 scripts/build_pyinstaller.py",
"build:frontend": "python scripts/build_electron_app_with_builder.py",
"release": "npm run build:backend && npm run build:frontend",
"build:backend:mac": "python3.4 scripts/build_pyinstaller.py",
"build:backend:win": "C:\\Python34\\python scripts\\build_pyinstaller.py",
"build:frontend:mac": "python3.4 scripts/build_electron_app_with_builder.py",
"build:frontend:win": "C:\\Python34\\python scripts\\build_electron_app_with_builder.py",
"release:mac": "npm run build:backend:mac && npm run build:frontend:mac",
"release:win": "npm run build:backend:win && npm run build:frontend:win",
"start": "NODE_ENV=development electron app/"
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





### [teak/Pussh](https://github.com/teak/Pussh/tree/master/package.json)

> The cross platform, multi-functional screenshot utility that doesn't suck

```json
{
"appId": "com.nightdev.pussh",
"category": "public.app-category.productivity",
"win": {
  "iconUrl": "https://github.com/teak/Pussh/tree/electron-dev/build/icon.ico?raw=true"
}
}
```

```json
{
"preinstall": "cd app && npm install",
"start": "electron ./app",
"pack": "build --dir",
"dist": "build"
}
```





### [BeatPlus/Protonmail](https://github.com/BeatPlus/Protonmail/tree/master/package.json)

> Unofficial electron wrapper for protonmail

```json
{
"appId": "com.beatplus.pronmail-desktop",
"iconUrl": "https://raw.githubusercontent.com/BeatPlus/Protonmail/master/build/Icon.ico"
}
```

```json
{
"postinstall": "cd app && npm install",
"pack": "build",
"dist": "build",
"dist:linux32": "build --linux --ia32",
"dist:linux64": "build  --linux --x64",
"dist:win32": "build --windows --ia32",
"dist:win64": "build --windows --x64",
"dist:osx": "build --osx",
"test": "xo app",
"start": "electron app"
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





### [MaybeRex/SimonSays](https://github.com/MaybeRex/SimonSays/tree/master/package.json)

> simple simon says game

```json
{
"appId": "simon.says"
}
```

```json
{
"test": "build",
"windows": "build -w --x64 --ia32",
"release": "build -ml --x64",
"linux": "build -l --x64",
"start": "electron ./app --enable-logging",
"postinstall": "install-app-deps",
"cordova": "rm -rf cordova/www/app && cp -R app/ cordova/www/ && cd cordova/ && cordova run android"
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





### [aarnaud/lxd-webui](https://github.com/aarnaud/lxd-webui/tree/master/package.json)

> Web interface (GUI), web frontend to manage the LXD Containers

```json
{
"app-bundle-id": "your.id",
"app-category-type": "your.app.category.type",
"icon": "src/electron/icon.icns"
}
```

```json
{
"clean": "npm cache clean && rm -rf node_modules doc typings coverage build dist",
"clean:build": "rm -rf build",
"preclean:install": "npm run clean",
"clean:install": "npm set progress=false && npm install",
"preclean:start": "npm run clean",
"clean:start": "npm start",
"watch": "npm run watch:dev",
"watch:dev": "npm run build:dev -- --watch",
"watch:dev:hmr": "npm run watch:dev -- --hot",
"watch:test": "npm run test -- --auto-watch --no-single-run",
"watch:prod": "npm run build:prod -- --watch",
"watch:electron": "npm run build:electron:dev -- --watch",
"watch:electron:hmr": "npm run watch:electron -- --hot",
"build": "npm run build:dev",
"prebuild:dev": "npm run clean:build",
"build:dev": "webpack --config config/webpack.dev.js --progress --profile --colors --display-error-details --display-cached",
"prebuild:prod": "npm run clean:build",
"build:prod": "webpack --config config/webpack.prod.js  --progress --profile --colors --display-error-details --display-cached --bail",
"build:github": "webpack --config config/webpack.github.js  --progress --profile --colors --display-error-details --display-cached --bail",
"prebuild:electron:dev": "npm run clean:build",
"build:electron:dev": "webpack --config config/webpack.electron.dev.js --progress --profile --colors --display-error-details --display-cached",
"prebuild:electron:prod": "npm run clean:build",
"build:electron:prod": "webpack --config config/webpack.electron.prod.js  --progress --profile --colors --display-error-details --display-cached",
"package:electron:linux": "build --platform linux  --appDir ./build -d NuGet",
"package:electron:mac": "build --platform darwin --appDir ./build -d DMG",
"package:electron:windows": "build --platform win32  --appDir ./build -d 'windows installer'",
"electron": "electron build",
"predeploy": "npm run build:github",
"deploy": "gh-pages -d build",
"server": "npm run server:dev:hmr",
"server:dev": "webpack-dev-server --config config/webpack.dev.js --inline --progress --profile --colors --watch --display-error-details --display-cached --content-base src/",
"server:dev:hmr": "npm run server:dev -- --hot",
"server:prod": "http-server build --cors",
"start": "npm run server",
"typings-install": "typings install",
"postinstall": "npm run typings-install",
"lint": "tslint 'src/**/*.ts'"
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





### [jhipster/jhipster-app](https://github.com/jhipster/jhipster-app/tree/master/package.json)

> Run JHipster applications from the menu bar.

```json
{
"appId": "io.github.jhipster.jhipster-app",
"category": "public.app-category.developer-tools",
"copyright": "Copyright (c) Julien Dubois - http://www.julien-dubois.com. All Rights Reserved.",
"win": {
  "target": [
    "zip"
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
"test": "xo",
"start": "electron .",
"postinstall": "install-app-deps",
"pack": "build --dir",
"dist": "build -mlw"
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





### [wallapatta/wallapatta](https://github.com/wallapatta/wallapatta/tree/master/package.json)

> Wallapatta has a syntax similar to Markdown and uses a layout inspired by handouts of Edward R. Tufte.

```json
{
"appId": "vpj",
"app-category-type": "vpj",
"productName": "Wallapatta",
"win": {
  "iconUrl": "https://github.com/vpj/vpj.github.com/blob/master/images/wallapatta.ico?raw=true",
  "remoteReleases": "http://localhost:8070/downloads/wallapatta/update/win32/",
  "signWithParams": "/t http://timestamp.digicert.com /n \"Forestpin (Pvt) Ltd\""
}
}
```

```json
{
"build": "build",
"electron": "electron app/main.js",
"test": "echo \"Error: no test specified\" && exit 1"
}
```





### [PolarisChen/Piece](https://github.com/PolarisChen/Piece/tree/master/package.json)

> Less equals more. A simple temporary-note taking app.

```json
{
"appId": "com.PolarisChen.PieceForMac",
"build.mac.category": "public.app-category.productivity",
"win": {
  "iconUrl": ""
},
"dmg": {
  "contents": [
    {
      "x": 382,
      "y": 220,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 220,
      "type": "file",
      "path": ""
    }
  ]
}
}
```

```json
{
"start": "electron ./app --enable-logging",
"watch": "webpack-dev-server",
"dev": "NODE_ENV='development' npm run start",
"electron-rebuild": "electron-rebuild",
"postinstall": "install-app-deps",
"clean": "rm -rf ./dist",
"build": "rm -rf ./app/built && webpack -p --config webpack.config.production.js",
"pack": "npm run build && npm run clean && build --dir",
"dist": "npm run build && npm run clean && build"
}
```





### [pakchoidora/campfire](https://github.com/pakchoidora/campfire/tree/master/package.json)

> 

```json
{
"appId": "org.spicygee.campfire",
"category": "Game"
}
```

```json
{
"pretest": "gulp hint",
"test": "electron .",
"start": "build"
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





### [scapain/dofustouch-noemu](https://github.com/scapain/dofustouch-noemu/tree/master/package.json)

> Emulateur open source de dofus touch pour Linux/OS X/Windows

```json
{}
```

```json
{
"install": "bower install",
"test": "echo \"Error: no test specified\" && exit 1",
"pack": "build --dir",
"build": "node build.js",
"distmac": "build --platform darwin",
"start": "electron ./"
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





### [avocode/electron-windows-autoupdate](https://github.com/avocode/electron-windows-autoupdate/tree/master/package.json)

> Electron Windows auto update example

```json
{
"squirrelWindows": {
  "remoteReleases": "http://localhost:9000/dist/win1/"
},
"win": {
  "certificateFile": "./certs/my_signing_key.pfx",
  "certificatePassword": ""
}
}
```

```json
{
"start": "electron .",
"build": "build --win",
"test": "echo \"Error: no test specified\" && exit 1"
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





### [evolition/playmaster](https://github.com/evolition/playmaster/tree/master/package.json)

> evolition.io presents playmaster, your table top roleplaying character manager

```json
{
"appId": "io.ev.playmaster",
"build.mac.category": "entertainment.utilities.games",
"win": {
  "iconUrl": "http://eatodo.s3.amazonaws.com/icon.ico"
}
}
```

```json
{
"postinstall": "install-app-deps",
"clean": "rm -rf ./dist",
"dist": "electron-packager ./ Playmaster --arch=x64 --out=dist",
"mac-dist": "NODE_ENV=production build -m --x64",
"win-dist": "NODE_ENV=production build -w --x64",
"pack:osx": "npm run clean && electron-packager . \"Playmaster\" --arch=x64 --out=dist/osx --platform=darwin",
"start": "babel-node scripts/ development",
"test": "echo \"Error: no test specified\" && exit 1"
}
```





### [sunabozu/subordination](https://github.com/sunabozu/subordination/tree/master/package.json)

> 

```json
{
"productName": "Subordination",
"app-bundle-id": "org.subordination",
"app-category-type": "public.app-category.education",
"app-copyright": "Copyright © 2016 troorl",
"ignore": "app/node_modules/webchimera.js",
"extend-info": "build/info.plist",
"extraResources": [
  "Credits.html",
  "icon.png",
  "add_reg_keys.reg",
  "remove_reg_keys.reg"
],
"osx": {
  "identity": "troorl"
},
"win": {
  "iconUrl": "https://raw.githubusercontent.com/sunabozu/subordination/master/build/icon.ico",
  "loadingGif": "build/instal-splash.gif",
  "remoteReleases": "https://github.com/sunabozu/subordination"
}
}
```

```json
{
"prepare:osx": "npm i --ignore-scripts && node node_modules/node-sass/scripts/install.js && node node_modules/electron-prebuilt/install.js",
"prepare:win": "npm i --ignore-scripts && node node_modules/node-sass/scripts/install.js && cd node_modules/electron-prebuilt && npm i --arch=ia32",
"build-dev": "gulp build-debug",
"watch-dev": "gulp watch-debug",
"build-release": "gulp build",
"package:osx": "electron-packager . --platform=darwin --arch=x64 --app-bundle-id='org.subordination' --osx-sign.identity='troorl' --prune --asar --overwrite",
"postinstall": "install-app-deps",
"clean": "rm -rf ./installers",
"dist": "npm run build-release && npm run clean && npm run dist:osx && npm run dist:win",
"dist:osx": "build --platform=darwin --arch=x64",
"dist:win": "build --platform=win32 --arch=x64",
"start": "APP_DEBUG=1 electron ./app",
"start:win": "cmd /C \"set APP_DEBUG=1 && electron ./app",
"publish": "npm run clean && npm run publish:osx && npm run publish:win",
"publish:osx": "build --platform=darwin --arch=x64 --publish onTagOrDraft",
"publish:win": "build --platform=win32 --publish onTagOrDraft"
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





### [lazybios/emoji-menu](https://github.com/lazybios/emoji-menu/tree/master/package.json)

> a emoji cheat sheet on your menubar

```json
{
"mac": {
  "title": "emoji-menu",
  "icon": "./app/resources/images/icons/emoji-menu.icns"
}
}
```

```json
{
"start": "electron app/index.js",
"test": "echo \"Error: no test specified\" && exit 1",
"build": "electron-packager . emoji-menu --platform=darwin --arch=x64 --version=1.2.0 --out='./build' --overwrite=true --icon=./app/resources/images/icons/emoji-menu.icns",
"dist:mac": "build --platform=osx "
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





### [n457/Uncolored](https://github.com/n457/Uncolored/tree/master/package.json)

> (Un)colored — Next generation desktop rich content editor that saves documents with themes. HTML & Markdown compatible. For Windows, OS X & Linux. — http://n457.github.io/Uncolored/

```json
{
"appId": "com.n457.Uncolored",
"copyright": "Copyright © 2016 n457 / Bertrand Vignaud-Lerouge",
"asar": false,
"compression": "maximum",
"win": {
  "target": [
    "nsis",
    "zip"
  ]
},
"mac": {
  "category": "public.app-category.productivity",
  "target": [
    "dmg",
    "zip"
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
},
"linux": {
  "category": "Office",
  "packageCategory": "editors",
  "target": [
    "deb",
    "zip"
  ],
  "synopsis": "(Un)colored — Next generation desktop rich content editor that saves documents with themes. HTML & Markdown compatible. For Windows, OS X & Linux.",
  "desktop": {
    "Type": "Application",
    "Encoding": "UTF-8",
    "Name": "(Un)colored",
    "Comment": "Rich content editor",
    "Exec": "Uncolored",
    "Terminal": false
  }
}
}
```

```json
{
"gulp": "gulp",
"dist": "gulp dist"
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





### [AGProjects/sylk-webrtc](https://github.com/AGProjects/sylk-webrtc/tree/master/package.json)

> Sylk WebRTC client

```json
{
"appId": "com.agprojects.Sylk",
"productName": "Sylk",
"mac": {
  "category": "public.app-category.video",
  "target": [
    "dmg"
  ]
},
"win": {
  "target": [
    "nsis"
  ],
  "signingHashAlgorithms": []
},
"nsis": {
  "oneClick": true,
  "perMachine": false
},
"linux": {
  "target": [
    "AppImage"
  ]
}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "electron ./app",
"build-osx": "build --osx --x64",
"build-win": "build --win --ia32 --x64",
"build-linux": "build --linux --ia32 --x64"
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





### [ishmur/telemed_proj_desktop](https://github.com/ishmur/telemed_proj_desktop/tree/master/package.json)

> Small file uploader in Electron

```json
{
"app-bundle-id": "Telemed.project.desktop",
"app-category-type": "public.app-category.medical",
"iconUrl": "https://d30y9cdsu7xlg0.cloudfront.net/png/50115-200.png",
"win": {
  "loadingGif": "./build/installer.gif"
}
}
```

```json
{
"start": "electron ./app/main.js",
"dist:win": "build --ia32 --x64",
"postinstall": "install-app-deps"
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





### [annarankin/react-pixels](https://github.com/annarankin/react-pixels/tree/master/package.json)

> Playing around with react and canvas in an attempt to create a pixel art editor

```json
{
"appId": "anna.has.an.id",
"category": "fun",
"win": {
  "iconUrl": "https://i.imgur.com/4G51NSI.png"
}
}
```

```json
{
"start": "npm run build; electron main.js",
"watch": "webpack --watch | electron main.js",
"build": "cp -r ./src/images ./app; webpack",
"postinstall": "install-app-deps",
"pack": "build --dir",
"dist": "build"
}
```





### [Mad-Chemist/voter-registration-check](https://github.com/Mad-Chemist/voter-registration-check/tree/master/package.json)

> Builds an electron project

```json
{}
```

```json
{
"postinstall": "install-app-deps",
"start": "./app/node_modules/.bin/electron ./app",
"reset": "pkill -f selenium-standalone",
"build": "node electron-build.js",
"dist": "node electron-build.js"
}
```





### [MaraniMatias/cnc-arduino-nodejs-electronjs](https://github.com/MaraniMatias/cnc-arduino-nodejs-electronjs/tree/master/package.json)

> cnc realizado con nodejs electron serialport arduino.

```json
{
"asar": false,
"compression": "maximum",
"appId": "CNC-ino",
"app-category-type": "public.app-category.education",
"productName": "CNC-ino",
"win": {
  "target": "tar.xz",
  "title": "CNC-ino",
  "icon": "./app/recursos/icon.ico",
  "publisher": "cnc realizado con nodejs electron serialport arduino."
},
"linux": {
  "description": "cnc realizado con nodejs electron serialport arduino.",
  "synopsis": "Arduino + SerialPort + NodeJS + ElectronJS + AngularJS + Semantic UI",
  "executable": "CNC-ino",
  "target": "deb",
  "compression": "xz"
}
}
```

```json
{
"rebuild": "grunt buildsp",
"start": "grunt run",
"test": "mocha ./tests/**/*.js"
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





### [Meadowcottage/StreamLabs](https://github.com/Meadowcottage/StreamLabs/tree/master/package.json)

> :bell: Stream Labs (UNOFFICIAL) Web App

```json
{
"appId": "com.Meadowcottage.StreamLabs",
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
  "target": [
    "squirrel",
    "zip"
  ],
  "remoteReleases": "https://github.com/Meadowcottage/StreamLabs",
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





### [EDJumpMaps/blackBox](https://github.com/EDJumpMaps/blackBox/tree/master/package.json)

> electron boilerplate for CMDRs Log

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





### [aumayr/fava-electron](https://github.com/aumayr/fava-electron/tree/master/package.json)

> Electron-wrapper for fava

```json
{
"appId": "com.fava-electron",
"asar": false,
"mac": {
  "category": "public.app-category.finance"
}
}
```

```json
{
"lint": "eslint app/main.js",
"start": "electron app",
"pack": "build --dir",
"dist": "build"
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





### [360ls/desktop](https://github.com/360ls/desktop/tree/master/package.json)

> The desktop electron application for displaying a local video live-stream and a local version of the DVR web application.

```json
{
"appId": "org.360ls.360ls",
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
"lint": "eslint --ignore-path .gitignore --format=node_modules/eslint-formatter-pretty app test *.js *.jsx",
"dev": "npm run hot-server -- --start-hot",
"test": "jest",
"hot-server": "cross-env NODE_ENV=development node --max_old_space_size=1048 -r babel-register server.js",
"build-main": "cross-env NODE_ENV=production node -r babel-register ./node_modules/webpack/bin/webpack --config webpack.config.electron.js --progress --profile --colors",
"build-renderer": "cross-env NODE_ENV=production node -r babel-register ./node_modules/webpack/bin/webpack --config webpack.config.production.js --progress --profile --colors",
"build": "npm run build-main && npm run build-renderer",
"start": "cross-env NODE_ENV=production electron ./app/",
"start-hot": "cross-env HOT=1 NODE_ENV=development electron -r babel-register -r babel-polyfill ./app/main.development",
"postinstall": "concurrently \"install-app-deps\" \"node node_modules/fbjs-scripts/node/check-dev-engines.js package.json\"",
"package": "npm run build && build --publish never",
"package-win": "npm run build && build --win --x64",
"package-linux": "npm run build && build --linux",
"package-all": "npm run build && build -mwl",
"cleanup": "mop -v"
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





### [Nixsm/finiteAutomata](https://github.com/Nixsm/finiteAutomata/tree/master/package.json)

> A sentence and arithmetic sentenc recognizer

```json
{
"appId": "finite.automata",
"mac": {
  "category": "com.nixsm.finite.automata"
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





### [mobuter/electron](https://github.com/mobuter/electron/tree/master/package.json)

> A minimal Electron application

```json
{
"app-bundle-id": "Test.id",
"app-category-type": "your.app.category.type",
"iconUrl": "https://raw.githubusercontent.com/mobuter/electron/master/build/icon.ico",
"asar": "false"
}
```

```json
{
"start": "electron app/main.js",
"postinstall": "install-app-deps",
"pack": "build",
"dist": "build",
"dist:win64": "./node_modules/.bin/build --platform win32 --arch x64"
}
```





### [FastFlowDebate/FastFlow](https://github.com/FastFlowDebate/FastFlow/tree/master/package.json)

> Debate application for keeping your files organized

```json
{
"appId": "fastflowdebate",
"category": "public.app-category.productivity",
"asar": false,
"win": {
  "iconUrl": "https://raw.githubusercontent.com/FastFlowDebate/assets/master/FastFlowIcon.png"
}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "electron ./app",
"compile": "echo compile",
"pack": "npm run compile && build --dir",
"dist": "npm run compile && build",
"release": "npm run compile && build",
"setup": "npm install && cd app && npm install && bower install"
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





### [nileshmali/ssh-app](https://github.com/nileshmali/ssh-app/tree/master/package.json)

> A ssh2 client application based on electron

```json
{
"appId": "com.github.ssh2",
"files": [
  "**/*",
  "!**/node_modules/*/{README.md,README,readme.md,readme,test}",
  "!**/node_modules/.bin",
  "!**/*.{o,hprof,orig,pyc,pyo,rbc}",
  "!**/._*",
  "!**/{.DS_Store,.git,.hg,.svn,CVS,RCS,SCCS,__pycache__,thumbs.db,.gitignore,.gitattributes,.editorconfig,.idea,appveyor.yml,.travis.yml,circle.yml,*.ts,tsconfig.json,*.map}"
],
"linux": {
  "target": [
    "deb"
  ]
}
}
```

```json
{
"build": "run-p electron:build webpack:build",
"clean": "rimraf dist tmp ./app/out ./app/dist *.log",
"electron:build": "tsc -p ./app",
"electron:dev": "cross-env DEV=1 electron app",
"pack": "build",
"postinstall": "install-app-deps",
"prepack": "run-s clean build",
"prestart": "run-s clean electron:build",
"start": "run-p webpack:dev electron:dev",
"test": "echo \"Error: no test specified\" && exit 1",
"webpack:build": "cross-env NODE_ENV=production webpack -p --progress",
"webpack:dev": "webpack-dev-server --progress --hot --port 4200"
}
```





### [chito256/sparks](https://github.com/chito256/sparks/tree/master/package.json)

> A minimal Markdown writer

```json
{
"appId": "chito256.sparks",
"app-category-type": "public.app-category.utilities",
"title": "Sparks",
"asar": false,
"linux": {
  "target": [
    "deb",
    "zip"
  ]
},
"win": {
  "target": [
    "zip"
  ]
},
"squirrelWindows": {
  "msi": true
}
}
```

```json
{
"dev-server": "cross-env NODE_ENV=development webpack-dev-server --inline --content-base app/build/",
"start-hot": "cross-env NODE_ENV=development electron ./app/main.js",
"dev": "concurrently \"npm run dev-server\" \"npm run start-hot\"",
"bundle": "cross-env NODE_ENV=production webpack -p",
"build:test": "npm run bundle && build --dir",
"build:prod": "npm run bundle && build",
"clean:all": "rm -r dist && rm -r app/build && rm -r app/node_modules"
}
```





### [chrisveness/electron-koa-app](https://github.com/chrisveness/electron-koa-app/tree/master/package.json)

> Builder for Electron Koa App

```json
{
"appId": "koa-app.id",
"category": "public.app-category.developer-tools",
"win": {
  "iconUrl": "http://eatodo.s3.amazonaws.com/icon.ico"
}
}
```

```json
{
"start": "electron app/main.js",
"build": "build",
"postinstall": "install-app-deps"
}
```





### [oliverschwendener/electronizr](https://github.com/oliverschwendener/electronizr/tree/master/package.json)

> An alt+space launcher for Windows

```json
{
"appId": "com.electron.electronizr",
"category": "Utility",
"win": {
  "icon": "build/icon"
}
}
```

```json
{
"start": "electron main.js",
"build": "build --dir",
"setup": "build"
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





### [d-4-ni/chad](https://github.com/d-4-ni/chad/tree/master/package.json)

> A chat client for Twitch

```json
{
"app-bundle-id": "com.d-4-ni.chad",
"app-category-type": "public.app-category.entertainment",
"iconUrl": "https://raw.githubusercontent.com/d-4-ni/chad/master/chad.ico"
}
```

```json
{
"postinstall": "install-app-deps",
"pack": "build",
"dist": "npm run dist:osx && npm run dist:win32 && npm run dist:win64",
"dist:osx": "build --platform darwin",
"dist:win32": "build --platform win32 --arch ia32",
"dist:win64": "build --platform win32 --arch x64"
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





### [rmp135/postguy](https://github.com/rmp135/postguy/tree/master/package.json)

> A postman replacement

```json
{
"appId": "com.example.notpostman",
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
"start": "npm install --prefix ./app ./app && npm install && webpack && electron ./app",
"dev": "webpack && webpack -w | electron ./app/main --enable-logging",
"watch": "webpack -w",
"run": "electron ./app",
"pack": "webpack",
"release": "build --x64 --publish never",
"test": "karma start karma.conf.js"
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





### [Hugh19/compteur](https://github.com/Hugh19/compteur/tree/master/package.json)

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





### [teamocelot/ocelot-mod-manager](https://github.com/teamocelot/ocelot-mod-manager/tree/master/package.json)

> Ocelot Mod Manager

```json
{
"appId": "com.txuritan.ocelot",
"guid": "ed822c8d-f92c-4101-9627-166543005fe6",
"mac": {},
"win": {
  "iconUrl": "https://u.pomf.is/gmeoip.ico"
}
}
```

```json
{
"pack": "build --dir",
"dist": "build",
"install": "npm i && cd app && npm i && bower i"
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





### [BHSPitMonkey/ninjam-js](https://github.com/BHSPitMonkey/ninjam-js/tree/master/package.json)

> The Ninjam music collaboration client reimplemented using JavaScript.

```json
{
"app-bundle-id": "com.stepheneisenhauer.ninjam-js",
"app-category-type": "public.app-category.music"
}
```

```json
{
"pack": "build",
"dist": "build",
"start": "electron app/build",
"make-chrome": "cd app && npm run make-dist && mkdir -p ../dist && cd build && rm -f ../../dist/ninjam-js-chrome.zip && zip -r ../../dist/ninjam-js-chrome.zip * -x electron* package.json"
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





### [ghondar/PelisTime](https://github.com/ghondar/PelisTime/tree/master/package.json)

> Un espacio multimedia basado en peerflix, React y empaquetado con electron.

```json
{
"appId": "PelisTime",
"files": [
  "static/**/*",
  "node_modules/**/*",
  "index.js",
  "index.html",
  "package.json"
],
"asar": false,
"category": "Multimedia",
"mac": {
  "title": "PelisTime",
  "background": "img/background.png",
  "icon": "img/osx.icns",
  "icon-size": 80,
  "contents": [
    {
      "x": 338,
      "y": 172,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 100,
      "y": 172,
      "type": "file"
    }
  ]
},
"win": {
  "title": "PelisTime",
  "version": "1.0.0",
  "publisher": "PelisTime Inc.",
  "icon": "img/windows.ico",
  "verbosity": 1
}
}
```

```json
{
"start-server": "node server.js",
"start-dev-server": "DEBUG=true node server.js",
"start": "electron .",
"start-dev": "NODE_ENV=development DEBUG=true electron .",
"all:linux": "npm run build && npm run pack",
"all:osx": "npm run build && npm run installer:osx",
"all:win": "npm run build && npm run pack && npm run installer:win",
"build": "webpack --config webpack.config.production.js",
"pack": "node pack.js",
"installer:win": "npm run installer:win:64 && npm run installer:win:32",
"installer:win:64": "electron-builder dist/PelisTime-win32-x64 --platform=win --out=dist/win-64bits/ --config=config.json",
"installer:win:32": "electron-builder dist/PelisTime-win32-ia32 --platform=win --out=dist/win-32bits/ --config=config.json",
"installer:osx": "build -m",
"test": "jscs . && node ./test/index.js"
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





### [hardchor/timesheets](https://github.com/hardchor/timesheets/tree/master/package.json)

> A timesheet keeping app based on electron

```json
{
"appId": "hardchor.timesheets",
"category": "public.app-category.productivity",
"productName": "Timesheets",
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
      "path": "Timesheets.app"
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





### [hgn/zaytuna](https://github.com/hgn/zaytuna/tree/master/package.json)

> Simulator

```json
{
"app-bundle-id": "your.id",
"app-category-type": "your.app.category.type",
"iconUrl": "https://raw.githubusercontent.com/atom/atom/master/resources/app-icons/stable/atom.ico"
}
```

```json
{
"start": "electron main.js",
"pack": "build"
}
```





### [hipstergoat/browsersync-proxy](https://github.com/hipstergoat/browsersync-proxy/tree/master/package.json)

> A standalong browsersync application built on Electron

```json
{
"osx": {
  "icon": "build/icon.icns",
  "icon-size": 80,
  "background": "build/background.png",
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
"prebuild": "npm install",
"postinstall": "install-app-deps",
"pack": "build",
"dist": "build",
"serve": "gulp serve",
"test": "echo \"Error: no test specified\" && exit 1"
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





### [PandemicMoon/hackertyper](https://github.com/PandemicMoon/hackertyper/tree/master/package.json)

> A HackerTyper Desktop Application based on hackertyper.net

```json
{
"app-category-type": "public.app-category.developer-tools",
"productName": "HackerTyper",
"win": {
  "iconUrl": "https://github.com/PandemicMoon/hackertyper/blob/master/build/icon.ico?raw=true",
  "target": "nsis"
}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "electron .",
"pack": "node_modules/.bin/build --x64 --ia32 --dir",
"dist": "node_modules/.bin/build --x64 --ia32"
}
```





### [ParitoshBh/Rivisto](https://github.com/ParitoshBh/Rivisto/tree/master/package.json)

> An open source personal note taking app, with focus on data control.

```json
{
"appId": "productivity.rivisto",
"linux": {
  "category": "Utility",
  "target": "deb"
},
"win": {
  "target": "nsis"
}
}
```

```json
{
"start": "./node_modules/.bin/electron .",
"pack": "build --dir",
"dist": "build"
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





### [AuHau/dataflow-gui](https://github.com/AuHau/dataflow-gui/tree/master/package.json)

> Desktop application for constructing Big Data programs through building DAG

```json
{
"appId": "cz.auhau.dataflowGui",
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
"start-hot": "cross-env HOT=1 NODE_ENV=development electron -r babel-register -r babel-polyfill ./app/core/main.development",
"postinstall": "concurrently \"install-app-deps\" \"node node_modules/fbjs-scripts/node/check-dev-engines.js package.json\"",
"dev": "npm run hot-server -- --start-hot",
"package": "npm run build && build --publish never",
"package-win": "npm run build && build --win --x64",
"package-linux": "npm run build && build --linux",
"package-all": "npm run build && build -mwl"
}
```





### [Auo/lazy-turnip](https://github.com/Auo/lazy-turnip/tree/master/package.json)

> An application to handle installation of world of warcraft addons

```json
{
"appId": "com.squirrel.auo.turnip",
"category": "public.app-category.utilities",
"app-category-type": "public.app-category.utilities",
"mac": {
  "icon": "images\\logo-large.icns"
},
"win": {
  "icon": "images\\logo-large.ico",
  "loadingGif": "images\\installing.gif"
}
}
```

```json
{
"test": "xo",
"start": "electron .",
"build": "electron-packager . --out=dist --app-version=%npm_package_version% --asar --overwrite --all --icon=images\\logo.ico",
"build-backup": "electron-packager . --out=dist --app-version=%npm_package_version% --prune --asar --overwrite --all",
"build-windows": "electron-packager . --out=dist --app-version=%npm_package_version% --asar --overwrite --platform=win32 --arch=x64 --icon=images\\turnip.ico",
"build-installer-windows": "build --win --x64",
"pack-build": "npm run build-windows && npm run build-installer-windows"
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





### [Przemol/seqplots_electron](https://github.com/Przemol/seqplots_electron/tree/master/package.json)

> An interactive tool for visualizing NGS signals and sequence motif densities along genomic features using average plots and heatmaps.

```json
{
"appId": "SeqPlots3",
"category": "EDA",
"asar": false,
"win": {
  "target": [
    "squirrel",
    "zip"
  ]
},
"linux": {
  "target": [
    "AppImage",
    "zip",
    "deb"
  ]
},
"squirrelWindows": {
  "msi": true
},
"files": [
  "**/*",
  "!R*",
  "R${os}",
  "R${os}_start"
]
}
```

```json
{
"postinstall": "install-app-deps",
"start": "electron ./app --enable-logging",
"dev": "NODE_ENV='development' npm run start",
"dist2": "build -mwl --x64 --ia32",
"compile": "rimraf app/out && tsc",
"pack": "npm run compile && build --dir",
"dist": "npm run compile && build",
"release": "npm run compile && build"
}
```





### [PutisAmis/desktop-app](https://github.com/PutisAmis/desktop-app/tree/master/package.json)

> primera app

```json
{
"appId": "your.id",
"category": "your.app.category.type",
"win": {
  "iconUrl": "(windows-only) https link to icon"
}
}
```

```json
{
"start": "ng serve",
"postinstall": "typings install",
"lint": "tslint \"src/**/*.ts\"",
"test": "ng test",
"pree2e": "webdriver-manager update",
"e2e": "protractor",
"re": "electron ./dist",
"be": "electron-packager ./dist Desktop-app --platform=darwin --arch=x64 --out=build",
"pack": "build --dir",
"dist": "build"
}
```





### [AwsomeH5/NMSPT](https://github.com/AwsomeH5/NMSPT/tree/master/package.json)

> A minimal Electron application

```json
{
"app-bundle-id": "your.id",
"app-category-type": "your.app.category.type",
"win": {
  "iconUrl": "http://www.iconarchive.com/download/i42608/oxygen-icons.org/oxygen/Actions-document-edit.ico"
}
}
```

```json
{
"start": "electron main.js",
"pack": "electron-packager ./ MyApp --platform=win32 --arch=x64",
"build": "electron-builder ./MyApp-win32-x64 --platform=win --arch=x64",
"postinstall": "bower install"
}
```





### [QuantamHD/Union-Desktop](https://github.com/QuantamHD/Union-Desktop/tree/master/package.json)

> Union is a cross platform SMS client that is open source, and free

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





### [RadioSystems/hoverboard](https://github.com/RadioSystems/hoverboard/tree/master/package.json)

> A React-Redux-Electron Start Kit

```json
{
"app-bundle-id": "radiosys.hoverboard",
"app-category-type": "public.app-category.application"
}
```

```json
{
"postinstall:x64": "install-app-deps",
"postinstall:ia32": "install-app-deps --arch ia32",
"start": "npm run compile && electron ./app",
"clean": "rimraf dist && rimraf ./app/node_modules",
"clean:win": "rimraf dist/win",
"compile": "webpack",
"pack": "npm run compile && build",
"dist": "npm run compile && build",
"release": "npm run compile && build",
"dist:x64": "./node_modules/.bin/build --platform win32 --arch x64",
"dist:ia32": "./node_modules/.bin/build --platform win32 --arch ia32",
"setupEnv": "npm config set msvs_version 2015",
"watch": "webpack --watch",
"test": "mocha app/tests/testSetup.js \"app/tests/**/*.js\" --reporter progress"
}
```





### [BHSPitMonkey/hipchat-electron](https://github.com/BHSPitMonkey/hipchat-electron/tree/master/package.json)

> A desktop HipChat client based on the official web client using Electron

```json
{
"app-bundle-id": "com.stephen.hipchat-electron",
"app-category-type": "public.app-category.productivity",
"asar": false
}
```

```json
{
"postinstall": "install-app-deps",
"pack": "build",
"dist": "build",
"start": "electron app"
}
```





### [Reeywhaar/wikibrowser](https://github.com/Reeywhaar/wikibrowser/tree/master/package.json)

> Wikipedia Browser

```json
{
"appId": "com.vyrtsev.wikibrowser",
"app-category-type": "public.app-category.reference",
"productName": "WikiBrowser",
"mac": {
  "target": "dmg"
}
}
```

```json
{
"clean": "rm -r node_modules && cd ./app && rm -r node_modules",
"prune": "npm prune && cd ./app && npm prune",
"sinstall": "npm install && cd ./app && npm install",
"start": "export WIKIDEBUG=true && electron ./app/",
"build": "build --dir"
}
```





### [RibbonLance/BreakTrack](https://github.com/RibbonLance/BreakTrack/tree/master/package.json)

> A time management and task tracking application.

```json
{
"appId": "com.ribbonlance.breaktrack",
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
"open": "atom ."
}
```





### [RicoBrase/AndroidScreenRecorder](https://github.com/RicoBrase/AndroidScreenRecorder/tree/master/package.json)

> A screen recorder tool for desktop computers to record the screen of a android device

```json
{
"appId": "de.rico-brase.asr",
"category": "public.app-category.video",
"dmg": {},
"win": {
  "iconUrl": "https://asr.rico-brase.de/icon.ico"
}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "electron ./app --enable-logging",
"devWin": "set NODE_ENV=development&& npm run start",
"dev": "export NODE_ENV=dev npm run start",
"dist": "build --win --x64"
}
```





### [RilRil/simple-electron](https://github.com/RilRil/simple-electron/tree/master/package.json)

> Test.

```json
{
"asar": false,
"appId": "test.1",
"app-category-type": "public.app-category.developer-tools",
"win": {
  "iconUrl": "https://dl.dropboxusercontent.com/u/4768306/icon.ico"
}
}
```

```json
{
"pack": "build --dir",
"dist": "build",
"debug": "electron --debug index.js",
"start": "electron index.js"
}
```





### [SMaleck/electron-squirrel-boilerplate](https://github.com/SMaleck/electron-squirrel-boilerplate/tree/master/package.json)

> A minimal integration of Squirrel.Windows in Electron

```json
{
"appId": "electron-squirrel-boilerplate",
"app-category-type": "misc",
"asar": "true",
"iconUrl": "https://www.google.com/favicon.ico"
}
```

```json
{
"start": ".\
ode_modules\\.bin\\electron.cmd .\\app +debug",
"start_osx": "./node_modules/.bin/electron ./app +debug",
"esl": "node node_modules/eslint/bin/eslint.js ./app",
"test": "mocha \"./test/**/*.test.js\"",
"clean": "rimraf ./*.log",
"prebuild": "rimraf ./build_raw",
"build": ".\
ode_modules\\.bin\\electron-packager.cmd .\\app Boilerplate --platform=win32 --arch=ia32 --version=1.2.2 --out=.\\build_raw",
"dist": ".\
ode_modules\\.bin\\build.cmd --win --ia32"
}
```





### [ScatteredTuna/supreme-tuna](https://github.com/ScatteredTuna/supreme-tuna/tree/master/package.json)

> My Application

```json
{
"appId": "my.id",
"category": "my.app.category.type",
"mac": {
  "icon": "./mac-icon.icns"
},
"win": {
  "iconUrl": "https://raw.githubusercontent.com/zeit/hyperterm/master/build/icon.ico",
  "icon": "./win-icon.ico",
  "loadingGif": "./loading.gif"
}
}
```

```json
{
"clean": "rm -rf dist release",
"dist": "npm run clean && build -mw --x64",
"prerelease:mac": "rm -rf release/mac && mkdir -p release/mac",
"release:mac": "cp -rv dist/mac/*.{dmg,zip} release/mac && PACKAGE_VERSION=$(cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]') && echo $PACKAGE_VERSION >> ./release/mac/VERSION",
"prerelease:win": "rm -rf release/win && mkdir -p release/win",
"release:win": "cp -v dist/win/{RELEASES,*.nupkg,*.exe} release/win",
"release": "npm run prerelease:mac && npm run release:mac && npm run prerelease:win && npm run release:win"
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





### [SergioDonati/logmyevents](https://github.com/SergioDonati/logmyevents/tree/master/package.json)

> Diary Desktop Applicazion

```json
{
"appId": "com.logmyevents.desktop.app",
"category": "public.app-category.business",
"productName": "Log My Events",
"license": "GPL-3.0"
}
```

```json
{
"postinstall": "install-app-deps",
"start": "electron ./app",
"pack": "build --dir --x64",
"dist": "build --x64"
}
```





### [SergioDonati/sertle](https://github.com/SergioDonati/sertle/tree/master/package.json)

> Lightweight application to help to manage customers and make invoices.

```json
{
"appId": "com.sertle.desktop.app",
"category": "public.app-category.business",
"productName": "Sertle",
"license": "GPL-3.0",
"win": {
  "msi": true
}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "npm install && electron ./app",
"pack": "build --dir --x64",
"dist": "build --x64"
}
```





### [Bauke777/Evado-Dashboard](https://github.com/Bauke777/Evado-Dashboard/tree/master/package.json)

> Dashboard for OSX and Windows

```json
{
"appId": "hr.creaticon.eatodo",
"app-category-type": "public.app-category.productivity",
"dmg": {},
"win": {
  "iconUrl": "http://eatodo.s3.amazonaws.com/icon.ico"
}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "electron ./app --enable-logging",
"dev": "NODE_ENV='development' npm run start",
"dist": "build -mwl --x64 --ia32"
}
```





### [ShinChven/mutiple_file_rename_tool](https://github.com/ShinChven/mutiple_file_rename_tool/tree/master/package.json)

> rename multiple file with pattern.

```json
{
"appId": "hr.creaticon.eatodo",
"app-category-type": "public.app-category.productivity",
"win": {
  "iconUrl": "http://eatodo.s3.amazonaws.com/icon.ico"
}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "electron ./app --enable-logging",
"dev": "NODE_ENV='development' npm run start",
"dist": "build --x64"
}
```





### [BeemoLin/poi](https://github.com/BeemoLin/poi/tree/master/package.json)

> poi the KanColle Browser Tool

```json
{
"app-bundle-id": "org.poooi.poi",
"app-category-type": "public.app-category.games",
"extraResources": [
  "PepperFlash/${os}-${arch}"
],
"osx": {
  "icon": "assets/icons/poi.icns",
  "target": "dmg",
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
    "pacman"
  ]
}
}
```

```json
{
"test": "./node_modules/.bin/mocha --harmony --compilers coffee:coffee-script/register",
"deploy": "gulp deploy",
"deploy_directly": "gulp deploy_directly",
"build": "gulp build && build",
"build_win": "gulp build && build --win --x64 && build --win --ia32",
"start": "electron ./app_compiled",
"start_directly": "electron .",
"clean": "gulp clean",
"update": "gulp update",
"compile": "gulp compile"
}
```





### [Beingbook/GraphQL-Lab](https://github.com/Beingbook/GraphQL-Lab/tree/master/package.json)

> GraphiQL Development Electron Application

```json
{
"app-bundle-id": "graphql.lab",
"app-category-type": "public.app-category.developer-tools",
"iconUrl": "https://github.com/Beingbook/GraphQL-Lab/blob/master/app/app.ico"
}
```

```json
{
"test": "cross-env NODE_ENV=test mocha --compilers js:babel-register --recursive --require ./test/setup.js test/**/*.spec.js",
"test-watch": "npm test -- --watch",
"test-e2e": "cross-env NODE_ENV=test mocha --compilers js:babel-register --require ./test/setup.js --require co-mocha ./test/e2e.js",
"lint": "eslint app test *.js",
"hot-server": "node -r babel-register server.js",
"build-main": "cross-env NODE_ENV=production node -r babel-register ./node_modules/webpack/bin/webpack --config webpack.config.electron.js --progress --profile --colors",
"build-renderer": "cross-env NODE_ENV=production node -r babel-register ./node_modules/webpack/bin/webpack --config webpack.config.production.js --progress --profile --colors",
"build": "npm run build-main && npm run build-renderer",
"start": "cross-env NODE_ENV=production electron ./",
"start-hot": "cross-env HOT=1 NODE_ENV=development electron -r babel-register ./main.development",
"package": "cross-env NODE_ENV=production node -r babel-register package.js",
"package-all": "npm run package -- --all",
"postinstall": "node node_modules/fbjs-scripts/node/check-dev-engines.js package.json && install-app-deps",
"dev": "concurrently --kill-others \"npm run hot-server\" \"npm run start-hot\"",
"pack": "npm run package-all && build",
"dist": "npm run package-all && build"
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





### [SofusA/Gframe](https://github.com/SofusA/Gframe/tree/master/package.json)

> Unofficial dekstop client for Google Docs, Slides and Sheets

```json
{
"appId": "your.id",
"asar": false,
"mac": {
  "category": "your.app.category.type"
}
}
```

```json
{
"postinstall": "install-app-deps",
"pack": "build --dir",
"dist": "build",
"start": "electron ./app"
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





### [Stemn/Stemn-Desktop](https://github.com/Stemn/Stemn-Desktop/tree/master/package.json)

> Engineering Versioning and Project Management

```json
{
"appId": "stemn.stemn",
"app-bundle-id": "stemn.stemn",
"app-category-type": "public.app-category.productivity",
"productName": "Stemn",
"compression": "normal",
"asar": true,
"win": {
  "iconUrl": "https://stemn.com/uploads/85c7df7e-312b-4ed9-b12f-11d6d001a220.png"
},
"osx": {
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
      "path": "Stemn.app"
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
"build": "better-npm-run build:main && better-npm-run build:renderer",
"build:main": "better-npm-run build:main",
"build:renderer": "better-npm-run build:renderer",
"app": "better-npm-run app",
"app:test": "better-npm-run app:test",
"server": "better-npm-run server",
"server:test": "better-npm-run server:test",
"compile": "node ./scripts/build.js"
}
```





### [StickyTea/black-tea](https://github.com/StickyTea/black-tea/tree/master/package.json)

> My Application

```json
{
"appId": "my.id",
"category": "my.app.category.type",
"mac": {
  "icon": "./mac-icon.icns"
},
"win": {
  "iconUrl": "https://raw.githubusercontent.com/zeit/hyperterm/master/build/icon.ico",
  "icon": "./win-icon.ico",
  "loadingGif": "./loading.gif"
}
}
```

```json
{
"clean": "rm -rf dist release",
"dist": "npm run clean && build -mw --x64",
"prerelease:mac": "rm -rf release/mac && mkdir -p release/mac",
"release:mac": "cp -rv dist/mac/*.{dmg,zip} release/mac && PACKAGE_VERSION=$(cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]') && echo $PACKAGE_VERSION >> ./release/mac/VERSION",
"prerelease:win": "rm -rf release/win && mkdir -p release/win",
"release:win": "cp -v dist/win/{RELEASES,*.nupkg,*.exe} release/win",
"release": "npm run prerelease:mac && npm run release:mac && npm run prerelease:win && npm run release:win"
}
```





### [Sunny-fr/G-box](https://github.com/Sunny-fr/G-box/tree/master/package.json)

> G-box

```json
{
"appId": "fr.sunny.gbox",
"mac": {
  "category": "fr.sunny.gbox.email"
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





### [TaskForceTeam/taskapp](https://github.com/TaskForceTeam/taskapp/tree/master/package.json)

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





### [Bewi/doksbruxsel](https://github.com/Bewi/doksbruxsel/tree/master/package.json)

> ElectronApp

```json
{
"appId": "docks.bruxsel"
}
```

```json
{
"pack": "build --dir",
"dist": "build"
}
```





### [TheNoim/AtomController](https://github.com/TheNoim/AtomController/tree/master/package.json)

> A smart home controller

```json
{
"appId": "io.noim.${name}",
"productName": "Atom Controller"
}
```

```json
{
"test": "electron ./www",
"electron": "electron ./www"
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





### [Thebigbignooby/pack-web](https://github.com/Thebigbignooby/pack-web/tree/master/package.json)

> A minimal Electron application

```json
{
"app-bundle-id": "pack.web",
"app-category-type": "pack.web.category",
"iconUrl": "(windows only)"
}
```

```json
{
"start": "electron ./app/main.js",
"build-all": "electron-packager ./app --all --out dist/",
"linux-installer": "electron-installer-debian --src dist/app-linux-x64/ --dest dist/installers/ --arch amd64",
"postinstall": "install-app-deps"
}
```





### [Transpeptidase/MarkMe](https://github.com/Transpeptidase/MarkMe/tree/master/package.json)

> a markdown editer 

```json
{
"appId": "Mark.Me",
"productName": "MarkMe",
"mac": {
  "category": "MarkMe"
},
"win": {
  "iconUrl": "(windows-only) https link to icon",
  "target": "nsis"
}
}
```

```json
{
"test": "echo \"Error: no test specified\" && exit 1",
"start": "electron .",
"pack": "build"
}
```





### [Trevelopment/aio](https://github.com/Trevelopment/aio/tree/master/package.json)

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





### [Ullfis/aurelia-materialize-electron](https://github.com/Ullfis/aurelia-materialize-electron/tree/master/package.json)

> An Aurelia materialize electron application.

```json
{
"appId": "com.github.ullfis.aureliamaterializeelectron",
"linux": {
  "synopsis": "Aurelia Materialize Electron",
  "category": "Utility",
  "target": [
    "deb",
    "AppImage"
  ]
},
"win": {
  "target": "nsis"
},
"nsis": {
  "oneClick": true,
  "perMachine": false,
  "allowElevation": true,
  "runAfterFinish": true
}
}
```

```json
{
"____pre____": "",
"materialize": "./node_modules/.bin/r.js -o tools/rbuild.js",
"materializewin": "./node_modules/.bin/r.js.cmd -o tools/rbuild.js",
"postmaterialize": "au prepare-materialize",
"postmaterializewin": "au prepare-materialize"
}
```





### [BluJINonlee/repertoire](https://github.com/BluJINonlee/repertoire/tree/master/package.json)

> A minimal resume solution

```json
{
"appId": "repertoire",
"category": "professionalism"
}
```

```json
{
"pack": "build --dir",
"dist": "build"
}
```





### [VandeurenGlenn/Unclutter](https://github.com/VandeurenGlenn/Unclutter/tree/master/package.json)

> HDD unclutter

```json
{
"appId": "com.basicelements.unclutter",
"app-category-type": "public.app-category.utilities"
}
```

```json
{
"postinstall": "install-app-deps && bower install",
"install": "npm run postinstall",
"start": "electron ./app",
"pack": "build --dir",
"dist": "build",
"release": "build"
}
```





### [WantSomeTea/ChampIt](https://github.com/WantSomeTea/ChampIt/tree/master/package.json)

> Application for Championships

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
"test": "electron-mocha app/specs.js.autogenerated --renderer --require source-map-support/register"
}
```





### [Weasle/atomic-stream-player](https://github.com/Weasle/atomic-stream-player/tree/master/package.json)

> Electron powered stand-alone version of a streaming music player

```json
{
"appId": "de.weasle.asp",
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
"start": "electron app/main.js",
"pack": "build --dir",
"dist": "build"
}
```





### [WitteStier/wip](https://github.com/WitteStier/wip/tree/master/package.json)

> WitteStier Internet Printing

```json
{
"appId": "ws.ipp",
"app-category-type": "public.app-category.productivity",
"dmg": {},
"win": {
  "iconUrl": "http://eatodo.s3.amazonaws.com/icon.ico"
}
}
```

```json
{
"start": "electron ./app",
"dist": "build -m --x64"
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





### [XeonPowder/WoWCrypt](https://github.com/XeonPowder/WoWCrypt/tree/master/package.json)

> WoW Armory Desktop

```json
{
"appId": "com.xeonpowder.wowcrypt",
"mac": {
  "category": "public.app-category.utilities"
},
"win": {
  "iconUrl": "https://www.dropbox.com/s/p03zj0x9qdk04lc/icon.ico?dl=1"
}
}
```

```json
{
"build": "node tasks/release.js",
"build:clean": "cross-env PLATFORM_TARGET=clean node tasks/release.js",
"build:darwin": "cross-env PLATFORM_TARGET=darwin node tasks/release.js && build --mac",
"build:linux": "cross-env PLATFORM_TARGET=linux node tasks/release.js && build --linux deb tar.xz",
"build:mas": "cross-env PLATFORM_TARGET=mas node tasks/release.js",
"build:win32": "cross-env PLATFORM_TARGET=win32 node tasks/release.js && build --win --ia32 ",
"dev": "node tasks/runner.js",
"lint": "eslint --ext .js,.vue -f ./node_modules/eslint-friendly-formatter app",
"lint:fix": "eslint --ext .js,.vue -f ./node_modules/eslint-friendly-formatter --fix app",
"pack": "cross-env NODE_ENV=production webpack -p --progress --colors && build --dir",
"postinstall": "npm run lint:fix && cd app && npm install",
"vue:route": "node tasks/vue/route.js",
"vuex:module": "node tasks/vuex/module.js"
}
```





### [4LOOPph/tessa-app](https://github.com/4LOOPph/tessa-app/tree/master/package.json)

> 

```json
{
"appId": "com.engagis.au.tessa",
"category": "public.app-category.social",
"productName": "Tessa-App",
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
  "remoteReleases": "https://github.com/4LOOPph/tessa-app",
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





### [YogaPan/Alarm-Clock](https://github.com/YogaPan/Alarm-Clock/tree/master/package.json)

> alarm clock

```json
{
"appId": "Alarm Clock",
"app-category-type": "Clock"
}
```

```json
{
"start": "electron app",
"test": "npm run lint",
"dev": "webpack --watch",
"lint": "eslint .",
"precommit": "npm test",
"prepush": "npm test",
"postinstall": "install-app-deps",
"pack": "webpack -p --progress && build --dir",
"dist": "webpack -p --progress && build"
}
```





### [YogaPan/electron-hello-world](https://github.com/YogaPan/electron-hello-world/tree/master/package.json)

> 

```json
{}
```

```json
{
"start": "electron app",
"postinstall": "install-app-deps",
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





### [aaronholla/alumi-guard-generator](https://github.com/aaronholla/alumi-guard-generator/tree/master/package.json)

> Magically create drawings instantly.

```json
{
"appId": "com.aaronholla.alumi-guard-generator",
"app-category-type": "public.app-category.productivity",
"dmg": {},
"win": {
  "publish": [
    "github"
  ]
}
}
```

```json
{
"start": "electron ./app",
"release": "build -w --x64 -p always",
"build": "build -w --ia32 --x64 --dir"
}
```





### [aditya3098/mockgeoclient](https://github.com/aditya3098/mockgeoclient/tree/master/package.json)

> A client for MockGeoFix on android

```json
{
"appId": "mockgeoclient",
"app-category-type": "development",
"win": {
  "iconUrl": "https://github.com/aditya3098/mockgeoclient/blob/master/build/icon.ico?raw=true"
},
"linux": {
  "description": "Client for android emulator's 'geo fix' commands as well as apps such as MockGeoFix",
  "target": "deb",
  "synopsis": "Client for android emulator's 'geo fix' commands as well as apps such as MockGeoFix"
}
}
```

```json
{
"start": "electron .",
"pack": "build --dir",
"dist": "build --ia32 --x64"
}
```





### [adunham95/MKDownDun](https://github.com/adunham95/MKDownDun/tree/master/package.json)

> Unofficial Electron Template Application

```json
{
"appId": "com.bzcoding.skelektron",
"productName": "SkelEktron",
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
  "category": "public.app-category.business"
},
"linux": {
  "category": "Development"
},
"win": {}
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
"clean:linux": "rimraf dist/linux* dist/*.deb dist/*.AppImage",
"clean:osx": "rimraf dist/mac",
"clean:win": "rimraf dist/win*",
"clean": "npm run clean:linux && npm run clean:win && npm run clean:osx",
"pack:osx": "build --dir --mac",
"pack:win": "build --dir --win --x64",
"pack:linux": "build --dir --linux --x64",
"pack": "build --dir",
"prebuild": "node build/target.js",
"build:osx": "npm run prebuild && build --mac && npm run postbuild",
"build:win": "npm run prebuild && build --win --x64 && npm run postbuild",
"build:linux": "npm run prebuild && build --linux deb AppImage --x64 && npm run postbuild",
"build": "build",
"postbuild": "node build/target.js --clean",
"postinstall": "install-app-deps"
}
```





### [ahdriel/thesis-lab](https://github.com/ahdriel/thesis-lab/tree/master/package.json)

> 

```json
{
"app-bundle-id": "com.ahdriel.test",
"app-category-type": "i.dont.know"
}
```

```json
{
"start": "electron app/main.js",
"postinstall": "install-app-deps",
"pack": "build",
"dist": "build"
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





### [akaWolv/devfuze_web_database_gui_helper](https://github.com/akaWolv/devfuze_web_database_gui_helper/tree/master/package.json)

> WebDatabaseGUIHelper

```json
{
"app-bundle-id": "Wolv",
"app-category-type": "app.helper.gui"
}
```

```json
{
"start": "export NODE_ENV_STAGE=development && gulp",
"start-bundle": "npm run pack-bundle && ./node_modules/.bin/electron main.js",
"watch": "./node_modules/.bin/webpack-dev-server",
"pack-bundle": "export NODE_ENV_STAGE=production && ./node_modules/.bin/webpack -p -d --colors --production",
"electron-rebuild": "./node_modules/.bin/electron-rebuild",
"dist": "build",
"clean": "npm run clean:osx && npm run clean:win",
"clean:osx": "rm -rf ./dist/osx",
"clean:win": "rm -rf ./dist/win",
"pack": "npm run clean && npm run pack:osx && npm run pack:win",
"pack:osx": "npm run pack-bundle && npm run clean:osx && electron-packager . \"WebDatabaseGUIHelper\" --out=dist/osx --platform=darwin --arch=x64 --version=0.36.2 --icon=assets/osx/icon.png --ignore=dist --ignore=assets --ignore=builder.json --ignore=bower.json --ignore=README.md --ignore=.gitignore --ignore=preview.png --ignore=node_modules --prune",
"pack:win": "npm run pack-bundle && npm run clean:win && electron-packager . \"WebDatabaseGUIHelper\" --out=dist/win --platform=win32 --arch=ia32 --version=0.36.2 --icon=assets/win/logo.ico --ignore=dist --ignore=assets --ignore=builder.json --ignore=bower.json --ignore=README.md --ignore=.gitignore --ignore=preview.png --ignore=node_modules --prune",
"build:osx": "npm run pack-bundle && npm run pack:osx && node_modules/.bin/build \"dist/osx/WebDatabaseGUIHelper-darwin-x64/WebDatabaseGUIHelper.app\" --platform=osx --appDir=\".\"",
"build:win": "npm run pack-bundle && npm run pack:win && node_modules/.bin/build \"dist/win/WebDatabaseGUIHelper-win32-ia32\" --platform=win --appDir=\".\"",
"build": "npm run pack-bundle && npm run build:osx && npm run build:win"
}
```





### [CCI-Tools/cate-desktop](https://github.com/CCI-Tools/cate-desktop/tree/master/package.json)

> ESA CCI Toolbox (Cate)

```json
{
"appId": "org.esa.ccitools.Cate",
"app-category-type": "app.category.climate-science",
"win": {
  "target": [
    "nsis",
    "zip"
  ],
  "icon": "app/resources/win32/cate-icon.ico"
},
"nsis": {
  "oneClick": true,
  "installerHeaderIcon": "app/resources/win32/cate-icon.ico"
},
"mac": {
  "icon": "app/resources/darwin/icon.icns"
},
"dmg": {
  "icon": "app/resources/darwin/icon.icns",
  "background": "resources/darwin/dmg-background.png"
}
}
```

```json
{
"start": "electron app",
"test:e2e": "mocha e2e/**/*-test.js",
"pretest": "npm run compile",
"test": "mocha app/main/**/*.spec.js app/renderer/**/*.spec.js",
"postinstall": "install-app-deps",
"compile": "tsc",
"compile:trace": "tsc --traceResolution",
"dist": "build --x64 --publish never",
"pack": "build --x64 --publish never --dir",
"clean": "rimraf app/main app/renderer dist",
"clean:all": "npm run clean && rimraf node_modules app/node_modules"
}
```





### [akiratokunaga/electron-a](https://github.com/akiratokunaga/electron-a/tree/master/package.json)

> Electron application A

```json
{
"asar": false
}
```

```json
{
"start": "electron .",
"pack:darwin": "electron-packager . electron-a --out=dist --platform=darwin --arch=x64 --overwrite",
"pack:win32": "electron-packager . electron-a --out=dist --platform=win32 --arch=x64 --overwrite",
"build": "build"
}
```





### [CV-Blog/editor](https://github.com/CV-Blog/editor/tree/master/package.json)

> CV-Blog Editor

```json
{
"appId": "org.develar.CVBlogEditor",
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





### [alchaplinsky/carhunt](https://github.com/alchaplinsky/carhunt/tree/master/package.json)

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





### [alexbg/electronBoilerplate](https://github.com/alexbg/electronBoilerplate/tree/master/package.json)

> 

```json
{
"app-bundle-id": "your.id",
"app-category-type": "your.app.category.type",
"win": {
  "iconUrl": "(windows-only) https link to icon"
}
}
```

```json
{
"test": "gulp clean",
"start": "gulp",
"postinstall": "install-app-deps",
"pack": "build",
"dist": "build"
}
```





### [alexbg/planeText](https://github.com/alexbg/planeText/tree/master/package.json)

> 

```json
{
"app-bundle-id": "app",
"app-category-type": "Developer Tools",
"iconUrl": ""
}
```

```json
{
"test": "gulp clean",
"start": "gulp",
"pack": "build",
"dist": "build",
"app": "electron app"
}
```





### [alexbg/randomMessages](https://github.com/alexbg/randomMessages/tree/master/package.json)

> 

```json
{
"app-bundle-id": "app",
"app-category-type": "Developer Tools",
"iconUrl": ""
}
```

```json
{
"test": "gulp clean",
"start": "gulp",
"postinstall": "install-app-deps",
"pack": "build",
"dist": "build",
"app": "electron app"
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





### [59798/electron-builder-test](https://github.com/59798/electron-builder-test/tree/master/package.json)

> https://travis-ci.org/59798/electron-builder-test

```json
{
"app-bundle-id": "test.berabou.me",
"app-category-type": "public.app-category.entertainment",
"osx": {
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
"postinstall": "install-app-deps",
"prebuild": "npm run compile",
"build": "rimraf dist && build --platform win32 --platform darwin --arch all",
"compile": "babel src -d app/lib"
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





### [amitkothari/electron-tutorial](https://github.com/amitkothari/electron-tutorial/tree/master/package.json)

> Electron Tutorial 

```json
{
"appId": "com.amitkothari.electronsample",
"category": "public.app-category.productivity"
}
```

```json
{
"start": "electron .",
"test": "./node_modules/mocha/bin/mocha",
"pack": "build --dir",
"dist": "build"
}
```





### [ancasicolica/ZigBeeSiteSurveyApp](https://github.com/ancasicolica/ZigBeeSiteSurveyApp/tree/master/package.json)

> Check the ZigBee network data using MMBs RapidConnect

```json
{
"appId": "kusti.ch.zigbee.survey",
"app-category-type": "public.app-category.developer-tools",
"productName": "ZigBee Site Survey",
"win": {
  "iconUrl": "https://raw.githubusercontent.com/ancasicolica/ZigBeeSiteSurvey/master/public/favicon/favicon.ico",
  "target": "zip"
},
"mac": {
  "target": "dmg"
}
}
```

```json
{
"start": "electron .",
"server": "node server",
"postinstall": "install-app-deps",
"pack": "build --dir",
"dist": "build"
}
```





### [andypinet/electron-avalonweui-startkit](https://github.com/andypinet/electron-avalonweui-startkit/tree/master/package.json)

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





### [angernonus/stockr](https://github.com/angernonus/stockr/tree/master/package.json)

> Desktop application build with Electron

```json
{
"appId": "com.electron.stockr",
"category": "your.app.category.type",
"win": {
  "iconUrl": "https://github.com/railsware/bozon/blob/master/lib/templates/images/electron.ico?raw=true"
},
"mac": {
  "icon": "resources/icon.icns",
  "target": "dmg"
}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "node app/javascripts/main/index.js"
}
```





### [CatchLabs/Electron-App](https://github.com/CatchLabs/Electron-App/tree/master/package.json)

> Desktop App.

```json
{
"appId": "cc.catch.desktop"
}
```

```json
{
"start": "electron .",
"build": "build --linux --win --x64 --ia32"
}
```





### [anthli/clipt](https://github.com/anthli/clipt/tree/master/package.json)

> Cross platform clipboard history manager

```json
{
"appId": "com.anthli.clipt",
"mac": {
  "category": "public.app-category.productivity"
}
}
```

```json
{
"start": "electron .",
"rebuild": "./node_modules/.bin/electron-rebuild",
"pack": "build --dir",
"dist": "build"
}
```





### [aotarola/whiz](https://github.com/aotarola/whiz/tree/master/package.json)

> Elm POS

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





### [aperson11/electronAPP](https://github.com/aperson11/electronAPP/tree/master/package.json)

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





### [arivin29/tm_v4](https://github.com/arivin29/tm_v4/tree/master/package.json)

> sad asd asdasd 

```json
{
"appId": "your.id",
"category": "your.app.category.type",
"squirrelWindows": {
  "iconUrl": "https://github.com/arivin29/lcd/blob/master/icon.ico"
},
"directories": "MyApp"
}
```

```json
{
"start": "electron .",
"build": "electron-packager .  MyApp  --version=1.4.0 --arch=ia32 --platform=win32 build-version=1.1 --overwrite  --ignore=MyApp.app"
}
```





### [arnellebalane/music-player](https://github.com/arnellebalane/music-player/tree/master/package.json)

> music player built with web technologies

```json
{
"app-bundle-id": "com.arnellebalane.music-player",
"app-category-type": "public.app-category.entertainment",
"productName": "Music Player"
}
```

```json
{
"test": "echo \"Error: no test specified\" && exit 1",
"postinstall": "install-app-deps",
"pack": "build",
"dist": "build"
}
```





### [artsiomyemelyanenka/enbook2](https://github.com/artsiomyemelyanenka/enbook2/tree/master/package.json)

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





### [ashenwolf/yes-residental-real-estate](https://github.com/ashenwolf/yes-residental-real-estate/tree/master/package.json)

> 

```json
{
"osx": {
  "icon-size": 80,
  "background": "./build/real-estate.png",
  "contents": [
    {
      "x": 410,
      "y": 80,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 80,
      "type": "file",
      "path": ""
    }
  ]
}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "npm install && electron ./app",
"pack": "build",
"dist": "build",
"release": "build"
}
```





### [Chenimal/electron-demo](https://github.com/Chenimal/electron-demo/tree/master/package.json)

> Electron interactive API demos

```json
{
"appId": "your.id",
"app-category-type": "your.app.category.type"
}
```

```json
{
"b": "build --mac --dir",
"start": "electron .",
"dev": "electron . --debug",
"lint": "standard",
"test": "mocha tests && npm run lint",
"sign-exe": "signcode ./out/ElectronAPIDemos-win32-ia32/ElectronAPIDemos.exe --cert ~/electron-api-demos.p12 --prompt --name 'Electron API Demos' --url 'http://electron.atom.io'",
"sign-installer": "signcode ./out/windows-installer/ElectronAPIDemosSetup.exe --cert ~/electron-api-demos.p12 --prompt --name 'Electron API Demos' --url 'http://electron.atom.io'",
"pack-mac": "electron-packager . --asar --asar-unpack=protocol-link.html --overwrite --platform=darwin --arch=x64 --icon=assets/app-icon/mac/app.icns --prune=true --out=out --osx-sign.identity='Developer ID Application: GitHub' --extend-info=assets/mac/info.plist",
"pack-win": "electron-packager . ElectronAPIDemos --asar --asar-unpack=protocol-link.html --overwrite --platform=win32 --arch=ia32 --icon=assets/app-icon/win/app.ico --prune=true --out=out --version-string.CompanyName='GitHub, Inc.' --version-string.FileDescription='Electron API Demos' --version-string.ProductName='Electron API Demos'",
"pack-linux": "electron-packager . --asar --asar-unpack=protocol-link.html --overwrite --platform=linux --arch=x64 --icon=assets/app-icon/png/64.png --prune=true --out=out",
"package": "npm run pack-mac && npm run pack-win && npm run pack-linux",
"installer": "node ./script/installer.js",
"windows-store": "node ./script/windows-store.js",
"mas": "./script/mas.sh",
"prepare-release": "npm run package && npm run sign-exe && npm run installer && npm run sign-installer",
"release": "node ./script/release.js"
}
```





### [atiek/electron-redux-todo](https://github.com/atiek/electron-redux-todo/tree/master/package.json)

> 

```json
{
"appId": "Electron.Redux.Todo",
"app-category-type": "Utilities"
}
```

```json
{
"start": "npm run web-build && electron .",
"web-start": "webpack-dev-server --config webpack-dev-server.config.js --progress --inline --colors",
"web-build": "webpack --config webpack-production.config.js --progress --colors",
"clean": "rm -rf ./dist",
"pack": "npm run web-build && npm run clean && electron-packager . \"electron-redux-todo\" --out=dist/app --platform=darwin --arch=x64 --version=1.2.6 --icon=assets/osx/icon.icns --ignore=\"dist|assets\"",
"build": "npm run pack && build \"dist/app/electron-redux-todo-darwin-x64/electron-redux-todo.app\" --platform=osx",
"test": "mocha"
}
```





### [ChooChooShoe/lol-itemsets](https://github.com/ChooChooShoe/lol-itemsets/tree/master/package.json)

> A standalone Itemset builder for League of Legends

```json
{
"appId": "lol.itemsets.app",
"app-category-type": "",
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





### [avarnell/ChristmasContacts](https://github.com/avarnell/ChristmasContacts/tree/master/package.json)

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





### [awinogradov/electro-buggy](https://github.com/awinogradov/electro-buggy/tree/master/package.json)

> React Electron boilerplate

```json
{
"appId": "com.example.electron-boilerplate",
"category": "your.app.category.type",
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
"server": "NODE_ENV=development node -r babel-register config/development/server.js",
"hot": "HOT=1 NODE_ENV=development electron -r babel-register -r babel-polyfill .",
"start": "concurrently --kill-others \"npm run server\" \"npm run hot\"",
"build-server": "NODE_ENV=production node -r babel-register ./node_modules/webpack/bin/webpack --config config/electron/webpack.js --progress --profile --colors",
"build-ui": "NODE_ENV=production node -r babel-register ./node_modules/webpack/bin/webpack --config config/production/webpack.js  --progress --profile --colors",
"build": "npm run build-server && npm run build-ui",
"release": "NODE_ENV=production npm run build && build --x64 --publish never"
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





### [bars66/NNP_Project_Client](https://github.com/bars66/NNP_Project_Client/tree/master/package.json)

> Build NNP-VPN-Launcher

```json
{
"app-bundle-id": "com.bars66.vpn.launcher",
"app-category-type": "com.bars66.vpn",
"win": {
  "iconUrl": "https://vpn.bars66.com/icon.ico",
  "msi": true
},
"asar": false
}
```

```json
{
"test": "echo \"Error: no test specified\" && exit 1",
"postinstall": "install-app-deps",
"pack": "build --target dir",
"dist:darwin": "cd ./bin/darwin_bin/ && zip -r ./darwin_bin.zip ./* && mv ./darwin_bin.zip ../../app/ && cd ../../ && build --osx && rm ./app/darwin_bin.zip",
"dist:win32": "cd ./bin/win32_bin/ && zip -r ./win32_bin.zip ./* && mv ./win32_bin.zip ../../app/ && cd ../../ && build --win --ia32 && rm ./app/win32_bin.zip",
"dist:win64": "build --platform win32 --arch x64"
}
```





### [bcalegaro/ionic-electron-template](https://github.com/bcalegaro/ionic-electron-template/tree/master/package.json)

> Project X - Develope with frameworks: Ionic, Electron. Tests Framework: Karma

```json
{
"app-bundle-id": "com.br.bruno.projectx",
"app-category-type": "public.app-category.productivity",
"iconUrl": "http://eatodo.s3.amazonaws.com/icon.ico"
}
```

```json
{
"gulp": "./node_modules/.bin/gulp",
"install": "napa",
"dist": "npm run dist:win64",
"dist:win64": "build --platform win32 --arch x64"
}
```





### [bclynch/electron-video-recorder](https://github.com/bclynch/electron-video-recorder/tree/master/package.json)

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





### [bensherlock/paper-notes](https://github.com/bensherlock/paper-notes/tree/master/package.json)

> Paper. Notes.

```json
{
"app-bundle-id": "paper-notes",
"app-category-type": "public.app-category.business",
"osx": {
  "title": "Paper-Notes",
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
"pack:osx": "build --darwin",
"pack:win": "npm run pack:win64 && npm run pack:win32",
"pack:win32": "build --win --ia32",
"pack:win64": "build --win --x64",
"pack:linux": "npm run pack:lin64 && npm run pack:lin32",
"pack:lin32": "build --linux --ia32",
"pack:lin64": "build --linux --x64",
"pack": "build --platform=all --arch=x64,ia32",
"prebuild": "node build/target.js",
"postbuild": "node build/target.js --clean",
"prebuild:osx": "npm run prebuild",
"postbuild:osx": "npm run postbuild",
"build:osx": "build --darwin --dir",
"build:win": "npm run build:win64 && npm run build:win32",
"build:win32": "build --win --ia32 --dir",
"build:win64": "build --win --x64 --dir",
"build:linux": "npm run build:lin64 && npm run build:lin32 -d",
"build:lin32": "build --linux --ia32 --dir",
"build:lin64": "build --linux --x64 --dir",
"build": "build --platform=all --arch=x64,ia32 -d",
"postinstall": "install-app-deps"
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





### [Coderoversially/ju-train](https://github.com/Coderoversially/ju-train/tree/master/package.json)

> Ju-jutsu Training Assistant

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





### [Coderoversially/strategygame](https://github.com/Coderoversially/strategygame/tree/master/package.json)

> Project Homepage

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





### [CoolPodCast/playerDesktop](https://github.com/CoolPodCast/playerDesktop/tree/master/package.json)

> Simple player desktop podcast 

```json
{
"appId": "com.coolpodcast.player",
"app-category-type": "player.music",
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





### [CraigglesO/Stock-feed](https://github.com/CraigglesO/Stock-feed/tree/master/package.json)

> My reverseEngineered 

```json
{
"appId": "rugged-programming.twitter-client",
"mac": {
  "category": "public.app-category.productivity"
}
}
```

```json
{
"test": "xo",
"start": "electron .",
"debug": "electron --debug=5858 .",
"build": "electron-packager . --out=dist --asar --overwrite --all",
"dist": "build --mac"
}
```





### [bradwoo8621/owl](https://github.com/bradwoo8621/owl/tree/master/package.json)

> Designer for Nest Parrot

```json
{
"appId": "com.github.bradwoo8621.owl",
"category": "public.app-category.developer-tools",
"win": {
  "iconUrl": "https://github.com/bradwoo8621/owl/blob/master/app/assets/app-icon/win/app.ico?raw=true"
}
}
```

```json
{
"start": "electron .",
"dev": "electron . --debug",
"now": "electron . --trailer",
"pack": "build --dir",
"dist": "build",
"update-parrot": "npm install nest-parrot2 --save"
}
```





### [Crecket/node-chat-client](https://github.com/Crecket/node-chat-client/tree/master/package.json)

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
"postinstall": "install-app-deps && cd app && bower install",
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





### [CrescendoProject/desktop](https://github.com/CrescendoProject/desktop/tree/master/package.json)

> Managment system for android devices

```json
{
"appId": "crescendo",
"category": "management",
"win": {
  "iconUrl": ""
}
}
```

```json
{
"test": "./node_modules/.bin/electron .",
"electron-build": "./node_modules/.bin/build"
}
```





### [brjosue73/funidas](https://github.com/brjosue73/funidas/tree/master/package.json)

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





### [cafeparadox/laser](https://github.com/cafeparadox/laser/tree/master/package.json)

> A simple productivity app that combines a task list with tools for using the pomorodo technique.

```json
{
"app-bundle-id": "com.cafeparadox.Laser",
"app-category-type": "public.app-category.productivity"
}
```

```json
{
"postinstall": "install-app-deps",
"pack": "build",
"dist": "build",
"start": "electron app",
"test": "echo \"Error: no test specified\" && exit 1"
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





### [can3p/perlotto](https://github.com/can3p/perlotto/tree/master/package.json)

> Minimal google music player

```json
{
"appId": "com.can3p.perlotto",
"productName": "Perlotto",
"mac": {
  "category": "public.app-category.music"
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





### [carlcraig/electron-tray-boilerplate](https://github.com/carlcraig/electron-tray-boilerplate/tree/master/package.json)

> Electron Tray Boilerplate

```json
{
"appId": "electron.tray.boilerplate",
"category": "electron.tray.boilerplate",
"win": {},
"squirrelWindows": {
  "iconUrl": "https://github.com/carlcraig/electron-tray-boilerplate/blob/master/build/icon.ico?raw=true",
  "msi": true,
  "useAppIdAsId": true
}
}
```

```json
{
"start": "npm run sass && npm run sass -- -w",
"sass": "./node_modules/.bin/node-sass app/tray/scss -o app/tray/css --source-map true --output-style compressed",
"dev": "npm run electron",
"pack": "build --win --dir",
"dist": "build --win --x64",
"postinstall": "install-app-deps",
"electron": "./node_modules/.bin/electron app/ --dev"
}
```





### [casperstorm/preme-bot](https://github.com/casperstorm/preme-bot/tree/master/package.json)

> A simpel bot to grab new Supreme cloth

```json
{
"asar": false,
"appId": "org.develar.onshape",
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
}
}
```

```json
{
"start": "electron .",
"compile": "rimraf app/out && tsc",
"pack": "npm run compile && build --dir",
"dist": "npm run compile && build"
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





### [cdiezmoran/Gamedock-desktop](https://github.com/cdiezmoran/Gamedock-desktop/tree/master/package.json)

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





### [cfrazierdev/testMatrixGen](https://github.com/cfrazierdev/testMatrixGen/tree/master/package.json)

> Regression Test Matrix Generator

```json
{
"appId": "regressionTestMatrixGenerator",
"app-category-type": "utility",
"productName": "Regression Test Matrix Generator",
"win": {
  "icon": "./favicon.ico"
}
}
```

```json
{
"postinstall": "install-app-deps",
"pack": "gulp build && build --dir",
"dist": "gulp build && build",
"dist-mwl": "gulp build && build -mwl"
}
```





### [cgenin/blitzr-app-desktop](https://github.com/cgenin/blitzr-app-desktop/tree/master/package.json)

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





### [DKunin/mtg-collector-app](https://github.com/DKunin/mtg-collector-app/tree/master/package.json)

> Desktop application build with Electron

```json
{
"appId": "your.id",
"app-category-type": "your.app.category.type",
"win": {
  "iconUrl": "https://github.com/railsware/bozon/blob/master/lib/templates/images/electron.ico?raw=true"
},
"mac": {
  "icon": "resources/icon.icns",
  "target": "dmg"
}
}
```

```json
{
"postinstall": "install-app-deps",
"test": "./node_modules/.bin/_mocha ./tests/*.spec.js  --compilers js:babel-core/register",
"test:watch": "./node_modules/.bin/_mocha ./tests/*.spec.js  --compilers js:babel-core/register --watch"
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





### [chrisuehlinger/break-time](https://github.com/chrisuehlinger/break-time/tree/master/package.json)

> Free, cross platform RSI relief software

```json
{
"win": {
  "iconUrl": "https://pbs.twimg.com/profile_images/760645731841474560/vQOA1wRT_400x400.jpg",
  "msi": false
}
}
```

```json
{
"install": "cd app && npm i",
"test": "xo",
"start": "electron app",
"dist": "build --win --x64",
"build": "electron-packager ./app --out=dist --version=1.3.3 --app-version=$npm_package_version --prune --asar --overwrite --all"
}
```





### [chung-nguyen/caffeine](https://github.com/chung-nguyen/caffeine/tree/master/package.json)

> Lightweight cross-platform framework to create native app using Javascript.

```json
{
"appId": "com.caffeine.editor",
"app-category-type": "public.app-category.productivity",
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





### [circus-village/publisher](https://github.com/circus-village/publisher/tree/master/package.json)

> Circus village website publisher

```json
{
"appId": "circus-village.com",
"app-category-type": "public.app-category.developer-tools"
}
```

```json
{
"clean": "rm -rf dist",
"postinstall": "install-app-deps",
"pack": "build",
"dist": "build",
"lint": "jshint app && jscs app"
}
```





### [cjerrington/TodoList](https://github.com/cjerrington/TodoList/tree/master/package.json)

> Simple Todo List

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





### [codyborn/notegami_electron](https://github.com/codyborn/notegami_electron/tree/master/package.json)

> A minimalistic note taking application

```json
{
"appId": "notegami",
"app-category-type": "public.app-category.productivity",
"dmg": {},
"win": {
  "iconUrl": "http://notegami.com/Views/Images/fav_icon.ico",
  "loadingGif": "build/loading.gif",
  "authors": "Cody Born"
}
}
```

```json
{
"dev": "electron . --enable-logging",
"clean": "rm ./dist",
"clean:osx": "rm ./dist/osx",
"clean:win": "rm ./dist/win",
"pack": "npm run clean && npm run pack:osx && npm run pack:win",
"pack:osx": "npm run clean:osx && electron-packager . \"Notegami\" --out=dist/osx --platform=darwin --arch=x64 --icon=assets/app_icon.icns --ignore=dist --ignore=assets --ignore=builder.json --ignore=.gitignore",
"pack:win": "electron-packager . \"Notegami\" --out=dist/win --platform=win32 --arch=x64 --overwrite --appname \"Notegami\" --icon=assets/app_icon.ico --ignore=dist --ignore=assets --ignore=builder.json",
"build": "npm run build:osx && npm run build:win",
"build:osx": "npm run pack:osx && electron-builder \"dist/osx/Notegami-darwin-x64/Notegami.app\" --platform=osx --out=\"dist/osx\" --config=builder.json",
"build:win": "electron-builder \"dist/win/Notegami-win32-x64\" --platform=win --out=\"dist/win\" --config=builder.json",
"dist": "build -w --x64"
}
```





### [collinmutembei/scaling-waffle](https://github.com/collinmutembei/scaling-waffle/tree/master/package.json)

> Desktop application build with Electron

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





### [conradoplg/quiriquiri](https://github.com/conradoplg/quiriquiri/tree/master/package.json)

> QuiriQuiri: a Twitter client

```json
{
"appId": "net.cryptoland.quiriquiri",
"category": "Network"
}
```

```json
{
"test": "./node_modules/.bin/mocha --reporter spec -r test/setup.js",
"start": "electron .",
"format": "find . -path ./node_modules -prune -o -name '*.js' -print | xargs js-beautify -r -n",
"pack": "build --dir",
"dist": "build --linux --win --x64"
}
```





### [copernicus-mogley/alexandria-raw](https://github.com/copernicus-mogley/alexandria-raw/tree/master/package.json)

> A stripped-down Alexandria application

```json
{
"appId": "com.alexandria.raw",
"category": "public.app-category.entertainment"
}
```

```json
{
"start": "electron ."
}
```





### [cosmosgenius/electron-leveldb](https://github.com/cosmosgenius/electron-leveldb/tree/master/package.json)

> Sample electron leveldb app

```json
{
"appId": "com.cosmosgenius.sampleelectronleveldb",
"app-category-type": "public.app-category.developer-tools",
"asar": false
}
```

```json
{
"test": "echo \"Error: no test specified\" && exit 1",
"start": "electron app",
"postinstall": "install-app-deps"
}
```





### [cosmosgenius/leveladmin](https://github.com/cosmosgenius/leveladmin/tree/master/package.json)

> 

```json
{
"appId": "com.cosmosgenius.leveladmin",
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





### [cwoodruff/ChinookElectron](https://github.com/cwoodruff/ChinookElectron/tree/master/package.json)

> 

```json
{
"appId": "com.chriswoodruff.chinookElectron",
"app-category-type": "",
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





### [danielsneijers/notebooq](https://github.com/danielsneijers/notebooq/tree/master/package.json)

> Markdown note taking for developers

```json
{
"appId": "com.danielsneijers.Noteboque",
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
"start": "NODE_ENV=development concurrently -k 'babel-node server.js' 'electron .'",
"lint": "npm run lint:css && npm run lint:js",
"lint:js": "eslint ./",
"lint:css": "stylelint './src/**/*.css'",
"test": "npm run lint && BABEL_DISABLE_CACHE=1 NODE_ENV=test NODE_PATH='src/js' istanbul cover --colors  _mocha -- --require './test/setup.js' --compilers js:babel-register --recursive 'src/**/*.test.js'",
"test:watch": "BABEL_DISABLE_CACHE=1 NODE_ENV=test NODE_PATH='src/js' mocha 'src/js/**/*.test.js' --recursive --require './test/setup.js' --compilers js:babel-register --watch",
"build": "webpack --config webpack.config.production.js",
"package": "npm run build && build --publish never"
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





### [dasrick/tox-electron-basic](https://github.com/dasrick/tox-electron-basic/tree/master/package.json)

> basic stuff for a electron based app

```json
{
"appId": "de.dasrick.tox-electron-basic",
"category": "public.app-category.social-networking"
}
```

```json
{
"postinstall": "install-app-deps",
"pack": "build --dir",
"dist": "build -mwl",
"test": "echo \"Error: no test specified\" && exit 1",
"start": "electron ./app --enable-logging",
"dev": "NODE_ENV='development' npm run start",
"build": "grunt"
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





### [DeDop/dedop-studio](https://github.com/DeDop/dedop-studio/tree/master/package.json)

> DeDop Studio

```json
{
"appId": "org.esa.dedop-studio",
"app-category-type": "app.category.altimetry",
"win": {
  "target": [
    "nsis",
    "zip"
  ],
  "icon": "app/resources/win32/dedop.ico"
},
"nsis": {
  "oneClick": true,
  "installerHeaderIcon": "app/resources/win32/dedop.ico"
},
"mac": {
  "icon": "app/resources/darwin/dedop.icns"
},
"dmg": {
  "icon": "app/resources/darwin/dedop.icns"
}
}
```

```json
{
"start": "electron app",
"test:e2e": "mocha e2e/**/*-test.js",
"pretest": "npm run compile",
"test": "mocha app/main/**/*.spec.js app/renderer/**/*.spec.js",
"postinstall": "install-app-deps",
"compile": "tsc",
"compile:trace": "tsc --traceResolution",
"dist": "build --x64 --publish never",
"pack": "build --x64 --publish never --dir",
"clean": "rimraf app/main app/renderer dist",
"clean:all": "npm run clean && rimraf node_modules app/node_modules"
}
```





### [datitisev/DiscordBotsApp](https://github.com/datitisev/DiscordBotsApp/tree/master/package.json)

> An app to manage your discord bots and see their logs!

```json
{
"appId": "sevillamartin.david.discordbotsapp",
"mac": {
  "category": "public.app-category.utilities"
},
"windows": {
  "icon": "./dist/icon.ico"
},
"dmg": {
  "contents": [
    {
      "x": 130,
      "y": 220
    },
    {
      "x": 410,
      "y": 220,
      "type": "link",
      "path": "/Applications"
    }
  ]
},
"linux": {
  "target": "deb tar.xz",
  "category": "Development"
}
}
```

```json
{
"start": "electron ./app",
"postinstall": "install-app-deps",
"pack": "build --dir",
"dist": "build --mac --linux"
}
```





### [dawehner/muonpng](https://github.com/dawehner/muonpng/tree/master/package.json)

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





### [dcritchlow/electron-photo-app](https://github.com/dcritchlow/electron-photo-app/tree/master/package.json)

> Photobooth app

```json
{
"appId": "com.darincritchlow.photobombth",
"app-category-type": "public.app-category.entertainment",
"win": {
  "iconUrl": ""
}
}
```

```json
{
"build": "rimraf Photobombth-* && electron-packager . --platform=darwin,win32,linux --arch=x64 --icon=app",
"pack": "build --dir",
"dist": "build",
"start": "electron ."
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





### [defr8541/email](https://github.com/defr8541/email/tree/master/package.json)

> email

```json
{
"appId": "com.beatplus.pronmail-desktop",
"iconUrl": "https://raw.githubusercontent.com/BeatPlus/Protonmail/master/build/Icon.ico"
}
```

```json
{
"postinstall": "cd app && npm install",
"pack": "build",
"dist": "build",
"dist:linux32": "build --linux --ia32",
"dist:linux64": "build  --linux --x64",
"dist:win32": "build --windows --ia32",
"dist:win64": "build --windows --x64",
"dist:osx": "build --osx",
"test": "xo app",
"start": "electron app"
}
```





### [dfrankland/nginx-indicator](https://github.com/dfrankland/nginx-indicator/tree/master/package.json)

> Indicator for Nginx server, click to start "nginx" process.

```json
{
"appId": "co.dfrankland.nginx-indicator",
"mac": {
  "category": "public.app-category.developer-tools"
}
}
```

```json
{
"start": "electron .",
"build": "build -ml"
}
```





### [digiwombat/WorldMuncher](https://github.com/digiwombat/WorldMuncher/tree/master/package.json)

> A cross-platform World Building program.

```json
{
"asar": false,
"compression": "maximum",
"appId": "org.digiwombat.worldmuncher",
"category": "public.app-category.productivity",
"fileAssociations": [
  {
    "ext": "wmnch",
    "name": "WorldMuncher File"
  }
],
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
  "target": "nsis"
},
"linux": {
  "target": [
    "AppImage",
    "deb"
  ]
},
"mac": {
  "category": "public.app-category.productivity"
}
}
```

```json
{
"start": "electron index.js",
"pack": "build --dir",
"dist": "build"
}
```





### [dmnevius/HangoutsTools](https://github.com/dmnevius/HangoutsTools/tree/master/package.json)

> Tools for Google Hangouts

```json
{
"appId": "net.dmnevius.hangoutstools",
"productName": "HangoutsTools",
"mac": {
  "category": "Utilities",
  "target": "zip"
},
"win": {
  "target": "zip"
},
"linux": {
  "category": "Utility",
  "target": "tar.gz",
  "desktop": {
    "Name": "Hangouts Tools",
    "Exec": "hangouts-tools",
    "Icon": "hangouts-tools",
    "Type": "Application",
    "Categories": "Utility;"
  }
}
}
```

```json
{
"test": "echo \"Error: no test specified\" && exit 1",
"update": "git pull && npm install",
"run": "electron .",
"pack": "./node_modules/.bin/build --dir",
"dist": "./node_modules/.bin/build -mwl --x64"
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





### [DiePille/electron-desktop-notifier](https://github.com/DiePille/electron-desktop-notifier/tree/master/package.json)

> Small desktop application that send and receive messages als desktop balloon/notification

```json
{
"appId": "com.diepille.desktopnotifier",
"productName": "DesktopNotifier",
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
  "category": "public.app-category.business"
},
"linux": {
  "category": "Messanger"
},
"win": {}
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
"clean:linux": "rimraf dist/linux* dist/*.deb dist/*.AppImage",
"clean:osx": "rimraf dist/mac",
"clean:win": "rimraf dist/win*",
"clean": "npm run clean:linux && npm run clean:win && npm run clean:osx",
"pack:osx": "build --dir --mac",
"pack:win": "build --dir --win --x64",
"pack:linux": "build --dir --linux --x64",
"pack": "build --dir",
"prebuild": "node build/target.js",
"build:osx": "npm run prebuild && build --mac && npm run postbuild",
"build:win": "npm run prebuild && build --win --x64 && npm run postbuild",
"build:linux": "npm run prebuild && build --linux deb AppImage --x64 && npm run postbuild",
"build": "build",
"postbuild": "node build/target.js --clean",
"postinstall": "install-app-deps"
}
```





### [domschiener/light-wallet-packager](https://github.com/domschiener/light-wallet-packager/tree/master/package.json)

> Packager for IOTA light wallet.

```json
{
"appId": "com.iotatoken.wallet",
"app-category-type": "public.app-category.developer-tools",
"extraResources": [
  "IRI/**/*",
  "ui/**/*"
],
"extend-info": "mac-info.plist",
"dmg": {
  "icon-size": 125,
  "contents": [
    {
      "x": 235,
      "y": 290,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 235,
      "y": 20,
      "type": "file"
    }
  ]
},
"win": {
  "target": "nsis"
},
"linux": {
  "target": [
    "AppImage",
    "deb",
    "rpm",
    "tar.gz"
  ],
  "packageUrl": "https://www.iotatoken.com/"
}
}
```

```json
{
"postinstall": "install-app-deps && cd ./wallet/app && bower install && cd ../ui && bower install",
"start": "electron ./wallet --enable-logging --dev",
"dev": "export NODE_ENV=development || set NODE_ENV=development && npm run start",
"predist": "rm -rf packager/dist/*",
"dist": "export CSC_IDENTITY_AUTO_DISCOVERY=false && build --win --mac --linux --x64 --ia32",
"dist:lin": "build --linux --x64 --ia32",
"dist:mac": "export CSC_IDENTITY_AUTO_DISCOVERY=false && build --mac --x64",
"dist:win": "build --win --x64 --ia32",
"dist:win64": "build --win --x64",
"dist:win32": "build --win --ia32",
"prerelease:mac": "mkdirp packager/release/mac",
"release:mac": "cp -rv packager/dist/mac/*.{dmg,zip} packager/release/mac && PACKAGE_VERSION=$(cat wallet/package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]') && printf $PACKAGE_VERSION >> ./packager/release/mac/VERSION",
"prerelease:win32": "mkdirp packager/release/win32",
"release:win32": "cp -v packager/dist/win-ia32/{RELEASES,*.nupkg,*.exe} packager/release/win32",
"prerelease:win64": "mkdirp packager/release/win64",
"release:win64": "cp -v packager/dist/win/{RELEASES,*.nupkg,*.exe} packager/release/win64",
"prerelease:lin": "mkdirp packager/release/lin/",
"release:lin": "cp -v packager/dist/*.{deb,rpm,tar.gz,sh} packager/release/lin",
"prerelease": "rm -rf packager/release/*",
"release": "npm run release:mac && npm run release:win32 && npm run release:win64 && npm run release:lin",
"all": "npm run dist && npm run release"
}
```





### [dustintownsend/volt](https://github.com/dustintownsend/volt/tree/master/package.json)

> Electron boilerplate

```json
{
"appId": "org.dustintownsend.electron-volt",
"app-category-type": "public.app-category.developer-tools",
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
  "iconUrl": "",
  "remoteReleases": false
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
"app-install": "cd app && npm install --no-optional",
"postinstall": "npm run app-install",
"build": "babel src -D -d app/build",
"start": "npm run build && electron app/",
"dist:mac": "npm run build && build",
"dist:win": "npm run build && build --win --x64"
}
```





### [dyammarcano/electron-angular2-structure](https://github.com/dyammarcano/electron-angular2-structure/tree/master/package.json)

> 

```json
{
"productName": "Dashboard Admin",
"compression": "maximun",
"appId": "your.id",
"app-category-type": "your.app.category.type",
"win": {
  "iconUrl": "(windows-only) https link to icon"
},
"linux": {
  "target": "AppImage"
}
}
```

```json
{
"start": "electron ./build/",
"postinstall": "typings install",
"build": "electron-packager ./build --app-version=$npm_package_version --asar --platform=all --arch=all --out=dist --overwrite --prune --version='1.3.1'",
"ci": "node test.js"
}
```





### [dyammarcano/electron-project](https://github.com/dyammarcano/electron-project/tree/master/package.json)

> MyApp

```json
{
"appId": "your.id",
"app-category-type": "your.app.category.type",
"win": {
  "iconUrl": "https://raw.githubusercontent.com/dyammarcano/electron-project/master/resources/icon/app.ico?raw=true"
}
}
```

```json
{
"rimraf": "rimraf",
"view:dev": "npm run rimraf -- tmp && npm run gulp:dev && NODE_ENV=development electron --debug tmp/ -r",
"view:prod": "npm run rimraf -- dist && npm run gulp:prod && electron dist/",
"gulp:dev": "gulp dev",
"gulp:prod": "gulp prod",
"build": "npm run clean && gulp build",
"clean": "npm run rimraf -- dist package",
"clean:install": "npm set progress=false && npm install",
"clean:env": "npm cache clean && npm run rimraf -- node_modules dist npm run clean:install",
"package:all": "npm run build && npm run package:linux && npm run package:mac && npm run package:win",
"package:linux": "electron-packager ./dist $npm_package_productName --app-version=$npm_package_version --asar=true --platform=linux --arch=all --out=package/linux --icon=icon/app.png --overwrite --prune --version='1.3.1'",
"package:mac": "electron-packager ./dist $npm_package_productName --app-version=$npm_package_version --asar=true --platform=darwin --arch=all --sign='Developer ID Application: My Company Ltd (ABCDEFGH10)' --out=package/mac --icon=icon/app.icns --overwrite --prune --version='1.3.1'",
"package:win": "electron-packager ./dist $npm_package_productName --app-version=$npm_package_version --asar=true --platform=win32 --arch=all --version-string.CompanyName='My Company Ltd' --version-string.LegalCopyright='Copyright (C) 2016 My Company Ltd' --version-string.FileDescription=$npm_package_productName --version-string.OriginalFilename='MyApp.exe' --version-string.InternalName=$npm_package_productName --version-string.ProductName=$npm_package_productName --version-string.ProductVersion=$npm_package_version --out=package/win --icon=icon/app.ico --overwrite --prune --version='1.3.1'"
}
```





### [DmytroVasin/TimeTracker](https://github.com/DmytroVasin/TimeTracker/tree/master/package.json)

> App is based on Electron, React, Redux + Rails as a back end.

```json
{
"asar": false,
"appId": "hr.creaticon.eatodo",
"category": "public.app-category.productivity",
"dmg": {
  "title": "Time Tracker Installation",
  "contents": [
    {
      "x": 410,
      "y": 125,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 130,
      "y": 125,
      "type": "file"
    }
  ]
}
}
```

```json
{
"clean": "rm -rf app/electron-app/ && rm -rf app/browser-app/ && rm -rf dist/",
"browser": "NODE_ENV=development webpack-dev-server --config webpack.config.js --hot --inline",
"electron": "NODE_ENV=development electron ./electron-app/js/index.js",
"postinstall": "install-app-deps",
"publish:browser": "webpack --config webpack.config.pro.js",
"publish:electron": "cp -R electron-app/ app/electron-app/",
"publish:osx": "build --x64",
"publish:dist": "npm run clean && npm run publish:browser && npm run publish:electron && npm run publish:osx"
}
```





### [Dpblandin/bstalk-gui](https://github.com/Dpblandin/bstalk-gui/tree/master/package.json)

> Electron app for deploying beanstalk projects

```json
{
"appId": "com.dpblandin.b",
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
"test": "echo \"Error: no test specified\" && exit 1",
"postinstall": "install-app-deps",
"start": "gulp start",
"prerelease": "gulp build --env=production",
"release": "build --x64 --publish never"
}
```





### [emibia/Jadevine](https://github.com/emibia/Jadevine/tree/master/package.json)

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
"buildts": "gulp ts",
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





### [epezhman/demand-manager-app](https://github.com/epezhman/demand-manager-app/tree/master/package.json)

> i13 Demand Manager for Computers.

```json
{
"appId": "de.tum.i13dmdesktop",
"app-category-type": "public.app-category.utilities",
"iconUrl": "https://s3.eu-central-1.amazonaws.com/demand-manager-resources/icons/icon.ico",
"files": [
  "**/*",
  "!assets/stylesheets/sass"
],
"linux": {
  "synopsis": "i13 Demand Manager",
  "target": [
    "deb"
  ]
},
"dmg": {
  "title": "i13 Demand Manager",
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
"start": "electron ./app --remote-debugging-port=9222",
"dev:win": "set NODE_ENV=development&& npm start",
"dev:linux": "NODE_ENV=development npm start",
"reload": "live-reload app --port 35729",
"rebuild": "electron-rebuild && electron-rebuild -f -w @paulcbetts/system-idle-time"
}
```





### [ericoloewe/pdi-playground](https://github.com/ericoloewe/pdi-playground/tree/master/package.json)

> A smart photoshop created in a class

```json
{
"appId": "processamento-digital-de-imagens",
"app-category-type": "public.picture.image.class",
"copyright": "© 2016 Érico de Souza Loewe",
"asar": false,
"productName": "PDI Playground",
"files": [
  "**/*"
],
"squirrelWindows": {
  "iconUrl": "https://raw.githubusercontent.com/ericoloewe/pdi-playground/transform/app/media/img/pdi.ico"
},
"win": {
  "iconUrl": "./app/media/img/pdi.ico"
},
"mac": {
  "app-category-type": "public.picture.image.class",
  "target": "dmg"
},
"linux": {
  "category": "Utility",
  "target": [
    "deb"
  ]
}
}
```

```json
{
"start": "gulp build && electron . --enable-logging",
"postinstall": "install-app-deps",
"dev": "NODE_ENV='development' npm run start",
"dist": "build --x64",
"dist-win": "build --win",
"dist-linux": "build --linux",
"dist-mac": "build --mac"
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





### [espresso-apps/tellyprompt](https://github.com/espresso-apps/tellyprompt/tree/master/package.json)

> Simple, Free Teleprompter Software

```json
{
"appId": "com.espresso-apps.tellyprompt",
"category": "public.app-category.productivity",
"productName": "TellyPrompt",
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
  "iconUrl": "https://github.com/espresso-apps/tellyprompt/blob/master/build/icon.ico?raw=true",
  "remoteReleases": "https://github.com/espresso-apps/tellyprompt",
  "publish": [
    "github"
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
"start": "npm install && electron ./app --enable-logging",
"dev": "NODE_ENV='development' npm run start",
"pack": "build --dir",
"dist-all": "build -mwl --x64 --ia32",
"dist-win": "build -w --x64 --ia32",
"dist-mac": "build -m --x64",
"dist-linux": "build -l --x64 --ia32"
}
```





### [Echo-Peak/Web-dev-kit](https://github.com/Echo-Peak/Web-dev-kit/tree/master/package.json)

> Generate build systems and manage them using one interface

```json
{
"appId": "WDK-f85336",
"productName": "Web Dev Kit",
"app-category-type": "entertainement",
"win": {
  "icon": "https://f4.bcbits.com/img/a3852017470_7.jpg",
  "loadingGif": "https://f4.bcbits.com/img/a3852017470_7.jpg",
  "msi": false,
  "target": "squirrel"
}
}
```

```json
{
"generate": "node scripts/generate-src.s",
"start": "gulp init",
"merge": "node scripts/merge.js",
"packager": "node scripts/packager.js",
"postinstall": "node scripts/install-platfom-installer.js",
"host": "node scripts/firebase-hosting.js",
"backup": "node scripts/backup-service.js npm"
}
```





### [extr0py/jshotkey](https://github.com/extr0py/jshotkey/tree/master/package.json)

> AutoHotKey-like tool, powered by Electron, scriptable in JavaScript

```json
{
"appId": "com.extropy.jshotkey",
"category": "public.app-category.developer-tools"
}
```

```json
{
"test": "npm run test",
"start": "electron app",
"pack": "build --dir",
"dist": "build"
}
```





### [fa7ad/nfeh](https://github.com/fa7ad/nfeh/tree/master/package.json)

> Tiny GUI for feh

```json
{
"appId": "gq.fahad.nfeh",
"category": "public.app-category.utilities",
"asar": true,
"license": "MIT",
"files": [
  "css/**",
  "js/**",
  "lib/**",
  "index.html",
  "main.js",
  "package.json"
],
"icon": "icon.icns",
"directories": {
  "buildResources": "."
},
"linux": {
  "category": "Utility",
  "depends": [
    "feh",
    "bash"
  ],
  "target": "pacman",
  "desktop": {
    "Name": "nfeh",
    "Exec": "nfeh",
    "Icon": "nfeh",
    "Type": "Application",
    "Categories": "Utility;"
  }
}
}
```

```json
{
"start": "electron .",
"prebuild": "rm -rfv dist && echo Cleaned old dist && npm run bundle:prod",
"build": "build --linux pacman deb AppImage",
"postbuild": "rename-files ./dist '.pacman' '.tar.xz'",
"bundle": "webpack --progress",
"bundle:run": "webpack --progress && npm start",
"bundle:prod": "env NODE_ENV=production webpack --progress",
"bundle:watch": "webpack --progress --watch",
"test": "standard --parser babel-eslint src/**/*.js --verbose | snazzy"
}
```





### [fbmfbm/pppi_prev](https://github.com/fbmfbm/pppi_prev/tree/master/package.json)

> PPPI prevue version for test

```json
{
"appId": "fbm.id",
"category": "gouvernement"
}
```

```json
{
"test": "karma start ",
"clean": "rm -rf dist/",
"build": "npm run clean && webpack -p --progress",
"dev": "webpack-dev-server --devtool eval --online --hot --progress",
"electron": "npm run build && node_modules/electron/dist/Electron.app/Contents/MacOS/Electron dist/electron_entry.js",
"pack:osx": "cp dist/** app/ && electron-packager app/ fbmapp --platforme=osx --overwrite --version=1.0.0"
}
```





### [fernandoj92/ltm-learning-interface](https://github.com/fernandoj92/ltm-learning-interface/tree/master/package.json)

> Application interface for working with the ltm-learning-server

```json
{
"appId": "research.ferjorosa.ltm-learning-interface",
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
"start": "tsc && concurrently \"npm run tsc:w\" \"electron .\" ",
"tsc": "tsc",
"tsc:w": "tsc -w",
"typings": "typings",
"postinstall": "typings install",
"pack": "build --dir",
"dist": "build -mwl --x64 --ia32"
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





### [fwrgit/retcher](https://github.com/fwrgit/retcher/tree/master/package.json)

> GUI for easily create boot media directly from resin.io applications

```json
{
"appDir": "nope",
"app-bundle-id": "it.fwr.retcher",
"app-category-type": "public.app-category.utilities",
"osx": {
  "title": "Retcher",
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
"postinstall": "bower i",
"start": "./node_modules/.bin/electron .",
"test": "echo \"Error: no test specified\" && exit 1",
"pack": "build",
"dist": "build"
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





### [gauravsoni119/random-dialog-code](https://github.com/gauravsoni119/random-dialog-code/tree/master/package.json)

> show random dialog box

```json
{
"appId": "1.0.0",
"app-category-type": "win32",
"win": {
  "iconUrl": "F:/random_dialog/icon.ico"
}
}
```

```json
{
"test": "echo \"Error: no test specified\" && exit 1",
"postinstall": "install-app-deps",
"pack": "build --dir",
"dist": "build"
}
```





### [gengjiawen/AsciidoctorRender](https://github.com/gengjiawen/AsciidoctorRender/tree/master/package.json)

> asciicdoctor dual panel realtime render

```json
{
"appId": "your.id",
"app-category-type": "your.app.category.type",
"win": {
  "iconUrl": "https://github.com/gengjiawen/AsciidoctorRender"
}
}
```

```json
{
"package-all": "electron-packager . --all",
"pack": "build --dir",
"pack-all": "build -mwl",
"pack-unix": "build -ml",
"dist": "build",
"linux-deb": "build --linux deb",
"test": "echo \"Error: no test specified\" && exit 1"
}
```





### [ghk/sideka-electron](https://github.com/ghk/sideka-electron/tree/master/package.json)

> 

```json
{
"appId": "id.sideka",
"app-category-type": "desa",
"win": {
  "target": [
    "nsis"
  ],
  "icon": "resources/windows/icon.ico",
  "publish": [
    "github"
  ]
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
"postrelease": "gulp makeyml",
"release": "build --x64 --ia32",
"start": "gulp start",
"pretest": "gulp build-unit --env=test",
"test": "electron-mocha app/specs.js.autogenerated --renderer --require source-map-support/register",
"coverage": "npm test -- -R scripts/istanbul-reporter",
"pree2e": "gulp build-e2e --env=test",
"e2e": "mocha app/e2e.js.autogenerated --require source-map-support/register"
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





### [F-happy/nuts-desktop](https://github.com/F-happy/nuts-desktop/tree/master/package.json)

> nuts desktop

```json
{
"appId": "com.jonnyf.fdflow",
"mac": {
  "icon": "build/icon.icns",
  "category": "publish.app-category.jonnyf-design"
},
"dmg": {
  "background": "build/background.png",
  "icon": "build/icon.icns",
  "window": {
    "width": 800,
    "height": 400
  }
},
"win": {
  "iconUrl": "https://raw.githubusercontent.com/F-happy/nuts-desktop/master/assets/img/fd.ico"
}
}
```

```json
{
"start": "./node_modules/.bin/electron main.js",
"build:linux32": "rm -rf dist && electron-packager ./ fdFlow --platform=linux --arch=ia32 --icon=./assets/img/fd.icns --overwrite --out ./dist/$npm_package_version --version=1.4.5 --ignore='(.github|.DS_Store)'",
"build:linux64": "rm -rf dist && electron-packager ./ fdFlow --platform=linux --arch=x64 --icon=./assets/img/fd.icns --overwrite --out ./dist/$npm_package_version --version=1.4.5 --ignore='(.github|.DS_Store)'",
"build:mac": "rm -rf dist && electron-packager ./ fdFlow --platform=darwin --arch=x64 --icon=./assets/img/fd.icns --overwrite --out ../fdflow/dist/$npm_package_version --version=1.4.5 --ignore='(.github|.DS_Store)'",
"build:win32": "rm -rf dist && electron-packager ./ fdFlow --platform=win32 --arch=ia32 --icon=./assets/img/fd.png --overwrite --out ./dist --version=1.4.5 --ignore=.github",
"build:win64": "rm -rf dist && electron-packager ./ fdFlow --platform=win32 --arch=x64 --icon=./assets/img/fd.png --overwrite --out ./dist --version=1.4.5 --ignore=.github",
"test": "echo \"Error: no test specified\" && exit 1"
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





### [gorgekara/nixfont](https://github.com/gorgekara/nixfont/tree/master/package.json)

> NixFont Manager

```json
{
"appId": "com.nix.nixfontdownloader",
"app-category-type": "font.downloader",
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





### [govi2010/electron-aria2-downloader](https://github.com/govi2010/electron-aria2-downloader/tree/master/package.json)

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
"extraResources": "app/bin/**/*"
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





### [groundwater/RSI](https://github.com/groundwater/RSI/tree/master/package.json)

> App that watches your activity and tells you to take breaks

```json
{
"appId": "groundwater.github.io",
"win": {},
"squirrelWindows": {
  "iconUrl": "https://raw.githubusercontent.com/groundwater/RSI/master/build/icon.ico",
  "msi": true
},
"dmg": {},
"mac": {
  "category": "public.app-category.healthcare-fitness",
  "target": [
    "default"
  ]
}
}
```

```json
{
"pack": "build --dir",
"dist": "build",
"release": "build --publish onTagOrDraft",
"postinstall": "install-app-deps",
"start": "electron app"
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





### [gunjank/electron-resperformance](https://github.com/gunjank/electron-resperformance/tree/master/package.json)

> 

```json
{
"app-bundle-id": "org.developer.self",
"app-category-type": "public.app-category.graphics-design",
"iconUrl": "https://en.wikipedia.org/wiki/Favicon"
}
```

```json
{
"postinstall": "install-app-deps",
"start": "npm install && npm run compile && electron ./app",
"clean": "rimraf dist",
"clean:win": "rimraf dist/win",
"compile": "rimraf app/out ",
"pack": "npm run compile && build --target dir",
"dist": "npm run compile && build",
"release": "npm run compile && build",
"dist:win64": "./node_modules/.bin/build --platform win32 --arch x64"
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





### [gynzy/electron-vertrektijden-demo](https://github.com/gynzy/electron-vertrektijden-demo/tree/master/package.json)

> Vertrektijden app ter demonstratie bij Electron lezing

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





### [halfnelson/moaiscene](https://github.com/halfnelson/moaiscene/tree/master/package.json)

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
"pack": "build --platform=all --arch=all",
"prebuild": "webpack && node build/target.js",
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
"build": "build --platform=all --arch=all -d",
"postinstall": "install-app-deps"
}
```





### [hannanabdul55/deskdocs](https://github.com/hannanabdul55/deskdocs/tree/master/package.json)

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





### [Farokhcpu/Electron-App](https://github.com/Farokhcpu/Electron-App/tree/master/package.json)

> This is an application for testing auto-update

```json
{
"app-bundle-id": "farokh.fafar",
"app-cetegory-type": "public.app-category.developer-tools",
"productName": "electron-app",
"compression": "maximum",
"win": {
  "iconUrl": "https://github.com/Farokhcpu/Electron-App/blob/master/icon.ico"
},
"osx": {
  "target": "dmg"
}
}
```

```json
{
"postinstall": "install-app-deps",
"pack": "build --target dir",
"dist": "build"
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





### [hmnguyen7/meow](https://github.com/hmnguyen7/meow/tree/master/package.json)

> 

```json
{
"appId": "meow",
"app-category-type": "private",
"extraResources": [
  "public"
]
}
```

```json
{
"start": "electron ./app",
"watch": "watchify app/app.js -t babelify -o public/js/bundle.js --debug --verbose",
"postinstall": "install-app-deps",
"clean": "rimraf dist",
"clean:osx": "rimraf dist/Onshape-darwin-x64",
"clean:win": "rimraf dist/win",
"compile": "rimraf app/out && tsconfig -i 2 && tsc",
"pack": "build --dir",
"dist": "build",
"release": "npm run compile && build",
"dist:osx": "build --platform darwin",
"dist:win32": "build --platform win32 --arch ia32",
"dist:win64": "build --platform win32 --arch x64"
}
```





### [hmnguyen7/test](https://github.com/hmnguyen7/test/tree/master/package.json)

> 

```json
{
"appId": "28111987",
"build.mac.category": "Trading",
"extraResources": [
  "public"
]
}
```

```json
{
"start": "electron ./app",
"watch": "watchify app/app.js -t babelify -o public/js/bundle.js --debug --verbose",
"postinstall": "install-app-deps",
"clean": "rimraf dist",
"clean:osx": "rimraf dist/Onshape-darwin-x64",
"clean:win": "rimraf dist/win",
"compile": "rimraf app/out && tsconfig -i 2 && tsc",
"pack": "build --dir",
"dist": "build",
"release": "npm run compile && build",
"dist:osx": "build --platform darwin",
"dist:win32": "build --platform win32 --arch ia32",
"dist:win64": "build --platform win32 --arch x64"
}
```





### [hungcao181/import-devplan-2trackers](https://github.com/hungcao181/import-devplan-2trackers/tree/master/package.json)

> A simple yet efficient importer for transfering dev plan into tracker tools

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





### [hyperwidget/electron-group](https://github.com/hyperwidget/electron-group/tree/master/package.json)

> Playing with electron using the demo app for ng2-group-multiselect

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





### [iLogical/NotPostman](https://github.com/iLogical/NotPostman/tree/master/package.json)

> A postman replacement

```json
{
"appId": "com.example.notpostman",
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
"start": "npm install && webpack && electron ./app/main",
"dev": "webpack && webpack -w | electron ./app/main --enable-logging",
"watch": "webpack -w",
"run": "electron ./app/main",
"pack": "webpack",
"release": "npm install && webpack && build --x64 --publish never",
"test": "karma start karma.conf.js"
}
```





### [inad9300/pxr](https://github.com/inad9300/pxr/tree/master/package.json)

> User interface for image compression tools.

```json
{
"appId": "es.berry.pxr",
"category": "public.app-category.graphics-design",
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
"postinstall": "install-app-deps",
"pack": "build --dir",
"dist": "build",
"watch": "npm run watch:css",
"watch:css": "node-sass -w app/assets/styles -o dist"
}
```





### [indraneelr/chipka](https://github.com/indraneelr/chipka/tree/master/package.json)

> 

```json
{
"app-bundle-id": "chipka",
"app-category-type": "utility",
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
"babel-watch": "./node_modules/.bin/babel --watch --presets react  app/js/view --out-file app/js/lib/_index.js",
"build": "./node_modules/.bin/babel --presets react app/js/view  --out-file app/js/lib/_index.js",
"start": "electron ./app",
"package": "cp -r build app/  && electron-packager ./app chipka --platform darwin --arch x64 --out ~/Desktop/chipka --version 0.37.8 --overwrite --icon=./app/img/chipk-clip.png",
"test": "jasmine-node --verbose --captureExceptions test",
"testUI": "jest",
"dist": "node_modules/.bin/build --platform darwin --arch x64"
}
```





### [industral/RoteSonne.js](https://github.com/industral/RoteSonne.js/tree/master/package.json)

> Audio Player

```json
{
"app-bundle-id": "org.rotesonne",
"app-category-type": "public.app-category.music",
"osx": {
  "icon": "build/icon.icns",
  "icon-size": 80,
  "background": "build/background.png",
  "ignore": "bundle.js.map",
  "contents": [
    {
      "x": 510,
      "y": 220,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 100,
      "y": 220,
      "type": "file"
    }
  ]
}
}
```

```json
{
"postinstall": "./node_modules/.bin/install-app-deps",
"pack": "./node_modules/.bin/build",
"dist": "./node_modules/.bin/build"
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





### [ionutleustean/cross-platform-ng2](https://github.com/ionutleustean/cross-platform-ng2/tree/master/package.json)

> asd 

```json
{
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
      "path": "computed path to artifact, do not specify it - will be overwritten"
    }
  ]
}
}
```

```json
{
"start": "./node_modules/.bin/electron ./electron/",
"build": "gulp",
"serve": "gulp serve",
"serve:dist": "gulp serve:dist",
"test": "gulp test",
"test:auto": "gulp test:auto"
}
```





### [iotaledger/wallet-packager](https://github.com/iotaledger/wallet-packager/tree/master/package.json)

> Packager for the IOTA Wallet.

```json
{
"appId": "com.iotatoken.wallet",
"category": "public.app-category.developer-tools",
"extraResources": [
  "IRI/**/*",
  "wallet/ui/**/*"
],
"extend-info": "mac-info.plist",
"dmg": {
  "icon-size": 125,
  "contents": [
    {
      "x": 235,
      "y": 290,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 235,
      "y": 20,
      "type": "file"
    }
  ]
},
"win": {
  "target": "nsis"
},
"linux": {
  "target": [
    "AppImage",
    "deb",
    "rpm",
    "tar.gz"
  ],
  "packageUrl": "https://www.iotatoken.com/"
}
}
```

```json
{
"postinstall": "install-app-deps && cd ./wallet/app && bower install && cd ../ui && bower install",
"start": "electron ./wallet --enable-logging --dev",
"dev": "export NODE_ENV=development || set NODE_ENV=development && npm run start",
"predist": "rm -rf packager/dist/*",
"dist": "export CSC_IDENTITY_AUTO_DISCOVERY=false && build --win --mac --linux --x64 --ia32",
"dist:lin": "build --linux --x64 --ia32",
"dist:mac": "export CSC_IDENTITY_AUTO_DISCOVERY=false && build --mac --x64",
"dist:win": "build --win --x64 --ia32",
"dist:win64": "build --win --x64",
"dist:win32": "build --win --ia32",
"prerelease:mac": "mkdirp packager/release/mac",
"release:mac": "cp -rv packager/dist/mac/*.{dmg,zip} packager/release/mac && PACKAGE_VERSION=$(cat wallet/package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]') && printf $PACKAGE_VERSION >> ./packager/release/mac/VERSION",
"prerelease:win32": "mkdirp packager/release/win32",
"release:win32": "cp -v packager/dist/win-ia32/{RELEASES,*.nupkg,*.exe} packager/release/win32",
"prerelease:win64": "mkdirp packager/release/win64",
"release:win64": "cp -v packager/dist/win/{RELEASES,*.nupkg,*.exe} packager/release/win64",
"prerelease:lin": "mkdirp packager/release/lin/",
"release:lin": "cp -v packager/dist/*.{deb,rpm,tar.gz,sh} packager/release/lin",
"prerelease": "rm -rf packager/release/*",
"release": "npm run release:mac && npm run release:win32 && npm run release:win64 && npm run release:lin",
"all": "npm run dist && npm run release"
}
```





### [ipatina/auto-update](https://github.com/ipatina/auto-update/tree/master/package.json)

> olololo

```json
{
"appId": "com.my.app",
"win": {
  "target": "squirrel",
  "iconUrl": "http://downloadicons.net/sites/default/files/atom-icon-47240.png"
}
}
```

```json
{
"start": "electron .",
"build:win32": "build --win --ia32",
"build:win64": "build --win --x64"
}
```





### [jasonrey/database-browser](https://github.com/jasonrey/database-browser/tree/master/package.json)

> MySQL Database Browser

```json
{
"appId": "com.electron.database-browser",
"asar": false,
"productName": "database-browser"
}
```

```json
{
"start": "electron app",
"dev": "NODE_ENV=development electron app",
"web": "NODE_ENV=production node app/web/index.js",
"webdev": "NODE_ENV=development node app/web/index.js",
"compile": "node-sass --output app/web/assets/css app/web/assets/sass/index.sass && pug app/web/templates/app.pug --out app/web/",
"postinstall": "install-app-deps",
"pack": "build --dir",
"dist": "build",
"dist:linux": "npm run compile && build --linux",
"dist:docker-linux": "docker run --rm -v $(pwd):/project -v ~/.electron:/root/.electron electronuserland/electron-builder:latest /bin/bash -c 'cp -R /project /build; cd /build; rm -rf node_modules; npm install; npm run dist:linux; mkdir -p /project/dist; cp -Rf /build/dist/* /project/dist; exit'",
"dist:mac": "npm run compile && build --mac",
"build": "electron-packager ./app --platform=win32,darwin,linux --arch=x64 --prune --app-version=$APPVERSION --icon=./build/icon.icns --overwrite --out=./dist",
"build:mac": "electron-packager ./app --platform=darwin --arch=x64 --prune --app-version=$APPVERSION --icon=./build/icon.icns --overwrite --out=./dist",
"build:linux": "electron-packager ./app --platform=linux --arch=x64 --prune --app-version=$APPVERSION --icon=./build/icon.icns --overwrite --out=./dist"
}
```





### [jcblw/pastila-sync](https://github.com/jcblw/pastila-sync/tree/master/package.json)

> Small menubar app that acts like dropbox sync but with gist files.

```json
{
"appId": "org.jcblw.pastila-sync",
"mac": {
  "category": "public.app-category.developer-tool"
}
}
```

```json
{
"start": "electron app.js",
"start-test": "node -r dotenv/config dist/app",
"build": "babel src --out-dir dist",
"watch": "babel src --out-dir dist -w",
"test": "standard src",
"packager": "electron-packager . 'Pastila Sync' --overwrite --out=builds --icon=assets/icon.icns",
"pkg": "npm run build && npm run packager",
"dist": "npm run build &&  build"
}
```





### [jcelano/pc-prototype](https://github.com/jcelano/pc-prototype/tree/master/package.json)

> 

```json
{
"appId": "com.celano.pc.prototype",
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





### [jduarter/easypass-desktop](https://github.com/jduarter/easypass-desktop/tree/master/package.json)

> EasyPass desktop application for Windows, Linux and OS X.

```json
{
"app-bundle-id": "skelektron",
"app-category-type": "public.app-category.business",
"osx": {
  "title": "EasyPass",
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





### [Gacnt/ElectronBoilerplate](https://github.com/Gacnt/ElectronBoilerplate/tree/master/package.json)

> A better way to use steam

```json
{
"appId": "com.gacnt.better_steam",
"mac": {
  "category": "Games"
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





### [jechazelle/webapp-application-packager](https://github.com/jechazelle/webapp-application-packager/tree/master/package.json)

> Package your web application (example : AngularJS) to distribute on Mac with Electron

```json
{
"productName": "MyApp",
"app-bundle-id": "com.myapp",
"app-category-type": "public.app-category.productivity",
"osx": {
  "title": "MyApp",
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
"start": "electron ./app --enable-logging",
"dev": "NODE_ENV='development' npm run start",
"dist": "npm run dist:osx",
"dist:osx": "build --platform darwin"
}
```





### [GaranceV/ceihm-habille-toi](https://github.com/GaranceV/ceihm-habille-toi/tree/master/package.json)

> Activité pour habiller un mannequin en fonction de la saison

```json
{
"appId": "polytech.ceihm.habilletoi",
"app-category-type": "public.app-category.productivity",
"dmg": {
  "title": "Habille Toi",
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
"dist": "build -mw --x64 --ia32"
}
```





### [jenslind/panpipe](https://github.com/jenslind/panpipe/tree/master/package.json)

> Simply panpipes

```json
{
"appId": "pan.pipe",
"app-category-type": "pipes"
}
```

```json
{
"test": "echo \"Error: no test specified\" && exit 1",
"build": "build --win --x64"
}
```





### [jeremyadoux/ScootAppsElectron](https://github.com/jeremyadoux/ScootAppsElectron/tree/master/package.json)

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
  "oneClick": false,
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





### [GetPixel/Pixel](https://github.com/GetPixel/Pixel/tree/master/package.json)

> :movie_camera: A Web Based Live Streaming/Recording Platform

```json
{
"appId": "xyz.meadowcottage.Pixel",
"category": "public.app-category.entertainment",
"productName": "Pixel",
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
  "target": [
    "squirrel",
    "zip"
  ],
  "remoteReleases": "https://github.com/GetPixel/Pixel",
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





### [jiku/desktop-app](https://github.com/jiku/desktop-app/tree/master/package.json)

> jiku Desktop app (Electron).

```json
{
"appId": "ca.jiku.app",
"app-category-type": "public.app-category.music",
"win": {}
}
```

```json
{
"start": "electron .",
"package": "electron-packager . --out=dist --app-version=$npm_package_version --prune --asar --overwrite --all",
"test": "ava",
"postinstall": "install-app-deps",
"build:pack": "build --dir",
"build:dist": "build",
"build:all": "build -mwl",
"build:mac": "build -m",
"build:win": "build -w",
"build:win32": "build -w --ia32",
"build:linux": "build -l"
}
```





### [jimbroski/Story-Card-Timer](https://github.com/jimbroski/Story-Card-Timer/tree/master/package.json)

> A simple app to track the time working on tasks

```json
{
"appId": "tasktimer",
"category": "office"
}
```

```json
{
"start": "./node_modules/.bin/electron .",
"pack": "build --dir",
"dist": "build"
}
```





### [jinsihou19/electronApp](https://github.com/jinsihou19/electronApp/tree/master/package.json)

> A third client for qiniu client

```json
{
"title": "QiniuClient",
"background": "build/background.png",
"icon": "build/icon.icns",
"icon-size": 128,
"appId": "jinsihou.qiniu",
"app-category-type": "public.app-category.productivity",
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
```

```json
{
"pack": "build --dir",
"dist": "npm run dist:osx",
"dist:osx": "build --x64 -m --dir",
"dist:win": "build --platform win32 --arch all -d",
"dist:linux": "build --platform linux --arch all -d"
}
```





### [jishufan/shuguang-electron](https://github.com/jishufan/shuguang-electron/tree/master/package.json)

> desktop full-text search

```json
{
"appId": "com.jishufan.shuguang",
"category": "public.app-category.productivity"
}
```

```json
{
"watch": "webpack-dev-server --hot --inline",
"build": "webpack --progress --profile --colors",
"start": "NODE_ENV=dev electron build/main.bundle.js --enable-logging",
"dev": "npm run build && npm run start",
"package": "npm run build && electron-packager . --platform=linux --arch=x64",
"dist": "npm run build && build --linux deb --x64"
}
```





### [johanpoirier/exif-auto](https://github.com/johanpoirier/exif-auto/tree/master/package.json)

> Auto rename photos with infos from exif tags

```json
{
"releases": "electron-builds/releases",
"appId": "com.jops.exifauto",
"category": "public.app-category.utilities",
"compression": "normal",
"mac": {
  "target": "dmg"
},
"win": {
  "target": "nsis"
}
}
```

```json
{
"app": "electron app/",
"windows": "build --win",
"mac": "build --mac",
"all": "build -mw"
}
```





### [johard/electron-boilerplate](https://github.com/johard/electron-boilerplate/tree/master/package.json)

> io.srvc.electron

```json
{
"appId": "io.srvc.electron",
"category": "public.app-category.developer-tools",
"icon": "./app/icon.icns"
}
```

```json
{
"lint": "eslint -c .eslintrc .",
"start": "NODE_ENV=development ./node_modules/electron/dist/Electron.app/Contents/MacOS/Electron .",
"dev": "./node_modules/.bin/webpack-dev-server",
"build": "./node_modules/.bin/webpack --config ./webpack.config.production.js",
"pack": "./node_modules/.bin/build --dir",
"dist": "./node_modules/.bin/build"
}
```





### [1003657663/regularTool](https://github.com/1003657663/regularTool/tree/master/package.json)

> chao

```json
{
"appId": "www.codeevery.com",
"productName": "regularTool",
"description": "正则表达式测试工具，正则表达式批量替换文件内容工具",
"homepage": "https://github.com/1003657663/regularTool",
"win": {
  "target": "nsis",
  "iconUrl": "build/icon.ico",
  "icon-size": "256"
},
"dmg": {
  "background": "#009fff",
  "icon": "build/icon.icns",
  "iconTextSize": "64"
},
"linux": {
  "target": "tar.gz"
},
"directoried": {
  "output": "./dist"
}
}
```

```json
{
"start": "electron .",
"dist": "build --win --x64"
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





### [jonatasfreitasv/duolingo_desktop](https://github.com/jonatasfreitasv/duolingo_desktop/tree/master/package.json)

> Duolingo desktop version

```json
{
"appId": "duolingo_desktop.id",
"category": "duolingo.desktop.english.learning",
"win": {
  "iconUrl": ""
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





### [jondcoleman/file-search-electron](https://github.com/jondcoleman/file-search-electron/tree/master/package.json)

> A Electron app for indexing and searching files.

```json
{
"appId": "file-search-util",
"category": "public.app-category.utilities"
}
```

```json
{
"start": "electron .",
"postinstall": "webpack",
"pack": "build --dir",
"dist": "build",
"build": "electron-packager ./app/ file-search --out=bin --platform=win32 --arch=x64 --overwrite"
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





### [jrobinso/igv.js-electron](https://github.com/jrobinso/igv.js-electron/tree/master/package.json)

> Experimentation with electron as a desktop wrapper for ig.js

```json
{
"appId": "igv.org.electron-igv",
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
  "icon": "resources/osx/igv_icon.icns"
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





### [judsonbsilva/quintal-do-peleiro](https://github.com/judsonbsilva/quintal-do-peleiro/tree/master/package.json)

> A game to observe users perfil

```json
{
"win": {
  "iconUrl": "https://raw.githubusercontent.com/judsonbsilva/quintal-do-peleiro/gh-pages/assets/outros/icone-cabeca.ico",
  "icon": "./assets/outros/icone-cabeca.ico"
}
}
```

```json
{
"start": "electron .",
"build": "build",
"test": "echo \"Error: no test specified\" && exit 1"
}
```





### [jurruh/RS232-Comtest](https://github.com/jurruh/RS232-Comtest/tree/master/package.json)

> Comtest for RS232

```json
{
"appId": "comtest.dorset",
"category": "comtest.dorset.nu",
"win": {
  "iconUrl": "https://eatodo.s3.amazonaws.com/icon.ico"
}
}
```

```json
{
"start": "electron ./app/main.js",
"postinstall": "install-app-deps",
"compile-serialport-x86": "cd ./app/node_modules/serialport && node-gyp rebuild --target=1.3.3 --arch=x86 --dist-url=https://atom.io/download/atom-shell",
"compile-serialport": "cd ./app/node_modules/serialport && node-gyp rebuild --target=1.3.3 --arch=x64 --dist-url=https://atom.io/download/atom-shell",
"dev": "electron . --enable-logging",
"dist:win": "build -w"
}
```





### [jwir3/arbitrator](https://github.com/jwir3/arbitrator/tree/master/package.json)

> A synchronization engine for ArbiterSports to Google Calendar

```json
{
"appId": "com.glasstowerstudios.arbitrator",
"app-category-type": "calendar",
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
"startProd": "gulp start --env=production",
"pretest": "gulp build-unit --env=test",
"test": "electron-mocha app/specs.js.autogenerated --renderer --require source-map-support/register",
"coverage": "npm test -- -R scripts/istanbul-reporter",
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





### [kenjinp/bookish-broccoli](https://github.com/kenjinp/bookish-broccoli/tree/master/package.json)

> Desktop application build with Electron

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





### [kesarion/mangadlapp](https://github.com/kesarion/mangadlapp/tree/master/package.json)

> A client application for mangafox.me. Allows searching for and downloading manga available on the website.

```json
{
"appId": "com.kesarion.mangadlapp",
"app-category-type": "utility",
"win": {
  "target": "nsis",
  "description": "mangadlapp"
},
"linux": {
  "compression": "gz",
  "target": [
    "deb"
  ],
  "vendor": "\"Alexandru Sfirlogea <alexandru.sfirlogea@gmail.com>\"",
  "maintainer": "\"Alexandru Sfirlogea <alexandru.sfirlogea@gmail.com>\"",
  "description": "mangadlapp"
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





### [keverw/SteemWrite](https://github.com/keverw/SteemWrite/tree/master/package.json)

> 

```json
{
"appId": "com.keverw.steemwrite",
"asar": false,
"mac": {
  "category": "public.app-category.productivity"
},
"win": {
  "iconUrl": "https://raw.githubusercontent.com/keverw/steemwrite/master/build/icon.ico"
}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "npm install && electron ./app",
"pack": "build --dir",
"distall": "build --dir --ia32 --x64  -m dmg -l deb rpm -w NSIS",
"distmac": "build --dir --x64  -m dmg",
"distwin": "build --dir --ia32 --x64 -w NSIS",
"distlin": "build --dir --ia32 --x64 -l deb rpm"
}
```





### [kgwinnup/electron-redux-template](https://github.com/kgwinnup/electron-redux-template/tree/master/package.json)

> template for projects using electron and redux

```json
{
"appId": "co.zeit.hyperterm",
"app-category-type": "public.app-category.developer-tools",
"asar": false,
"extend-info": "build/Info.plist",
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
"dev": "webpack --watch",
"lint": "eslint .",
"build": "NODE_ENV=production webpack",
"start": "electron app",
"release": "npm run build && build --publish=onTagOrDraft"
}
```





### [kieronbrowne/electron-angular-protractor](https://github.com/kieronbrowne/electron-angular-protractor/tree/master/package.json)

> An angular skeleton app for electron, testable with protractor

```json
{
"app-bunder-id": "my-id",
"app-category-type": "my-cat",
"win": {
  "iconUrl": "foo"
}
}
```

```json
{
"preinstall": "cd app && npm install && bower install",
"postinstall": "install-app-deps",
"pack": "build",
"dist": "build",
"prestart": "npm install",
"start": "electron main.js",
"pretest": "npm install",
"test": "karma start karma.conf.js",
"test-single-run": "karma start karma.conf.js  --single-run",
"update-webdriver": "webdriver-manager update",
"preprotractor": "npm run update-webdriver",
"protractor": "protractor e2e-tests/protractor.conf.js"
}
```





### [Heeryong-Kang/jamak](https://github.com/Heeryong-Kang/jamak/tree/master/package.json)

> A subtitle editor built with Electron, React and Redux.

```json
{
"appId": "com.heeryongkang.subtitle",
"app-category-type": "public.app-category.productivity",
"win": {
  "target": "squirrel",
  "iconUrl": "https://raw.githubusercontent.com/Heeryong-Kang/jamak/master/build/icon.ico?token=AK9wHNbh7NK8Z736XSHVEW7qe3UTkRwtks5XrBmPwA%3D%3D"
},
"dmg": {},
"mac": {
  "target": "default"
}
}
```

```json
{
"hot-server": "node -r babel-register server.js",
"hot-start": "cross-env NODE_ENV=development electron -r babel-register ./main",
"dev": "concurrently --kill-others \"npm run hot-server\" \"npm run hot-start\"",
"build-main": "cross-env NODE_ENV=production node -r babel-register ./node_modules/webpack/bin/webpack --config webpack.config.electron.js --progress --profile --colors",
"build-renderer": "cross-env NODE_ENV=production node -r babel-register ./node_modules/webpack/bin/webpack --config webpack.config.production.js --progress --profile --colors",
"compile": "npm run build-main && npm run build-renderer",
"pack": "build --dir",
"dist": "build"
}
```





### [kobens/autotron](https://github.com/kobens/autotron/tree/master/package.json)

> Example for auto-updating apps with electron-builder

```json
{
"appId": "com.rbns.autotron",
"productName": "Autotron",
"mac": {
  "category": "public.app-category.developer-tools"
},
"win": {
  "target": "nsis"
}
}
```

```json
{
"start": "concurrently --kill-others \"npm run dev\" \"electron .\"",
"dev": "cross-env BABEL_ENV=development NODE_ENV=development webpack -w",
"build": "cross-env BABEL_ENV=production NODE_ENV=production webpack",
"postinstall": "install-app-deps",
"test": "",
"dist:win": "npm run build && build --win --ia32 --x64",
"dist:mac": "npm run build && build --mac"
}
```





### [kuul/opengl-test](https://github.com/kuul/opengl-test/tree/master/package.json)

> opengl test

```json
{
"appId": "your.id",
"category": "development"
}
```

```json
{
"start": "electron ./app",
"dist-win": "build --win",
"test": "echo \"Error: no test specified\" && exit 1"
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





### [leojavier/electronTest](https://github.com/leojavier/electronTest/tree/master/package.json)

> sample app

```json
{
"app-bundle-id": "hr.creaticon.eatodo",
"app-category-type": "public.app-category.productivity",
"iconUrl": "http://eatodo.s3.amazonaws.com/icon.ico",
"osx": {},
"win": {}
}
```

```json
{
"start": "electron .",
"build": "electron-packager . sampleApp",
"dist": "npm run dist:mac && npm run dist:win32 && npm run dist:win64",
"dist:mac": "build --platform darwin",
"dist:win32": "build --platform win32 --arch ia32",
"dist:win64": "build --platform win32 --arch x64"
}
```





### [liang-jie/electron_demo](https://github.com/liang-jie/electron_demo/tree/master/package.json)

> 

```json
{
"asar": true,
"appId": "HeraldClient",
"mac": {
  "icon": "build/icon.icns",
  "category": "public.app-category.prosuctivity"
},
"win": {
  "iconUrl": "http://7xsec6.com1.z0.glb.clouddn.com/icon.ico",
  "msi": false,
  "title": "HeraldApp"
},
"linux": {
  "target": "deb",
  "maintainer": "LiangJ"
}
}
```

```json
{
"pack": "electron-packager . HeraldClient --out ./dist --all -asar",
"run": "electron ."
}
```





### [linfancy/fancyiconfont](https://github.com/linfancy/fancyiconfont/tree/master/package.json)

> a tool to make iconfont which by fontello api

```json
{
"appId": "com.electron.${name}",
"app-category-type": "public.app-category.productivity",
"win": {
  "iconUrl": "https://github.com/linfancy/fancyiconfont/blob/master/app/media/img/icon.ico"
}
}
```

```json
{
"start": "electron .",
"packager:win64": "electron-packager ./ fancyicon --platform=win32 --arch=x64 --out=./outapp --overwrite --icon=./app/media/img/F.png",
"packager:mac": "electron-packager ./ fancyicon --platform=darwin --arch=x64 --out=./outapp --overwrite --icon=./app/media/img/F.png",
"pack": "build --dir",
"dist": "build --platform win32 --arch=x64"
}
```





### [IFomin/WSChat](https://github.com/IFomin/WSChat/tree/master/package.json)

> Chat app

```json
{
"app-bundle-id": "",
"app-category-type": "",
"iconUrl": "https://callbackkiller.com/img/app/message.ico"
}
```

```json
{
"start": "electron app/main.js",
"build": "electron-packager . Chat --icon=resources/icons/message.ico --out=dist --ignore=dist --overwrite --asar",
"postinstall": "install-app-deps",
"pack_win_32": "build --platform=win32 --arch=ia32",
"dist_win_32": "build --platform=win32 --arch=ia32 --dist",
"pack_win_64": "build --platform=win32 --arch=x64",
"dist_win_64": "build --platform=win32 --arch=x64 --dist",
"pack_linux_32": "build --platform=linux --arch=ia32",
"dist_linux_32": "build --platform=linux --arch=ia32 --dist",
"pack_linux_64": "build --platform=linux --arch=x64",
"dist_linux_64": "build --platform=linux --arch=x64 --dist"
}
```





### [locosoft1986/svtool](https://github.com/locosoft1986/svtool/tree/master/package.json)

> Internal Project

```json
{
"appId": "com.locosoft.svtool",
"app-category-type": "locosoft.app.tools",
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





### [Akwaryoum/App-Medecin](https://github.com/Akwaryoum/App-Medecin/tree/master/package.json)

> 

```json
{
"win": {
  "title": "Appli medecin"
},
"app-bundle-id": "app_medecin",
"app-catergory-type": "public.app-category.medical",
"iconUrl": "https://files.akwaryoum.fr/files/img/fa-medkit_256_0_f0342e_none.png.ico",
"productName": "Appli medecin"
}
```

```json
{
"start": "node_modules/electron-prebuilt/dist/electron.exe app/main.js",
"postinstall": "install-app-deps",
"pack": "build",
"dist": "build"
}
```





### [lukasz-wasilewski/project](https://github.com/lukasz-wasilewski/project/tree/master/package.json)

> 

```json
{
"appId": "com.electron.magisterka",
"category": "public.app-category.developer-tools",
"extraResources": [
  "invisible.html",
  "app/server/server.js"
],
"win": {
  "iconUrl": "http://image.flaticon.com/icons/svg/95/95214.svg"
}
}
```

```json
{
"postinstall": "install-app-deps && npm run rebuild-electron",
"preinstall": "bower install",
"rebuild-electron": "npm rebuild --runtime=electron --target=1.2.5 --disturl=https://atom.io/download/atom-shell --build-from-source",
"start": "electron app",
"pack": "build --dir",
"dist": "build",
"pretest": "npm install",
"test": "karma start karma.conf.js",
"test-single-run": "karma start karma.conf.js  --single-run",
"preupdate-webdriver": "npm install",
"update-webdriver": "webdriver-manager update",
"preprotractor": "npm run update-webdriver",
"protractor": "protractor e2e-tests/protractor.conf.js",
"update-index-async": "node -e \"require('shelljs/global'); sed('-i', /\\/\\/@@NG_LOADER_START@@[\\s\\S]*\\/\\/@@NG_LOADER_END@@/, '//@@NG_LOADER_START@@\
' + sed(/sourceMappingURL=angular-loader.min.js.map/,'sourceMappingURL=bower_components/angular-loader/angular-loader.min.js.map','app/bower_components/angular-loader/angular-loader.min.js') + '\
//@@NG_LOADER_END@@', 'app/index-async.html');\""
}
```





### [ImprovedAdventure/Client](https://github.com/ImprovedAdventure/Client/tree/master/package.json)

> ImprovedAdventure client

```json
{
"appId": "blitz.games.improved-adventure",
"app-category-type": "public.app-category.games"
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





### [lutunalexis/niu-spotify-mac](https://github.com/lutunalexis/niu-spotify-mac/tree/master/package.json)

> Control spotify with your NIU on your mac

```json
{
"appId": "com.example.spotiniu",
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





### [lyssdod/electron-abi-test](https://github.com/lyssdod/electron-abi-test/tree/master/package.json)

> Sample electron app

```json
{
"appId": "com.cosmosgenius.sampleelectronleveldb",
"app-category-type": "public.app-category.developer-tools",
"asar": false
}
```

```json
{
"test": "echo \"Error: no test specified\" && exit 1",
"preinstall": "echo Patching && patch -p0 < electron-builder.patch",
"start": "electron app",
"postinstall": "install-app-deps"
}
```





### [Inonut/todo](https://github.com/Inonut/todo/tree/master/package.json)

> Simple TODO application built with Electron and AngularJS.

```json
{
"appId": "your.id",
"app-category-type": "your.app.category.type"
}
```

```json
{
"electron": "electron .",
"dist": "build  --x64 --win --dir"
}
```





### [m3mnoch/leanuscript](https://github.com/m3mnoch/leanuscript/tree/master/package.json)

> Manuscript Editor:  Lean, mean, and full of flavor.

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





### [marttinen/electron-boilerplate](https://github.com/marttinen/electron-boilerplate/tree/master/package.json)

> Minimalistic electron boilerplate with a two package.json structure and electron-builder.

```json
{
"app-bundle-id": "com.example.app",
"app-category-type": "public.app-category.developer-tools",
"icon": "build/icon.ico",
"iconUrl": "file://path/icon.ico",
"win": {
  "icon": "build/icon.ico",
  "setupIcon": "build/icon.ico"
}
}
```

```json
{
"dist": "build",
"pack": "build",
"postinstall": "install-app-deps",
"start": "electron ./app",
"lint": "echo \"Error: no lint specified\" && exit 1",
"test": "echo \"Error: no test specified\" && exit 1"
}
```





### [mashedpotats/electron-muick](https://github.com/mashedpotats/electron-muick/tree/master/package.json)

> A quick music player. Hence, muick

```json
{
"productName": "muick",
"appId": "com.javilet.samuel.muick",
"mac": {
  "category": "public.app-category.music"
},
"win": {
  "target": "nsis"
},
"postinstall": "install-app-deps"
}
```

```json
{
"postinstall": "install-app-deps",
"start": "electron ./app --enable-logging",
"dev": "NODE_ENV='development' npm run start",
"dist": "build --x64 --ia32"
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





### [J4Wx/Adoption-Matters-Salesforce-App](https://github.com/J4Wx/Adoption-Matters-Salesforce-App/tree/master/package.json)

> A Salesforce Application built for AdoptionMatters.org based on the JSForce Framework

```json
{
"appId": "sfelectron",
"app-category-type": "private",
"win": {
  "msi": false
}
}
```

```json
{
"start": "node_modules/.bin/electron .",
"dist": "build"
}
```





### [JBLatenight/trello-desktop](https://github.com/JBLatenight/trello-desktop/tree/master/package.json)

> Electron Desktop app for Trello

```json
{
"app-bundle-id": "trello.trello.app",
"app-category-type": "public.app-category.social-networking",
"iconUrl": "https://raw.githubusercontent.com/JBLatenight/trello-desktop/master/build/icon.ico",
"iconUrl-Comment": "Per electron-builder spec, MUST be remote path",
"asar-unpack": "",
"osx": {
  "icon": "./build/icon.icns",
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
"start": "electron ./app",
"postinstall": "install-app-deps",
"build": "npm run build:osx && npm run build:win32 && npm run build:win64",
"build:osx": "npm run build:osx-prebuild && build --platform darwin --sign && npm run build:osx-postbuild",
"build:osx-prebuild": " ",
"build:osx-postbuild": " ",
"build:win32": "npm run build:win-prebuild && build --platform win32 --arch ia32 --sign && npm run build:win-postbuild",
"build:win64": "npm run build:win-prebuild && build --platform win32 --arch x64 --sign && npm run build:win-postbuild",
"build:win-prebuild": " ",
"build:win-postbuild": " "
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





### [maxim-torba/2chParser](https://github.com/maxim-torba/2chParser/tree/master/package.json)

> Parcer for 2ch.hk

```json
{
"appId": "777",
"category": "parser",
"win": {
  "iconUrl": "https://2ch.hk/favicon.ico"
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





### [mbrainiac/font-manager-prebuilt](https://github.com/mbrainiac/font-manager-prebuilt/tree/master/package.json)

> Provides access to the system font catalog

```json
{
"app-bundle-id": "vn.evolus.font-manager-prebuilt",
"app-category-type": "public.app-category.graphics-design",
"iconUrl": "https://raw.githubusercontent.com/evolus/pencil/master/build/icon.ico",
"productName": "fontmanager",
"linux": {
  "description": "Provides access to the system font catalog",
  "synopsis": "Provides access to the system font catalog",
  "maintainer": "Nguyen Tien Dzung <ngtdungnt@gmail.com>",
  "vendor": "Evolus",
  "target": [
    "tar.gz"
  ],
  "depends": []
},
"win": {
  "authors": "Nguyen Tien Dzung <ngtdungnt@gmail.com>",
  "owners": "Nguyen Tien Dzung <ngtdungnt@gmail.com>",
  "description": "Provides access to the system font catalog",
  "copyright": "Copyright © 2016 Nguyen Tien Dzung. All rights reserved."
},
"download": {
  "cache": ".electron-cache"
}
}
```

```json
{
"postinstall": "install-app-deps",
"install-app-deps": "node ./node_modules/electron-builder/out/install-app-deps.js",
"pack": "build",
"dist": "build",
"release": "build"
}
```





### [mchristofersen/effective-octo-happiness](https://github.com/mchristofersen/effective-octo-happiness/tree/master/package.json)

> A properties panel extension example

```json
{
"appId": "your.id",
"app-category-type": "your.app.category.type",
"win": {
  "iconUrl": "(windows-only) https link to icon"
}
}
```

```json
{
"electron": "electron .",
"all": "grunt",
"start": "grunt auto-build",
"dev": "grunt auto-build",
"deploy": "gcloud preview app deploy",
"pack": "build --dir",
"dist": "build",
"test": "mocha --require babel-core/register app/tests"
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





### [meltedspark/electron-angular2-native](https://github.com/meltedspark/electron-angular2-native/tree/master/package.json)

> An easy to use, ready for distribution boilerplate for Electron applications which use Angular 2 along with native modules (node.js addons and regular native libraries).  

```json
{
"appId": "com.meltedspark.electron-angular2-native",
"app-category-type": "com.meltedspark.opensource",
"asar": false,
"nodeGypRebuild": true,
"win": {
  "target": "nsis"
},
"linux": {
  "target": "deb"
},
"files": [
  "**/*.html",
  "**/*.css",
  "**/*.json",
  "**/*.js",
  "node_modules/*",
  "**/*.node",
  "**/${arch}/${os}/*"
]
}
```

```json
{
"postinstall": " typings install && install-app-deps",
"start": "tsc && node-gyp-rebuild && concurrently \"npm run tsc:w\" \"electron ./app --enable-logging\"",
"dist:osx": "tsc && build --mac",
"dist:linux32": "tsc && build --linux --ia32",
"dist:linux64": "tsc && build --linux --x64",
"dist:win32": "tsc && build --win --ia32",
"dist:win64": "tsc && build --win --x64",
"tsc": "tsc",
"tsc:w": "tsc -w",
"typings": "typings"
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





### [metasloth/whiterose](https://github.com/metasloth/whiterose/tree/master/package.json)

> An electron-vue project

```json
{
"appId": "com.metasloth.whiterose",
"asar": false,
"compression": "maximum"
}
```

```json
{
"publish": "node tasks/publish.js",
"build": "node tasks/release.js",
"build:clean": "cross-env PLATFORM_TARGET=clean node tasks/release.js",
"build:darwin": "cross-env PLATFORM_TARGET=darwin node tasks/release.js",
"build:linux": "cross-env PLATFORM_TARGET=linux node tasks/release.js",
"build:mas": "cross-env PLATFORM_TARGET=mas node tasks/release.js",
"build:win32": "cross-env PLATFORM_TARGET=win32 node tasks/release.js",
"dev": "node tasks/runner.js",
"lint": "eslint --ext .js,.vue -f ./node_modules/eslint-friendly-formatter app",
"lint:fix": "eslint --ext .js,.vue -f ./node_modules/eslint-friendly-formatter --fix app",
"pack": "cross-env NODE_ENV=production webpack -p --progress --colors",
"postinstall": "npm run lint:fix && cd app && npm install",
"vue:route": "node tasks/vue/route.js",
"vuex:module": "node tasks/vuex/module.js"
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





### [michaelknoch/mia](https://github.com/michaelknoch/mia/tree/master/package.json)

> Mia Frontend

```json
{
"appId": "your.id",
"category": "your.app.category.type",
"win": {
  "iconUrl": "http://www.iconarchive.com/download/i80753/custom-icon-design/flatastic-3/filetype-ico.ico"
}
}
```

```json
{
"postinstall": "typings install && tsd reinstall",
"typings": "typings",
"deploy": "gulp production",
"publish": "gulp dist.deploy && cd distributed && npm publish",
"electron": "./node_modules/.bin/electron production electron.js",
"windows": "build"
}
```





### [michelsalib/torrents](https://github.com/michelsalib/torrents/tree/master/package.json)

> Best torrent client ever

```json
{
"ignore": "node_modules/electron-rebuild|.idea|dist|db.json|electron-builder"
}
```

```json
{
"postinstall": "bower install && electron-rebuild",
"start": "electron index.js",
"pack": "build",
"dist": "build"
}
```





### [Jaspreet89/WarehouseDesktop](https://github.com/Jaspreet89/WarehouseDesktop/tree/master/package.json)

> Desktop app

```json
{
"app-bundle-id": "oubo",
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





### [mlejva/dev_assistant](https://github.com/mlejva/dev_assistant/tree/master/package.json)

> Fast search on StackOverflow

```json
{
"appId": "com.deviac",
"mac": {
  "category": "public.app-category.developer-tools"
}
}
```

```json
{
"test": "echo \"Error: no test specified\" && exit 1"
}
```





### [mls-fe/owl](https://github.com/mls-fe/owl/tree/master/package.json)

> Http proxy

```json
{
"app-bundle-id": "owl",
"app-category-type": "public.app-category.developer-tools"
}
```

```json
{
"build": "babel src -w -d dev",
"build-css": "node-sass assets/style/index.scss assets/style/index.css",
"css": "nodemon -e scss -x \"npm run build-css\"",
"postinstall": "install-app-deps",
"pack": "build",
"dist": "build"
}
```





### [mmckegg/patchwork-builder](https://github.com/mmckegg/patchwork-builder/tree/master/package.json)

> 

```json
{
"appId": "org.ssbc.patchwork",
"npmSkipBuildFromSource": true,
"npmArgs": [
  "--abi=50"
],
"dmg": {
  "icon": "build/dmg-icon.icns"
},
"mac": {},
"linux": {
  "category": "Network"
}
}
```

```json
{
"pack": "build --dir -ml",
"update": "cd app && git pull && npm install",
"release": "build -ml",
"test": "echo \"Error: no test specified\" && exit 1"
}
```





### [monsterkodi/clippo](https://github.com/monsterkodi/clippo/tree/master/package.json)

> clipboard tool

```json
{
"app-bundle-id": "net.monsterkodi.clippo",
"app-category-type": "public.app-category.utilities",
"asar": false,
"osx": {
  "background": "build/background.png",
  "target": [
    "dmg"
  ],
  "contents": [
    {
      "x": 100,
      "y": 180,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 100,
      "y": 70,
      "type": "file"
    }
  ]
}
}
```

```json
{
"start": "electron js/main.js",
"compile": "cp -r js css img bin *.html app",
"install": "cd app && npm install",
"clean": "rm -rf dist app/js app/img app/bin app/css app/*.html app/node_modules",
"dist": "npm run clean && npm run compile && npm run install && build",
"release": "build",
"test": "fish -c \"killall Electron\" -c \"killall Electron\" -c \"npm start\""
}
```





### [JiaHenry/myapp](https://github.com/JiaHenry/myapp/tree/master/package.json)

> Setup test app

```json
{
"appId": "com.sample.study.testapp",
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
"mac": {
  "target": [
    "default"
  ]
},
"linux": {
  "target": [
    "AppImage",
    "deb"
  ]
},
"win": {
  "target": [
    "nsis"
  ],
  "iconUrl": "http://localhost/files/icon.ico",
  "signingHashAlgorithms": [
    "sha256"
  ]
},
"nsis": {
  "oneClick": false,
  "allowElevation": false,
  "language": 1041
}
}
```

```json
{
"start:en": "electron app/en",
"start:cn": "electron app/cn",
"start:jp": "electron app/jp",
"dist-w": "build -w --x64",
"dist-l": "build -l --x64",
"dist-m": "build -m --x64"
}
```





### [Jichao/electron-demo](https://github.com/Jichao/electron-demo/tree/master/package.json)

> electron demo

```json
{
"appId": "jichao.electron-demo",
"category": "jichao.demo"
}
```

```json
{
"pack": "build -dir",
"dist": "build"
}
```





### [AlfonzM/markdown-editor](https://github.com/AlfonzM/markdown-editor/tree/master/package.json)

> 🗒 Yet another Markdown editor made in Electron

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





### [mrothenbuecher/invoice](https://github.com/mrothenbuecher/invoice/tree/master/package.json)

> invoices made simple, create invoices with an electron app.

```json
{
"app-bundle-id": "de.michaelkuerbis.invoice",
"app-category-type": "public.app-category.productivity",
"asar": false,
"win": {
  "iconUrl": "https://raw.githubusercontent.com/mkuerbis/invoice/master/build/icon.ico"
}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "rimraf app/*.db && npm install && electron ./app",
"test": "echo \"WARNING: no test specified\" && exit 0",
"dist": "npm run dist:win64",
"dist:win64": "build -w --x64",
"dist:win32": "build -w --ia32"
}
```





### [msroberts/sqlite-designer](https://github.com/msroberts/sqlite-designer/tree/master/package.json)

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
"coverage": "npm test -- -R scripts/istanbul-reporter",
"pree2e": "gulp build-e2e --env=test",
"e2e": "mocha app/e2e.js.autogenerated --require source-map-support/register"
}
```





### [mtumirea/it-2kurs-2sem-tp-socket-chat-udp](https://github.com/mtumirea/it-2kurs-2sem-tp-socket-chat-udp/tree/master/package.json)

> Very simple udp chat

```json
{
"asar": true,
"app-bundle-id": "your.id",
"app-category-type": "your.app.category.type",
"iconUrl": "see https://github.com/develar/electron-builder#in-short"
}
```

```json
{
"start": "electron main.js",
"postinstall": "install-app-deps",
"pack": "build"
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





### [munvier/electron-higgins](https://github.com/munvier/electron-higgins/tree/master/package.json)

> App to manage TV Shows and subtitles

```json
{
"appId": "xyz.munvier.Higgins",
"category": "public.app-category.dev",
"productName": "Higgins",
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
  "remoteReleases": "https://github.com/munvier/Higgins",
  "loadingGif": "build/install-spinner.gif",
  "msi": true
}
}
```

```json
{
"start": "npm install && npm run compile && electron ./app",
"test": "mocha",
"compile": "rimraf app/out",
"pack": "npm run compile && build --dir",
"dist": "npm run compile && build"
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





### [n6g7/electron-react-boilerplate](https://github.com/n6g7/electron-react-boilerplate/tree/master/package.json)

> A boilerplate for Electron/React applications

```json
{
"appId": "fr.gnab.electron-react-boilerplate",
"app-category-type": "public.app-category.developer-tools"
}
```

```json
{
"pretest": "eslint --ext js,jsx src test",
"test": "mocha --compilers js:babel-core/register --require test/helper.js --recursive",
"start": "electron .",
"build": "webpack && rm -r dist && build -mwl"
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





### [naderhen/electron-test-publish](https://github.com/naderhen/electron-test-publish/tree/master/package.json)

> test description

```json
{
"appId": "your.id",
"mac": {
  "category": "your.app.category.type"
},
"win": {
  "target": "nsis",
  "publish": [
    "github"
  ],
  "iconUrl": "http://www.iconarchive.com/download/i85852/iconka/tailwaggers/dog-cocktail-alkohol.ico"
}
}
```

```json
{
"start": "electron app/main.js",
"test": "echo \"Error: no test specified\" && exit 1"
}
```





### [nadu/fj_typer](https://github.com/nadu/fj_typer/tree/master/package.json)

> An accessible touch typing tutor

```json
{
"appId": "com.naduism.durontotyper",
"category": "education.typing",
"win": {
  "iconUrl": ""
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





### [natp0ng/electron-autoupdate-sample](https://github.com/natp0ng/electron-autoupdate-sample/tree/master/package.json)

> A minimal Electron application

```json
{
"appId": "electron.sample.autoupdate",
"app-category-type": "electron-sample-autoupdate.app-category.productivity"
}
```

```json
{
"start": "electron .",
"dist": "build"
}
```





### [nemesis866/probabilidad-estadstica](https://github.com/nemesis866/probabilidad-estadstica/tree/master/package.json)

> Proyecto final de probabilidad y estadistica

```json
{
"app-bundle-id": "org.codeando.probabilidad",
"app-category-type": "public.app-category.graphics-design",
"win": {
  "title": "Probabilidad",
  "version": "1.0.0",
  "iconUrl": "https://github.com/nemesis866/probabilidad-estadstica/blob/master/favicon.ico?raw=true",
  "msi": true,
  "authors": "Paulo Andrade"
}
}
```

```json
{
"test": "echo \"Error: no test specified\" && exit 1",
"preinstall": "npm i -g electron electron-packager electron-builder",
"start": "electron .",
"dist:win64": "./node_modules/.bin/build --platform win32 --arch x64",
"pack:osx": "electron-packager . Probabilidad --out=dist/osx --platform=darwin --arch=x64 --overwrite",
"pack:win32": "electron-packager . Probabilidad --out=dist/win --platform=win32 --arch=ia32 --overwrite",
"pack:win64": "electron-packager . Probabilidad --out=dist/win --platform=win32 --arch=x64 --version=1.3.4 app-version=1.0 --icon=favicon.ico --overwrite",
"build": "npm run pack:osx && npm run pack:win32 && npm run pack:win64",
"dist": "npm run dist:win64"
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





### [nicksheffield/codecast](https://github.com/nicksheffield/codecast/tree/master/package.json)

> Broadcast your coding project live across your local network.

```json
{
"appId": "com.nicksheffield.codecast",
"build.mac.category": "public.app-category.productivity",
"mac": {
  "icon": "build/icon.icns"
}
}
```

```json
{
"postinstall": "install-app-deps; bower install; gulp",
"start": "electron ./app",
"dist": "build --x64"
}
```





### [nicksheffield/ebp](https://github.com/nicksheffield/ebp/tree/master/package.json)

> My personal Electron/Angular boilerplate

```json
{
"appId": "com.ebp",
"build.mac.category": "public.app-category.productivity",
"mac": {
  "icon": "build/icon.icns"
}
}
```

```json
{
"postinstall": "install-app-deps && bower install",
"build": "gulp build",
"start": "electron ./app",
"dist": "build --x64"
}
```





### [nicoschmitt/openui.app](https://github.com/nicoschmitt/openui.app/tree/master/package.json)

> 

```json
{
"appId": "nico.openui.app",
"productName": "OpenUI",
"win": {
  "iconUrl": "https://raw.githubusercontent.com/nicoschmitt/openui.app/master/build/icon.ico"
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
"zip32": "build --win zip --ia32",
"mac": "build --mac",
"linux": "build --linux"
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





### [nikhiljha/web2linux](https://github.com/nikhiljha/web2linux/tree/master/package.json)

> Skeleton code for converting any webapp into a linux app.

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
"test": "npm -v"
}
```





### [niros1/ElectornTBR](https://github.com/niros1/ElectornTBR/tree/master/package.json)

> TbrDemo

```json
{
"appId": "Multi.TBR",
"mac": {
  "category": "your.app.category.type"
},
"win": {
  "iconUrl": "http://eatodo.s3.amazonaws.com/icon.ico"
}
}
```

```json
{
"test": "echo \"Error: no test specified\" && exit 1",
"pack": "build --dir",
"dist": "build -w --x64"
}
```





### [nkbt/geovis-standalone](https://github.com/nkbt/geovis-standalone/tree/master/package.json)

> GeoVis Standalone

```json
{
"appId": "org.nkbt.geovis",
"category": "public.app-category.productivity",
"npmRebuild": false,
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
      "y": 150,
      "type": "file"
    }
  ]
},
"linux": {
  "target": "deb"
}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "electron ./app --enable-logging",
"dev": "NODE_ENV=development npm run start",
"release": "build --linux --macos --x64",
"postversion": "git push --follow-tags"
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





### [JumpingRock/react-sandbox-site](https://github.com/JumpingRock/react-sandbox-site/tree/master/package.json)

> Boilerplate for [SurviveJS - React](http://survivejs.com/react/introduction/)

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
"stats": "webpack --profile --json > stats.json",
"webpack-dev": "webpack-dev-server",
"server": "nodemon server/server.js",
"deploy-gh-pages": "gh-pages -d build",
"build-webpack": "webpack",
"test-web": "karma start",
"lint-webapp": "eslint ./web-app ./web-test --ext .js --ext .jsx --ignore-path .gitignore --ignore-pattern dist --cache",
"hot-server": "cross-env NODE_ENV=development node --max_old_space_size=2096 -r babel-register server.js",
"test:tdd": "npm run desktop-test -- --auto-watch --no-single-run",
"lint-desktop": "eslint --ignore-path .gitignore --format=node_modules/eslint-formatter-pretty app desktop-test *.js",
"test-desktop": "cross-env NODE_ENV=test BABEL_DISABLE_CACHE=1 mocha --retries 2 --compilers js:babel-register --recursive --require ./desktop-test/setup.js desktop-test/**/*.spec.js",
"test-desktop-watch": "npm desktop-test -- --watch",
"test-desktop-e2e": "cross-env NODE_ENV=test BABEL_DISABLE_CACHE=1 mocha --retries 2 --compilers js:babel-register --require ./desktop-test/setup.js ./desktop-test/e2e.js",
"build-desktop-main": "cross-env NODE_ENV=production node -r babel-register ./node_modules/webpack/bin/webpack --config webpack.config.electron.js --progress --profile --colors",
"build-desktop-renderer": "cross-env NODE_ENV=production node -r babel-register ./node_modules/webpack/bin/webpack --config webpack.config.production.js --progress --profile --colors",
"build-desktop": "npm run build-desktop-main && npm run build-desktop-renderer",
"start-desktop": "cross-env NODE_ENV=production electron ./app/",
"start-desktop-hot": "cross-env HOT=1 NODE_ENV=development electron -r babel-register -r babel-polyfill ./app/main.development",
"dev-desktop": "npm run hot-server -- --start-desktop-hot",
"postinstall": "concurrently \"install-app-deps\" \"node node_modules/fbjs-scripts/node/check-dev-engines.js package.json\"",
"package": "npm run build && build --publish never",
"package-win": "npm run build && build --win --x64",
"package-linux": "npm run build && build --linux",
"package-all": "npm run build && build -mwl",
"cleanup": "mop -v",
"dev-all": "npm run hot-server && npm run dev-desktop"
}
```





### [npmcdn-to-unpkg-bot/necrovisual](https://github.com/npmcdn-to-unpkg-bot/necrovisual/tree/master/package.json)

> BASED https://github.com/nicoschmitt/necrobotvisualizer

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





### [KMontag42/electron-react-farming-timer](https://github.com/KMontag42/electron-react-farming-timer/tree/master/package.json)

> Farming Timer for different MMO Games and other tasks.

```json
{
"appId": "farming.timer",
"app-category-type": "utilities"
}
```

```json
{
"start": "electron main.js",
"watch": "watchify app/app.js -t babelify -o public/js/bundle.js --debug --verbose",
"pack": "build --mac --windows --dir",
"dist": "build --mac --windows"
}
```





### [nuxis/p0sX-client](https://github.com/nuxis/p0sX-client/tree/master/package.json)

> p0sX is a Point of Sales application

```json
{
"appId": "org.nuxis.p0sX",
"productName": "p0sX",
"win": {
  "iconUrl": "https://github.com/nuxis/p0sX-client/raw/drone/build/icon.ico"
},
"osx": {
  "target": [
    "zip"
  ],
  "icon-size": 64,
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
"postinstall": "install-app-deps",
"dist": "build",
"dist:all": "build --platform all --arch all",
"dist:darwin": "build --platform darwin --arch x64",
"dist:win": "npm run dist:win32 && npm run dist:win64",
"dist:win32": "build --platform win32 --arch ia32",
"dist:win64": "build --platform win32 --arch x64",
"dist:linux": "npm run dist:linux32 && npm run dist:linux64",
"dist:linux32": "build --platform linux --arch ia32",
"dist:linux64": "build --platform linux --arch x64",
"lint:js": "node ./node_modules/eslint/bin/eslint.js src/**/**.js",
"lint:jsx": "node ./node_modules/eslint/bin/eslint.js src/**/**.jsx",
"lint": "npm run lint:js && npm run lint:jsx",
"electron": "electron ./app",
"build": "npm run build:main && npm run build:renderer",
"build:main": "node -r babel-register ./node_modules/webpack/bin/webpack.js --config .webpack/electron.js --progress --profile --colors",
"build:renderer": "node -r babel-register ./node_modules/webpack/bin/webpack.js --config .webpack/production.js --progress --profile --colors",
"watch:renderer": "node -r babel-register ./node_modules/webpack/bin/webpack.js --config .webpack/production.js --progress --profile --colors --watch",
"start": "npm run build && npm run electron"
}
```





### [KaiserY/learn-electron](https://github.com/KaiserY/learn-electron/tree/master/package.json)

> 学习 Electron

```json
{
"download": {
  "mirror": "https://npm.taobao.org/mirrors/electron/",
  "strictSSL": false
},
"linux": {
  "target": "rpm",
  "depends": []
},
"win": {
  "msi": false
}
}
```

```json
{
"start": "npm run compile && electron ./app",
"postinstall": "install-app-deps",
"clean:dist": "rimraf dist",
"clean:public": "rimraf app/public",
"clean:out": "rimraf app/out",
"compile:ts": "npm run clean:out && tsc",
"compile:webpack": "npm run clean:public && webpack --progress --profile --colors --display-reasons --display-error-details --display-modules",
"compile": "npm run compile:webpack",
"pack": "npm run compile && build",
"dist": "npm run compile && build"
}
```





### [ohsloth/ohsloth](https://github.com/ohsloth/ohsloth/tree/master/package.json)

> Contextual clipboard

```json
{
"asar": true,
"appId": "com.electron.sloth",
"category": "public.app-category.developer-tools",
"mac": {
  "icon": "./_assets/icon.icns"
}
}
```

```json
{
"watch": "supervisor -i node_modules,app,_build -e js -w . -x bash -- ./_script/watch.sh",
"renderer": "./node_modules/.bin/webpack --config webpack/webpack.renderer.js",
"mainjs": "./node_modules/.bin/webpack --config webpack/webpack.main.js",
"ship": "bash -- ./_script/ship.sh",
"pack": "build --dir",
"dist": "build"
}
```





### [ojvazquez/app-update-test](https://github.com/ojvazquez/app-update-test/tree/master/package.json)

> 

```json
{
"appId": "com.waspe.app",
"category": "public.app-category.utilities",
"copyright": "Copyright © 2015 Waspe",
"productName": "App",
"win": {
  "iconUrl": "http://manage.waspe.com/favicon.ico",
  "remoteReleases": "https://github.com/ojvazquez/app-update-test"
}
}
```

```json
{
"dist": "rimraf dist && build",
"start": "electron ."
}
```





### [KaiserY/learn-phaser](https://github.com/KaiserY/learn-phaser/tree/master/package.json)

> 学习 Phaser

```json
{
"download": {
  "mirror": "https://npm.taobao.org/mirrors/electron/",
  "strictSSL": false
},
"linux": {
  "target": "rpm",
  "depends": []
},
"win": {
  "msi": false
}
}
```

```json
{
"rimraf": "rimraf",
"tslint": "tslint",
"typings": "typings",
"webpack": "webpack",
"webpack-dev-server": "webpack-dev-server",
"webdriver-manager": "webdriver-manager",
"protractor": "protractor",
"clean": "rimraf app/dist",
"clean:dist": "rimraf dist/",
"start": "npm run server:dev",
"electron:dev": "npm run build:dev && electron ./app",
"electron:prod": "npm run build:prod && electron ./app",
"test": "karma start",
"server:dev": "npm run clean && better-npm-run server:dev",
"server:prod": "npm run clean && better-npm-run server:prod",
"build:dev": "npm run clean && better-npm-run build:dev",
"build:prod": "npm run clean && better-npm-run build:prod",
"pack": "npm run clean:dist && npm run build:prod && build",
"dist": "npm run clean:dist && npm run build:prod && build",
"webdriver:update": "npm run webdriver-manager update",
"webdriver:start": "npm run webdriver-manager start",
"pree2e": "npm run webdriver:update -- --standalone",
"e2e": "npm run protractor"
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





### [Kanunik71/cleversite-electron](https://github.com/Kanunik71/cleversite-electron/tree/master/package.json)

> Online-consult pult

```json
{
"appId": "com.electron.cleversite",
"win": {
  "icon": "icons/assets-windows/icon.ico"
},
"__squirrelWindows": {
  "iconUrl": "https://raw.githubusercontent.com/Kanunik71/cleversite-electron/master/icons/assets-windows/icon.ico",
  "remoteReleases": "https://github.com/Kanunik71/cleversite-electron"
},
"mas": {
  "entitlements": "build/entitlements.mas.plist",
  "entitlementsInherit": "build/entitlements.mas.inherit.plist"
},
"mac": {
  "icon": "icons/assets-osx/icon.icns",
  "category": "public.app-category.business"
},
"dmg": {
  "icon": "icons/assets-osx/dmg_icon.icns",
  "background": "icons/assets-osx/dmg_bg.png",
  "icon-size": 80,
  "title": "Cleversite-pult",
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
"postinstall": "install-app-deps",
"start": "electron ./app --enable-logging",
"dev": "NODE_ENV='development' npm run start",
"dist": "build -m --x64 --ia32"
}
```





### [KazuyaHayashi/electron_sample](https://github.com/KazuyaHayashi/electron_sample/tree/master/package.json)

> My Application

```json
{
"appId": "my.id",
"category": "my.app.category.type",
"win": {
  "iconUrl": "https://raw.githubusercontent.com/zeit/hyperterm/master/build/icon.ico",
  "icon": "./win-icon.ico",
  "loadingGif": "./loading.gif"
}
}
```

```json
{
"dev": "electron . --enable-logging",
"start": "NODE_ENV=development electron .",
"clean": "rm -rf ./dist",
"clean:osx": "rm -rf ./dist/osx",
"clean:win": "rm -rf ./dist/win",
"pack": "npm run clean && npm run pack:osx && npm run pack:win",
"pack:osx": "npm run clean:osx && electron-packager . $npm_package_productName --app-version=$npm_package_version --version=1.3.4 --out=dist/osx --ignore=dist --platform=darwin --arch=x64 --icon=osx-icon.icns",
"pack:win": "npm run clean:win && electron-packager . $npm_package_productName --app-version=$npm_package_version --version=1.3.4 --out=dist/win --ignore=dist --platform=win32 --arch=x64 --icon=win-icon.ico",
"build": "npm run build:osx && npm run build:win",
"build:osx": "npm run pack:osx && build dist/osx/my-app-darwin-x64/my-app.app --mac",
"build:win": "npm run pack:win && build dist/win/my-app-win32-x64 --win"
}
```





### [1313/spectrum](https://github.com/1313/spectrum/tree/master/package.json)

> "The spectrum video player"

```json
{
"appId": "your.id",
"category": "your.app.category.type",
"win": {
  "iconUrl": "(windows-only) https link to icon"
}
}
```

```json
{
"build-app": "cd app && npm run build",
"prestart": "npm run build-app",
"start": "electron app",
"test": "echo \"Error: no test specified\" && exit 1",
"prepack": "npm run build-app",
"pack": "build --dir",
"dist": "build",
"postinstall": "install-app-deps"
}
```





### [patrislav/wonderplayer](https://github.com/patrislav/wonderplayer/tree/master/package.json)

> A wonderful media player

```json
{
"appId": "com.patrislav.wonderplayer",
"productName": "WonderPlayer"
}
```

```json
{
"postinstall": "install-app-deps",
"start": "electron .",
"pack": "build --dir",
"dist": "build"
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





### [paulmaclean/toi](https://github.com/paulmaclean/toi/tree/master/package.json)

> 

```json
{
"appId": "hr.toi.timeonice",
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





### [pbillerot/atomium](https://github.com/pbillerot/atomium/tree/master/package.json)

> Framework de développement

```json
{
"appId": "atomium",
"linux": {
  "target": "deb",
  "maintainer": "pbillerot"
}
}
```

```json
{
"start": "electron .",
"pack": "build --dir",
"dist": "build",
"pack-linux": "build --linux deb"
}
```





### [persocon/desktop-destiny-weekly](https://github.com/persocon/desktop-destiny-weekly/tree/master/package.json)

> Desktop version of Destiny Weekly

```json
{
"app-bundle-id": "persocon.destinyweekly",
"app-category-type": "public.app-category.game",
"iconUrl": "http://reset.tkrp.net/traveler.ico"
}
```

```json
{
"pack": "npm run pack:osx && npm run pack:win",
"pack:osx": "build --platform darwin",
"pack:win": "build --platform win32 --arch x64",
"dist": "npm run dist:osx && npm run dist:win",
"dist:osx": "npm run pack:osx -- -d",
"dist:win": "npm run pack:win -- -d",
"prerelease:osx": "rm -rf release/osx && mkdir release/osx",
"release:osx": "cp -rv dist/DestinyWeekly-darwin-x64/*.{dmg,zip} release/osx && PACKAGE_VERSION=$(cat app/package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]') && echo $PACKAGE_VERSION >> ./release/osx/VERSION",
"prerelease:win64": "rm -rf release/win64 && mkdir release/win64",
"release:win64": "cp -v dist/win/{RELEASES,*.nupkg,*.exe} release/win64",
"release": "npm run release:osx && npm run release:win64",
"all": "npm run dist && npm run release"
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





### [pfernandom/docker-swarm-ui-manager](https://github.com/pfernandom/docker-swarm-ui-manager/tree/master/package.json)

> 

```json
{
"appId": "com.example.docker-swarm-manager",
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





### [phillipsj/shockingly-sweet](https://github.com/phillipsj/shockingly-sweet/tree/master/package.json)

> 

```json
{
"app-bundle-id": "shockingly-sweet",
"app-category-type": "public.app-category.application",
"win": {
  "extraResources": [],
  "iconUrl": "http://eatodo.s3.amazonaws.com/icon.ico"
}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "npm install && npm run compile && electron ./app",
"clean": "rimraf dist",
"clean:win": "rimraf dist/win",
"compile": "rimraf app/out",
"pack": "npm run compile && build",
"dist": "npm run compile && build",
"release": "npm run compile && build",
"dist:win64": "./node_modules/.bin/build --platform win32 --arch x64",
"dist:win32": "./node_modules/.bin/build --platform win32 --arch ia32",
"setupEnv": "npm config set msvs_version 2015"
}
```





### [pierophp/dictionary](https://github.com/pierophp/dictionary/tree/master/package.json)

> Dicionário para o idioma indígena

```json
{
"app-bundle-id": "org.dictionary",
"app-category-type": "public.app-category.graphics-design",
"iconUrl": "https://raw.githubusercontent.com/pierophp/handview-desktop/master/build/icon.ico",
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
},
"win": {
  "noMsi": false
}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "npm install && electron ./app",
"clean": "rimraf dist",
"clean:osx": "rimraf dist/Dictionary-darwin-x64",
"clean:win": "rimraf dist/win",
"pack": "build",
"dist": "build",
"release": "build",
"dist:win64": "./node_modules/.bin/build --platform win32 --arch x64"
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





### [pikdum/nbb](https://github.com/pikdum/nbb/tree/master/package.json)

> Node.js Booru Browser

```json
{
"appId": "moe.kuudere.nbb",
"app-category-type": "moe.kuudere.nbb",
"win": {
  "iconUrl": "https://files.kuudere.moe/nbb/icon.ico",
  "remoteReleases": "https://files.kuudere.moe/nbb/win64/"
},
"mac": {
  "icon": "build/icon.icns"
}
}
```

```json
{
"start": "electron main.js",
"build:linux": "build && cp build/icon.ico dist/",
"build:windows": "build --win --x64"
}
```





### [LPFP/register](https://github.com/LPFP/register/tree/master/package.json)

> Desktop application build with Electron

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





### [pinkkis/electron-scaffold](https://github.com/pinkkis/electron-scaffold/tree/master/package.json)

> electron app scaffold with angular 1.5 and material

```json
{
"compression": "store",
"productName": "Electron Scaffold",
"win": {
  "remoteReleases": "https://github.com/pinkkis/electron-scaffold",
  "iconUrl": "https://github.com/pinkkis/electron-scaffold/blob/master/build/icon.ico?raw=true"
}
}
```

```json
{
"test": "echo \"Error: no test specified\" && exit 1",
"postinstall": "bower install && typings install",
"dist:win64": "build --platform win32 --arch x64",
"run": "electron ./app",
"pack": "build --target dir",
"dist": "build"
}
```





### [plesk/paex-desk](https://github.com/plesk/paex-desk/tree/master/package.json)

> Plesk API Explorer Desktop App

```json
{
"app-bundle-id": "com.plesk.paex-desk",
"app-category-type": "public.app-category.developer-tools",
"productName": "Plesk API Explorer",
"osx": {
  "title": "Plesk API Explorer",
  "window": {
    "position": {
      "x": 250,
      "y": 250
    },
    "size": {
      "width": 540,
      "height": 340
    }
  }
}
}
```

```json
{
"start": "electron main.js"
}
```





### [LckySndays/LanyangWhatsUp](https://github.com/LckySndays/LanyangWhatsUp/tree/master/package.json)

> 

```json
{
"appId": "tk.lanyang.whatsup",
"productName": "Lanyang-Whats-Up",
"dmg": {},
"linux": {
  "category": "Education",
  "target": "deb"
},
"mac": {
  "category": "public.app-category.education"
},
"mas": {},
"nsis": {},
"win": {
  "iconUrl": "http://i.imgur.com/oT7vFre.png"
},
"squirrelWindows": {
  "iconUrl": "http://i.imgur.com/oT7vFre.png",
  "msi": true,
  "useAppIdAsId": true
}
}
```

```json
{
"start": "electron .",
"pack": "build --dir",
"dist": "build",
"dist-all": "build -wl",
"dist-linux": "build -l",
"dist-mac": "build -m"
}
```





### [prcek/ElectronTest](https://github.com/prcek/ElectronTest/tree/master/package.json)

> QR presence checker

```json
{
"appId": "your.id",
"category": "your.app.category.type"
}
```

```json
{
"start": "electron .",
"compile": "rimraf app/out && tsc",
"pack": "npm run compile && build --dir",
"dist": "npm run compile && build",
"release": "npm run compile && build"
}
```





### [prince-0203/NicoFollower](https://github.com/prince-0203/NicoFollower/tree/master/package.json)

> Follow niconico contents

```json
{
"appId": "io.github.prince-0203.nico-follower",
"copyright": "(c)prince 2016"
}
```

```json
{
"postinstall": "install-app-deps",
"start": "electron .",
"watch": "gulp watch",
"buildSource": "gulp build",
"buildExecutable": "gulp cleanPackageDist && build --dir --win --x64",
"buildInstaller": "gulp cleanPackageDist && build --win --x64"
}
```





### [proshunsuke/niconama-comment-viewer](https://github.com/proshunsuke/niconama-comment-viewer/tree/master/package.json)

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





### [puraku/app](https://github.com/puraku/app/tree/master/package.json)

> 跟噗浪官方 iOS App 有 87% 像的電腦版噗浪 App

```json
{
"appId": "tds.apps.puraku",
"mac": {
  "category": "public.app-category.social-networking"
}
}
```

```json
{
"electron:dev": "cross-env NODE_ENV=development electron .",
"electron:start": "cross-env NODE_ENV=production electron .",
"electron:build": "build -mwl",
"dev": "cross-env NODE_ENV=development webpack-dev-server --inline --hot --content-base static/",
"build": "cross-env NODE_ENV=production webpack --progress --hide-modules",
"build:watch": "cross-env NODE_ENV=production webpack --progress --watch --hide-modules",
"dist": "npm run build && npm run electron:build"
}
```





### [Lenfer/yamusic-player](https://github.com/Lenfer/yamusic-player/tree/master/package.json)

> Wrapper for yandex music site with blackjack and hotkeys

```json
{
"appId": "yamusic.site.wrapper",
"category": "music",
"productName": "Яндекс.Музыка"
}
```

```json
{
"test": "echo \"No test specified\"",
"start": "electron ./",
"pack": "build --dir",
"dist": "build",
"prepare": "npm i is-url lodash vow electron electron-builder"
}
```





### [qpt4000/TrafficLightSystem](https://github.com/qpt4000/TrafficLightSystem/tree/master/package.json)

> UTEP Class Project

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





### [LeoNavel/Calculosa](https://github.com/LeoNavel/Calculosa/tree/master/package.json)

> Calculosa calculator capp

```json
{
"app-bundle-id": "calculosa",
"app-category-type": "productivity"
}
```

```json
{
"postinstall": "install-app-deps",
"package": "electron-packager app --all --out=packages --overwrite",
"dist": "build --platform linux --arch x64",
"start": "electron app"
}
```





### [rahulgore34/Electron-TestApp](https://github.com/rahulgore34/Electron-TestApp/tree/master/package.json)

> Simple

```json
{
"appId": "0.1.0",
"app-category-type": "sample.app",
"win": {
  "iconUrl": "http://eatodo.s3.amazonaws.com/icon.ico"
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





### [ramirofages/tagger](https://github.com/ramirofages/tagger/tree/master/package.json)

> 

```json
{
"appId": "com.ramirofages.tagger",
"app-category-type": "search-files",
"win": {
  "target": [
    "nsis"
  ],
  "icon": "resources/windows/icon_new.ico"
},
"nsis": {
  "oneClick": true,
  "installerHeaderIcon": "resources/windows/setup_icon_new.ico"
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





### [ramkrk/JKBrowser](https://github.com/ramkrk/JKBrowser/tree/master/package.json)

> MyApp

```json
{
"squirrelWindows": {},
"win": {}
}
```

```json
{
"start": "electron .",
"build": "build --win",
"test": "echo \"Error: no test specified\" && exit 1"
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





### [reconbot/robot-browser](https://github.com/reconbot/robot-browser/tree/master/package.json)

> Gives you links to any http server on your network

```json
{
"appId": "com.reconbot.robotbrowser",
"mac": {
  "category": "public.app-category.developer-tools"
}
}
```

```json
{
"pack": "build --dir -mw",
"dist": "build -mw",
"release": "build -mw",
"postinstall": "install-app-deps"
}
```





### [reliefproject/relief](https://github.com/reliefproject/relief/tree/master/package.json)

> 

```json
{
"asar": false,
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
"prestart": "git submodule update --recursive --remote --init",
"start": "gulp start",
"pretest": "gulp build --env=test",
"test": "electron-mocha test --recursive"
}
```





### [requesto/requesto](https://github.com/requesto/requesto/tree/master/package.json)

> Requesto - The futurist open source request client.

```json
{
"appId": "com.github.requesto.requesto",
"category": "public.app-category.developer-tools",
"files": "**/*",
"mac": {
  "icon": "./resources/icon.icns"
}
}
```

```json
{
"start": "electron .",
"build": "node_modules/.bin/build -m"
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





### [LrsNate/Martial](https://github.com/LrsNate/Martial/tree/master/package.json)

> 

```json
{
"appId": "fr.nate.martial",
"category": "public.app-category.education"
}
```

```json
{
"postinstall": "cd app && npm install",
"start": "NODE_ENV=development ./node_modules/.bin/electron app",
"lint": "eslint 'app/**/*.js'",
"webpack": "webpack --progress --colors --display-modules --config webpack.prod.config.js",
"webpack-watch": "webpack --progress --colors --watch",
"pack": "build --dir",
"predist": "npm run webpack",
"dist": "build"
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





### [risingdragon/clip](https://github.com/risingdragon/clip/tree/master/package.json)

> clipboard application on background by electron

```json
{
"win": {
  "iconUrl": "https://tools.webstudio.tokyo/favicon.ico"
}
}
```

```json
{
"start": "electron app",
"build": "babel app/src -d app/dist --presets es2015",
"watch": "babel -w app/src -d app/dist --presets es2015",
"pack:win": "build --win --x64"
}
```





### [risingdragon/electron-http](https://github.com/risingdragon/electron-http/tree/master/package.json)

> HTTP requester

```json
{
"win": {
  "iconUrl": "https://tools.webstudio.tokyo/favicon.ico"
}
}
```

```json
{
"start": "electron app",
"pack:win": "build --win --x64"
}
```





### [risingdragon/filterdir](https://github.com/risingdragon/filterdir/tree/master/package.json)

> Filter of directories

```json
{
"win": {
  "iconUrl": "https://tools.webstudio.tokyo/favicon.ico"
}
}
```

```json
{
"start": "electron app",
"watch": "babel -w app/src -d app/dist --presets es2015,react",
"pack:win": "build --win --x64"
}
```





### [rithvik2329/cn](https://github.com/rithvik2329/cn/tree/master/package.json)

> Next generation desktop rich content editor

```json
{
"appId": "com.rithvik2329.Crenote",
"copyright": "Copyright © 2016 Fridersoft / Ritwik Rohitashwa",
"asar": false,
"compression": "maximum",
"win": {
  "target": [
    "nsis",
    "zip"
  ]
},
"mac": {
  "category": "public.app-category.productivity",
  "target": [
    "dmg",
    "zip"
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
},
"linux": {
  "category": "Office",
  "packageCategory": "editors",
  "target": [
    "deb",
    "zip"
  ],
  "synopsis": "creNote — Next generation desktop rich content editor that saves documents with themes. HTML & Markdown compatible. For Windows, OS X & Linux.",
  "desktop": {
    "Type": "Application",
    "Encoding": "UTF-8",
    "Name": "creNote",
    "Comment": "Next generation desktop rich content editor.",
    "Exec": "creNote",
    "Terminal": false
  }
}
}
```

```json
{
"gulp": "gulp",
"dist": "gulp dist"
}
```





### [Luckino/CHART-Client](https://github.com/Luckino/CHART-Client/tree/master/package.json)

> Cliente para renderizar gráficas

```json
{
"appId": "Chart-client",
"category": "none"
}
```

```json
{
"start": "electron ."
}
```





### [Luckino/REST-Client](https://github.com/Luckino/REST-Client/tree/master/package.json)

> RESTful Client

```json
{
"appId": "none",
"category": "none"
}
```

```json
{
"start": "electron ."
}
```





### [rnossal/base-calc](https://github.com/rnossal/base-calc/tree/master/package.json)

> Calculadora para cálculos das 4 bases principais.

```json
{
"appId": "com.rnossal.basecalc",
"category": "com.rnossal.basecalc.category.accessories",
"win": {
  "iconUrl": "https://raw.githubusercontent.com/rnossal/base-calc/master/assets/app-icon/win/icon.ico",
  "icon": "assets/app-icon/win/icon.ico"
}
}
```

```json
{
"start": "electron main.js",
"pack": "build --dir",
"dist": "build"
}
```





### [robteix/millie](https://github.com/robteix/millie/tree/master/package.json)

> Millie is a multiplatform, multiservice instant messaging client done with lots of love

```json
{
"appId": "com.delightfulcode.millie",
"app-category-type": "blah",
"asar": true,
"win": {
  "iconUrl": "https://raw.githubusercontent.com/robteix/millie/master/app/img/app.ico",
  "loadingGif": "./app/img/heart.gif",
  "msi": false
},
"files": [
  "**/*",
  "!dist/**/*",
  "!tools/**/*",
  "!release/**/*"
]
}
```

```json
{
"test": "cross-env NODE_ENV=test mocha --compilers js:babel-core/register --recursive --require ./test/setup.js test/**/*.spec.js",
"test-watch": "npm test -- --watch",
"test-e2e": "cross-env NODE_ENV=test mocha --compilers js:babel-core/register --require ./test/setup.js --require co-mocha ./test/e2e.js",
"lint": "eslint app test *.js",
"hot-server": "node server.js",
"build": "cross-env NODE_ENV=production webpack --config webpack.config.production.js --progress --profile --colors",
"start": "cross-env NODE_ENV=production electron ./",
"start-hot": "cross-env HOT=1 NODE_ENV=development electron ./",
"package": "cross-env NODE_ENV=production node package.js",
"package-all": "npm run package -- --all --asar --prune --ignore=release --ignore=dist/installers",
"postinstall": "node node_modules/fbjs-scripts/node/check-dev-engines.js package.json",
"dev": "concurrently --kill-others \"npm run hot-server\" \"npm run start-hot\""
}
```





### [rodleviton/doogie](https://github.com/rodleviton/doogie/tree/master/package.json)

> The most fly markdown editor ever.

```json
{
"appId": "your.id",
"app-category-type": "your.app.category.type"
}
```

```json
{
"start": "NODE_ENV=development electron .",
"test": "standard && mocha",
"pack": "build --dir",
"dist": "NODE_ENV=production build"
}
```





### [rohit-lakhanpal/electron-tail](https://github.com/rohit-lakhanpal/electron-tail/tree/master/package.json)

> tail is a program on Unix and Unix-like systems used to display the tail end of a text file or piped data. This is an electron application that can work within cross platform environments & provides an easy UI that can be used to tail files.

```json
{
"appId": "apps.rohitl.electron-tail",
"app-category-type": "public.app-category.developer-tools",
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
"postinstall": "bower install && install-app-deps",
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





### [roncli/ChatterGrid](https://github.com/roncli/ChatterGrid/tree/master/package.json)

> An application to easily create and share custom soundboards.

```json
{
"appId": "com.electron.chattergrid",
"productName": "ChatterGrid",
"compression": "maximum",
"win": {
  "icon": "icon.ico"
}
}
```

```json
{
"pack": "node_modules/.bin/build.cmd --dir",
"dist": "node_modules/.bin/build.cmd"
}
```





### [roncli/dclstats](https://github.com/roncli/dclstats/tree/master/package.json)

> Consolidated stats from the DCL, used by the Self-Destruct Sequence podcast.

```json
{
"appId": "com.electron.dclstats",
"productName": "DCL Stats",
"compression": "maximum",
"win": {
  "icon": "icon.ico"
}
}
```

```json
{
"pack": "node_modules/.bin/build.cmd --dir",
"dist": "node_modules/.bin/build.cmd"
}
```





### [rose-m/oSeed](https://github.com/rose-m/oSeed/tree/master/package.json)

> Development Project for the oSeed app

```json
{
"app-bundle-id": "de.coderose.oSeed",
"app-category-type": "public.app-category.developer-tools",
"iconUrl": "(windows only) A URL to an ICO file to use as the application icon, see details below"
}
```

```json
{
"postinstall": "install-app-deps",
"dist": "build",
"build": "webpack --progress --profile --colors --display-error-details --display-cached",
"watch": "webpack --watch --progress --profile --colors --display-error-details --display-cached",
"electron": "electron app"
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





### [roymj88/electron-quickstart](https://github.com/roymj88/electron-quickstart/tree/master/package.json)

> A minimal Electron application

```json
{
"appId": "com.example.electron-jayan",
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
"start": "electron .",
"pretest": "gulp build --env=test",
"test": "electron-mocha build --renderer"
}
```





### [rshah03/ElectronExpenses](https://github.com/rshah03/ElectronExpenses/tree/master/package.json)

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





### [rshk/mdview](https://github.com/rshk/mdview/tree/master/package.json)

> View markdown files

```json
{
"appId": "com.bkno3.mdview"
}
```

```json
{
"start": "electron ."
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





### [ryanbenson/Cultivator](https://github.com/ryanbenson/Cultivator/tree/master/package.json)

> Youtube Downloader

```json
{
"appId": "ryanbenson.app.cultivator",
"app-category-type": "public.app-category.social",
"iconUrl": "http://eatodo.s3.amazonaws.com/icon.ico",
"win": {
  "iconUrl": "http://eatodo.s3.amazonaws.com/icon.ico"
}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "electron ./app --enable-logging",
"dev": "NODE_ENV='development' npm run start",
"dist": "npm run dist:osx && npm run dist:win32 && npm run dist:win64",
"dist:osx": "./node_modules/.bin/build --platform darwin",
"dist:win32": "./node_modules/.bin/build --platform win32 --arch ia32",
"dist:win64": "./node_modules/.bin/build --platform win32 --arch x64"
}
```





### [sadapon2008/gauth-electron](https://github.com/sadapon2008/gauth-electron/tree/master/package.json)

> gauth-electron

```json
{
"appId": "org.sadapon2008.gauth-electron",
"dmg": {
  "background": "assets/osx/icon.png",
  "icon": "assets/osx/icon.icns",
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
  "icon": "assets/win/icon.ico"
}
}
```

```json
{
"start": "node_modules/.bin/electron .",
"test": "echo \"Warning: no test specified\"",
"release:win": "powershell -Command \"Remove-Item -r -Force ./dist\" && build --win --ia32",
"release:mac": "rm -rf ./dist && build --mac --x64"
}
```





### [MTRNord/ls-vertretungsplan-desktop](https://github.com/MTRNord/ls-vertretungsplan-desktop/tree/master/package.json)

> Eine Anwendung die den Vertretungsplan auf dem Desktop anzeigt

```json
{
"asar": true,
"appId": "de.nordgedanken.ls_vertretungsplan_desktop",
"category": "public.app-category.education",
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
  "iconUrl": "https://github.com/MTRNord/ls-vertretungsplan-desktop/tree/master/app/LS.ico?raw=true",
  "remoteReleases": "http://ls-desktop.herokuapp.com/download/0.1.0/",
  "icon": "app/LS.ico"
},
"linux": {
  "target": [
    "deb",
    "zip",
    "rpm"
  ]
}
}
```

```json
{
"pack": "build --dir",
"dist": "build",
"release": "build"
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





### [samradical/video-microscopy](https://github.com/samradical/video-microscopy/tree/master/package.json)

> Organize images taken by a microscope at UCL 

```json
{
"appId": "hr.creaticon.eatodo",
"app-category-type": "public.app-category.productivity",
"dmg": {
  "title": "Test Application",
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
      "path": "TestApp.app"
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
"start": "electron ./app --enable-logging",
"dev": "NODE_ENV='development' npm run start",
"dist": "build -mw"
}
```





### [sartios/electron-demo](https://github.com/sartios/electron-demo/tree/master/package.json)

> 

```json
{
"asar": false,
"appId": "org.sartios.electrondemo",
"win": {
  "remoteReleases": "https://github.com/sartios/electron-demo",
  "publish": [
    "github",
    "bintray"
  ]
}
}
```

```json
{
"postinstall": "install-app-deps",
"clean": "rimraf app/css && rimraf app/js && rimraf app/partials && rimraf app/index.*",
"start": "npm install && electron ./app",
"compile": "rimraf dist",
"pack": "npm run compile && build --dir",
"dist": "npm run compile && build",
"release": "npm run compile && build"
}
```





### [ManRueda/electro-dojo](https://github.com/ManRueda/electro-dojo/tree/master/package.json)

> Electron based Coding Dojo tool

```json
{
"app-bundle-id": "ar.com.manrueda.code-dojo",
"app-category-type": "public.app-category.other",
"compression": "store"
}
```

```json
{
"postinstall": "install-app-deps && typings install",
"all": "npm install && npm run compile && electron ./app/out/boot.js",
"start": "npm run watchLess & npm run remotedev & electron ./app/out/boot.js",
"clean": "rimraf dist",
"clean:osx": "rimraf dist/electro-dojo-darwin-x64",
"clean:win": "rimraf dist/win",
"compile": "rimraf app/out && tsconfig -i 2 && tsc && npm run less",
"pack": "npm run compile && build",
"dist": "npm run compile && build",
"release": "npm run compile && build",
"dist:win64": "./node_modules/.bin/build --platform win32 --arch x64",
"less": "./tools/compile-less.sh",
"watchLess": "nodemon --watch app/styles -e less -x \"npm run less\"",
"remotedev": "remotedev --hostname=localhost --port=6868"
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





### [scribeGriff/convolv-desktop](https://github.com/scribeGriff/convolv-desktop/tree/master/package.json)

> A desktop application for working with data

```json
{
"appId": "Convolv.ConvolvDT",
"app-category-type": "public.app-category.education",
"win": {
  "target": [
    "nsis"
  ],
  "icon": "resources/windows/convolvDT.ico"
},
"nsis": {
  "oneClick": true,
  "installerHeaderIcon": "resources/windows/setup-icon.ico"
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





### [MappedJS/mjs-authoring](https://github.com/MappedJS/mjs-authoring/tree/master/package.json)

> Electron Application for building and creating maps based on mjs-plugin

```json
{
"appId": "de.mappedJS",
"app-category-type": "public.app-category.utilities",
"productName": "MappedJS_Authoring_Tool",
"win": {
  "iconUrl": "https://raw.githubusercontent.com/MappedJS/mjs-material/master/icon.ico"
}
}
```

```json
{
"install": "sudo pip install --upgrade pip && sudo pip install Pillow && napa bgrins/filereader.js",
"start": "./node_modules/.bin/electron src/main.js",
"start:debug": "npm run start -- debug",
"dist": "npm run dist:osx && npm run dist:linux && npm run dist:win64",
"dist:osx": "build --platform darwin",
"dist:linux": "build --platform linux",
"dist:win64": "build --platform win32 --arch x64",
"css": "sass src/scss/main.scss:src/css/main.css --style compressed",
"change": "npm run css && npm run autoprefixer",
"watch": "node_modules/.bin/watch 'npm run change' src/scss/",
"autoprefixer": "./node_modules/.bin/postcss --use autoprefixer --autoprefixer.browsers 'last 2 Chrome versions' src/css/main.css -d ./src/css/"
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





### [Mari0/GraphSchemaEditor](https://github.com/Mari0/GraphSchemaEditor/tree/master/package.json)

> graph schema editor

```json
{
"appId": "your.id",
"category": "your.app.category.type",
"win": {
  "iconUrl": "(windows-only) https link to icon"
}
}
```

```json
{
"pack": "build --dir",
"dist": "build"
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





### [MarkCloser/Angular2-qucikStart-Hero](https://github.com/MarkCloser/Angular2-qucikStart-Hero/tree/master/package.json)

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
"coverage": "npm test -- -R scripts/istanbul-reporter",
"pree2e": "gulp build-e2e --env=test",
"e2e": "mocha app/e2e.js.autogenerated --require source-map-support/register"
}
```





### [sfraise/elite](https://github.com/sfraise/elite/tree/master/package.json)

> 

```json
{
"appId": "com.elite.planner",
"app-category-type": "public.app-category.business",
"win": {
  "target": [
    "nsis"
  ],
  "icon": "resources/windows/icon.ico",
  "remoteReleases": "https://github.com/sfraise/elite.git"
},
"nsis": {
  "oneClick": true,
  "perMachine": true,
  "installerHeaderIcon": "resources/windows/setup-icon.ico"
},
"mac": {
  "icon": "resources/osx/icon.icns"
},
"dmg": {
  "target": [
    "nsis"
  ],
  "icon": "resources/osx/dmg-icon.icns",
  "background": "resources/osx/dmg-background.png"
},
"fileAssociations": {
  "ext": "elite",
  "name": "ELITE"
}
}
```

```json
{
"postinstall": "install-app-deps",
"build": "gulp build",
"prerelease": "gulp build --env=production",
"release": "build --x64 --publish always",
"start": "gulp start",
"pretest": "gulp build-unit --env=test",
"test": "electron-mocha app/specs.js.autogenerated --renderer --require source-map-support/register",
"pree2e": "gulp build-e2e --env=test",
"e2e": "mocha app/e2e.js.autogenerated --require source-map-support/register"
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





### [shall3790/electron-builder](https://github.com/shall3790/electron-builder/tree/master/package.json)

> electron builder demo app

```json
{
"appId": "your.id",
"app-category-type": "your.app.category.type",
"win": {
  "iconUrl": "http://eatodo.s3.amazonaws.com/icon.ico"
}
}
```

```json
{
"postinstall": "install-app-deps",
"predist": "install-app-deps",
"test": "echo \"Error: no test specified\" && exit 1",
"start": "electron ./app --enable-logging",
"dev": "NODE_ENV='development' npm run start",
"env": "cross-env process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'",
"dist": "build --win --ia32"
}
```





### [shbaik82/electron-express-react-boilerplate](https://github.com/shbaik82/electron-express-react-boilerplate/tree/master/package.json)

> 

```json
{
"app-bundle-id": "",
"app-category-type": ""
}
```

```json
{
"start": "cross-env NODE_ENV=development node_modules/.bin/electron app",
"build": "webpack --config webpack.config.js -d --progress --profile --colors",
"clean": "rimraf dist",
"postinstall": "install-app-deps",
"pack": "build --platform=win32 --arch=all",
"dist": "build --platform=win32 --arch=all"
}
```





### [shbaik82/electron-updater-sample](https://github.com/shbaik82/electron-updater-sample/tree/master/package.json)

> 

```json
{
"appId": "com.baiksoohyun.sample",
"app-category-type": "private.app-category.sample",
"win": {
  "iconUrl": "http://localhost:1337/images/icon.ico"
}
}
```

```json
{
"start": "electron app",
"postinstall": "install-app-deps",
"pack:win": "build --win --x64 --dir",
"dist:win": "build --win --x64",
"pack:osx": "build --osx --x64 --dir",
"dist:osx": "build --osx --x64"
}
```





### [shortstories/knu_sugang_macro](https://github.com/shortstories/knu_sugang_macro/tree/master/package.json)

> knu sugang macro

```json
{
"appId": "shortstories",
"app-category-type": "utils"
}
```

```json
{
"postinstall": "install-app-deps",
"pack": "build --dir",
"dist": "build",
"start": "electron ."
}
```





### [shug0/Awesomidi](https://github.com/shug0/Awesomidi/tree/master/package.json)

> Awesome application for binding your MIDI key

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





### [sio-iago/project-manager-explorer](https://github.com/sio-iago/project-manager-explorer/tree/master/package.json)

> 

```json
{
"appId": "br.silva.io.project.tree.explorer",
"app-category-type": "data.visualization",
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





### [sixmonkey/schaltzentrale](https://github.com/sixmonkey/schaltzentrale/tree/master/package.json)

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
"coverage": "npm test -- -R scripts/istanbul-reporter",
"pree2e": "gulp build-e2e --env=test",
"e2e": "mocha app/e2e.js.autogenerated --require source-map-support/register"
}
```





### [slashhuang/electron-app](https://github.com/slashhuang/electron-app/tree/master/package.json)

> building desktop apps using electron

```json
{
"app-bundle-id": "slashhuang",
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
"dev": "concurrently --kill-others \"npm run hot\" \"npm start\"",
"hot": "node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js",
"start": "electron ./app/main.js",
"pack": "build",
"clean": "rimraf dist",
"clean:osx": "rimraf dist/Onshape-darwin-x64",
"clean:win": "rimraf dist/win"
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





### [smalike/tomato](https://github.com/smalike/tomato/tree/master/package.json)

> ELECTRON_MIRROR=http://npm.taobao.org/mirrors/electron/

```json
{
"appId": "org.smalike.hosts",
"category": "hosts.manager",
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
  "remoteReleases": "",
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
"start": "electron ./app",
"watch": "webpack --watch",
"prepackager": "rm -rf app && webpack --config webpack.config.production.js && rm -rf dist",
"packager": "electron-packager ./app Hosts --all --overwrite --out=./dist --asar --app-version=0.1.1 --version=1.3.6",
"dist": "build"
}
```





### [Meadowcottage/InfiniScene](https://github.com/Meadowcottage/InfiniScene/tree/master/package.json)

> :red_circle: Infiniscene (UNOFFICIAL) Web App

```json
{
"appId": "xyz.meadowcottage.InfiniScene",
"category": "public.app-category.entertainment",
"productName": "InfiniScene",
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
  "remoteReleases": "https://github.com/meadowcottage/InfiniScene",
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





### [Meadowcottage/TwitchTron](https://github.com/Meadowcottage/TwitchTron/tree/master/package.json)

> :red_circle: Twitchtron - Kappa

```json
{
"appId": "uk.meadowcottage.TwitchTron",
"app-category-type": "public.app-category.social",
"productName": "TwitchTron",
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
  "remoteReleases": "https://github.com/meadowcottage/TwitchTron",
  "loadingGif": "build/install-spinner.gif",
  "msi": true
}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "npm install && npm run compile && electron ./app",
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





### [spendlively/messenger](https://github.com/spendlively/messenger/tree/master/package.json)

> Opios - keep calm & get things done!

```json
{
"dmg": {},
"win": {},
"linux": {}
}
```

```json
{
"pack": "build --dir",
"dist": "build",
"start": "./node_modules/.bin/electron .",
"build": "electron-packager . Opios --all                         --version=1.3.4 --app-version=0.0.1 --out=distrib --ignore=./distrib --prune --overwrite --icon=icons/opios.icns",
"build:linux": "electron-packager . Opios --platform=linux  --arch=x64  --version=1.3.4 --app-version=0.0.1 --out=distrib --ignore=./distrib --prune --overwrite --icon=icons/opios.icns",
"build:darwin": "electron-packager . Opios --platform=darwin --arch=x64  --version=1.3.4 --app-version=0.0.1 --out=distrib --ignore=./distrib --prune --overwrite --icon=icons/opios.icns --build-version=0.0.1",
"build:mas": "electron-packager . Opios --platform=mas    --arch=x64  --version=1.3.4 --app-version=0.0.1 --out=distrib --ignore=./distrib --prune --overwrite --icon=icons/opios.icns --build-version=0.0.1",
"build:win32": "electron-packager . Opios --platform=win32  --arch=ia32 --version=1.3.4 --app-version=0.0.1 --out=distrib --ignore=./distrib --prune --overwrite --icon=icons/opios.icns",
"build:win64": "electron-packager . Opios --platform=win32  --arch=x64  --version=1.3.4 --app-version=0.0.1 --out=distrib --ignore=./distrib --prune --overwrite --icon=icons/opios.icns"
}
```





### [spendlively/opios](https://github.com/spendlively/opios/tree/master/package.json)

> Opios - keep calm & get things done!

```json
{
"dmg": {},
"win": {},
"linux": {}
}
```

```json
{
"pack": "build --dir",
"dist": "build",
"start": "./node_modules/.bin/electron .",
"build": "electron-packager . Opios --all                         --version=1.3.4 --app-version=0.0.1 --out=distrib --ignore=./distrib --prune --overwrite --icon=icons/opios.icns",
"build:linux": "electron-packager . Opios --platform=linux  --arch=x64  --version=1.3.4 --app-version=0.0.1 --out=distrib --ignore=./distrib --prune --overwrite --icon=icons/opios.icns",
"build:darwin": "electron-packager . Opios --platform=darwin --arch=x64  --version=1.3.4 --app-version=0.0.1 --out=distrib --ignore=./distrib --prune --overwrite --icon=icons/opios.icns --build-version=0.0.1",
"build:mas": "electron-packager . Opios --platform=mas    --arch=x64  --version=1.3.4 --app-version=0.0.1 --out=distrib --ignore=./distrib --prune --overwrite --icon=icons/opios.icns --build-version=0.0.1",
"build:win32": "electron-packager . Opios --platform=win32  --arch=ia32 --version=1.3.4 --app-version=0.0.1 --out=distrib --ignore=./distrib --prune --overwrite --icon=icons/opios.icns",
"build:win64": "electron-packager . Opios --platform=win32  --arch=x64  --version=1.3.4 --app-version=0.0.1 --out=distrib --ignore=./distrib --prune --overwrite --icon=icons/opios.icns"
}
```





### [sreenesh/nodebuildsample](https://github.com/sreenesh/nodebuildsample/tree/master/package.json)

> Placeholder for the nativefier cli to override with a target url

```json
{
"appId": "sreenesh",
"category": "Website",
"win": {
  "iconUrl": "http://eatodo.s3.amazonaws.com/icon.ico"
}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "electron ./app --enable-logging",
"dev": "NODE_ENV='development' npm run start",
"dist": "build -l --x64 --ia32"
}
```





### [sse2016-gomoku-fun/gomoku-player](https://github.com/sse2016-gomoku-fun/gomoku-player/tree/master/package.json)

> Play Gomoku AI locally

```json
{
"appId": "com.github.gomoku-fun.gomoku-player",
"app-category-type": "public.app-category.developer-tools",
"win": {
  "target": [
    "nsis"
  ],
  "icon": "resources/windows/icon.ico"
},
"nsis": {
  "oneClick": false,
  "guid": "74d2f7c3-1d53-4154-a6e1-53b93b52cdb1",
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
"release": "build --publish never",
"start": "gulp start"
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





### [Mercieral/Electron-with-notifications](https://github.com/Mercieral/Electron-with-notifications/tree/master/package.json)

> A repository that recreates an issue where node-notifier will silently fail when using electron's ASAR archive to package applications

```json
{
"app-category-type": "public.app-category.business",
"win": {
  "target": "nsis"
},
"asar": true
}
```

```json
{
"packageWIN": "build --win",
"packageMAC": "build --mac",
"start": "cd electron_build && node ./start-electron.js development"
}
```





### [stefanKuijers/aw-fullstack-app](https://github.com/stefanKuijers/aw-fullstack-app/tree/master/package.json)

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





### [studoot/ElectroSif](https://github.com/studoot/ElectroSif/tree/master/package.json)

> Electron based viewer for SIF files

```json
{
"appId": "com.rolls-royce.ElectroSIF",
"app-category-type": "your.app.category.type",
"asar": false,
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





### [stuf/elmctron-dockyard](https://github.com/stuf/elmctron-dockyard/tree/master/package.json)

> Elmctron Dockyard

```json
{
"appId": "com.rensouhou.dockyard",
"asar": false,
"category": "public.app-category.games",
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
  "iconUrl": "https://github.com/stuf/elmctron-dockyard"
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





### [surya5954/Electron-Boilerplate-sqlite3](https://github.com/surya5954/Electron-Boilerplate-sqlite3/tree/master/package.json)

> Electron sqlite3 node 

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
"postinstall": "install-app-deps && npm run rebuild-sqlite3-win",
"build": "gulp build",
"prerelease": "gulp build --env=production",
"release": "build --x64 --publish never",
"start": "gulp start",
"pretest": "gulp build-unit --env=test",
"test": "electron-mocha app/specs.js.autogenerated --renderer --require source-map-support/register",
"coverage": "npm test -- -R scripts/istanbul-reporter",
"pree2e": "gulp build-e2e --env=test",
"e2e": "mocha app/e2e.js.autogenerated --require source-map-support/register",
"rebuild-sqlite3-win": "cd app/node_modules/sqlite3 && npm install nan --save && npm run prepublish && node-gyp configure --module_name=node_sqlite3 --module_path=../lib/binding/node-v50-win32-x64 && node-gyp node-gyp rebuild --target=1.4.4 --arch=x64 --target_platform=win32 --dist-url=https://atom.io/download/atom-shell --module_name=node_sqlite3 --module_path=../lib/binding/node-v50-win32-x64"
}
```





### [sylvain121/remoteComputerjs](https://github.com/sylvain121/remoteComputerjs/tree/master/package.json)

> virtal keyboard with electron and angular

```json
{
"appId": "1",
"app-category-type": "utility",
"win": {
  "iconUrl": "http://icons.iconarchive.com/icons/icons8/ios7/256/Computer-Hardware-Keyboard-icon.png"
}
}
```

```json
{
"start": "./node_modules/.bin/electron ./app",
"test": "echo \"Error: no test specified\" && exit 1",
"compile": "npm i && npm rebuild --runtime=electron --target=1.3.2 --disturl=https://atom.io/download/atom-shell --abi=49 && npm run-script jpeg-patch",
"jpeg-patch": " cp -Rf ./node_modules/jpeg-turbo/lib/binding/electron-v1.3-linux-x64/ ./node_modules/jpeg-turbo/lib/binding/node-v49-linux-x64",
"postinstall": "install-app-deps",
"pack": "./node_modules/.bin/build --dir",
"dist": "./node_modules/.bin/build"
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





### [taizo/crispy-doodle](https://github.com/taizo/crispy-doodle/tree/master/package.json)

> My Application

```json
{
"appId": "my.id",
"category": "my.app.category.type",
"mac": {
  "icon": "./mac-icon.icns"
},
"win": {
  "iconUrl": "https://raw.githubusercontent.com/zeit/hyperterm/master/build/icon.ico",
  "icon": "./win-icon.ico",
  "loadingGif": "./loading.gif"
}
}
```

```json
{
"clean": "rm -rf dist release",
"dist": "npm run clean && build -mw --x64",
"prerelease:mac": "rm -rf release/mac && mkdir -p release/mac",
"release:mac": "cp -rv dist/mac/*.{dmg,zip} release/mac && PACKAGE_VERSION=$(cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]') && echo $PACKAGE_VERSION >> ./release/mac/VERSION",
"prerelease:win": "rm -rf release/win && mkdir -p release/win",
"release:win": "cp -v dist/win/{RELEASES,*.nupkg,*.exe} release/win",
"release": "npm run prerelease:mac && npm run release:mac && npm run prerelease:win && npm run release:win"
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





### [MindOfThomas/counter](https://github.com/MindOfThomas/counter/tree/master/package.json)

> A simple app to help you keep track of progress in stuff

```json
{
"appId": "com.mindofthomas.counter",
"app-category-type": "productivity",
"win": {
  "iconUrl": "https://github.com/MindOfThomas/counter/raw/master/icon.ico",
  "target": "nsis"
}
}
```

```json
{
"pack": "build --dir",
"dist": "build"
}
```





### [thefakegm/GifDB](https://github.com/thefakegm/GifDB/tree/master/package.json)

> Indexing your gifs

```json
{
"appId": "com.electron.gifdb",
"linux": {
  "maintainer": "thefakestgm@gmail.com",
  "author": "TheFakeGM"
}
}
```

```json
{
"test": "echo \"Error: no test specified\" && exit 1",
"watch": "gulp",
"pack": "build --dir",
"dist": "build -lw",
"postinstall": "install-app-deps",
"start": "electron app"
}
```





### [thewibblywobbly/ElectronDemo](https://github.com/thewibblywobbly/ElectronDemo/tree/master/package.json)

> 

```json
{
"appId": "app.demo",
"app-category-type": "demo",
"win": {
  "msi": true,
  "iconUrl": "https://github.com/electron/electron-api-demos/blob/master/assets/app-icon/win/app.ico"
}
}
```

```json
{
"postinstall": "install-app-deps",
"pack": "build --dir",
"dist": "build --ia32"
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





### [MrBlenny/Electron-Sql-js-Error-Bug](https://github.com/MrBlenny/Electron-Sql-js-Error-Bug/tree/master/package.json)

> Painless Engineering Versioning

```json
{
"appId": "stemn.stemn",
"app-bundle-id": "stemn.stemn",
"app-category-type": "public.app-category.productivity",
"productName": "STEMN",
"compression": "normal",
"asar": true,
"win": {
  "iconUrl": "https://stemn.com/uploads/85c7df7e-312b-4ed9-b12f-11d6d001a220.png"
},
"osx": {
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
      "path": "Stemn.app"
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
"build": "better-npm-run build:main && better-npm-run build:renderer",
"build:main": "better-npm-run build:main",
"build:renderer": "better-npm-run build:renderer",
"app": "better-npm-run app",
"app:test": "better-npm-run app:test",
"server": "better-npm-run server",
"server:test": "better-npm-run server:test",
"compile": "node ./scripts/build.js"
}
```





### [Msimoneau/watchy-electron](https://github.com/Msimoneau/watchy-electron/tree/master/package.json)

> A twitter application

```json
{}
```

```json
{
"pack": "build",
"dist": "build",
"start": "electron ."
}
```





### [tkambler/electron-angular2-boilerplate](https://github.com/tkambler/electron-angular2-boilerplate/tree/master/package.json)

> Electron Angular 2 Boilerplate

```json
{
"productName": "Boilerplate",
"appId": "com.mydomain.${name}",
"asar": true,
"mac": {
  "category": "public.app-category.developer-tools",
  "target": "default"
},
"win": {}
}
```

```json
{
"tsc": "tsc",
"postinstall": "install-app-deps",
"pack": "build --dir",
"dist": "build"
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





### [tocttou/ElectronDC](https://github.com/tocttou/ElectronDC/tree/master/package.json)

> Electron application for DC network [WIP]

```json
{
"appId": "org.tocttou.ElectronDC",
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





### [todbot/electron-hid-toy](https://github.com/todbot/electron-hid-toy/tree/master/package.json)

> Play with Electron and node-hid

```json
{
"appId": "com.todbot.electron-hid-toy",
"app-category-type": "public.app-category.utilities",
"iconUrl": "http://eatodo.s3.amazonaws.com/icon.ico",
"mac": {
  "title": "Electron HID Toy",
  "background": "pkg/background.png",
  "icon": "pkg/icon.icns",
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
"start": "electron . --enable-logging --remote-debugging-port=9222",
"dev": "NODE_ENV='development' npm run start",
"dist": "build -owl --x64 && build -wl --ia32",
"dist:mac": "build --mac",
"dist:win64": "build --win --x64",
"reload": "live-reload app --port 35729",
"electron-rebuild": "electron-rebuild --pre-gyp-fix --force --module_dir . -w node-hid -e node_modules/electron-prebuilt",
"postinstall": "npm run electron-rebuild"
}
```





### [tristandunn/electron-base](https://github.com/tristandunn/electron-base/tree/master/package.json)

> A base for Electron applications with React.

```json
{
"appId": "com.yourname.electronbase",
"mac": {
  "icon": "build/images/icon.icns",
  "identity": "Tristan Dunn"
}
}
```

```json
{
"build": "npm run build-main && npm run build-renderer",
"build-main": "NODE_ENV=production npm run webpack -- --config ./configuration/webpack.electron",
"build-renderer": "NODE_ENV=production npm run webpack -- --config ./configuration/webpack.production",
"lint": "eslint application browser test *.js && sass-lint -v",
"package": "npm run prepare && npm run build && build --osx",
"prepare": "node -r babel-register scripts/prepare",
"start": "concurrently --kill-others \"npm run start-server\" \"npm run start-hot\"",
"start-server": "node -r babel-register server.js",
"start-hot": "HOT=1 NODE_ENV=development electron -r babel-register ./application/index",
"test": "npm run test-renderer -s",
"test-renderer": "NODE_ENV=test electron-mocha --renderer test/**/*.spec.js",
"webpack": "node -r babel-register ./node_modules/webpack/bin/webpack --progress --profile --colors"
}
```





### [tyherox/Scribe](https://github.com/tyherox/Scribe/tree/master/package.json)

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





### [uraway/flush](https://github.com/uraway/flush/tree/master/package.json)

> Electron application

```json
{
"appId": "com.yourname.electron"
}
```

```json
{
"build": "npm run build-main && npm run build-renderer",
"webpack": "node -r babel-register ./node_modules/webpack/bin/webpack --progress --profile --colors",
"build-main": "cross-env NODE_ENV=production npm run webpack -- --config ./webpack.electron.config",
"build-renderer": "cross-env NODE_ENV=production npm run webpack -- --config ./webpack.production.config",
"version": "node -r babel-register ./scripts/version.js",
"prepare": "node -r babel-register ./scripts/prepare.js",
"build-all": "npm run prepare && npm run version && npm run build",
"lint": "eslint src test *.js",
"package": "npm run build-all && build -m --x64",
"release": "npm run package && node -r babel-register ./scripts/release.js",
"start": "cross-env NODE_ENV=production electron ./app",
"dev": "concurrently --kill-others \"npm run hot-server\" \"npm run start-hot\"",
"hot-server": "node -r babel-register server.js",
"start-hot": "cross-env HOT=1 NODE_ENV=development electron -r babel-register ./src/main.js",
"test": "echo \"Error: no test specified\" && exit 1",
"test-watch": "npm test -- --watch"
}
```





### [uraway/react-redux-electron-builder-boilerplate](https://github.com/uraway/react-redux-electron-builder-boilerplate/tree/master/package.json)

> Electron application

```json
{
"appId": "com.yourname.electron"
}
```

```json
{
"build": "npm run build-main && npm run build-renderer",
"webpack": "node -r babel-register ./node_modules/webpack/bin/webpack --progress --profile --colors",
"build-main": "cross-env NODE_ENV=production npm run webpack -- --config ./webpack.electron.config",
"build-renderer": "cross-env NODE_ENV=production npm run webpack -- --config ./webpack.production.config",
"version": "node -r babel-register ./scripts/version.js",
"prepare": "node -r babel-register ./scripts/prepare.js",
"build-all": "npm run prepare && npm run version && npm run build",
"lint": "eslint src test *.js",
"package": "npm run build-all && build -m --x64",
"release": "npm run package && node -r babel-register ./scripts/release.js",
"start": "cross-env NODE_ENV=production electron ./app",
"dev": "concurrently --kill-others \"npm run hot-server\" \"npm run start-hot\"",
"hot-server": "node -r babel-register server.js",
"start-hot": "cross-env HOT=1 NODE_ENV=development electron -r babel-register ./src/main.js",
"test": "echo \"Error: no test specified\" && exit 1",
"test-watch": "npm test -- --watch"
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





### [vicatcu/Electron-Sandbox](https://github.com/vicatcu/Electron-Sandbox/tree/master/package.json)

> blargity blargy blarg

```json
{
"asar": false,
"appId": "your.id",
"category": "your.app.category.type"
}
```

```json
{
"postinstall": "install-app-deps",
"start": "electron .",
"pack": "build --dir",
"dist": "build"
}
```





### [victorabraham/ElectronBookstore](https://github.com/victorabraham/ElectronBookstore/tree/master/package.json)

> An Electron JS based sample application

```json
{
"appId": "com.electron.bookstore",
"app-category-type": "BookManagement",
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





### [wavebeem/screenhive](https://github.com/wavebeem/screenhive/tree/master/package.json)

> Organize your Steam screenshots

```json
{
"appId": "com.mockbrian.Screenhive",
"mac": {
  "category": "public.app-category.utilities",
  "target": "dmg"
},
"win": {
  "target": "nsis"
},
"nsis": {
  "oneClick": true
}
}
```

```json
{
"postinstall": "install-app-deps",
"start": "electron app",
"pack": "build --dir",
"ico": "convert img/Screenhive-*px.png build/icon.ico",
"icns": "./scripts/make-iconset",
"dist:mac": "build --mac",
"dist:win": "build --win"
}
```





### [waylaidwanderer/DotaBuddy](https://github.com/waylaidwanderer/DotaBuddy/tree/master/package.json)

> DotaBuddy is a cross-platform, open-source application with helpful features for when you're playing a match of Dota 2.

```json
{
"appId": "net.jzhang.dotabuddy",
"app-category-type": "gaming",
"asar": false,
"compression": "store",
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





### [webarata3/weight-manager](https://github.com/webarata3/weight-manager/tree/master/package.json)

> weight manager

```json
{
"appId": "your.id",
"category": "your.app.category.type"
}
```

```json
{
"start": "electron .",
"test": "gulp lint",
"clean": "gulp clean"
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





### [willyb321/electron_notes](https://github.com/willyb321/electron_notes/tree/master/package.json)

> Desktop application build with Electron

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





### [winneon/cappy](https://github.com/winneon/cappy/tree/master/package.json)

> An all-in-one screenshot tool.

```json
{
"appId": "moe.winneon.cappy",
"asar": false,
"mac": {
  "category": "public.app-category.productivity"
}
}
```

```json
{
"build": "NODE_ENV=production npm run webpack",
"dev": "npm run webpack",
"pack": "npm run build && npm run sass && build --dir",
"postinstall": "install-app-deps",
"sass": "node-sass --include-path sass --output-style compressed sass/base.scss app/dist/bundle.css",
"start": "npm run dev && concurrently --kill-others --raw \"watch 'npm run sass' sass\" \"NODE_ENV=development electron app\"",
"webpack": "webpack"
}
```





### [wjrh/Indigo](https://github.com/wjrh/Indigo/tree/master/package.json)

> An interface for Teal

```json
{
"appId": "org.wjrh.indigo",
"app-category-type": "public.app-category.developer-tools",
"win": {
  "iconUrl": ""
}
}
```

```json
{
"start": "electron ."
}
```





### [woodenbits/etch](https://github.com/woodenbits/etch/tree/master/package.json)

> Etch EDA

```json
{
"appId": "io.woodenbits.etch"
}
```

```json
{
"build": "webpack",
"build:watch": "webpack --hot --watch",
"build:production": "cross-env NODE_ENV=production webpack",
"clean": "rimraf app/assets",
"dist": "build",
"flow": "flow",
"karma": "karma start --single-run",
"karma:watch": "karma start",
"lint": "eslint --ext .js,.jsx *.js flow modules support",
"pack": "build --dir",
"start": "electron app",
"test": "yarn run karma -s",
"check": "yarn run lint && yarn run flow && yarn test",
"postinstall": "install-app-deps"
}
```





### [workflowproducts/letterbox-example](https://github.com/workflowproducts/letterbox-example/tree/master/package.json)

> An example program using letterbox

```json
{
"appId": "com.workflowproducts.postage",
"asar": false,
"mac": {
  "category": "public.app-category.developer-tools"
},
"win": {
  "target": "nsis"
},
"linux": {
  "target": [
    "deb",
    "rpm"
  ]
},
"rpm": {
  "depends": "postgresql-libs"
},
"deb": {
  "depends": "libpq5"
},
"dmg": {
  "icon": null,
  "contents": [
    {
      "x": 448,
      "y": 344,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 192,
      "y": 344
    }
  ]
}
}
```

```json
{
"start": "electron .",
"dist": "build ."
}
```





### [workflowproducts/postcard-example](https://github.com/workflowproducts/postcard-example/tree/master/package.json)

> An example program using Postcard

```json
{
"appId": "com.workflowproducts.postage",
"asar": false,
"mac": {
  "category": "public.app-category.developer-tools"
},
"win": {
  "target": "nsis"
},
"linux": {
  "target": [
    "deb",
    "rpm"
  ]
},
"rpm": {
  "depends": "postgresql-libs"
},
"deb": {
  "depends": "libpq5"
},
"dmg": {
  "icon": null,
  "contents": [
    {
      "x": 448,
      "y": 344,
      "type": "link",
      "path": "/Applications"
    },
    {
      "x": 192,
      "y": 344
    }
  ]
}
}
```

```json
{
"start": "electron .",
"dist": "build ."
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





### [wy182000/electron_nodejs_native_addon](https://github.com/wy182000/electron_nodejs_native_addon/tree/master/package.json)

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





### [wy182000/electron_nodejs_native_addon_call_testdll](https://github.com/wy182000/electron_nodejs_native_addon_call_testdll/tree/master/package.json)

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





### [xcv58/electron-gmail](https://github.com/xcv58/electron-gmail/tree/master/package.json)

> 

```json
{
"app-bundle-id": "com.xcv58.gmail",
"app-category-type": "email.client",
"osx": {
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
      "path": "computed path to artifact, do not specify it - will be overwritten"
    }
  ]
}
}
```

```json
{
"postinstall": "install-app-deps",
"pack": "build",
"dist": "build",
"lint": "eslint ./ --ext .js",
"lintfix": "npm run lint -- --fix"
}
```





### [NutsJs/nuts-desktop](https://github.com/NutsJs/nuts-desktop/tree/master/package.json)

> nuts desktop

```json
{
"appId": "com.jonnyf.fdflow",
"mac": {
  "icon": "build/icon.icns",
  "category": "publish.app-category.jonnyf-design"
},
"dmg": {
  "background": "build/background.png",
  "icon": "build/icon.icns",
  "window": {
    "width": 800,
    "height": 400
  }
},
"win": {
  "iconUrl": "https://raw.githubusercontent.com/F-happy/nuts-desktop/master/assets/img/fd.ico"
}
}
```

```json
{
"start": "./node_modules/.bin/electron main.js",
"build:linux32": "rm -rf dist && electron-packager ./ fdFlow --platform=linux --arch=ia32 --icon=./assets/img/fd.icns --overwrite --out ./dist/$npm_package_version --version=1.4.5 --ignore='(.github|.DS_Store)'",
"build:linux64": "rm -rf dist && electron-packager ./ fdFlow --platform=linux --arch=x64 --icon=./assets/img/fd.icns --overwrite --out ./dist/$npm_package_version --version=1.4.5 --ignore='(.github|.DS_Store)'",
"build:mac": "rm -rf dist && electron-packager ./ fdFlow --platform=darwin --arch=x64 --icon=./assets/img/fd.icns --overwrite --out ../fdflow/dist/$npm_package_version --version=1.4.5 --ignore='(.github|.DS_Store)'",
"build:win32": "rm -rf dist && electron-packager ./ fdFlow --platform=win32 --arch=ia32 --icon=./assets/img/fd.png --overwrite --out ./dist --version=1.4.5 --ignore=.github",
"build:win64": "rm -rf dist && electron-packager ./ fdFlow --platform=win32 --arch=x64 --icon=./assets/img/fd.png --overwrite --out ./dist --version=1.4.5 --ignore=.github",
"test": "echo \"Error: no test specified\" && exit 1"
}
```





### [xuy/aicodes-dash](https://github.com/xuy/aicodes-dash/tree/master/package.json)

> 

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





### [xwvvvvwx/typescript-react-electron-boilerplate](https://github.com/xwvvvvwx/typescript-react-electron-boilerplate/tree/master/package.json)

> typescript / react / redux / electron boilerplate

```json
{
"appId": "org.xwvvvvwx.typescript-boilerplate",
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
},
"directories": {
  "buildResources": "install-resources"
}
}
```

```json
{
"start": "cross-env NODE_ENV=development electron app",
"server": "node dev-server.js",
"lint-css": "stylelint \"src/**/*.css\"",
"lint-ts": "tslint \"src/**/*.ts?(x)\"",
"lint": "npm run lint-css && npm run lint-ts",
"test": "cross-env NODE_PATH=./src mocha --opts mocha.opts",
"test:watch": "npm run test -- --watch",
"prepackage": "cross-env NODE_ENV=production webpack",
"package": "npm run prepackage && build --dir",
"build": "npm run prepackage && build --x64",
"build-mac": "npm run prepackage && build --mac --x64",
"build-win": "npm run prepackage && build --win --x64",
"build-linux": "npm run prepackage && build --linux --x64",
"archive-builds": "tar -zcf builds.tar.gz dist/"
}
```





### [yangglive/ClipDrop](https://github.com/yangglive/ClipDrop/tree/master/package.json)

> ClipDrop

```json
{
"appId": "ClipDrop",
"copyright": "Copyright © 2016 ClipDrop",
"asar": false,
"files": [
  "**/*",
  "!render${/*}"
],
"mac": {
  "category": "public.app-category.developer-tools",
  "icon": "./resources/clipdrop.icns"
},
"win": {
  "icon": "./resources/clipdrop.ico"
}
}
```

```json
{
"start": "npm run webpack && electron ./app",
"dev": "webpack -w & electron ./app",
"webpack-w": "webpack -w",
"webpack": "webpack",
"build": "NODE_ENV=production webpack",
"pack": "build --platform darwin --dir",
"pack:win": "build --platform win32 --dir",
"pack:linux": "build --platform linux --dir",
"dist": "build --platform darwin",
"dist:win": "build --platform win32",
"dist:linux": "build --platform linux"
}
```





### [yashprit/desk-chart](https://github.com/yashprit/desk-chart/tree/master/package.json)

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





### [yuchuan1/electron-boilerplate-eddie](https://github.com/yuchuan1/electron-boilerplate-eddie/tree/master/package.json)

> Electron+React+Redux

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





### [OpenBCI/OpenBCI_Ganglion_Electron](https://github.com/OpenBCI/OpenBCI_Ganglion_Electron/tree/master/package.json)

> The electron application for the ganglion.

```json
{
"appId": "com.openbci.hub",
"category": "your.app.category.type",
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





### [zeesousa/dnd-wizard](https://github.com/zeesousa/dnd-wizard/tree/master/package.json)

> Utility for dungeon masters

```json
{
"appId": "dnd-wizard",
"category": "Fun",
"files": [
  "app/**",
  "!app/scripts/**",
  "!app/css/scripts",
  "main.js",
  "package.json"
]
}
```

```json
{
"postinstall": "bower install",
"build": "electron-packager . electron-test --all --out build",
"start": "electron ."
}
```





### [OpenTrons/opentrons-app](https://github.com/OpenTrons/opentrons-app/tree/master/package.json)

> Protocol specific step based calibration wizard for 2.0 release. 

```json
{
"asar": true,
"appId": "ot.one.opentrons",
"electronVersion": "1.3.1",
"app-category-type": "public.app-category.productivity",
"productName": "Opentrons 2.0",
"dmg": {
  "background-color": "white",
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
"mac": {
  "target": [
    "dmg",
    "zip"
  ]
},
"win": {
  "iconUrl": "https://s3.amazonaws.com/ot-app-builds/win/icon.ico"
},
"linux": {
  "category": "Science",
  "target": "deb"
}
}
```

```json
{
"postinstall": "install-app-deps",
"clean": "rm -rf ./out && rm -rf ./releases/*",
"build:backend": "python3 scripts/build_pyinstaller.py",
"build:frontend": "python scripts/build_electron_app_with_builder.py",
"release": "npm run build:backend && npm run build:frontend",
"build:backend:posix": "./scripts/build_pyinstaller.py",
"build:backend:win": "C:\\Python34\\python scripts\\build_pyinstaller.py",
"build:frontend:posix": "./scripts/build_electron_app_with_builder.py",
"build:frontend:win": "C:\\Python34\\python scripts\\build_electron_app_with_builder.py",
"dev": "webpack-dev-server --port 8090 --inline --hot --content-base ./app/renderer",
"release:posix": "npm run build:backend:posix && npm run build:frontend:posix",
"release:win": "npm run build:backend:win && npm run build:frontend:win",
"start": "cross-env ENABLE_VIRTUAL_SMOOTHIE=true NODE_ENV=development electron app/",
"unit": "karma start test/unit/karma.conf.js --single-run",
"integration": "cross-env ENABLE_VIRTUAL_SMOOTHIE=true mocha --timeout 60000 test/integration_test.js",
"test": "npm run unit; npm run integration; nosetests"
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





### [zzOzz/conges](https://github.com/zzOzz/conges/tree/master/package.json)

> Conges

```json
{
"app-bundle-id": "fr.udl.conges",
"app-category-type": "public.app-category.graphics-design",
"win": {
  "iconUrl": "https://raw.githubusercontent.com/zzOzz/conges/master/app/conges.ico",
  "loadingGif": "app/udl.png",
  "msi": false,
  "authors": "Vincent Lombard"
}
}
```

```json
{
"postinstall": "install-app-deps",
"pack": "./node_modules/.bin/build",
"dist": "./node_modules/.bin/build",
"dist:win64": "./node_modules/.bin/build --platform win32 --arch x64"
}
```





