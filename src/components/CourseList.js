import React from 'react';
import CourseCard from './CourseCard';

class CourseList extends React.Component {
  render() {
    const { courses, enrollInCourse, isCourseEnrolled } = this.props;
    
    return (
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-success mb-3">
            Available Courses
          </h1>
          <p className="lead text-muted">
            Choose from our wide range of programming courses
          </p>
        </div>
        
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {courses.map(course => (
            <div className="col" key={course.id}>
              <CourseCard 
                course={course}
                enrollInCourse={enrollInCourse}
                isCourseEnrolled={isCourseEnrolled}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-5 text-center">
          <div className="card border-0 bg-light">
            <div className="card-body">
              <h5 className="card-title">Total Courses: {courses.length}</h5>
              <p className="card-text text-muted">
                Start your learning journey today! Enroll in your first course.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseList;