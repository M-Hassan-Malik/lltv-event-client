import axios from "axios";
import React, { useState,useEffect } from "react";
import { ServerURL } from "../../url.js";
import { useSelector } from "react-redux";

import {
  Container,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import "./manage_faq.css";
import { useHistory } from "react-router";

const ManageFAQ = () => {
  const user = useSelector((state) => state.userReducer.user);
  const history = useHistory();

  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");
  const [q4, setQ4] = useState("");
  const [q5, setQ5] = useState("");

  const [a1, setA1] = useState("");
  const [a2, setA2] = useState("");
  const [a3, setA3] = useState("");
  const [a4, setA4] = useState("");
  const [a5, setA5] = useState("");

  const handleChanges = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case "q1":
        setQ1(value);
        break;
      case "q2":
        setQ2(value);
        break;
      case "q3":
        setQ3(value);
        break;
      case "q4":
        setQ4(value);
        break;
      case "q5":
        setQ5(value);
        break;

      case "a1":
        setA1(value);
        break;
      case "a2":
        setA2(value);
        break;
      case "a3":
        setA3(value);
        break;
      case "a4":
        setA4(value);
        break;
      case "a5":
        setA5(value);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      q1: q1,
      q2: q2,
      q3: q3,
      q4: q4,
      q5: q5,
      a1: a1,
      a2: a2,
      a3: a3,
      a4: a4,
      a5: a5,
    };

    axios
      .post(`${ServerURL}/api/generate/generateFAQsByOrg_id/${user._id}`, {
        data: JSON.stringify(data),
      })
      .then((res) => {
        if (res.data.result) {
          alert(res.data.result);
          history.push('/admin/dashboard')
        } else if (res.data.error) {
          console.log(res.data.error);
        } else console.log(res.data.error);
      });
  };
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  return (
    <Container className="main-container"> 
      <strong id='page-title' >Manage FAQ`s</strong>
      <Form>
        <FormGroup id="area">
          <lable id='lable' >Enter Question No. # 01</lable>
          <Input
            id="input"
            type="text"
            placeholder="First Question?"
            name="q1"
            onChange={handleChanges}
          />
          <Input
            type="textarea"
            placeholder="Answer here..."
            name="a1"
            onChange={handleChanges}
          />
        </FormGroup>
        <FormGroup id="area">
          <lable id='lable' >Enter Question No. # 02</lable>
          <Input
            id="input"
            type="text"
            placeholder="Second Question?"
            name="q2"
            onChange={handleChanges}
          />
          <Input
            type="textarea"
            placeholder="Answer here..."
            name="a2"
            onChange={handleChanges}
          />
        </FormGroup>
        <FormGroup id="area">
          <lable id='lable' >Enter Question No. # 03</lable>
          <Input
            id="input"
            type="text"
            placeholder="Third Question?"
            name="q3"
            onChange={handleChanges}
          />
          <Input
            type="textarea"
            placeholder="Answer here..."
            name="a3"
            onChange={handleChanges}
          />
        </FormGroup>
        <FormGroup id="area">
          <lable id='lable' >Enter Question No. # 04</lable>
          <Input
            id="input"
            type="text"
            placeholder="Fourth Question?"
            name="q4"
            onChange={handleChanges}
          />
          <Input
            type="textarea"
            placeholder="Answer here..."
            name="a4"
            onChange={handleChanges}
          />
        </FormGroup>
        <FormGroup id="area">
          <lable id='lable' >Enter Question No. # 05</lable>
          <Input
            id="input"
            type="text"
            placeholder="Fifth Question?"
            name="q5"
            onChange={handleChanges}
          />
          <Input
            type="textarea"
            placeholder="Answer here..."
            name="a5"
            onChange={handleChanges}
          />
        </FormGroup>
      </Form>
      <Button onClick={handleSubmit}>Submit</Button>
    </Container>
  );
};

export default ManageFAQ;
