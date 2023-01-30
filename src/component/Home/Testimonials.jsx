import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quote from "../../assets/images/quote.png";
import { comments } from "../fakeData";
const Testimonials = () => {
  var settings = {
    infinite: true,
    slidesToShow: 3,
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
    <div id="testimonials" className="testimonials">
      <Container>
        <div className="row">
          <div className="col-lg-12">
            <div className="service-header">
              <h6>Testimonials</h6>
              <h4>
                What They <em>Think</em>
              </h4>
            </div>
          </div>
          <div className="col-lg-12">
            <div>
              <Slider {...settings}>
                {comments.map((comment, idx) => (
                  <div className="items" key={idx}>
                    <p>{comment.description}</p>
                    <h4>{comment.name}</h4>
                    <span>{comment.degignation}</span>
                    <img src={quote} alt="" />
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

export default Testimonials;
