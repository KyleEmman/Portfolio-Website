import React from 'react'
import './styles/Nav.css'
import {Link} from 'react-router-dom'

export default function Nav() {
  return (
    <nav className='nav-bar'>
        <input type="checkbox" id="dropdown" />
        <label htmlFor="dropdown">
            <span className="bar"></span>
        </label>
        <ul className='nav-ul'>
            <li><Link to='home'>Home</Link></li>
            <li><Link to='about'>About</Link></li>
            <li><Link to='works'>My Works</Link></li>
            <li><Link to='contact'>Contact</Link></li>
        </ul>
    </nav>
  )
}
