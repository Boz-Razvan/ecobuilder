import React from 'react';
import { useParams } from 'react-router-dom';
import casaData from './caseData';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './css/Detalii.css'

const Detalii = () => {
    const { casaId } = useParams();
    const casa = casaData[casaId];

    return (
        <>
            <h1 className="detalii-title">{casa.name}</h1>
            <div className="detalii-container">
                <Carousel className="detalii-carousel">
                    {casa.images.map((image, index) => (
                        <div key={index} className="carousel-image-container">
                            <img src={image} alt={`${casaId} image ${index + 1}`} className="carousel-image" />
                        </div>
                    ))}
                </Carousel>
                <div>
                <h3 style={{marginTop:"30px"}}>Descriere:</h3>
                <br></br>
                <p className="detalii-description">{casa.description}</p>
                <br></br>
                <br></br>
                <h3>Detalii:</h3>
                <br></br>
                <ul>
                    <li>Suprafață: {casa.sup} m²</li>
                    <li>Suprafață Utilă: {casa.suputil} m²</li>
                    <li>Terase Acoperite: {casa.ter} m²</li>
                </ul>
                </div>
            </div>
        </>
    );
}

export default Detalii;