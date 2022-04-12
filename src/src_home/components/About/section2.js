import "./about.css";
import React from "react";
import leftImg from "../../../assets/img/bg16.jpg";
import { Container, Row, Col } from "reactstrap";

const Section2 = (props) => {
  const { imgStart } = props;
  return (
    <div className="container-2">
      {imgStart ? (
        <div id="row">
          <Col id="col-1">
            <img src={leftImg} id="img" />
          </Col>
          <Col id="col-2">
            <div id="div-text">
              <h1>Global Business Opportunities</h1>
              <h3>
                SPKER continues to grow in international scope, attracting
                exhibitors and visitors from all over the world.
              </h3>
            </div>
          </Col>
        </div>
      ) : (
        <div id="row">
          <Col id="col-2">
            <div id="div-text">
              <h1>Global Business Opportunities</h1>
              <h3>
                SPKER continues to grow in international scope, attracting
                exhibitors and visitors from all over the world.
              </h3>
            </div>
          </Col>
          <Col id="col-1">
            <img src={leftImg} id="img" />
          </Col>
        </div>
      )}
    </div>
  );
};

export default Section2;
