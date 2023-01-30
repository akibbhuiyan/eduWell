import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import "animate.css";
import { TeamMember } from "../fakeData";

const OurTeam = () => {
  const [selectedId, setSelectedId] = useState(1);
  const [filteredItem, setFilteredItem] = useState({});
  useEffect(() => {
    const filtered = TeamMember.find((courses) => courses.id === selectedId);
    setFilteredItem(filtered);
  }, [selectedId]);

  return (
    <div id="course" className="Team-header">
      <Container>
        <div className="row">
          <div className="col-lg-12">
            <div className="service-header">
              <h6>OUR TEAM</h6>
              <h4>
                Our Team <em>Member</em>
              </h4>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-9 menu ">
                {TeamMember.map((member, idx) => (
                  <div
                    className="member"
                    key={member.id}
                    onClick={() => setSelectedId(member.id)}
                  >
                    <img src={member.imgThumb} alt="" />
                    <h4>{member.name}</h4>
                    <span>{member.degi}</span>
                  </div>
                ))}
              </div>
              <div className="col-lg-12 mt-5">
                <div className="course-info" style={{ height: "337px" }}>
                  <div className="right-content">
                    <h4>{filteredItem.name}</h4>
                    <p>{filteredItem.description}</p>
                    <span>
                      <a href="#">Facebook</a>
                    </span>
                    <span>
                      <a href="#">Twetter</a>
                    </span>
                    <span>
                      <a href="#">Linkedin</a>
                    </span>
                    <a href="#" className="contact-btn">
                      Contact Member
                    </a>
                  </div>
                  <div className="left-img">
                    <img src={filteredItem.img} alt="Course" />
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

export default OurTeam;
