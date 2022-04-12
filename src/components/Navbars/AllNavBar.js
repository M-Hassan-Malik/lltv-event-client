import React from "react";
import classnames from "classnames";
import { NavLink } from "react-router-dom";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
} from "reactstrap";

const AuthNavbar = (props) => {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [color, setColor] = React.useState("navbar-transparent");
  // this function opens and closes the collapse on small devices
  // it also adds navbar-transparent class to the navbar when closed
  // ad bg-white when opened
  const toggleCollapse = () => {
    if (collapseOpen) {
      setColor("navbar-transparent");
    } else {
      setColor("bg-white");
    }
    setCollapseOpen(!collapseOpen);
  };
  return (
    <Navbar
      className={classnames("navbar-absolute fixed-top", color)}
      expand="lg"
    >
      <Container fluid>
        <div className="navbar-wrapper">
          <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
            {props.brandText}
          </NavbarBrand>
        </div>
        <button
          aria-controls="navigation-index"
          aria-expanded={false}
          aria-label="Toggle navigation"
          className="navbar-toggler"
          data-toggle="collapse"
          type="button"
          onClick={toggleCollapse}
        >
          <span className="navbar-toggler-bar navbar-kebab" />
          <span className="navbar-toggler-bar navbar-kebab" />
          <span className="navbar-toggler-bar navbar-kebab" />
        </button>
        <Collapse isOpen={collapseOpen} navbar>
          <Nav navbar className="ml-auto">
            <NavItem>
              <NavLink to="/admin/dashboard" className="nav-link text-primary">
                <i className="tim-icons icon-minimal-left" /> Back to Dashboard
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/all/events" className="nav-link">
                <i className="tim-icons icon-coins" /> Events
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/all/home" className="nav-link">
                <i className="tim-icons icon-coins" /> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/all/about" className="nav-link">
                <i className="tim-icons icon-coins" /> About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/all/services" className="nav-link">
                <i className="tim-icons icon-coins" /> Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/auth/lock-screen" className="nav-link">
                <i className="tim-icons icon-lock-circle" /> Lock
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default AuthNavbar;
