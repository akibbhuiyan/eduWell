import React from "react";
import { Container } from "react-bootstrap";
import ctaImg from "../../assets/images/cta-left-image.png";
const Newsletter = () => {
  return (
    <div className="simple-cta">
      <Container>
        <div className="row">
          <div className="col-lg-5 offset-lg-1">
            <div className="left-img">
              <img src={ctaImg} alt="" />
            </div>
          </div>
          <div className="col-lg-5 align-self-center text-white">
            <h6>Get the sale right now!</h6>
            <h4>Up to 50% OFF For 1+ courses</h4>
            <p>
              Kogi VHS freegan bicycle rights try-hard green juice probably
              haven't heard of them cliche la croix af chillwave
            </p>
            <div className="white-btn">
              <a href="#">View Courses</a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Newsletter;
