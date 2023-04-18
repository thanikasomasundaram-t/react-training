import React from 'react';
import './contact.css';

const Contact = () => {
  return(
    <footer>
      <div className="contact-section">
        <h1>Contact Us</h1>
        <h4>Our Sales Team will react out to ASAP!</h4>

        <div className="form">
          <label>Name</label>
          <input />
          <label>Your Home Town</label>
          <input />
          <label>Where would you like to go?</label>
          <input />
          <label>Contact Number</label>
          <input />
        </div>
        <button className="submit-button">SUBMIT INTEREST</button>
      </div>
    </footer>
  );
}

export default Contact;