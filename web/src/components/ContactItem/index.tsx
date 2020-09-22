import React from 'react'

import './styles.css'

import api from '../../services/api'

interface ContactItemProps {
  contact: {
    id: number
    name: string
    description?: any
    phone: string
    email: string
    skills?: Array<{
      name: string
    }>
  }
}

const ContactItem: React.FC<ContactItemProps> = ({ contact }) => {
  const whatsapp =
    'https://api.whatsapp.com/send?phone=55' +
    contact.phone +
    '&text=Olá, encontrei seu contato pelo Colab e gostaria de conversar!'

  function handleConnection(id: number) {
    console.log(id)
    api.post('contact/' + id + '/connection/', {})
  }
  return (
    <article className='contact-item'>
      <header>
        <img
          src='https://icon-library.com/images/user-png-icon/user-png-icon-8.jpg'
          alt='user'
        />
        <div>
          <strong>{contact.name}</strong>
          {/* <strong>Natalie Tolentino</strong> */}
          {contact.skills &&
            contact.skills.map((skill) => <span>{skill.name}</span>)}
        </div>
      </header>
      <p>{contact.description}</p>
      <footer>
        <p onClick={() => handleConnection(contact.id)}>
          Email:
          <strong>
            <a href={'mailto:' + contact.email}>{contact.email}</a>
          </strong>
        </p>
        <button onClick={() => handleConnection(contact.id)}>
          <a target='_blank' href={whatsapp}>
            <img
              src='https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-icone-1.png'
              alt='Whatsapp'
            />
            <p>Entrar em contato</p>
          </a>
        </button>
      </footer>
    </article>
  )
}

export default ContactItem
