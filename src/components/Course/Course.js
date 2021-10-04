import React from 'react';
import {Col} from 'react-bootstrap';

const Course = (props) => {
    const {name, price, session, description} = props.course;
    return (
        <div>
            
            <h1>A single course</h1>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{session} sessions</p>
            <h4>${price}</h4>
        </div>
    );
};

export default Course;