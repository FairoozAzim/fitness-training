import React from 'react';
import './Course.css'
const Course = (props) => {
    const {name, price, sessions,img} = props.course;
    return (
        <div className="course-info">
            <img src={img} alt="" className="img-fluid image-course"></img>
            <div>
            <h3>{name}</h3>
            <div className="mt-3 d-flex justify-content-between ">
            <p>{sessions} sessions</p>
            <h4 className="text-red">${price}</h4></div>
            </div>
        </div>
    );
};

export default Course;