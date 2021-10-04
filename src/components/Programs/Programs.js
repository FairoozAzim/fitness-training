import React from 'react';
import useCourses from '../../hooks/useCourses'
import Course from '../Course/Course';

const Programs = () => {
    const [courses] = useCourses();
    return (
        <div>
            <h1>List of all programs</h1>
            <div>
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