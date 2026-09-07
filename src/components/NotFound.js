import React from 'react';
import { Link } from 'react-router-dom';

class NotFound extends React.Component {
  render() {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <div className="card border-0 shadow-lg">
              <div className="card-body py-5">
                <div className="error-icon mb-4">
                  <i className="bi bi-exclamation-octagon text-danger display-1"></i>
                </div>
                <h1 className="display-3 fw-bold text-danger mb-3">
                  404
                </h1>
                <h2 className="h1 text-dark mb-4">
                  Page Not Found
                </h2>
                <p className="lead text-muted mb-5">
                  Oops! The page you're looking for seems to have wandered off.
                  Don't worry, we'll help you find your way back.
                </p>
                
                <div className="d-grid gap-3 d-md-flex justify-content-md-center">
                  <Link 
                    to="/" 
                    className="btn btn-success btn-lg px-5"
                  >
                    Go to Homepage
                  </Link>
                  <button 
                    className="btn btn-outline-success btn-lg px-5"
                    onClick={() => window.history.back()}
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;