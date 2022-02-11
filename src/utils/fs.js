const { readFile, writeFile } = require('fs')
const { promisify } = require('util')

const fsReadFile = promisify(readFile)
const fsWriteFile = promisify(writeFile)

export { fsReadFile, fsWriteFile }
