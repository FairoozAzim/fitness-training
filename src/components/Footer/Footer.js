import React from 'react';
import "./Footer.css"
import logo from '../../cropped-F-logo.png'
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
 
    return (
        <div className="footer d-flex flex-colum flex-lg-row justify-content-between">
            <div>
            <h1 className="ms-3 text-white"><span className="text-red"><img className="footer-logo" src={logo} alt=""></img>Fitness</span> 101</h1>
            <small className="ms-5 text-white">All Rights Reserved</small>
            </div>
            <div className="me-5 links">
            <a className="me-3" href="/"><FaFacebook></FaFacebook></a>
            <a className="me-3" href="/"><FaTwitter/></a>
            <a className="me-3" href="/"><FaLinkedin></FaLinkedin></a>
            </div>
            
        </div>
    );
};

export default Footer;