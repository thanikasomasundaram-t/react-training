import React, { useState } from 'react';

const ExploreSection = ({ destinationCardDetails }) => {
  return (
    <>
      <div className="explore-details">
        <h4>WELCOME TO EXPLORER</h4>
        <h1>Your Adventure Travel Expert in the <span>SOUTH</span></h1>
        <select>
            { destinationCardDetails.map((cardDetail) => 
              <option>
                { cardDetail.city }
                </option>
              ) }
        </select>
        <button className="explore-button">EXPLORE</button>
      </div>
    </>
  );
}

export default ExploreSection;