import React, { useState} from 'react';

import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
   
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
   
  return (
    <>
        <nav className='navbar'>
            <section className='navbar-container-1'>
           
            <img className='navbar-logo' src='/images/hloov-logo.svg' alt='logo'/>
        
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          </section>
          <section className='navbar-container-2'>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            <li className='nav-item' >
              <Link
                to='/platform'
                className='nav-links' onClick={closeMobileMenu}>
                Platform
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/sectors'
                className='nav-links' onClick={closeMobileMenu}>
                Sectors
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/careers'
                className='nav-links' onClick={closeMobileMenu}>
                Careers
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/connect'
                className='nav-links' onClick={closeMobileMenu}>
                Connect
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/hloov'
                className='nav-links' onClick={closeMobileMenu}>
                Hloov
              </Link>
            </li>
            </ul>
            </section>
            <section className='navbar-container-3'>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item' >
              <Link
                to='/subscribe'
                className='nav-links' onClick={closeMobileMenu}>
                Subscribe
              </Link>
            </li>
            </ul>
            </section>
          
       
        </nav>
        </>
   
  )
}

export default Navbar;
