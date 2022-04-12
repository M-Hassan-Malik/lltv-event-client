import "./about.css";
import React from "react";
import aboutFirst from "../../../assets/img/about-first.jpg";
import { Container,Row,Col } from "reactstrap";

const Section1 = () => {
  return (
    <Container className="container-1">
      <Row id="row">
        <Col id="col-1">
          <img src={aboutFirst} />
        </Col>
        <Col id="col-2">
          <div>
            <h1>
              The team here to create a completely new experience for you.
            </h1>
            <strong>
              SPKER is produced by the team behind Web Summit and Collision –
              two of the largest and fastest-growing tech conferences on the
              planet. Leaders from the world’s biggest companies and most
              exciting startups will flock to Hong Kong in 2020 to share their
              stories. They’ll be joined by journalists from major global media
              outlets. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit
            </strong>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Section1;
