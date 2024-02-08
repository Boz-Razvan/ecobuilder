import React from 'react';
import './css/Home.css';
import Card from '../components/Card';
import { casa1, casa2, casa3 } from '../components/assets/casa 1/casa1';
import { casa2_1, casa2_2 } from '../components/assets/casa2/casa2';
import { casa3_1, casa3_2, casa3_3 } from '../components/assets/casa3/casa3';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ marginTop: "-60px" }}>
            <div className="home-image">
                <img src="/bgTop.jpg" alt="Home" />
                <div className="home-text">
                    <p1>Be Eco. Be Friendly!</p1>
                    <p style={{fontSize:"30px", fontWeight:"100", color:"#f"}}>Case ECO oferite de ECOBuilder</p>
                </div>
            </div>
            <div>
                <div className="cardContainer">
                    <Link to="/geneva" >
                        <Card images={[casa1, casa2, casa3]} title="GENEVA" description="Case cu un singur nivel Geneva" />
                    </Link>
                    <Link to="/hera">
                        <Card images={[casa2_1, casa2_2,]} title="HERA" description="Case cu etaj Hera." />
                    </Link>
                    <Link to="/helios">
                        <Card images={[casa3_1, casa3_2, casa3_3]} title="HELIOS" description="Case cu mansardă Helios." />
                    </Link>
                </div>
                <h1 className='viziune'>Viziune</h1>
                <div style={{ marginLeft: "20%" }} className="bar-horizontal"></div>
                <div className="container-viziune">
                    <div style={{ marginLeft: "-65%", marginTop: "-150px", fontFamily: "none", fontWeight: "bolder", fontSize: "300px" }} className="bg-text">&#x201C;</div>
                    <p className='viziune-text'>Viziunea Eco-Builder este să devină liderul incontestabil în domeniul construcțiilor ecologice, modelând un viitor în care fiecare locuință reprezintă o oază de sustenabilitate. Ne dorim să inspirăm schimbarea, oferind soluții inovatoare și elegante pentru clienții noștri, creând astfel comunități cu amprente minime asupra mediului și maximizând armonia dintre om și natură. Cu fiecare proiect, ne străduim să conturăm peisajul urban cu case ecologice, contribuind la transformarea durabilă a modului în care oamenii trăiesc și interacționează cu mediul înconjurător.</p>
                    <div className="bar-vertical"></div>
                    <img style={{ height: "250px", width: "450px", border: "4px solid green" }} src='/Viziune.jpg' />
                    <div className='bg-text77'><i className="fa-brands fa-envira fa-rotate-90" style={{ color: "#63E6BE" }}></i></div>
                </div>
                <h1 className='viziune'>Misiune</h1>
                <div style={{ marginLeft: "20%" }} className="bar-horizontal"></div>
                <div className="container-viziune">
                    <div style={{ marginLeft: "-65%", marginTop: "-100px" }} className="bg-text">#</div>
                    <p className='viziune-text'>Misiunea Eco-Builder este să redefinească conceptul de locuință prin construirea unui viitor mai sustenabil. Ne angajăm să oferim soluții rezidențiale inovatoare, integrate în mediul înconjurător, utilizând tehnologii avansate și materiale ecologice. Cu pasiune pentru sustenabilitate, ne propunem să contribuim la schimbarea pozitivă în domeniul construcțiilor, oferind clienților noștri case durabile, eficiente energetic și aliniate cu principiile unei vieți ecologice.</p>
                    <div className="bar-vertical"></div>
                    <img style={{ height: "250px", width: "450px", border: "4px solid green" }} src='/Misiune.jpg' />
                    <div className='bg-text77'><i className="fa-brands fa-envira fa-rotate-90" style={{ color: "#63E6BE" }}></i></div>
                </div>
            </div>
        </div >
    );
}

export default Home;