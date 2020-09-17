import { Router, request, response } from 'express'
import { getRepository, getConnection } from 'typeorm'
import { Connection } from '../../models/Connection'
import ConnectionController from '../controllers/connection.controller'

const connectionRouter = Router()

const connectionController = new ConnectionController()

//cria usuário
connectionRouter.post('/:id',  async (request, response) => {
  const req = request.params;
  const res = await connectionController.create(req)
  response.json(res)
})

//lista todos os usuários
connectionRouter.get('/', async (request, response) => {
  const filters = request.query
  console.log(request.query)
  const res = await connectionController.listAll(filters)
  response.json(res)
})

connectionRouter.get('/total', async (request, response) => {
  const filters = request.query
  console.log(request.query)
  const res = await connectionController.listAllCount(filters)
  response.json(res)
})

// //busca usuário por id
// connectionRouter.get('/:id', connectionController.getById)

// connectionRouter.delete('/:id', connectionController.delete)

export default connectionRouter
