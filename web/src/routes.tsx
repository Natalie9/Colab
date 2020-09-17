import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import ContactRegister from './pages/ContactRegister'
import ContactList from './pages/ContactList'

function Routes() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Landing} />
      <Route path='/cadastrar' exact component={ContactRegister} />
      <Route path='/buscar' exact component={ContactList} />
    </BrowserRouter>
  )
}

export default Routes
