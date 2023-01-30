import React from "react";
import OurOffice from "../AboutUs/OurOffice";
import NavBar from "../Home/NavBar";
import Newsletter from "../Home/Newsletter";
import Services from "../Home/Services";
import Features from "./Features";
import PageHeading from "./PageHeading";

const OurService = () => {
  return (
    <>
      <NavBar />
      <PageHeading />
      <Services />
      <Newsletter />
      <Features />
      <OurOffice />
    </>
  );
};

export default OurService;
