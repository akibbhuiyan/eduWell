import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { CoursesData } from "../fakeData";
import "animate.css";

const Courses = () => {
  const [selectedId, setSelectedId] = useState(1);
  const [filteredItem, setFilteredItem] = useState({});
  useEffect(() => {
    const filtered = CoursesData.find((courses) => courses.id === selectedId);
    setFilteredItem(filtered);
  }, [selectedId]);

  return (
    <div id="course" className="course-header">
      <Container>
        <div className="row">
          <div className="col-lg-12">
            <div className="service-header">
              <h6>OUR COURSES</h6>
              <h4>
                What You Can <em>Learn</em>
              </h4>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-3">
                {CoursesData.map((course, idx) => (
                  <div
                    className="gradient-border"
                    key={course.id}
                    onClick={() => setSelectedId(course.id)}
                  >
                    {course.title}
                  </div>
                ))}
              </div>
              <div className="col-lg-9">
                <div className="course-info">
                  <div className="left-img">
                    <img src={filteredItem.img} alt="Course" />
                    <div className="price">
                      <span>${filteredItem.price}</span>
                    </div>
                  </div>
                  <div className="right-content">
                    <h4>{filteredItem.name} </h4>
                    <p>{filteredItem.description}</p>
                    <span>{filteredItem.duration} Hours </span>
                    <span>{filteredItem.week} Weeks </span>
                    <span>{filteredItem.Certificates} Certificates</span>
                    <a href="#">Subscribe Course</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Courses;
