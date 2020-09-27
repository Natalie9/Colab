import React from 'react'
import { Link } from 'react-router-dom'

import ArrowBack from '@material-ui/icons/ArrowBack'
import logo from '../../assets/images/colabam.png'

import './styles.css'

interface PageHeaderProps {
  title: string
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className='page-header'>
      <div className='top-bar-container'>
        <Link to='/'>
          <ArrowBack style={{ fontSize: 32 }}></ArrowBack>
        </Link>
        <Link to='/'>
          <img src={logo} alt='logo ipe lab' />{' '}
        </Link>
      </div>

      <div className='header-content'>
        <strong>{props.title}</strong>
        {props.children}
      </div>
    </header>
  )
}

export default PageHeader
