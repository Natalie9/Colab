import express from 'express'
import path from 'path'
import cors from 'cors'
import routes from './api/routes'

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)
let dirname = __dirname.split('/')
let destinho = dirname.slice(1, dirname.length-1).join('/')
console.log({dirname})
console.log({destinho})
const caminho = destinho +'/web/build/'
console.log({caminho})
console.log(__dirname)
app.use('/', express.static(caminho));

app.get('*', (req, res) => {
  res.sendFile(caminho)
})

export default app
