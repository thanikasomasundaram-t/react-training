import React from 'react';
import cover from '../assests/images/cover.png';
import './explore.css';

const Explore = () => {
  return(
    <section className="explore-section">
      <div className="explore-details">
        <h4>WELCOME TO EXPLORER</h4>
        <h1>Your Adventure Travel Expert in the <span>SOUTH</span></h1>
        <select>
          <option>Choose</option>
          <option>Choose</option>
          <option>Choose</option>
        </select>
        <button className="explore-button">EXPLORE</button>
      </div>
      <div className="image">
        <img src={ cover } alt="cover"/>
      </div>
    </section>
  );
};

export default Explore;