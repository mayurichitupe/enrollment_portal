import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import NotFound from './components/NotFound';
import MyCourses from './components/MyCourses';

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [
        { id: 1, name: 'HTML Basics', duration: '4 Weeks', price: 1999, description: 'Learn the fundamentals of HTML for web development.' },
        { id: 2, name: 'CSS Mastery', duration: '6 Weeks', price: 2499, description: 'Master CSS for beautiful and responsive web designs.' },
        { id: 3, name: 'JavaScript Fundamentals', duration: '8 Weeks', price: 3499, description: 'Learn JavaScript programming from basics to advanced concepts.' },
      ],
      enrolledCourses: []
    };
  }

  enrollInCourse = (courseId) => {
    if (!this.state.enrolledCourses.includes(courseId)) {
      this.setState({
        enrolledCourses: [...this.state.enrolledCourses, courseId]
      });
    }
  };

  isCourseEnrolled = (courseId) => {
    return this.state.enrolledCourses.includes(courseId);
  };

  render() {
    return (
      <Router>
        <Navbar totalEnrollments={this.state.enrolledCourses.length} />

        <Routes>
          <Route
            path="/"
            element={
              <CourseList
                courses={this.state.courses}
                enrollInCourse={this.enrollInCourse}
                isCourseEnrolled={this.isCourseEnrolled}
              />
            }
          />

          <Route
            path="/course/:id"
            element={
              <CourseDetails
                courses={this.state.courses}
                enrollInCourse={this.enrollInCourse}
                isCourseEnrolled={this.isCourseEnrolled}
              />
            }
          />
          <Route
            path="/my-courses"
            element={
              <MyCourses
                courses={this.state.courses}
                enrolledCourses={this.state.enrolledCourses}
              />
            }
          />


          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
