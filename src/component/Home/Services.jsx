import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { services } from "../fakeData";
const Services = () => {
  var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div id="services" className="services">
      <Container>
        <div className="row">
          <div className="col-lg-12">
            <div className="service-header">
              <h6>Our Services</h6>
              <h4>
                Provided <em>Services</em>
              </h4>
            </div>
          </div>
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
      </Container>
    </div>
  );
};

export default Services;
