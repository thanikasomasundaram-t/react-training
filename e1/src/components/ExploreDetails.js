import React, { useState } from 'react';


const ExploreDetails = ({ destinationDetails }) => {
  return (
    <>
      <div className="explore-destination-detail">
        <h1>{ destinationDetails.city }</h1>
        <div className="description">
          { destinationDetails.place }
        </div>
        <h3 className="temperature">32&#176;C</h3>
      </div>
    </>
  );
}

export default ExploreDetails;