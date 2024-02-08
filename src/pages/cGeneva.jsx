import React from 'react';
import './css/cParter.css';
import { Link } from 'react-router-dom';
import casa1 from '../components/assets/casa 1/1.jpg';
import casa2_1 from '../components/assets/casa2/1.jpg';
import { casa4_1 } from '../components/assets/casa4/casa4';
import { casa3_1 } from '../components/assets/casa3/casa3';

const CGeneva = () => {
    return (
        <div>
            <div style={{ marginTop: "100px" }}>

                <div className="cParter">
                    <br></br>
                    <br></br>
                    <div className="bar-horizontal" style={{ width: "70vw", position: "absolute", marginLeft: "12vw" }}></div>
                    <br></br>
                    <Link to="/detalii/casa1" className='item'>
                        <img className='img-menu' src={casa1} />

                        <div className='item-text'>
                            <h3>Casa 1</h3>
                            <p>Casa ecologică de la Eco-Builder, cu un singur nivel, îmbină armonios eleganța și sustenabilitatea...</p>
                        </div>
                    </Link>
                    <br></br>
                    <div className="bar-horizontal" style={{ width: "70vw", position: "absolute", marginLeft: "12vw" }}></div>
                    <br></br>
                    <Link to="/detalii/casa2" className='item'>
                        <img className='img-menu' src={casa2_1} />

                        <div className='item-text'>
                            <h3>Casa 2</h3>
                            <p>EcoBuilder vă invită să experimentați o viață sustenabilă în această casă practică și rafinată..</p>
                        </div>
                    </Link>
                    <br></br>
                    <div className="bar-horizontal" style={{ width: "70vw", position: "absolute", marginLeft: "12vw" }}></div>
                    <br></br>
                    <Link to="/detalii/casa3" className='item'>
                        <img className='img-menu' src={casa3_1} />

                        <div className='item-text'>
                            <h3>Casa 3</h3>
                            <p>Casa ecologică de la Eco-Builder, cu un singur nivel, îmbină armonios eleganța și sustenabilitatea...</p>
                        </div>
                    </Link>
                    <br></br>
                    <div className="bar-horizontal" style={{ width: "70vw", position: "absolute", marginLeft: "12vw" }}></div>
                    <br></br>
                    <Link to="/detalii/casa4" className='item'>
                        <img className='img-menu' src={casa4_1} />

                        <div className='item-text'>
                            <h3>Casa 4</h3>
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

export default CGeneva;