import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div>
            <h1 className="mt-5 text-center fw-bold">Latest <span className="text-red">News</span>  and <span className="text-red">Tips</span></h1>
            <div className="container blog-content d-flex flex-column flex-lg-row justify-content-between mt-5">
               <div className="mb-3">
               <img src="https://acewebcontent.azureedge.net/blogs/2021-HL_ChangeBreathingChangeLife_Header.png" alt=""className="blog-image me-4" ></img>
               <small className="d-block">September 02,2021 | by Shelby Spears</small>
               </div>
                <div className="w-75">
                    <h3 className="fw-bold mb-4">Change Your Breathing, Change Your Life</h3>
                    <p>Your environment, stress and how you breathe can alter and even impede your breathing, but simply practicing nasal breathing may be the key to tapping into some powerful health and fitness benefits. </p>
                    <button className="read-btn">Read more</button>
                </div>
            </div>
            <div className="container blog-content d-flex flex-column flex-lg-row justify-content-between mt-5">
               <div className="mb-3">
               <img src="https://acewebcontent.azureedge.net/blogs/2021-HL_MindfulnessYoungAdults_Header.png" alt=""className="blog-image me-4" ></img>
               <small className="d-block">August 26, 2021 | by Brett Klika in Lifestyle Medicine</small>
               </div>
                <div className="w-75">
                    <h3 className="fw-bold mb-4">How Exercise Can Boost Mental Health in Young Adults</h3>
                    <p>The physical benefits of exercise are well known, and research points to a growing list of physiological, neurological and even psychological benefits associated with mental health. Learn how regular exercise can positively impact mood, stress response and overall mental health, in young adults. </p>
                    <button className="read-btn">Read more</button>
                </div>
            </div>
            <div className="container blog-content d-flex flex-column flex-lg-row justify-content-between mt-5">
               <div className="mb-3">
               <img src="https://acewebcontent.azureedge.net/blogs/2021-HL_Thaddeus%20Young_Header.png" alt=""className="blog-image me-4" ></img>
               <small className="d-block">August 13, 2021 | by Aida Johnson-Rapp in Lifestyle Medicine</small>
               </div>
                <div className="w-75">
                    <h3 className="fw-bold mb-4">Thaddeus Young on Mindfulness and Peak Performance</h3>
                    <p>ACE Expert Aida Johnson-Rapp spoke with NBA Veteran and Chicago Bull Thaddeus Young on how he uses mindfulness practices on and off the court.</p>
                    <button className="read-btn">Read more</button>
                </div>
            </div>
            <div className="container blog-content d-flex flex-column flex-lg-row justify-content-between mt-5">
               <div className="mb-3">
               <img src="https://acewebcontent.azureedge.net/blogs/2021-HL_PowerofDirt_Header.png" alt=""className="blog-image me-4" ></img>
               <small className="d-block">September 12, 2021 | by Preston Blackburn in Exercise Science</small>
               </div>
                <div className="w-75">
                    <h3 className="fw-bold mb-4">The Power of Dirt: The Benefits of Outdoor Workouts </h3>
                    <p>Did you know that a good old-fashioned messy, muddy, dirty workout offers benefits beyond the obvious physical ones, including improved cognition and reduced stress, anxiety and depression? Read on to learn why outdoor workouts may be more important—and beneficial—than ever. </p>
                    <button className="read-btn">Read more</button>
                </div>
            </div>
        </div>
        
    );
};

export default Blogs;