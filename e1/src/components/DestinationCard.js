import React from 'react';
import './destinationCard.css';

const DestinationCard = ({ cardDetail }) => {
  console.log(cardDetail)
  return(
    <div className="destination-card" key={ Date.now() }>
      <div className="destination-image">
        <img src={ `images/${cardDetail.city}.png`} alt={''}/>
      </div>
      <h2 className="destination-description">{ cardDetail.place }</h2>
      <h5 className="destination-title">{ cardDetail.city }</h5>
      <p className="synopsis">{ cardDetail.shortDescription }</p>
      <button className="read-more-button">READ MORE</button>
    </div>
  );
}

export default DestinationCard;