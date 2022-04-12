import "./cards.css";
import { useState,useEffect } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import img from "../../assets/img/bg1.jpg";
import { useHistory } from "react-router";
import Sidebar from "src_home/components/Sidebar";
import Navbar from "src_home/components/Navbar";
import Footer from "src_home/components/Footer";
import ContactForm from "src_event/components/ContactForm";

const Cards = (props) => {
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
    <div className="cards-main">
      {hide === false && <Sidebar isOpen={isOpen} toggle={toggle} />}
      {hide === false && <Navbar toggle={toggle} />}
      {hide === false && (
        <div className="img-div">
          <img id="cards-image" src={img} />
          <span id="img-text">
            <strong id="strong">PRICING</strong>
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
      )}
      <h1 id="pricing-heading">Pricing Plans</h1>
      <div
        lg="4"
        md="3"
        className="card-main-parent"
        // style={{ background: "white", width: "100%" ,display:'flex' ,justifyContent:'center' }}
      >
        <Section1 price={"399.99"} caliber={"ONE DAY PASS"} />
        <Section1 price={"599.99"} caliber={"FULL PASS"} />
        <Section1 price={"799.99"} caliber={"VIP SEAT"} />
      </div>

      {hide === false && <Section2 />}
      {hide === false && <ContactForm hide={true} />}

      {hide === false && <Footer />}
    </div>
  );
};

export default Cards;
