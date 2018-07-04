import React, { Component } from 'react'
import Links from '../../components/UI/Links';
import './Navigation.css'

const links = [
  { name: 'LOGO', url: '/', class: 'Logo' },
  { name: 'Sign Up', url: '/signup', class: 'Item' },
  { name: 'Log In', url: '/login', class: 'Item' },
  { name: 'Log Out', url: '/logout', class: 'Item' }, 
  { name: 'User', url: '/user', class: 'Item' } 
]

  class Navigation extends Component {
    render() {
      return (
        <nav className='Nav'>
          <Links links={links} /> 
        </nav>
      )
    }
  }

export default Navigation