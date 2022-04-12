import "./expandables.css";
import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";

const Expandables = (props) => {
  const { title, description } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <br />

      <button
        style={{
          borderRadius: "1%",
          border: "none",
          background: "none",
          color: "black",
          marginLeft: "10px",
          marginBottom: "2rem",
          padding: "10px",
        }}
        onClick={toggle}
      >
        <lable id="lable" style={{ color: "red" }}>
          +
        </lable>
        <lable id="lable">&nbsp; &nbsp; &nbsp; &nbsp;</lable>
        <strong id="strong">{title}</strong>
      </button>
      <Collapse isOpen={isOpen}>
        <Card id="card-expandable-title">
          <CardBody
            id="card-expandable-subtitle"
          >
            {description}
          </CardBody>
        </Card>
      </Collapse>
    </>
  );
};
export default Expandables;
