import React, { useState, FormEvent, useEffect } from 'react'
import PageHeader from '../../components/PageHeader'
import { withRouter, useHistory } from 'react-router-dom'

import './styles.css'
import Input from '../../components/Input'
import InputNumber from '../../components/InputNumber'
import Textarea from '../../components/Textarea'
import SelectSkill from '../../components/SelectSkill'
import api from '../../services/api'
import { Link } from 'react-router-dom'

const ContactRegister = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [description, setDescription] = useState('')
  const [skill, setSkill] = useState('')
  const [options, setOptions] = useState([])

  useEffect(() => {
    api.get('skill').then((response) => {
      setOptions(response.data)
    })
  }, [])
  let history = useHistory()

  function handleCreateContact(e: FormEvent) {
    api.post('/contact', {
      name,
      email,
      phone,
      description,
      skills: skill,
    })
    e.preventDefault()
    console.log({
      name,
      email,
      phone,
      description,
      skill,
    })

    history.push('/')
  }
  const parFun = (value) => {
    setSkill(value)
  }
  return (
    <div id='page-contact-register'>
      <PageHeader title='Cadastrar um novo contato'></PageHeader>

      <main>
        <form onSubmit={handleCreateContact}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              name='name'
              label='Nome completo'
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
            <Input
              name='email'
              label='Email'
              type='email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />

            <InputNumber
              name='phone'
              label='Telefone'
              type='phone'
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value)
              }}
            ></InputNumber>
            <Textarea
              name='description'
              label='Descrição'
              placeholder='Fale um pouco sobre você'
              value={description}
              onChange={(e) => {
                setDescription(e.target.value)
              }}
            ></Textarea>
          </fieldset>

          <fieldset>
            <legend>Sobre suas habilidades</legend>

            <SelectSkill
              name='skill'
              label='Habilidade'
              value={skill}
              parentFunction={(value) => {
                setSkill(value)
              }}
              options={options}
            />
          </fieldset>

          <footer>
            <button type='submit'>Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  )
}
export default withRouter(ContactRegister)
