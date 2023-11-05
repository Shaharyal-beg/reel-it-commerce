import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import logo from './logo.png'

export default function Navbar() {
  return (
  <>
  <nav className='nav-bar'>
    <div className='logo-image'>
      {/* <img className='reel-logo' src='logo-reel.jpeg' alt='logo'></img>4 */}
      <img  className='reel-logo' src={logo} alt='Logo'/>
      <h1 className='name'>REEL IT COMMERCE</h1>
    </div>
      <ul className='menu-items'>
        <Link style={{textDecoration: 'none'}} to='/'><li>Home</li></Link>
        <Link style={{textDecoration: 'none'}} to='/contact'><li>Contact Us</li></Link>
      </ul>
    <div className='buttons'>
      <Link style={{textDecoration: 'none'}} to='/Login'><button className='sign-btns'>Sign In</button></Link>
      <Link style={{textDecoration: 'none'}} to='/Signup'><button className='sign-btns'>Sign Up</button></Link>
    </div>
  </nav>
  </>
  )
}