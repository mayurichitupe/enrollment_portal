import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    const { totalEnrollments } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow">
        <div className="container">
          {/* Brand */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <i className="bi bi-mortarboard-fill me-2"></i>
            EduHub
          </Link>

          {/* Right Section */}
          <div className="d-flex align-items-center">
            {totalEnrollments > 0 && (
              <span className="badge bg-light text-success me-3">
                <i className="bi bi-bookmark-check me-1"></i>
                Enrolled: {totalEnrollments}
              </span>
            )}

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  <i className="bi bi-house-door me-1"></i> Home
                </Link>
              </li>

              {/* Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  All Courses
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/course/1">
                      HTML Basics
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/course/2">
                      CSS Mastery
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/course/3">
                      JavaScript Fundamentals
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/my-courses">
                  My Courses
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
