import React from 'react';
import './About.css'
import image from '../../images.jpg'
import trainer1 from '../../fitness-trainer-1.jpg'
import trainer2 from '../../fitness-trainer-2.jpg'
import trainer3 from '../../fitness-trainer-3.jpg'
import trainer4 from '../../fitness-trainer-4.jpg'

const About = () => {
    return (
        <div className="about container mb-5">
            <h1 className="mt-5 text-center fw-bold">Fitness and Mental Health</h1>
             <p className="mt-3 text-center text-red fs-4">The only place you'll need for your fitness goals.</p>
            <div className="mt-5 d-flex flex-column flex-lg-row align-items-center justify-content-center">
                <div >
                 <img src={image} alt="" className="me-5 about-image"></img>
                </div>
                <div>
                 <h2 className="mt-5 mt-lg-0 ms-lg-3 fw-bold">Who we are</h2>
                 <p className="about-text">We are a bunch of certified fitness trainers, here to help you get your dream physique sitting at your own home. You can get all kinds of programs here at reasonable prices. If you are consistent, we guarantee you to help achieve your goals. </p>
                </div>
                
            </div>
            <h1 className="mt-5 mb-5 text-center fw-bold">Our <span className="text-red">Services</span> </h1>
            <div className="d-flex flex-column flex-lg-row justify-content-around">
                <div>
                <div className="mt-5 mb-5">
                  <h2 className="fw-bold ">Fitness Training</h2>
                  <p>Train with the best experts in bodybuilding field.</p>
                </div>
                <div>
                  <h2 className="fw-bold">Mental health care</h2>
                  <p>Train with the best experts in mental health field.</p>
                </div>
                </div>
                <div>
                <div className="mt-5 mb-5">
                  <h2 className="fw-bold ">Power Yoga</h2>
                  <p>Train with the best experts in bodybuilding field.</p>
                </div>
                <div>
                  <h2 className="fw-bold">Cross training</h2>
                  <p>Train with the best experts in mental health field.</p>
                </div>
                </div>
            </div>

            {/* coaches */}
            <h1 className="mt-5 mb-5 text-center fw-bold">Meet Our <span className="text-red">Coaches</span></h1>
            <p className="text-center mb-5">These are the best coaches in the field of fitness training.</p>
            <div className="container trainer">
              <div className="row row-cols-2 row-cols-lg-4">
              <div className="trainer-info">
              <img className="img-fluid mt-2" src={trainer1} alt=""></img>
              <div className="trainer-details">
                <h4 className="fw-bold">Adam Anderson</h4>
                 <p>Strength Training</p>
              </div>
              </div>
              <div className="trainer-info">
              <img className="img-fluid mt-2" src={trainer3} alt=""></img>
              <div className="trainer-details">
                <h4 className="fw-bold">Melissa Jones</h4>
                 <p>Nutriton Expert</p>
              </div>
              </div>
              <div className="trainer-info">
              <img className="img-fluid mt-2" src={trainer2} alt=""></img>
              <div className="trainer-details">
                <h4 className="fw-bold">James Clark</h4>
                 <p>Cardio Training</p>
              </div>
              </div>
              <div className="trainer-info">
              <img className="img-fluid mt-2" src={trainer4} alt=""></img>
              <div className="trainer-details">
                <h4 className="fw-bold">Alina Dames</h4>
                 <p>Yoga Training</p>
              </div>
              </div>
             
              </div>
            </div>
            
       </div>
     );
   };

export default About;