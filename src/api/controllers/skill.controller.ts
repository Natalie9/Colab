import { Skill } from '../../models/Skill'

import { getRepository } from 'typeorm'
import { Request, Response } from 'express'

export default class SkillController {
  async create(request: Request, response: Response) {
    try {
      const repo = getRepository(Skill)
      const res = await repo.save(request.body)
      return response.status(201).json(res)
    } catch (err) {
      console.log('‼ erro >>', err.message)
    }
  }
  isEmpty(value) {
    return JSON.stringify(value) === '{}'
  }
  async listAll(filters) {
    try {
      if (!this.isEmpty(filters)) {
      }
      const skillRepository = getRepository(Skill)
      return await skillRepository.find()
    } catch (err) {
      console.log('‼ erro >>', err.message)
    }
  }

  async getById(request: Request, response: Response) {
    try {
      const skill = await getRepository(Skill).findOne(request.params.id, {
        relations: ['contact'],
      })
      response.json(skill)
    } catch (err) {
      console.log('‼ erro >>', err.message)
    }
  }
  async delete(request: Request, response: Response) {
    try {
      const repo = getRepository(Skill)
      await repo.delete(request.params.id)
      console.log(request.params.id)
      response.send('Removido com sucesso')
    } catch (err) {
      console.log('‼ erro >>', err.message)
    }
  }
}
