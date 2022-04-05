import React from 'react';
import './Card.css'
const Card = (props) => {
    const {name, review, ratings} = props.cardData;
    return (
    <div className=''>
    <div className="cardBody">
      <h5 className="">{name} -</h5>
      <p className="">{review}</p>
      <p className=""><small className="text-muted">Ratings: {ratings}</small></p>
    </div>
    </div>
    );
};

export default Card;