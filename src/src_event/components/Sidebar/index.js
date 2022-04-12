import "./index.css";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarRoute,
  SideBtnWrap,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  const user = useSelector((state) => state.userReducer.user);
  return (
    <SidebarContainer   isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu className="event-sidebar">
          <Link to="/about" exact="true">
            About
          </Link>
          <Link to="/services" exact="true">
            Services
          </Link>
          <Link to="/contact-us" exact="true">
            Contact Us
          </Link>
        </SidebarMenu>
        <SideBtnWrap >
          <SidebarRoute to="/signup">Sign Up</SidebarRoute>
          {user._id === "" ? (
            <SidebarRoute to="/signin">Sign In</SidebarRoute>
          ) : (
            <SidebarRoute to="/">Log out</SidebarRoute>
          )}
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
