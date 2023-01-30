import React from "react";
import bannerImg from "../../assets/images/banner-right-image.png";
const MainBanner = () => {
  return (
    <div className="main-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="banner-text">
              <h6>Welcome to our school</h6>
              <h1>
                Best Place To Learn Graphic <em>Design</em>
              </h1>
              <div className="main-btn-gradien">
                <a href="#contact">Join us Now</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="right-image">
              <img src={bannerImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
