#!/usr/bin/env node

const chalk = require('chalk')
const semver = require('semver')
const requiredVersion = require('../package.json').engines.node

const checkNodeVersion = (required) => {
    if (!semver.satisfies(process.version, required)) {
      const message = `Your Node version is ${process.version}, XCLI requires ${required}.\nPlease upgrade and run the CLI again!`;
      console.log(chalk.red(message))
      process.exit(1)
    }
}
  
checkNodeVersion(requiredVersion)


  
