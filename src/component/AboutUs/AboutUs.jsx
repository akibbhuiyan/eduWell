import React from "react";
import NavBar from "../Home/NavBar";
import Newsletter from "../Home/Newsletter";
import Testimonials from "../Home/Testimonials";
import AboutHero from "./AboutHero";
import OurOffice from "./OurOffice";
import OurTeam from "./OurTeam";

const AboutUs = () => {
  return (
    <>
      <NavBar />
      <AboutHero />
      <OurTeam />
      <Newsletter />
      <Testimonials />
      <OurOffice />
    </>
  );
};

export default AboutUs;
