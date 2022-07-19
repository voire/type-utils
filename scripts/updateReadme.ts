import fs from 'fs'

const code = fs.readFileSync('src/index.ts', 'utf-8')
const template = fs.readFileSync('README.template.md', 'utf-8')

const placeholder = '<-- CODE -->'
const content = template.replace(placeholder, code)

fs.writeFileSync('README.md', content, 'utf-8')
console.log('README.md has been updated!')
