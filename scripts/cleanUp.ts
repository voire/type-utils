import fs from 'fs'

fs.rmSync('./src/index.ts', { recursive: true, force: true })
console.log('Temp files have been removed!')
