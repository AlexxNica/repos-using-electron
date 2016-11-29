'use strict'

const Package = require('nice-package')

module.exports = class Repo {
  constructor (props) {
    Object.assign(this, props)

    if (this.packageJSON) {
      this.packageJSON = new Package(this.packageJSON)
    }

    return this
  }

  get formerFork () {
    return this.fork || !!this.sourceRepo
  }

  get valid () {
    return this.packageStatus === 200 &&
    this.fullName &&
    this.fullName.length &&
    this.name &&
    this.name.length &&
    Array.isArray(this.contributors) &&
    this.pkg &&
    (this.pkg.somehowDependsOn('electron') || this.pkg.somehowDependsOn('electron-prebuilt'))
  }

  get pkg () {
    return this.packageJSON
  }
}
