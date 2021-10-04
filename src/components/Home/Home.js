import React from 'react';
import './Home.css';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';


const Home = () => {
  const [courses] = useCourses();
  console.log(courses);
    return (
        <div>
          <div className="banner mb-5">
            <h1>This is where your fitness journey begins.</h1>
          </div>
          <div className="display-courses">
         
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

export default Home;