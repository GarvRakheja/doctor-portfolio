import React, { useRef, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import "./Navbar.css"
import menu_open from "../../../src/assests/images/openNav.png"
import close_open from "../../../src/assests/images/close.png"

const Navbar = () => {
  const [menu, setMenu] = useState("about")
  const menuRef = useRef()

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px"; 
  }

  return (
    <div className='navbar'>
      <img src='https://demo2.themelexus.com/drchanges/wp-content/uploads/2019/06/logo.svg
' alt='' />
      <img src={menu_open}  onClick={openMenu} className='nav-mob-open'/>
      <ul ref={menuRef} className='nav-menu'>
        <img src={close_open} onClick={closeMenu} className='nav-mob-close'/>
        <li><AnchorLink className='anchor-link' href="#home"><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <hr /> : null}</li>
        <li><AnchorLink className='anchor-link' offset={50} href="#about"><p onClick={() => setMenu("about")}>About Me</p></AnchorLink>{menu === "about" ? <hr /> : null}</li>
        <li><AnchorLink className='anchor-link' offset={50} href="#services"><p onClick={() => setMenu("services")}>Services</p></AnchorLink>{menu === "services" ? <hr /> : null}</li>
        <li><AnchorLink className='anchor-link' offset={50} href="#portfolio"><p onClick={() => setMenu("portfolio")}>Portfolio</p></AnchorLink>{menu === "portfolio" ? <hr /> : null}</li>
        <li><AnchorLink className='anchor-link' offset={50} href="#contact"><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <hr /> : null}</li>
      </ul>
      <div className='nav-connect'>
        <AnchorLink className='anchor-link' offset={50} href="#contact">Connect With Me</AnchorLink>
      </div>
    </div>
  )
}

export default Navbar