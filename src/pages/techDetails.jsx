import React from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import techData from "./techData";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./css/Detalii.css";

const TechDetails = () => {
  const { techId } = useParams();
  const tech = techData[techId];

  return (
    <>
      <h1 className="detalii-title">{tech.nume}</h1>
      <div className="detalii-container">
        <Carousel className="detalii-carousel">
          {tech.images.map((image, index) => (
            <div key={index} className="carousel-image-container">
              <img
                src={image}
                alt={`${techId} image ${index + 1}`}
                className="carousel-image"
              />
            </div>
          ))}
        </Carousel>
        <div className="det-cont">
          <h3>Descriere:</h3>
          <br></br>
          <p className="detalii-description">{tech.description}</p>
          <br></br>
          <br></br>
          <h3>|</h3>
          <br></br>
          <div role="region" tabindex="0">
            <div class="detalii-casa" role="region" tabindex="0">
              <table>
                <tbody>
                  <tr>
                    <td>Preț: {tech.price} RON</td>
                    <td>TVA Inclus</td>
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

export default TechDetails;
