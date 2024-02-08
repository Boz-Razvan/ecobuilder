import React from 'react';
import { useParams } from 'react-router-dom';
import './css/cParter.css';
import { Link } from 'react-router-dom';
import casaData from './caseData';

const CGeneva = () => {

    const casa1 = casaData.casa1;
    const casa2 = casaData.casa2;
    const casa3 = casaData.casa3;
    const casa4 = casaData.casa4;

    const { casaId } = useParams();
    const casa = casaData[casaId];

    return (
        <div style={{ marginTop: "100px" }}>
            <div className="cParter">
                {[casa1, casa2, casa3, casa4].map((casa) => (
                    <React.Fragment key={casa.id}>
                        <br />
                        <div className="bar-horizontal" style={{ width: "70vw", position: "absolute", marginLeft: "12vw" }}></div>
                        <br />
                        <Link to={`/detalii/${casa.id}`} className='item'>
                            <img className='img-menu' src={casa.image} />
                            <div className='item-text'>
                                <h4>{casa.nume}</h4>
                                <p className='description'>{casa.description}</p>
                            </div>
                        </Link>
                        <br />
                    </React.Fragment>
                ))}
                <div className="bar-horizontal" style={{ width: "70vw", position: "absolute", marginLeft: "12vw" }}></div>
            </div>
        </div>
    );
}

export default CGeneva;