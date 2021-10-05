import React from 'react';
import './Home.css';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';
import { Link } from 'react-router-dom';


const Home = () => {
  const [courses] = useCourses();
  const slicedCourses = courses.slice(0,4);
  console.log(courses);
    return (
        <div>
          {/* ========hero banner===========  */}
          <div className="banner">
         <div className="container mx-auto hero-text d-flex flex-column flex-lg-row">
         <h1 className="flex-fill title mt-5">This is where your <br></br> <span className=" text-red">fitness journey begins</span> </h1>
            <p className="info">Lets get you fit. With our online programs, you will learn to take care of your body and mind. Get stronger, fitter and live better.</p>
         </div>
         </div>

         {/* =====extra section : membership registration modal=== */}
         <div className=" mx-auto membership text-center">
           <h1 className="mt-5 text-center text-white">GET FIT THIS SUMMER. PAY NOW AND GET <span className="text-red fw-bold">25% DISCOUNT</span></h1>
            <p className="text-white text-center mt-4">This is going to be an awesome journey for you. Join us today. <br></br> Get ready for a beautiful summer.</p>

            {/*======= modal button===== */}
            <button className="btn  member-btn mt-5" data-bs-toggle="modal" data-bs-target="#exampleModal">Become a Member</button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="text-dark" id="exampleModalLabel">Registration</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <button className="btn-register facebook w-100 mb-3">Register with FACEBOOK</button>
                    <button className="btn-register google w-100">Register with GOOGLE</button>
                     <p className="text-center mt-2">or</p> <hr></hr>
                     <button className="btn-register email w-100 mb-3">Register with EMAIL</button>
                     <small>By signing up, I agree to the <span className="text-red fw-bold">Fitness 101</span>  <span className="text-primary">Terms of Service</span> and <span className="text-primary">Privacy Policiy</span></small>
                  </div>
                  <div class="modal-footer d-flex justify-content-between">
                     <Link className="link" to='/home' data-bs-dismiss="modal">Already have an account?</Link>
                     <Link to='/home'>
                    <button type="button" class="btn-sign" data-bs-dismiss="modal">Sign in</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
         </div>
          <div className="mt-5 mb-5">
            <h1 className="text-center fw-bold mb-5">Some of our <span className="text-red">Top Programs</span></h1>
         
            <div className="container overflow-hidden mx-auto">
            <div className="row display-courses gx-3 gy-3">
            {
               slicedCourses.map(course => <Course
               key={course.id}
               course={course}
               ></Course>)
             }
            </div>
            </div>
          
           </div>
          </div>
    );
};

export default Home;