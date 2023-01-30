import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { ProjectCounter } from "../fakeData";
const ContactUsHero = () => {
  return (
    <div className="contactUs page-heading">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-text mb-0">
              <h6>Say Hello EduWell</h6>
              <h1>Contact Us</h1>
            </div>
          </div>
          <div className="morInfo row">
            <div className="col-lg-5">
              <div className="service-header">
                <h6>More Info</h6>
                <h4>
                  Read More <em>About Us</em>
                </h4>
                <p>
                  Trust fund nocore broklyn humblebrag mustache pork kitsch,
                  bicycle rights hexagon schlitz keytar palo is santo drinking
                  vinegar fam ramps
                  <br />
                  <br />
                  Four dollar toast and edison bulb vinyl, listicle hashtag pug
                  scenester typewrit er yuccie street artboard or whatever to
                  fill place.
                </p>
                <ul>
                  <li>- Selfies you probably haven't heard of them.</li>
                  <li>- Pabst iPhone chartreuse shabby chic tumeric.</li>
                  <li>- Scenester normcore mumblecore snackwave</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 self-align-center">
              <div className="row">
                {ProjectCounter.map((count, idx) => (
                  <div className="col-6" key={idx}>
                    <div className="count-area-content">
                      <div className="count-degit">
                        <CountUp end={count.countDigit} duration={5} />
                      </div>
                      <div className="count-title">{count.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsHero;
