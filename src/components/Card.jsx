import React, { useState, useEffect } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './css/Card.css';
import useDoubleTap from './useDoubleTap';

const Card = ({ images, title, description }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const handleDoubleTap = useDoubleTap(() => {
        // Handle the double tap event here
    });

    useEffect(() => {
        const randomInterval = Math.random() * (15000 - 10000) + 10000; // 1000=1s
    
        const timer = setInterval(() => {
            setCurrentImageIndex((currentImageIndex + 1) % images.length);
        }, randomInterval);
    
        return () => clearInterval(timer);
    }, [currentImageIndex, images.length]);

    return (
        <div className="card" onClick={handleDoubleTap}>
            <img src={images[currentImageIndex]} alt="Background" className="card-image" />
            <SwitchTransition>
                <CSSTransition
                    key={currentImageIndex}
                    addEndListener={(node, done) => {
                        node.addEventListener("transitionend", done, false);
                    }}
                    classNames='fade'
                >
                    <img src={images[currentImageIndex]} alt="Current" className="card-image" />
                </CSSTransition>
            </SwitchTransition>
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
};

export default Card;