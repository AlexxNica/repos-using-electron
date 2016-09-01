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

  get pkg () {
    return this.packageJSON
  }
}
