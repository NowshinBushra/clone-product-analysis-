
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';


const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect( () =>{
        fetch('reviewData.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h2 className='my-20'>Customer reviews</h2>
            <div className="cards grid grid-cols-3">
                {
                    reviews.map(cardData => <Card 
                        key={cardData.id}
                        cardData ={cardData}
                        ></Card>)
                }
            </div>
</div>
    );
};

export default Review;