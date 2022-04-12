import "./about.css";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import img from "../../../assets/img/bg1.jpg";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Sidebar from "src_home/components/Sidebar";
import Navbar from "src_home/components/Navbar";
import Footer from "src_home/components/Footer";
import ContactForm from "src_event/components/ContactForm";


const About = () => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  return (
    <div className="about-main">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="img-div">
        <img id="faq-image" src={img} />
        <span id="img-text">
          <strong id="strong">About Us</strong>
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
          <span>&nbsp;&nbsp; About</span>
        </span>
      </div>
      <h1 id="about-heading">WHO WE ARE</h1>
      <div>
        <Section1 />
      </div>
      <br />
      <div className="container-2-div-parent">
        <Section2 imgStart={true} />
        <Section2 imgStart={false} />
      </div>
      <div>
        <Section3 />
      </div>
      <div>
        <Section4 />
      </div>
      <div style={{ textAlign: "center" }}></div>
      <ContactForm hide={true} />
      <Footer />
    </div>
  );
};

export default About;
