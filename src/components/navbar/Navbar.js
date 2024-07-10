import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src='https://demo2.themelexus.com/drchanges/wp-content/uploads/2019/06/logo.svg
' alt=''/>
        <ul className='nav-menu'>
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <div className='nav-connect'>
            Connect With Me 
        </div>
    </div>
  )
}

export default Navbar