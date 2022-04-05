import React from 'react';
import { useNavigate } from 'react-router-dom';
import Images from '../../Images/camera-unsplash.jpg';
import Review from '../Review/Review';

import './Home.css'
const Home = () => {

    const navigate = useNavigate();
    const showReviews = () =>{
        navigate(`/reviews`);
    }
    return (
        <div className='intro-container'>
            <div className='mt-40 heading text-left'>
                <h1 className='fw-bold text-6xl'>Capture every moment</h1>
                <h2 className='fw-bold text-rose-800 text-6xl mb-8'>As if it's your last</h2>
                <p className='fw-bold text-secondary leading-10'>A picture is a reflection of the dreams, vision, missions and goals hidden within. We test and rate scores of cameras and lenses each year, from pocket-friendly shooters to high-end medium format systems. Here's everything you need to know to pick the best digital camera for you.</p>
                <button className='bg-rose-200 rounded-md px-4 py-2 mt-4 text-rose-800 fw-bold'>Live Demo</button>
            </div>
            <div className='mt-10'>
                <img className='cam-img' src={Images} alt=""></img>
            </div>

            <div>
                <Review></Review>
                <button className='bg-rose-900 text-white px-4 py-1 rounded-lg mb-20' onClick={showReviews}>See all reviews</button>
            </div>
        </div>

    );
};

export default Home;