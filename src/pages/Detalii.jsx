import React from "react";
import { useParams } from "react-router-dom";
import casaData from "./caseData";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./css/Detalii.css";

const Detalii = () => {
  const { casaId } = useParams();
  const casa = casaData[casaId];

  return (
    <>
      <h1 className="detalii-title">{casa.nume}</h1>
      <div className="detalii-container">
        <Carousel className="detalii-carousel">
          {casa.images.map((image, index) => (
            <div key={index} className="carousel-image-container">
              <img
                src={image}
                alt={`${casaId} image ${index + 1}`}
                className="carousel-image"
              />
            </div>
          ))}
        </Carousel>
        <div>
          <h3>Descriere:</h3>
          <br></br>
          <p className="detalii-description">{casa.description}</p>
          <br></br>
          <br></br>
          <h3>Detalii:</h3>
          <br></br>
          <div role="region" tabindex="0">
            <div class="detalii-casa" role="region" tabindex="0">
              <table>
                <tbody>
                  <tr>
                    <td>Suprafață: {casa.sup}m²</td>
                    <td>Dormitoare: {casa.dor}</td>
                  </tr>
                  <tr>
                    <td>Suprafață utilă: {casa.suputil}m²</td>
                    <td>Băi: {casa.baie}</td>
                  </tr>
                  <tr>
                    <td> Suprafață Terase Acoperite: {casa.ter}m²</td>
                    <td>Living: {casa.liv}</td>
                  </tr>
                  <tr>
                    <td>Suprafață Terase Neacoperite: {casa.terneacop}m²</td>
                    <td>Garaj: {casa.gar}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detalii;
