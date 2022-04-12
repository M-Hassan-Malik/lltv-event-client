import React from "react";
import { Container } from "reactstrap";
import logos from "../../assets/img/default-avatar.png";
import "./cards.css";

const Section2 = () => {
  return (
    <div className="pricing-container-2">
      <h1 id="pricing-heading">Offical Sponsors</h1>
      <Sponsors />
      <Sponsors />
    </div>
  );
};

const Sponsors = () => {
  return (
    <div className="sponsors">
      <div>
        <div id="sponsor-main">
          <h1 id="text">Principal Sponsor</h1>
          <div id="sponsor-trailling">
            <img src={logos} />
            <img src={logos} />
            <img src={logos} />
            <img src={logos} />
            <img src={logos} />
            <img src={logos} />
            <img src={logos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
