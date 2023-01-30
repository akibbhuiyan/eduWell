import React from "react";
import MainBanner from "./MainBanner";
import Services from "./Services";
import Courses from "./Courses";
import AOS from "aos";
import "aos/dist/aos.css";
import Newsletter from "./Newsletter";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import NavBar from "./NavBar";
const Home = () => {
  AOS.init({
    offset: 120,
    delay: 0,
    duration: 800,
    easing: "ease",
  });
  return (
    <div>
      <NavBar />
      <MainBanner />
      <Services />
      <Courses />
      <Newsletter />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
