import React from 'react';
import './css/cParter.css';
import { Link } from 'react-router-dom';
import { casa5_1 } from '../components/assets/casa 5 cu etaj/casa5';
import { casa6_1 } from '../components/assets/casa 6 cu etaj/casa6';
import { casa7_1 } from '../components/assets/casa 7 cu etaj/casa7';
import { casa8_1 } from '../components/assets/casa8 cu etaj/casa8';


const CHera = () => {
    return (
        <div>
            <div style={{ marginTop: "100px" }}>

                <div className="cParter">
                    <br></br>
                    <br></br>
                    <div className="bar-horizontal" style={{ width: "70vw", position: "absolute", marginLeft: "12vw" }}></div>
                    <br></br>
                    <Link to="/detalii/casa1" className='item'>
                        <img className='img-menu' src={casa5_1} />

                        <div className='item-text'>
                            <h3>Casa 5</h3>
                            <p>Casa ecologică de la Eco-Builder, cu un singur nivel, îmbină armonios eleganța și sustenabilitatea...</p>
                        </div>
                    </Link>
                    <br></br>
                    <div className="bar-horizontal" style={{ width: "70vw", position: "absolute", marginLeft: "12vw" }}></div>
                    <br></br>
                    <Link to="/detalii/casa2" className='item'>
                        <img className='img-menu' src={casa6_1} />

                        <div className='item-text'>
                            <h3>Casa 6</h3>
                            <p>Casa ecologică de la Eco-Builder, cu un singur nivel, îmbină armonios eleganța și sustenabilitatea...</p>
                        </div>
                    </Link>
                    <br></br>
                    <div className="bar-horizontal" style={{ width: "70vw", position: "absolute", marginLeft: "12vw" }}></div>
                    <br></br>
                    <Link to="/detalii/casa3" className='item'>
                        <img className='img-menu' src={casa7_1} />

                        <div className='item-text'>
                            <h3>Casa 7</h3>
                            <p>Casa ecologică de la Eco-Builder, cu un singur nivel, îmbină armonios eleganța și sustenabilitatea...</p>
                        </div>
                    </Link>
                    <br></br>
                    <div className="bar-horizontal" style={{ width: "70vw", position: "absolute", marginLeft: "12vw" }}></div>
                    <br></br>
                    <Link to="/detalii/casa4" className='item'>
                        <img className='img-menu' src={casa8_1} />

                        <div className='item-text'>
                            <h3>Casa 8</h3>
                            <p>Casa ecologică de la Eco-Builder, cu un singur nivel, îmbină armonios eleganța și sustenabilitatea...</p>
                        </div>
                    </Link>
                    <br></br>
                    <div className="bar-horizontal" style={{ width: "70vw", position: "absolute", marginLeft: "12vw" }}></div>
                </div>
            </div>
        </div>
    );
}

export default CHera;