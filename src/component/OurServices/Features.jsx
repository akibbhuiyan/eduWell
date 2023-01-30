import React from "react";
import serviceIcon from "../../assets/images/service-icon-01.png";
import featureImg from "../../assets/images/featured-product.jpg";
const Features = () => {
  return (
    <div className="features">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="service-header">
              <h6>Featured Service</h6>
              <h4>
                Best Of Our <em>Product</em>
              </h4>
            </div>
          </div>
          <div className="col-lg-3 self-align-center">
            <div className="left-info">
              <div className="col-lg-12">
                <div className="info-item">
                  <div className="feature-icon">
                    <img src={serviceIcon} alt="" />
                  </div>
                  <h4>Best Strategy</h4>
                  <p>
                    Food & truck tumeric taxidermy hoodie chiasore bitters
                    retroed gentrify street portland.
                  </p>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="info-item">
                  <div className="feature-icon">
                    <img src={serviceIcon} alt="" />
                  </div>
                  <h4>Best Strategy</h4>
                  <p>
                    Food & truck tumeric taxidermy hoodie chiasore bitters
                    retroed gentrify street portland.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="product-img">
              <img src={featureImg} alt="" />
            </div>
          </div>
          <div className="col-lg-3 self-align-center">
            <div className="right-info">
              <div className="col-lg-12">
                <div className="info-item">
                  <div className="feature-icon">
                    <img src={serviceIcon} alt="" />
                  </div>
                  <h4>Best Strategy</h4>
                  <p>
                    Food & truck tumeric taxidermy hoodie chiasore bitters
                    retroed gentrify street portland.
                  </p>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="info-item">
                  <div className="feature-icon">
                    <img src={serviceIcon} alt="" />
                  </div>
                  <h4>Best Strategy</h4>
                  <p>
                    Food & truck tumeric taxidermy hoodie chiasore bitters
                    retroed gentrify street portland.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
