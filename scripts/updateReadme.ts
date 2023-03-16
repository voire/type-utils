import fs from 'fs'
import { capitalize } from './utils/capitalize'

const srcDir = './src'
const placeholder = '<-- CODE -->'
const template = fs.readFileSync('README.template.md', 'utf-8')


const files = fs.readdirSync(srcDir)

let code = ''
files.forEach((filename) => {
  const fileCode = fs.readFileSync(`${srcDir}/${filename}`, 'utf-8')
  const filenameWithoutExtension = filename.replace(/\..+$/, '')
  const title = capitalize(filenameWithoutExtension)
  code += `### \`${title}\` types\n\`\`\`ts\n${fileCode}\n\`\`\`\n\n`
})


const content = template.replace(placeholder, code)
fs.writeFileSync('README.md', content, 'utf-8')
console.log('README.md has been updated!')
