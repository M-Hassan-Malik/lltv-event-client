import "./navbar.css";
import logo from '../../images/evento.png'
import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { useHistory } from "react-router-dom";
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
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import { ClientURL, ServerURL } from "../../../url";
import Cookies from "universal-cookie";

const Navbar = ({ toggle }) => {
  const history = useHistory();
  const [scrollNav, setScrollNav] = useState(false);
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const cookie = new Cookies();

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

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
            <NavLogo onClick={toggleHome} to="/">
            <img src={logo}  style={{ width: "7em" }} >
            </img>
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <a
                id="Nav-a-tag"
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/about");
                }}
              >
                About
              </a>
            {/*   <a
                id="Nav-a-tag"
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/discover");
                }}
              >
                Discover
              </a> 
              <a
                id="Nav-a-tag"
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/services");
                }}
              >
                Services
              </a>*/}
              <a
                id="Nav-a-tag"
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/pricing");
                }}
              >
                Pricing
              </a>
              <a
                id="Nav-a-tag"
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/faq");
                }}
              >
                FAQ
              </a>
              <a
                id="Nav-a-tag"
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/blog");
                }}
              >
                Blog
              </a>
              <a
                id="Nav-a-tag"
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/contact-us");
                }}
              >
                Contact
              </a>

              {/* <NavItem>
                <NavLinks
                  to="heading-blog"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Blog
                </NavLinks>
              </NavItem> */}
            </NavMenu>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <NavBtn>
                {user.user_type === "" ? (
                  <NavBtnLink to="/signin">Sign In</NavBtnLink>
                ) : (
                  <NavBtnLink onClick={handleLogout}>Log out</NavBtnLink>
                )}
              </NavBtn>
              <NavBtn
                style={{
                  paddingLeft: "10px",
                }}
              >
                <NavBtnLink to="/signup">Sign Up </NavBtnLink>
              </NavBtn>
            </div>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
