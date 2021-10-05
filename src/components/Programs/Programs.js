import Course from '../Course/Course';
import useCourses from '../../hooks/useCourses'
import './Programs.css'


const Programs = () => {
    const [courses] = useCourses();
   
    return (
        <div>
            <div className="container d-flex justify-content-between">
            <h1 className="mt-5 mb-5 text-center">List of <span className="text-red fw-bold">All Programs</span> </h1>
            <input className="search mt-5 rounded-pill" 
            type="text"
            placeholder=" Search Programs" >
            </input>
            </div>
            <div className="course container overflow-hidden mx-auto">
            <div className="row display-courses gx-3 gy-3">
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
            </div>
        </div>
    );
};

export default Programs;