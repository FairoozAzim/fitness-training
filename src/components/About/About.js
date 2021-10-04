import React from 'react';
import './About.css'
import image from '../../images.jpg'
import trainer1 from '../../fitness-trainer-1.jpg'
import trainer2 from '../../fitness-trainer-2.jpg'
import trainer3 from '../../fitness-trainer-3.jpg'
import trainer4 from '../../fitness-trainer-4.jpg'

const About = () => {
    return (
        <div className="about container mb-5 ">
            <h1 className="mt-5 text-center">Fitness and Mental Health</h1>
             <p className="mt-3 text-center text-red fs-4">The only place you'll need for your fitness goals.</p>
            <div className="mt-5 d-flex align-items-center justify-content-center">
                <div >
                 <img src={image} alt="" className="me-5 about-image"></img>
                </div>
                <div>
                 <h2 className="ms-3">Who we are</h2>
                 <p className="about-text">We are a bunch of certified fitness trainers, here to help you get your dream physique sitting at your own home. You can get all kinds of programs here at reasonable prices. If you are consistent, we guarantee you to help achieve your goals. </p>
                </div>
            </div>

            {/* carousel coaches */}
            <div id="carouselExampleIndicators" className="mt-5 carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className="container d-flex justify-content-around">
    <div className="d-flex trainer-card justify-content-around">
      <img src={trainer1} className="img-fluid" alt="..."></img>
      <div className="text-center mt-5">
          <h5 className="fs-4">Adam Anderson</h5>
          <p>Strength training Fitness Coach</p>
      </div>
      </div>
      <div className="d-flex trainer-card justify-content-around">
      <img src={trainer3} className="img-fluid" alt="..."></img>
      <div className="text-center mt-5">
          <h5>Adam Anderson</h5>
          <p>Strength training Fitness Coach</p>
      </div>
      </div>
    </div>
    </div>
    <div className="carousel-item">
    <div className="container d-flex justify-content-around">
    <div className="d-flex trainer-card">
      <img src={trainer2} className="img-fluid" alt="..."></img>
      <div className="text-center mt-5">
          <h5>Adam Anderson</h5>
          <p>Strength training Fitness Coach</p>
      </div>
      </div>
      <div className="d-flex trainer-card justify-content-around">
      <img src={trainer4} className="img-fluid me-3" alt="..."></img>
      <div className="text-center mt-5">
          <h5>Melissa Palmer</h5>
          <p>Strength training Fitness Coach</p>
         
      </div>
      </div>
    </div>
    </div>
    
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
};

export default About;