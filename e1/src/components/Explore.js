import React, { useState, useEffect } from 'react';
import './explore.css';
import ExploreSection from './ExploreSection';
import ExploreDetails from './ExploreDetails';

const Explore = () => {
  const [explore, setExplore] = useState(true);
  const [destination, setDestination] = useState();
  const [destinationCardDetails, setDestinationCardDetails] = useState([]);

  useEffect(() => {
    const fetchDestinationCardDetails = async () => {
      try {
        let response = await fetch('places.json');
        setDestinationCardDetails(await response.json());
      }
      catch (err) {
        console.log(err);
      }
    }
    fetchDestinationCardDetails();
  }, []);

  return (
    <section className="explore-section">
      {explore
        ?  <ExploreSection destinationCardDetails={ destinationCardDetails }/>
        :  < ExploreDetails/>}
      <div className="image">
        <img src='images/cover.png' alt="cover" />
      </div>
    </section>
  );
};



export default Explore;
