import { Request, Response, response, json } from 'express'
import { getRepository, In, getConnection } from 'typeorm'
import { Connection } from '../../models/Connection'
import { Contact } from '../../models/Contact'

export default class ConnectionController {
  connection() {
    const conection = getConnection()
    return conection.getRepository(Connection)
  }

  isEmpty(value) {
    return JSON.stringify(value) === '{}'
  }

  async create(request) {
    const connection = this.connection()
    const res = await connection.save({ contactid: request.id })
    return res
  }

  async listAll(filters) {
    const connection = this.connection()
    let res
    let total
    if (!this.isEmpty(filters)) {
      res = await connection
        .createQueryBuilder('connection')
        .innerJoinAndSelect('connection.contact', 'contact')
        .where('contact.name = :name', { name: filters.name })
        .getMany()
      total = await connection.count()
      return { res, total }
    }
    console.log('NO filter')
    res = await connection.find()
    total = await connection.count()
    return { res, total }
  }
  async listAllCount(filters) {
    const connection = this.connection()
    let res
    if (!this.isEmpty(filters)) {
      return await connection
        .createQueryBuilder('connection')
        .innerJoinAndSelect('connection.contact', 'contact')
        .where('contact.name = :name', { name: filters.name })
        .getCount()
    }
    console.log('NO filter')
    res = await connection.count()
    console.log(res, 'adsfasd')
    return res
  }

  // async getById(request: Request, response: Response) {
  //   const connectionRepository = getRepository(Connection)
  //   const res = await connectionRepository.findOne(request.params.id, {
  //     relations: ['skills'],
  //   })

  //   response.json(res)
  // }

  // async delete(request: Request, response: Response) {
  //   try {
  //     const repo = getRepository(Connection)
  //     await repo.delete(request.params.id)
  //     console.log(request.params.id)
  //     response.send('Removido com sucesso')
  //   } catch (err) {
  //     console.log('‼ erro >>', err.message)
  //   }
  // }
}
