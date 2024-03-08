import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./css/cParter.css";
import techData from "./techData";

const Tech = () => {
  const t1 = techData.tech1;
  const t2 = techData.tech2;
  const t3 = techData.tech3;
  const t4 = techData.tech4;
  const t5 = techData.tech5;
  const t6 = techData.tech6;
  const t7 = techData.tech7;

  const { techId } = useParams();
  const tech = techData[techId];

  return (
    <div style={{ marginTop: "100px" }}>
      <div className="cParter">
        {[t1, t2, t3, t4,t5, t6, t7].map((tech) => (
          <React.Fragment key={tech.id}>
            <br />
            <div
              className="bar-horizontal"
              style={{
                width: "70vw",
                position: "absolute",
                marginLeft: "12vw",
              }}
            ></div>
            <br />
            <Link to={`/details/${tech.id}`} className="item">
              <img className="img-menu" src={tech.image} />
              <div className="item-text">
                <h4>{tech.nume}</h4>
                <p className="description">{tech.description}</p>
              </div>
            </Link>
          </React.Fragment>
        ))}
        <div
          className="bar-horizontal"
          style={{ width: "70vw", position: "absolute", marginLeft: "12vw" }}
        ></div> 
      </div>
    </div>
  );
};

export default Tech;
