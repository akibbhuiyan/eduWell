import React from "react";
import aboutLeft from "../../assets/images/about-left-image.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { services } from "../fakeData";
const AboutHero = () => {
  var settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="about-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-text">
              <h6>More About Us</h6>
              <h1>About Us</h1>
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="right-image  ms-0">
              <img src={aboutLeft} alt="" />
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="section-heading">
              <h6>Get info</h6>
              <h4>
                Read More <em>About Us</em>
              </h4>
              <p>
                You are allowed 100% to download and use our templates from
                TemplateMo for your commercial or business websites. You are{" "}
                <b>not allowed</b> to redistribute this template ZIP file on any
                other website without a permission from us. <br />
                <br />
                There are some unethical people on this planet earth who copied
                our templates so easily without any permission from us and then
                reposted on their websites. Their Karma will hit them really
                hard. Yeah, that is right.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div>
                  <Slider {...settings}>
                    {services.map((service, idx) => (
                      <div key={idx} className="service-item">
                        <img src={service.img} alt="" />
                        <h4>{service.name}</h4>
                        <p>{service.description}</p>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
