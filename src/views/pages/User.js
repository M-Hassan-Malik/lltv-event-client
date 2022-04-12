import axios from "axios";
import React, { useState } from "react";
import { ServerURL } from "../../url.js";
import { useSelector } from "react-redux";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import { useHistory } from "react-router-dom";

const User = () => {
  const user = useSelector((state) => state.userReducer.user);
  const history = useHistory();

  const [email, setEmail] = useState(user.email);
  const [fname, setFname] = useState(user.fname);
  const [lname, setLname] = useState(user.lname);
  const [pass, setPass] = useState(user.password);
  const [dob, setDOB] = useState(user.dob);
  const [address, setAddress] = useState(user.address);
  const [postal, setPostal] = useState(user.postal);
  const [contact, setContact] = useState(user.contact);

  const handleChanges = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "fname":
        setFname(value);
        break;
      case "lname":
        setLname(value);
        break;
      case "pass":
        setPass(value);
        break;
      case "dob":
        setDOB(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "postal":
        setPostal(value);
        break;
      case "contact":
        setContact(value);
        break;
    }
  };
  const handleSave = (e) => {
    e.preventDefault();

    let data = {
      email: email,
      fname: fname,
      lname: lname,
      password: pass,
      dob: dob,
      address: address,
      postal: postal,
      contact: contact,
    };

    axios
      .patch(`${ServerURL}/api/logging/updateUserProfile/${user._id}`, {
        data: JSON.stringify(data),
      })
      .then((res) => {
        res.data.result
          ? res.data.result.nModified && history.push(`/`)
          : alert(res.data.error);
      });
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h4 style={{ background:'none',textAlign:'left' }} className="title">Edit Profile</h4>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Company (disabled)</label>
                        <Input value={user.company} disabled type="text" />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <FormGroup>
                        <label>Email address</label>
                        <Input
                          onChange={handleChanges}
                          placeholder="abc@email.com"
                          name="email"
                          value={email}
                          type="email"
                        />
                      </FormGroup>
                    </Col>

                    <FormGroup>
                      <label>Password</label>
                      <Input
                        onChange={handleChanges}
                        defaultValue={user.password}
                        placeholder="********"
                        name="pass"
                        value={pass}
                        type="password"
                      />
                    </FormGroup>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>First Name</label>
                        <Input
                          onChange={handleChanges}
                          defaultValue={user.fname}
                          name="fname"
                          value={fname}
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label>Last Name</label>
                        <Input
                          onChange={handleChanges}
                          defaultValue={user.lname}
                          name="lname"
                          value={lname}
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Address</label>
                        <Input
                          onChange={handleChanges}
                          value={address}
                          placeholder="Home Address"
                          name="address"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label>Contact</label>
                        <Input
                          onChange={handleChanges}
                          defaultValue={user.contact}
                          name="contact"
                          value={contact}
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <FormGroup>
                        <label>Postal Code</label>
                        <Input
                          onChange={handleChanges}
                          name="postal"
                          defaultValue={user.postal}
                          value={postal}
                          placeholder="ZIP Code"
                          type="number"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <FormGroup>
                        <label>Date-of-Birth</label>
                        <Input
                          onChange={handleChanges}
                          name="dob"
                          defaultValue={user.dob}
                          value={dob}
                          placeholder="Bate Of Birth"
                          type="Date"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row></Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button
                  onClick={handleSave}
                  className="btn-fill"
                  color="primary"
                  type="submit"
                >
                  Save
                </Button>
              </CardFooter>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <CardBody>
                <CardText />
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar"
                      src={require("assets/img/emilyz.jpg").default}
                    />
                    <h5
                      className="title"
                      style={{ background: "none", paddingLeft: "90px" }}
                    >
                      Super Admin
                    </h5>
                  </a>
                  <p className="description">Ceo/Co-Founder</p>
                </div>
                <div className="card-description">
                  Do not be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </div>
              </CardBody>
              <CardFooter>
                <div className="button-container">
                  <Button className="btn-icon btn-round" color="facebook">
                    <i className="fab fa-facebook" />
                  </Button>
                  <Button className="btn-icon btn-round" color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button className="btn-icon btn-round" color="google">
                    <i className="fab fa-google-plus" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
      <pre>{JSON.stringify(dob, null, 6)} </pre>
    </>
  );
};

export default User;
