import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaRss,
  FaDribbble,
} from "react-icons/fa";
const Contact = () => {
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
    <div className="contact-us" id="contact">
      <Container>
        <div className="row">
          <div className="col-lg-8">
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1920.1686565902376!2d91.99544845207821!3d22.154019260155984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad17da43e1a60d%3A0x4d0f435ceefa4842!2sMy%20home!5e0!3m2!1sen!2sbd!4v1666087305537!5m2!1sen!2sbd"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="row">
                <div className="col-lg-4 offset-lg-1">
                  <div className="contact-info">
                    <FaPhoneAlt className="icon" />
                    <div className="info">
                      <h4>Phone</h4>
                      <span>010-020-0340</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="contact-info">
                    <FaPhoneAlt className="icon" />
                    <div className="info">
                      <h4>Mobile</h4>
                      <span> +8801612127552</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
              <div className="row">
                <div className="col-lg-12">
                  <div className="service-header">
                    <h6>Contact</h6>
                    <h4>
                      Say <em>Hello</em>
                    </h4>
                    <p>
                      IF you need a working contact form by PHP script, please
                      visit TemplateMo's contact page for more info.
                    </p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <input
                    {...register("name", { required: true })}
                    placeholder="Full Name"
                  />
                  {errors.name && <span>This field is required</span>}
                </div>
                <div className="col-lg-12">
                  <input
                    {...register("email", { required: true })}
                    placeholder="Your Email"
                  />
                  {errors.email && <span>This field is required</span>}
                </div>
                <div className="col-lg-12">
                  <textarea
                    {...register("message", { required: true })}
                    rows="5"
                    placeholder="Message"
                  ></textarea>
                  {errors.message && <span>This field is required</span>}
                </div>
                <div className="col-lg-12">
                  <button type="submit" className="main-btn-gradien">
                    {btnText}
                  </button>
                </div>
              </div>
            </form>
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

export default Contact;
