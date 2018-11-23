import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './menu'
import logo from './logo-reprograma.png'
import './navbar.css'

//precisa receber props para que o Menu possa receber o user por props
const Navbar = (props) => ( 
    <nav className= 'navbar'>
        <Link to='/'>
            <img 
                className='navbar__logo'
                src={logo}
                alt='logo da reprograma'
                />
        </Link>
        <Menu {...props} /> 
    </nav>
)

export default Navbar   