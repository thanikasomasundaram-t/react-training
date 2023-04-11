import React from 'react';
import logo from '../assests/images/logo.png';
import './header.css';

const Header = () => {
  return (
    <header>
      <div>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className='menu'>
        <button onClick={() => {}}>Hotels</button>
        <button onClick={() => {}}>Bike Rentals</button>
        <button onClick={() => {}}>Restaurants</button>
      </div>
    </header>
  );
}

export default Header;