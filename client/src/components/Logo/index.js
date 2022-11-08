import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'
import '../Logo/style.css'

const Logo = () => {  
  return (
          <Link className = 'navbar-item' to="/">
            <img src={logo} alt="logo" id='logo'></img>
          </Link>
  )
};

export default Logo;
