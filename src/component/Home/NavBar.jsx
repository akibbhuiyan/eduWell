import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiFillCaretDown } from "react-icons/ai";
import logo from "../../assets/images/templatemo-eduwell.png";
import toggler from "../../assets/images/toggler.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [isActive, setIsActive] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={isScrolled ? "scrolled header-area" : "header-area"}>
      <Navbar expand="lg" className="h-100">
        <Container className="d-flex align-items-center h-100 ">
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <img src={toggler} alt="" className="toggler" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="nav-dropped">
            <Nav className="ms-auto main-nav">
              <Link
                to="/home"
                className={isActive === "home" ? "active nav-link" : "nav-link"}
                onClick={() => setIsActive("home")}
              >
                Home
              </Link>
              <Nav.Link
                href="#service"
                className={isActive === "services" ? "active " : ""}
                onClick={() => setIsActive("services")}
              >
                Services
              </Nav.Link>
              <Nav.Link
                href="#courses"
                className={isActive === "courses" ? "active " : ""}
                onClick={() => setIsActive("courses")}
              >
                Courses
              </Nav.Link>

              <div className="dropdown">
                <Nav.Link>
                  Pages <AiFillCaretDown />{" "}
                </Nav.Link>
                <div className="dropdown-content">
                  <Link
                    to="/aboutus"
                    className={
                      isActive === "about"
                        ? "active  dropdown-item"
                        : " dropdown-item"
                    }
                    onClick={() => setIsActive("about")}
                  >
                    About Us
                  </Link>
                  <Link
                    to="/ourServices"
                    className={
                      isActive === "ourServices"
                        ? "active  dropdown-item"
                        : " dropdown-item"
                    }
                    onClick={() => setIsActive("ourServices")}
                  >
                    Our Services
                  </Link>
                  <Link
                    to="/contactUs"
                    className={
                      isActive === "contactUs"
                        ? "active  dropdown-item"
                        : " dropdown-item"
                    }
                    onClick={() => setIsActive("contactUs")}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <Nav.Link
                href="#testimonials"
                className={isActive === "testimonials" ? "active" : ""}
                onClick={() => setIsActive("testimonials")}
              >
                Testimonials
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className={isActive === "contact" ? "active " : ""}
                onClick={() => setIsActive("contact")}
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
