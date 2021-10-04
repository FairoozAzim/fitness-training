import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="nav-bar">
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
    );
};

export default Header;