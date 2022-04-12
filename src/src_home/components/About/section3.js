import "./about.css";
import React from "react";
import imag from "../../../assets/img/emilyz.jpg";
import { Row, Col } from "reactstrap";

const Section3 = () => {
  return (
    <div className="container-3">
      <h1 id="about-heading">EXPERIENCE STAFF</h1>
      <Section3_Row />
    </div>
  );
};

const Section3_Row = () => {
  return (
    <Row>
      <Col>
        <div id="img-div">
          <img src={imag} />
          <h1>Ajay core</h1>
          <p>CTO</p>
        </div>
      </Col>
      <Col>
        <div id="img-div">
          <img src={imag} />
          <h1>Ajay core</h1>
          <p>CTO</p>
        </div>
      </Col>
      <Col>
        <div id="img-div">
          <img src={imag} />
          <h1>Ajay core</h1>
          <p>CTO</p>
        </div>
      </Col>
      <Col>
        <div id="img-div">
          <img src={imag} />
          <h1>Ajay core</h1>
          <p>CTO</p>
        </div>
      </Col>
    </Row>
  );
};

export default Section3;
