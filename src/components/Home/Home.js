import React from 'react';
import './Home.css';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';


const Home = () => {
  const [courses] = useCourses();
  const slicedCourses = courses.slice(0,4);
  console.log(courses);
    return (
        <div>
          <div className="banner mb-5">
         <div className="justify-content-between">
         <div className="hero-text d-flex">
         <h1 className="flex-fill title mt-5">This is where your <br></br> <span className=" text-red">fitness journey begins</span> </h1>
            <p className="info">Lets get you fit. With our online programs, you will learn to take care of your body and mind. Get stronger, fitter and live better.</p>
         </div>
           
          </div>
         </div>
         <div className="membership">
           <h1 className="mt-5 text-center">GET FIT THIS SUMMER. PAY NOW AND GET 25% DISCOUNT</h1>
            <p className="fs-4 text-center text-red mt-5">This is going to be an awesome journey for you. Join us today. Get ready for a beautiful summer.</p>
            <button className="text-center btn member-btn mt-5" data-bs-toggle="modal" data-bs-target="#exampleModal">Become a Member</button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class=" text-dark" id="exampleModalLabel">Registration</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <input type="text" placeholder="Email" className="login mb-3 w-75"></input><br></br>
                    <input type="password" placeholder="password"  className="login mb-3 w-75"></input>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Submit</button>
                  </div>
                </div>
              </div>
            </div>
         </div>
          <div className="mt-5 mb-5">
            <h1 className="text-center fw-bold mb-5">Some of our top <span className="text-red">Programs</span></h1>
         
            <div className="display-courses">
            {
               slicedCourses.map(course => <Course
               key={course.id}
               course={course}
               ></Course>)
             }
            </div>
          
           </div>
          </div>
    );
};

export default Home;