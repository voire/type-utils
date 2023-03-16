import fs from 'fs'
import { safeWrite } from './utils'

const skipArtifacts = ['index.ts', '.temp']
const files = fs.readdirSync('./src', 'utf-8')
  .filter(filename => !skipArtifacts.includes(filename))

let code = ''
files.forEach((filename) => {
  const filenameWithoutExtension = filename.replace(/\..+$/, '')
  code += `export * from './${filenameWithoutExtension}';\n`
}, '')

safeWrite('./src/', 'index.ts', code)
