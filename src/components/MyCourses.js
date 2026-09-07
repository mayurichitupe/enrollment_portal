import React from "react";
import { Link } from "react-router-dom";

class MyCourses extends React.Component {
  render() {
    const { courses, enrolledCourses } = this.props;

    const myCourses = courses.filter((course) =>
      enrolledCourses.includes(course.id),
    );

    return (
      <div className="container mt-4">
        <h2 className="mb-4">My Enrolled Courses</h2>

        {myCourses.length === 0 ? (
          <p>You have not enrolled in any course yet.</p>
        ) : (
          <div className="row">
            {myCourses.map((course) => (
              <div className="col-md-4 mb-3" key={course.id}>
                <div className="card p-3">
                  <h5>{course.name}</h5>
                  <p>{course.duration}</p>
                  <p>&#8377;{course.price}</p>
                  <Link to={`/course/${course.id}`} className="btn btn-success">
                    View Course
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default MyCourses;
