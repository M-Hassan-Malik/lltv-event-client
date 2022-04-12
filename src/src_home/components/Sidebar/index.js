import './index.css'
import Axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./SidebarElements";
import { ServerURL } from "../../../url";

const Sidebar = ({ isOpen, toggle }) => {
  const user = useSelector((state) => state.userReducer.user);

  const dispatch = useDispatch();
  const cookie = new Cookies();
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
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu className='home-sidebar' >
          <Link to="/about" exact="true">
            About
          </Link>
          {/* <Link to="/discover" exact="true">
            Discover
          </Link> */}
          {/* <Link to="/services" exact="true">
            Services
          </Link> */}
          <Link to="/contact-us" exact="true">
            Contact Us
          </Link>
          <Link to="/blog" exact="true">
            Blog
          </Link>
          <Link to="/faq" exact="true">
            FAQ
          </Link>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute style={{ backgroundColor: "#00adb5" }} to="/signup">
            Sign Up
          </SidebarRoute>
          {user._id === "" ? (
            <SidebarRoute style={{ backgroundColor: "#00adb5" }} to="/signin">
              Sign In
            </SidebarRoute>
          ) : (
            <SidebarRoute
              onClick={handleLogout}
              style={{ backgroundColor: "#00adb5" }}
            >
              Log out
            </SidebarRoute>
          )}
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
