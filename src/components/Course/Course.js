import React from 'react';
import './Course.css'
const Course = (props) => {
    const {name, price,description, sessions,img} = props.course;
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
            <div className="card course-info h-100">
            <div className="img-div">
            <img src={img} alt="" className="card-img-top img-fluid image-course"></img>
            <h4 className="price">${price}</h4>
            </div>
            <div className="container card-body">
            <h3 className="course-name mt-5 fw-bold card-title">{name}</h3>
            <p className="card-text">{description}</p>
           <div className="cardfooter"> 
               <p className="fw-bold"><span className="text-red fs-4 fw-bold">{sessions} </span>Sessions</p></div>
            
            </div>
            </div>
        </div>
    );
};

export default Course;