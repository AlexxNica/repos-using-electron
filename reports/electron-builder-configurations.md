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




### [shockone/black-screen](https://github.com/shockone/black-screen/tree/master/package.json)

> A terminal emulator for the 21st century.

```json
{
"appId": "com.github.shockone.black-screen",
"category": "public.app-category.developer-tools"
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




### [nodejs/installer](https://github.com/nodejs/installer/tree/master/package.json)

> **Clone and run for a quick way to see an Electron in action.**

```json
{
"appId": "org.nodejs.installer"
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




### [zeit/now-app](https://github.com/zeit/now-app/tree/master/package.json)

> The native client for ZEIT's now

```json
{
"appId": "co.zeit.now",
"category": "public.app-category.developer-tools",
"asar": false
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




### [zaaack/ELaunch](https://github.com/zaaack/ELaunch/tree/master/package.json)

> a launcher based on Electron and inspired by UAfred，now only support linux and macos

```json
{
"appId": "io.gitub.zaaack.elaunch",
"app-category-type": "public.app-category.productivity"
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




### [q-nick/npm-gui](https://github.com/q-nick/npm-gui/tree/master/package.json)

> Graphic User Interface for NPM packages/tasks for front and back -end users.

```json
{
"app-bundle-id": "your.id",
"app-category-type": "your.app.category.type"
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




### [vdemedes/npm-search](https://github.com/vdemedes/npm-search/tree/master/package.json)

> My excellent app

```json
{
"appId": "com.vdemedes.npm-search",
"app-category-type": "public.app-category.developer-tools"
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




### [SmithersAssistant/smithers](https://github.com/SmithersAssistant/smithers/tree/master/package.json)

> Your personal assistant

```json
{
"appId": "com.robinmalfait.smithers",
"category": "app-category-type=public.app-category.developer-tools"
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




### [Robert-Frampton/lexicon-customizer](https://github.com/Robert-Frampton/lexicon-customizer/tree/master/package.json)

> A desktop app for customizing lexicon look and feel that integrates with Liferay themes.

```json
{
"app-category-type": "public.app-category.developer-tools",
"appId": "com.robframpton.lexicon_customizer"
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




### [fmaru/fmaru](https://github.com/fmaru/fmaru/tree/master/package.json)

> free marumaru 혹은 fuck marumaru

```json
{
"app-bundle-id": "org.fmaru.fmaru",
"app-category-type": "public.app-category.entertainment"
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




### [michaeldegroot/electron-react-password-manager](https://github.com/michaeldegroot/electron-react-password-manager/tree/master/package.json)

> :lock: A secure password storing application. Built with Electron and React

```json
{
"app-bundle-id": "your.id",
"app-category-type": "your.app.category.type",
"win": {
  "iconUrl": "./src/inc/img/logo.ico"
}
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




### [Dischan/dismae-ui](https://github.com/Dischan/dismae-ui/tree/master/package.json)

> User interface to help with dismae game development.

```json
{
"app-bundle-id": "co.dischan.dismae",
"app-category-type": "public.app-category.developer-tools",
"productName": "Dismae"
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




### [AwesomeApp/awesome-app](https://github.com/AwesomeApp/awesome-app/tree/master/package.json)

> A reader for Awesome

```json
{
"appId": "awesome.app",
"category": "awesome.app"
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




### [baptistedonaux/deezer-desktop-linux](https://github.com/baptistedonaux/deezer-desktop-linux/tree/master/package.json)

> Deezer Desktop for Linux

```json
{
"app-bundle-id": "1",
"app-category-type": "public.app-category.developer-tools"
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




### [comp500/proton-downloader](https://github.com/comp500/proton-downloader/tree/master/package.json)

> A youtube downloader with a GUI made using Electron.

```json
{
"app-bundle-id": "prtdl",
"app-category-type": "public.app-category.utilities"
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




### [HoverBaum/BlankUp-Electron](https://github.com/HoverBaum/BlankUp-Electron/tree/master/package.json)

> BlankUp wrapped in Electron.

```json
{
"appId": "de.hendrikwallbaum.blankUpElectron",
"app-category-type": "public.app-category.productivity"
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




### [frntl/frontal](https://github.com/frntl/frontal/tree/master/package.json)

> Markdown powered presentation tool build on Electron / Node.js still WIP

```json
{
"appId": "me.fabianmoronzirfas.frontal",
"asar": false,
"extraResources": "./help/*"
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




### [Josh-G/Hydrogen-win](https://github.com/Josh-G/Hydrogen-win/tree/master/package.json)

> A cross-platform floating media window

```json
{
"appId": "uk.grantj.hydrogen"
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




### [gasolin/expretron](https://github.com/gasolin/expretron/tree/master/package.json)

> Express.js web server wrapped in Electron desktop runtime for any desktop application

```json
{
"app-bundle-id": "org.expretron.boilerplate",
"app-category-type": "public.app-category.productivity"
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




### [healthage/app](https://github.com/healthage/app/tree/master/package.json)

> A minimal Electron application

```json
{
"appId": "healthage.healthage",
"category": "health",
"asar": false
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




### [legendecas/devdocupp](https://github.com/legendecas/devdocupp/tree/master/package.json)

> An electron wrapper app for devdocs.io

```json
{
"appId": "com.github.legendecas.devdocupp",
"app-category-type": "public.app-category.developer-tools"
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




### [mattvoss/checkin-app](https://github.com/mattvoss/checkin-app/tree/master/package.json)

> Desktop Check In Application

```json
{
"app-bundle-id": "xyz.vosswerks.checkin",
"app-category-type": "public.app-category.productivity"
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




### [muletter/muletter](https://github.com/muletter/muletter/tree/master/package.json)

> Desktop mass mailer

```json
{
"app-bundle-id": "muletter",
"app-category-type": "email",
"iconUrl": ""
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




### [n6g7/stylay](https://github.com/n6g7/stylay/tree/master/package.json)

> Compile your Stylus with ease

```json
{
"appId": "fr.gnab.stylay",
"category": "public.app-category.developer-tools"
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




### [Some-Team/vk_music](https://github.com/Some-Team/vk_music/tree/master/package.json)

> VK Music Player

```json
{
"app-bundle-id": "vk.music.player",
"app-category-type": "public.app-category.developer-tools",
"compression": "maximum"
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




### [SurenderLohia/ea-todo](https://github.com/SurenderLohia/ea-todo/tree/master/package.json)

> Electron Angular Todo App

```json
{
"app-bundle-id": "hr.creaticon.eatodo",
"app-category-type": "public.app-category.productivity",
"iconUrl": "http://eatodo.s3.amazonaws.com/icon.ico"
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




### [Thebigbignooby/learn-electron](https://github.com/Thebigbignooby/learn-electron/tree/master/package.json)

> A minimal Electron application

```json
{
"app-bundle-id": "learn.electron",
"app-category-type": "your.app.category.type",
"iconUrl": "(windows only)"
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




### [raphaelbs/curva-aluguel](https://github.com/raphaelbs/curva-aluguel/tree/master/package.json)

> Descreve a curva de gastos entre ficar com o aluguel atual e trocar de aluguel.

```json
{
"appId": "com.github.raphaelbs.curva_aluguel"
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




### [samiconductor/chromiarm](https://github.com/samiconductor/chromiarm/tree/master/package.json)

> Minimal electron browser app for ARM systems.

```json
{
"appId": "com.samiconductor.chromiarm",
"category": "public.app-category.utilities"
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




### [uraway/todo-electron](https://github.com/uraway/todo-electron/tree/master/package.json)

> Electron application

```json
{
"appId": "MasatoUrai.TodoElectron",
"app-category-type": "public.app-category.productivity",
"compression": "store"
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




### [va2ron1/Teleprompter-Electron](https://github.com/va2ron1/Teleprompter-Electron/tree/master/package.json)

> The most complete and professional free software teleprompter app on the web.

```json
{
"app-bundle-id": "hr.creaticon.eatodo",
"app-category-type": "public.app-category.productivity",
"iconUrl": "http://eatodo.s3.amazonaws.com/icon.ico"
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




### [wellandlighthouse/wl-hashfile-generator](https://github.com/wellandlighthouse/wl-hashfile-generator/tree/master/package.json)

> 

```json
{
"appId": "com.wellandlighthouse.wl-hashfile-generator",
"dmg": {},
"win": {}
}
```




### [wellgrisa/store-simple](https://github.com/wellgrisa/store-simple/tree/master/package.json)

> This is the first version of a simple storage app.

```json
{
"appId": "store.org"
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




### [zooeydavechapelle/currency-exporter](https://github.com/zooeydavechapelle/currency-exporter/tree/master/package.json)

> Exports currency data from AnkhBotR2, Deepbot and Revlo

```json
{
"appId": "com.electron.currency-exporter"
}
```




### [Cobbleopolis/RainMachine](https://github.com/Cobbleopolis/RainMachine/tree/master/package.json)

> A simple rain machine web app

```json
{
"appId": "com.cobble.rainMachine"
}
```




