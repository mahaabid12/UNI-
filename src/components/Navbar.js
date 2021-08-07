import React from 'react'
import { Link } from 'react-router-dom'
import GlobalStyle  from '../globalStyles'
import './nav.css';

import logo from './logo.png'



function Navbar() {
    return (
        <nav>
        <div className ="logo">
      <img src={logo}/>
          <h4>UNI+</h4>
        </div>
        <ul className= "nav-links">
            <li>
                <Link href= '/'  calssName='nav-item'  >Home</Link>
            </li>
            <li >
                <Link to='/about' calssName='nav-item' >About</Link>
            </li>
            <li >
                <Link to='/register' calssName='nav-item' >Register</Link>
            </li>
            <li >
                <Link to='/login' calssName='nav-item'>Login</Link>
            </li>
        </ul>

        <div calssName="sign">
            <div calssName="line1"></div>
            <div calssName="line2"></div>
            <div calssName="line3"></div>
        </div>

        </nav>
  
    )}
export default Navbar
