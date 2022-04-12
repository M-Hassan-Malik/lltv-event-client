import { useState,useEffect } from "react";
import { Col } from "reactstrap";
import img from "../../assets/img/bg1.jpg";
import Expandables from "./Expandables";
import Box from "./Box";
import "./faq.css";
import { useHistory } from "react-router";
import Sidebar from "src_home/components/Sidebar";
import Navbar from "src_home/components/Navbar";
import Footer from "src_home/components/Footer";
import ContactForm from "src_event/components/ContactForm";

const FAQ = (props) => {
  const { hide } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  const history = useHistory();
  var title =
    "The most important things are not things, so we’ll design experiences?";
  var description =
    "Lorem ipsum dolor sit amet, vis an nihil tation doctus, mel ne iriure accusam evertitur. Te omnes repudiandae pri, dolores appetere incorrupte id nam. Mundi doctus mel ad, modo tempor iudicabit vix eu. Duo adhuc noluisse incorrupte eu, has possim audire ne. Nam detraxit salutatus principes eu, ex mei sint causae. Tale omnium cotidieque ea has, et illud inani diceret vis. Cu dico assum vulputate est, an pro meis numquam. Sale eloquentiam id eam.";

  return (
    <div className="faq-main">
      <hr style={{ margin: "80px" }} />
      {hide === false && <Sidebar isOpen={isOpen} toggle={toggle} />}
      {hide === false && <Navbar toggle={toggle} />}
      <div className="img-div" hidden={hide}>
        <img id="faq-image" src={img} />
        <span id="img-text">
          <strong id="strong">FAQ</strong>
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
          <span>&nbsp;&nbsp; FAQ</span>
        </span>
      </div>

      <Col id="col">
        <h1 id="FAQ-heading">
          Trusted by thousands of attendees & event
          <br />
          organizers
        </h1>

        <div className="head">
          <h1
            style={{
              color: "black",
              fontSize: "50px",

              fontFamily: "Montserrat",
              textAlign: "center",
            }}
          >
            Frequently <br />
            asked question
          </h1>
          <Col id="col">
            <Expandables title={title} description={description} />
            <Expandables title={title} description={description} />
            <Expandables title={title} description={description} />
            <Expandables title={title} description={description} />
            <Expandables title={title} description={description} />
          </Col>
        </div>
        {/* <div className="join-us">
          <h1
            style={{
              color: "black",
              fontSize: "50px",

              fontFamily: "Montserrat",
              textAlign: "center",
            }}
            
          >
            <hr style={{ margin: "100px" }} />
            Why
            <br />
            Join us
          </h1>
          <Box />
        </div> */}
      </Col>
      {hide === false && <ContactForm hide={true} />}
      {hide === false && <Footer />}
    </div>
  );
};

export default FAQ;
