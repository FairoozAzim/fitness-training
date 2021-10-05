import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="not-found text-center d-flex flex-column align-items-center justify-content-center">
            <h1 className="text-center mt-5 fw-bold">404</h1>
            <h5>Oops! Your requested page was not found.</h5>
            <p>Go back to  
                 <Link to="/home" className="link fw-bold text-red"> Home</Link>
            </p>
        </div>
    );
};

export default NotFound;