import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import logo from './../../cropped-F-logo.png'
const Header = () => {
    return (
        <div className="header">
            <div className="nav-bar d-flex align-items-center justify-content-between">
            <div>
            <NavLink to='/home' className="ms-5 brand d-flex">
            <img src={logo} alt="" className="logo me-3"></img>
            <h1><span className="text-red">Fitness</span> 101</h1>
            </NavLink>
            </div>
           <div className="links d-flex align-items-center">
           <NavLink to="/home" className="ms-5 navlink me-5">
             <h1>Home</h1>
            </NavLink>
            <NavLink to="/programs" className="navlink me-5">
             <h1>Programs</h1>
            </NavLink>
            <NavLink to="/about" className="navlink me-5">
             <h1>About us</h1>
            </NavLink>
            <NavLink to="/blogs" className="navlink me-5">
             <h1>Blogs</h1>
            </NavLink>
           </div>
            </div>
        </div>
    );
};

export default Header;