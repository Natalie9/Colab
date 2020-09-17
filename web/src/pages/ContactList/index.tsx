import './styles.css'

import React, { useState, useEffect } from 'react'

import PageHeader from '../../components/PageHeader'
import ContactItem from '../../components/ContactItem'
import SelectSkill from '../../components/SelectSkill'
import api from '../../services/api'

function ContactList() {
  const [listContacts, setListContacts] = useState([
    {
      id: 0,
      name: '',
      description: null,
      phone: '',
      email: '',
    },
  ])
  const [options, setOptions] = useState([])
  const [skillsSelected, setSkillsSelected] = useState([])

  useEffect(() => {}, [])

  //essa funçao monitora a variável passada no array,
  // e excecuta a função passada toda vez que ela mudar
  //se o array é vazio, ela executa na inicialização
  useEffect(() => {
    api
      .get('skill')
      .then((response) => {
        setOptions(response.data)
        return response.data
      })
      .then((res) => {
        const sk =
          '?&skill=' +
          res.map((skill) => skill.name).join('&skill=')
        api.get('contact' + sk).then((response) => {
          setListContacts(response.data)
        })
      })
  }, [])

  useEffect(() => {
    console.log('use', skillsSelected)
    const sk = '?&skill=' + skillsSelected.join('&skill=')
    api
      .get('contact' + sk)
      .then((response) => {
        console.log(response.data, 'response contatos')
        setListContacts(response.data)
      })
      .catch((res) => console.log(res))
    console.log('SS and LC', skillsSelected, listContacts)
  }, [skillsSelected])

  useEffect(() => {
    console.log('lista de contatos', listContacts)
  }, [listContacts])

  return (
    <div id='page-contact-list' className='container'>
      <PageHeader title='Estes são os contatos disponíveis'>
        <form id='search-contacts'>
          <SelectSkill
            name='skill'
            label='Habilidade'
            options={options}
            parentFunction={(value) => {
              console.log('skill selecionada', value)
              setSkillsSelected(value)
            }}
          />
        </form>
      </PageHeader>

      <main>
        {listContacts.map((contact) => (
          <div>
            <ContactItem contact={contact}></ContactItem>
          </div>
        ))}
      </main>
    </div>
  )
}

export default ContactList
