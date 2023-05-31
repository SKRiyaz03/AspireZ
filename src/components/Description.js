

import React from "react";
import '../CSS/Course-inner.css'
import {Link} from 'react-router-dom'
const Description = ({id}) => {
    // perform some computation regarding retrival form DB using course id
    const { image,title, description, price, instructor, designation, courseOverView, whatYouWillLearn, duration, articles, downloadable, accessDuration,  accessOn, assignments, isEnrolled} = {
        image: "/assets/img/c1.jpg",
        title: "Javascript Beginners Course",
        description: "Modern javascript from the beggining - all the way up to JS export level! The must have JavaScript resource in 2021.",
        price: 49.99,
        instructor: "John Doe",
        designation: "Web Developer At Google",
        courseOverView: "This beginner-level JavaScript course, authored by John Smith, provides a solid foundation in programming using JavaScript. It covers essential concepts such as variables, control flow, functions, arrays, objects, DOM manipulation, events, asynchronous JavaScript, ES6 features, debugging, and error handling. The course emphasizes practical learning with hands-on exercises and concludes with a final project where you apply the learned concepts to build a simple web application. By the end, you'll have a strong grasp of JavaScript fundamentals and the ability to create interactive web applications.",
        whatYouWillLearn: [
            "JavaScript basics: Understand the fundamentals of JavaScript programming language, including variables, data types, and control flow structures.",
            "DOM manipulation and events: Learn how to modify HTML elements using JavaScript and handle events like clicks and form submissions.",
            "Asynchronous JavaScript: Explore asynchronous operations with AJAX and promises, allowing you to make requests and handle data asynchronously.",
            "Modern JavaScript features: Get introduced to modern JavaScript features like arrow functions, modules, and template literals that enhance your coding capabilities.",
            "Debugging and error handling: Discover common debugging techniques, error handling approaches, and best practices for organizing and maintaining your JavaScript code."
        ],
        duration: "4 weeks",
        articles: 10,
        downloadable: false,
        accessDuration: "Lifetime",
        accessOn: "Mobile and TV",
        assignments: 0,
        isEnrolled: false
    };
    return (
        <>
        
    <nav></nav>
    <section id="course-inner">
      <div className="overview">
        <img className="course-img" src={image} alt="" />

        <div className="course-head">
          <div className="c-name">
            <h2>{title}</h2>

            <div className="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>

            <p>
              {description}
            </p>
          </div>
          <span>${price}</span>
        </div>

        <h3>Instructor</h3>
        <div className="tutor">
          <img src="/assets/img/c4.jpg" alt="instructor" />
          <div className="tutor-det">
            <h5>{instructor}</h5>
            <p>{designation}</p>
          </div>
        </div>

        <hr />

        <h3>Course Overview</h3>

        <p>
          {courseOverView}
        </p>
        <hr />

        <h3>What you'll learn</h3>

        
        <div className="learn">
        {whatYouWillLearn.map((item, index) => (
            <p key={index}>
            <i className="far fa-check-circle"></i> {item}
            </p>
        ))}
          <div className="enroll-btn">
            <a href="#" className="blue">Enroll Course</a>
          </div>
        </div>
      </div>

      <div className="enroll">
        <h3>This course includes:</h3>

        <p><i className="fa-solid fa-video"></i> {duration}</p>
        <p><i className="fa-solid fa-newspaper"></i> {articles} Articles</p>
        {downloadable && (
        <p><i className="fa-solid fa-download"></i> Downloadable resources</p>
        )}
        <p><i className="fa-solid fa-key"></i> {accessDuration} access</p>
        <p><i className="fa-solid fa-tv"></i> Access on {accessOn}</p>
        {assignments > 10 ? (
        <p>
            <i className="fa-solid fa-paperclip"></i> {assignments - 1}+ Assignments
        </p>
        ) : assignments == 0 ? (
            null
        ) : <p>
            <i className="fa-solid fa-paperclip"></i> {assignments} Assignment
        </p>
        }

        <div className="enroll-btn" > 
                {isEnrolled ?
                <Link to={`/courses/${id}`} className="blue">Go to Course</Link> :
                <Link to = {`/enroll/courses/${id}`} className = "blue">Enroll Course</Link>
                }
        </div>
      </div>
    </section>
    <footer></footer>
    </>
      );
}
export default Description;