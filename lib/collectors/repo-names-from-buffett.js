const fs = require('fs')
const path = require('path')
const pathExists = require('path-exists').sync
const electron = fs.readFileSync(path.join(__dirname, '../../data/buffett/electron-prebuilt.txt'), 'utf8').split('\n')
const electronPrebuilt = fs.readFileSync(path.join(__dirname, '../../data/buffett/electron.txt'), 'utf8').split('\n')
const names = electron.concat(electronPrebuilt)

names.forEach(name => {
  const filename = path.join(__dirname, '../../repos', `${name.replace('/', '___')}.json`)
  if (!pathExists(filename)) {
    fs.writeFileSync(filename, JSON.stringify({}))
  }
})
