import "./nav.css";
import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";

import { Col, Row, Container, Collapse } from "reactstrap";
import { ServerURL } from "../../../url";
import Cookies from "universal-cookie";

const Navbar = (props) => {
  const cookie = new Cookies();

  const { toggle, org_id } = props;
  const [scrollNav, setScrollNav] = useState(false);
  const [siteData, setSiteData] = useState({
    logo: [
      {
        filename: "",
      },
    ],
  });
  const user = useSelector((state) => state.userReducer.user);
  const event = useSelector((state) => state.userReducer.event);
  const dispatch = useDispatch();

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    console.log("is this", user.user_type);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    if (org_id.length > 2) {
      Axios.get(
        `${ServerURL}/api/events/SiteDataSocialsByOrganizerID/${org_id}`
      ).then((res) =>
        !res.data.result ? alert(res.data.error) : setSiteData(res.data.result)
      );
    }
  }, [org_id]);

  const handleLogout = (e) => {
    e.preventDefault();
    Axios.post(`${ServerURL}/api/logging/logout`, {
      withCredentials: true,
      credentials: "include",
    }).then((res) => {
      cookie.set(res.data.cookie, res.data.token, res.data.options);
      dispatch({
        type: "USER",
        payload: {
          _id: "",
          user_type: "",
          fname: "",
          lname: "",
          email: "",
          password: "",
          address: "",
          dob: "",
          postal: 0,
          contact: 0,
          company: "",
        },
      });
    });
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo id="event-nav-logo" onClick={toggleHome} to="/">
              <Container
                style={{
                  maxHeight: "10vh",
                  maxWidth: "30vw",
                }}
              >
                <Row>
                  <div>
                    <img
                      style={{ maxWidth: "80px", maxHeight: "70px" }}
                      src={`${ServerURL}/${event.organizer_id}/site/${siteData.logo[0].filename}`}
                      alt="Site logo"
                    />
                  </div>
                  <Col style={{ marginTop: "5px" }}>
                    <p style={{ fontSize: "15px", textDecoration: "under" }}>
                      {siteData.name}
                    </p>
                    <p style={{ fontSize: "10px" }}>{siteData.slogan}</p>
                  </Col>
                </Row>
              </Container>
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="card-main"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="contactus-form"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Contact Us
                </NavLinks>
              </NavItem>

              <NavItem>
                {user.user_type === "" ? (
                  <NavLinks>
                  <Link
                    style={{ color: "inherit", textDecoration: "inherit" }}
                    to="/signup"
                  >
                    Sign Up
                  </Link>
                </NavLinks>
                ) : (
                  <p></p>
                )}
              </NavItem>
            </NavMenu>
            <NavBtn>
              {user.user_type === "" ? (
                <NavBtnLink to="/signin">Sign In</NavBtnLink>
              ) : (
                <NavBtnLink onClick={handleLogout}>Logout</NavBtnLink>
              )}
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
