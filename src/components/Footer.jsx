import React from 'react';
import './css/Footer.css';

const Footer = () => (
    <div className="footer">
        <p>© 2022 House Selling Site. All rights reserved.</p>
        <p>
            <a href="/about">About Us</a> | 
            <a href="/contact">Contact</a> | 
            <a href="/terms">Terms of Service</a> | 
            <a href="/privacy">Privacy Policy</a>
        </p>
    </div>
);

export default Footer;