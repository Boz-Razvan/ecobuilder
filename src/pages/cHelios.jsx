import React from 'react';
import './css/cParter.css';
import { Link } from 'react-router-dom';
import { casa9_1 } from '../components/assets/casa 9 cu mansarda/casa9';
import { casa10_1 } from '../components/assets/casa 10 cu mansarda/casa10';
import { casa11_1 } from '../components/assets/casa 11 cu mansarda/casa11';
import { casa12_1 } from '../components/assets/casa 12 cu mansarda/casa12';

const CHelios = () => {
    return (
        <div>
            <div style={{ marginTop: "100px" }}>

                <div className="cParter">
                    <br></br>
                    <br></br>
                    <div className="bar-horizontal" style={{ width: "70vw", position: "absolute", marginLeft: "12vw" }}></div>
                    <br></br>
                    <Link to="/detalii/casa1" className='item'>
                        <img className='img-menu' src={casa9_1} />

                        <div className='item-text'>
                            <h3>Casa 9</h3>
                            <p>Casa ecologică de la Eco-Builder, cu un singur nivel, îmbină armonios eleganța și sustenabilitatea...</p>
                        </div>
                    </Link>
                    <br></br>
                    <div className="bar-horizontal" style={{ width: "70vw", position: "absolute", marginLeft: "12vw" }}></div>
                    <br></br>
                    <Link to="/detalii/casa2" className='item'>
                        <img className='img-menu' src={casa10_1} />

                        <div className='item-text'>
                            <h3>Casa 10</h3>
                            <p>Casa ecologică de la Eco-Builder, cu un singur nivel, îmbină armonios eleganța și sustenabilitatea...</p>
                        </div>
                    </Link>
                    <br></br>
                    <div className="bar-horizontal" style={{ width: "70vw", position: "absolute", marginLeft: "12vw" }}></div>
                    <br></br>
                    <Link to="/detalii/casa3" className='item'>
                        <img className='img-menu' src={casa11_1} />

                        <div className='item-text'>
                            <h3>Casa 11</h3>
                            <p>Casa ecologică de la Eco-Builder, cu un singur nivel, îmbină armonios eleganța și sustenabilitatea...</p>
                        </div>
                    </Link>
                    <br></br>
                    <div className="bar-horizontal" style={{ width: "70vw", position: "absolute", marginLeft: "12vw" }}></div>
                    <br></br>
                    <Link to="/detalii/casa4" className='item'>
                        <img className='img-menu' src={casa12_1} />

                        <div className='item-text'>
                            <h3>Casa 12</h3>
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

export default CHelios;