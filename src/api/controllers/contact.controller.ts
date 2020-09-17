import { Request, Response, response, json } from 'express'
import { getRepository, In, getConnection } from 'typeorm'
import { Contact } from '../../models/Contact'
import { Skill } from '../../models/Skill'
import { Connection } from '../../models/Connection'
import { print } from 'util'

export default class ContactController {
  async create(request: Request, response: Response) {
    try {
      const contactRepository = getRepository(Contact)
      const skillRepository = getRepository(Skill)

      const { name, description, phone, email, skills } = request.body

      const contactSkills: any[] = await skillRepository.find({
        where: {
          name: In(skills),
        },
      })

      const contact = { name, description, phone, email, skills: contactSkills }
      const res = await contactRepository.save(contact)
      return response.status(201).send(res)
    } catch (err) {
      console.log('‼ erro >>', err.message)
    }
  }

  async createConnection(request) {
    try {
      const connection = getConnection().getRepository(Connection)
      const res = await connection.save({ contactid: request.id })
      return res
    } catch (err) {
      console.log('‼ erro >>', err.message)
      return 'Erro ao criar'
    }
  }

  getContactRepository() {
    const conection = getConnection()
    return conection.getRepository(Contact)
  }

  isEmpty(value) {
    console.log({value})
    console.log(value.skill)
    return value === { skill: ''}
  }

  async listAll(filters: { skill: string[] }) {
    const contactRepository = this.getContactRepository()
    console.log(filters.skill, filters.skill.length)
    if (filters.skill.length) {
      let names = [filters.skill].flatMap(it => it);
      console.log('leng', names.length, names)
      return contactRepository
        .createQueryBuilder('contact')
        .innerJoinAndSelect('contact.skills', 'skills')
        .where('skills.name IN (:...names)', { names })
        .getMany()
    } else {
      return contactRepository
        .createQueryBuilder('contact')
        .innerJoinAndSelect('contact.skills', 'skills')
        .getMany()
    }
  }

  //busca excluedente, retorna somente os contatos que tem obrigatoriamente todas aquelas skills
  listOnlyBySkill() {
    // const contactRepository = this.getContactRepository()
    // let names = filters.skill as []
    // console.log(names)
    // let tamanho = names.length
    // console.log(tamanho)
    // if (!this.isEmpty(filters)) {
    //   let contactid = await contactRepository
    //     .createQueryBuilder('contact')
    //     .select('contact.id, COUNT(skills.name)')
    //     .innerJoin('contact.skills', 'skills')
    //     .where('skills.name IN (:...names)', { names })
    //     .groupBy('contact.id')
    //     .having('COUNT(skills.name)=(:tamanho)', { tamanho })
    //     .getRawMany()
    //   console.log(contactid)
    //   let id = contactid.map((contact) => contact.id)
    //   console.log(id)
    //   let contacts = await contactRepository.findByIds(id, {relations: ['skills']})
    //   return contacts
    // }
  }

  async getById(request: Request, response: Response) {
    const contactRepository = getRepository(Contact)
    const res = await contactRepository.findOne(request.params.id, {
      relations: ['skills'],
    })

    response.json(res)
  }

  async delete(request: Request, response: Response) {
    try {
      const repo = getRepository(Contact)
      await repo.delete(request.params.id)
      console.log(request.params.id)
      response.send('Removido com sucesso')
    } catch (err) {
      console.log('‼ erro >>', err.message)
    }
  }
}
