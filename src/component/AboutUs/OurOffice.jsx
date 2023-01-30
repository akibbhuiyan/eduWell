import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  FaPlay,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaRss,
  FaDribbble,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import thumb from "../../assets/images/video-thumb.jpg";
const OurOffice = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [btnText, setBtnText] = useState("Submit");
  const [status, setStatus] = useState({});
  const onSubmit = (data) => {
    setBtnText("Submitting");
    fetch("https://mysterious-tundra-32830.herokuapp.com/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result) {
          setBtnText("Submit");
          setStatus({ success: true, message: "Message send Successfully" });
        } else {
          setStatus({
            success: false,
            message: "Something went Wrong Please try again",
          });
        }
      });
  };

  return (
    <div className="contact-us our-office" id="contact">
      <Container>
        <div className="row">
          <div className="col-lg-4">
            <div className="contact-form">
              <div className="row">
                <div className="col-lg-12">
                  <div className="service-header">
                    <h6>Contact</h6>
                    <h4>
                      Get closer to <em>EduWell</em>
                    </h4>
                    <p>
                      Trust fund nocore broklyn humblebrag mustache pork kitsch,
                      bicycle rights hexagon schlitz keytar palo is santo
                      drinking vinegar fam ramps
                      <br />
                      <br />
                      Four dollar toast and edison bulb vinyl, listicle hashtag
                      pug scenester typewrit er yuccie street artboard or
                      whatever to fill place.
                    </p>
                    <ul>
                      <li>- Selfies you probably haven't heard of them.</li>
                      <li>- Pabst iPhone chartreuse shabby chic tumeric.</li>
                      <li>- Scenester normcore mumblecore snackwave</li>
                    </ul>
                    <div className="main-btn-gradien">
                      <Link to="/ourService">Our Service</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="thumb">
              <img src={thumb} alt="" />
              <div className="play">
                <a href="">
                  {" "}
                  <FaPlay />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <ul className="social-icon">
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaRss />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaDribbble />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-12">
            <p className="text-center text-white my-5">
              Copyright © 2022 Akib Bhuiyan || All Rights Reserved.{" "}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurOffice;
