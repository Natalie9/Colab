import { Router } from 'express'
import SkillController from '../controllers/skill.controller'

const skillRouter = Router()
const skillController = new SkillController()

//cria skill
skillRouter.post('/', skillController.create)

//lista todas as skills
skillRouter.get('/', async (request, response) => {
  const filters = request.query
  const res = await skillController.listAll(filters)
  response.json(res)
})

//exibe skill por id, com o nome da categoria que pertence
skillRouter.get('/:id', skillController.getById)

skillRouter.delete('/:id', skillController.delete)

export default skillRouter
