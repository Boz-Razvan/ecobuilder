import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';
import logo from './assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Link to="/" onClick={closeMenu}><img src={logo} alt="Logo" className="navbar-logo" /></Link>
            <nav className={`navbar ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li className='NavLink'><Link to="/geneva" onClick={handleToggle}>CASE GENEVA</Link></li>
                    <li className='NavLink'><Link to="/hera" onClick={handleToggle}>CASE HERA</Link></li>
                    <li className='NavLink'><Link to="/helios" onClick={handleToggle}>CASE HELIOS</Link></li>
                    <li className='NavLink'><Link to="/tehnologii" onClick={handleToggle}>TEHNOLOGII</Link></li>
                    <li className='NavLink'><Link to="/contact" onClick={handleToggle}>CONTACT</Link></li>
                </ul>
                <button className="menu-button" onClick={handleToggle}>{isOpen ? 'X' : '☰'}</button>
            </nav>
        </>
    );
}

export default Navbar;