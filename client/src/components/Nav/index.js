import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'
import '../Nav/style.css'

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" className on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});

const Nav = () => {  
  return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className = 'navbar-item' to="/">
            <img src={logo} alt="logo" id='logo'></img>
          </Link>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu is-flex">
          <div className="navbar-start">
            <Link className='navbar-item' to="/RSVP">
              RSVP
            </Link>

            <Link className='navbar-item' to="/HotelAndTrave">
              Hotel and Travel
            </Link>


            <Link className='navbar-item' to="/WeddingParty">
              Wedding Party
            </Link>

            <a className = 'navbar-item' target="_blank" href="https://www.yahoo.com">
              Registry
            </a>          
          </div>

        </div>
      </nav>
  )
};

export default Nav;
