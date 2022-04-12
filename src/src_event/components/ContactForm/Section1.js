import "./contact.css";
import "./section1.css";
import React, { useState } from "react";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
} from "reactstrap";

const Section1 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const [address, setAddress] = useState("");

  const handleChanges = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "subject":
        setSubject(value);
        break;
      case "enquiry":
        setEnquiry(value);
        break;
      case "address":
        setAddress(value);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container className="container-main">
      <h1 id="contactus-form">WRITE US</h1>

      <Form id="form">
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Input
                className="contact-input"
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter Email *"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Input
                className="contact-input"
                type="text"
                name="name"
                id="fullname"
                placeholder="Enter full name *"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Input
                className="contact-input"
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter subject *"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Input
                className="contact-input"
                type="text"
                name="address"
                id="address"
                placeholder="Enter your address *"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={9}>
            <FormGroup>
              <Input
                className="contact-input"
                type="textarea"
                name="enquiry"
                id="enquiry"
                placeholder="what's your enquiry! *"
              />
            </FormGroup>
          </Col>
        </Row>
        <Button id="contact-button" onClick={(e) => e.preventDefault()}>
          Sign in
        </Button>
      </Form>
    </Container>
  );
};

export default Section1;
