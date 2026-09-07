import React from 'react';
import { Link } from 'react-router-dom';

class CourseDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            course: null
        };
    }

    componentDidMount() {
        const courseId = Number(window.location.pathname.split('/').pop());
        const course = this.props.courses.find(c => c.id === courseId);
        this.setState({ course });
    }

    handleEnroll = () => {
        const courseId = Number(window.location.pathname.split('/').pop());
        this.props.enrollInCourse(courseId);
    };

    render() {
        const { course } = this.state;
        const { isCourseEnrolled } = this.props;

        if (!course) {
            return (
                <div className="container py-5 text-center">
                    <h2 className="text-danger">Course Not Found</h2>
                    <Link to="/" className="btn btn-success mt-3">
                        Back to Home
                    </Link>
                </div>
            );
        }

        const isEnrolled = isCourseEnrolled(course.id);

        return (
            <div className="container py-5">
                <div className="col-lg-8 mx-auto">
                    <div className="card shadow-lg border-0">

                        {/* Header */}
                        <div className="card-header bg-success text-white d-flex justify-content-between align-items-center">
                            <h2 className="mb-0">{course.name}</h2>
                            <div>
                                <span className="badge bg-light text-success me-2">
                                    {course.duration}
                                </span>
                                {isEnrolled && (
                                    <span className="badge bg-success">Enrolled</span>
                                )}
                            </div>
                        </div>

                        {/* Body */}
                        <div className="card-body">
                            <h5 className="text-success">Course Description</h5>
                            <p>{course.description}</p>

                            <div className="row my-4">
                                <div className="col-md-6">
                                    <h6>Course Fee</h6>
                                    <p className="h3 text-success fw-bold">
                                        &#8377;{course.price}
                                    </p>
                                </div>

                                <div className="col-md-6">
                                    <h6>Duration</h6>
                                    <p className="h3 text-success fw-bold">
                                        {course.duration}
                                    </p>
                                </div>
                            </div>

                            <h5 className="text-success">What You'll Learn</h5>
                            <ul>
                                <li>Hands-on coding</li>
                                <li>Real-world projects</li>
                                <li>Certificate</li>
                                <li>Mentor support</li>
                            </ul>
                        </div>

                        {/* Footer */}
                        <div className="card-footer d-flex justify-content-between">
                            {isEnrolled ? (
                                <span className="text-success fw-bold">
                                    &#10004; You are enrolled
                                </span>
                            ) : (
                                <button
                                    className="btn btn-success"
                                    onClick={this.handleEnroll}
                                >
                                    Enroll Now - &#8377;{course.price}
                                </button>
                            )}

                            <Link to="/" className="btn btn-outline-success">
                                Go Back
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default CourseDetails;
