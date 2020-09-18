import express from 'express'
import path from 'path'
import cors from 'cors'
import routes from './api/routes'

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)
const caminho = path.join(__dirname.split('\\src')[0],'/web/build/');

app.use('/', express.static('/usr/web/build'));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, './../web/build/', 'index.html'))
// })

export default app
