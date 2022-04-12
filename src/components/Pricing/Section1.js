import React from "react";
import { Container } from "reactstrap";
import img from "../../assets/img/bg14.jpg";
import "./cards.css";

const Section1 = (props) => {
  const {caliber,price} = props;
  return (
    <Container
      sm="3"
      className="card-main"
      onClick={(e) => {
        e.preventDefault();
        alert(`Clicked on: ${caliber}`);
      }}
      style={{ backgroundImage: `url(${img})` }}
    >
      <strong>{caliber}</strong>
      <h1 id="h1">${price}</h1>

      <strong>Enterence</strong>
      <br />
      <strong>Free Lunch & Snacks</strong>
      <br />
      <strong>Custom Badge</strong>
      <br />
      <strong>One Workshop</strong>
      <br />
      <br />
      <br />
      <strong>------------------------------------</strong>
      <br />
      <Container sm={{ size: "auto", offset: 1 }} id="buy">
        Buy Ticket
      </Container>
    </Container>
  );
};

export default Section1;
