import React from "react";
import { Link } from "react-router-dom";

class CourseCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleEnrollClick = this.handleEnrollClick.bind(this);
  }

  handleEnrollClick(e) {
    e.preventDefault();
    e.stopPropagation();
    const { course, enrollInCourse } = this.props;
    enrollInCourse(course.id);
  }

  render() {
    const { course, isCourseEnrolled } = this.props;
    const isEnrolled = isCourseEnrolled(course.id);

    return (
      <div className="card h-100 shadow-sm border-0 hover-shadow">
        <div className="card-header bg-white border-0 pt-4">
          <div className="d-flex justify-content-between align-items-start">
            <h3 className="h5 fw-bold text-success mb-0">{course.name}</h3>
            <span className="badge bg-success-subtle text-success">
              {course.duration}
            </span>
          </div>
        </div>

        <div className="card-body d-flex flex-column">
          <p className="card-text text-muted flex-grow-1 mb-4">
            {course.description}
          </p>

          <div className="mt-auto">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="h4 fw-bold text-success mb-0">
                &#8377;{course.price}
              </span>
              {isEnrolled && <span className="badge bg-success">Enrolled</span>}
            </div>

            <div className="d-grid gap-2">
              <Link to={`/course/${course.id}`} className="btn btn-success">
                View Details
              </Link>

              {!isEnrolled ? (
                <button
                  className="btn btn-outline-success"
                  onClick={this.handleEnrollClick}
                >
                  Enroll Now
                </button>
              ) : (
                <button className="btn btn-success" disabled>
                  Already Enrolled
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="card-footer bg-white border-0 pb-3">
          <small className="text-muted">500+ students enrolled</small>
        </div>
      </div>
    );
  }
}

export default CourseCard;
