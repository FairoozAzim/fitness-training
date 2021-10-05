import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import logo from './../../cropped-F-logo.png'
import { FaUser } from 'react-icons/fa';
const Header = () => {
    return (
        <div className="header">

                  {/*======== navbar ========== */}
                  
           <nav className="navbar navbar-expand-lg nav-bar">
               <div className="container-fluid">
                    <NavLink className="brand" to="/home"><img className="d-inline-block align-text-top me-2" width="30" height="30" src={logo} alt=""></img><span className="fw-bold text-red me-2">Fitness</span><span className="brand fw-bold">101</span> </NavLink>
                   <div>
                   <button className="navbar-toggler toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink exact className="nav-link nav-l" activeClassName="active" aria-current="page" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exact className="nav-link nav-l" to="/about">About Us</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exact className="nav-link nav-l" to="/Programs">Programs</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exact className="nav-link nav-l" to="/testimonials">Testimonials</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exact className="nav-link nav-l" to="/blogs">Blogs</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exact className="nav-link nav-l" to="/"><FaUser></FaUser></NavLink>
                        </li>
                    </ul>
                   
                    </div>
                   </div>
                </div>
                </nav>
        </div>
    );
};

export default Header;