import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header>
      <div>
        <a href="/">
          <img src='images/logo.png' alt="logo" />
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