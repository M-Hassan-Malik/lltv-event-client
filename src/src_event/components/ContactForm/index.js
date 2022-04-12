
import "./contact.css";
import img from "../../../assets/img/bg1.jpg";
import { useHistory } from "react-router";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Sidebar from "src_home/components/Sidebar";
import Navbar from "src_home/components/Navbar";
import Footer from "src_home/components/Footer";
import { useState,useEffect } from "react";

const ContactForm = (props) => {
  const { hide } = props;
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  return (
    <div className="main-contactForm">
      <hr style={{ margin: "100px" }} />
      {hide === false && <Sidebar isOpen={isOpen} toggle={toggle} />}
      {hide === false && <Navbar toggle={toggle} />}
      <div className="img-div" hidden={hide}>
        <img id="contact-image" src={img} />
        <span id="img-text">
          <strong id="strong">Contact us</strong>
          <br />
          <br />
          <a
            style={{
              color: "#FEFBF3",
              borderBottom: "1px solid red",
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.preventDefault();
              history.push("/");
            }}
          >
            Home
          </a>
          &nbsp;&nbsp;&nbsp;{">"}
          <span>&nbsp;&nbsp; Contact us</span>
        </span>
      </div>
      <Section1 />
      {hide === false && <Section2 />}
      {hide === false && <br />}
      
      {hide === false && <Footer />}
    </div>
  );
};

export default ContactForm;
