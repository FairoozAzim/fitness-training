import React from 'react';
import useCourses from '../../hooks/useCourses'
import Course from '../Course/Course';
import './Programs.css'

const Programs = () => {
    const [courses] = useCourses();
    return (
        <div>
            <h1 className="mt-5 mb-5 text-center">List of all programs</h1>
            <div className="course">
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Programs;