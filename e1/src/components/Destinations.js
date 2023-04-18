import React, { useEffect, useState } from 'react';
import DestinationCard from './DestinationCard';
import './destinations.css';

const Destinations = () => {
  const[destinationCardDetails, setDestinationCardDetails] = useState([]);

  useEffect(() => {
    const fetchDestinationCardDetails = async() => {
      try {
        let response = await fetch('places.json');
        setDestinationCardDetails(await response.json());
      }
      catch(err) {
        console.log(err);
      }
    }
    fetchDestinationCardDetails();
  }, [])

  return(
    <section className="destinations-section">
      <div className="destination-heading">
      <h1>Destinations</h1>
      <h4>Just for you. Beacause you and your bike are special for us!</h4>
      </div>
      <div className="destinations-container">
        { console.log(destinationCardDetails) }
        { destinationCardDetails.map((cardDetail) => <DestinationCard cardDetail = {cardDetail} />) }
      </div>
    </section>
  );
}

export default Destinations;