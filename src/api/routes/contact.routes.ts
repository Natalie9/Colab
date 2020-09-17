import { Router, request, response } from 'express'
import { getRepository, getConnection } from 'typeorm'
import { Contact } from '../../models/Contact'
import ContactController from '../controllers/contact.controller'
import { Skill } from '../../models/Skill'

const contactRouter = Router()

const contactController = new ContactController()

//cria usuário
contactRouter.post('/', contactController.create)

contactRouter.post('/:id/connection', async (request, response) => {
  const req = request.params
  const res = await contactController.createConnection(req)
  response.json(res)
})

//lista todos os usuários
contactRouter.get('/', async (request, response) => {
  const filters =  request.query 
  console.log(request.query)
  const res = await contactController.listAll(filters as { skill: string[] })
  response.json(res)
})

//busca usuário por id
contactRouter.get('/:id', contactController.getById)

contactRouter.delete('/:id', contactController.delete)

export default contactRouter
