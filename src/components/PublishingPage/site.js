import React, { useState } from "react";

import axios from "axios";

import { Input, Form, FormGroup, Button } from "reactstrap";
import { useSelector } from "react-redux";
import { ServerURL } from "../../url";


const Site = () => {
  const user = useSelector((state) => state.userReducer.user);

  const [name, setName] = useState("");
  const [slogan, setSlogan] = useState("");
  const [logo, setLogo] = useState();

  const handleChanges = (e) => {
    e.preventDefault();
    const { name, value, files } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "slogan":
        setSlogan(value);
        break;
      case "logo":
        setLogo(files[0]);
        break;

      default:
        break;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
	console.log('handle');

    const formData = new FormData();
    formData.append("id", user._id);
    formData.append("name", name);
    formData.append("slogan", slogan);
    formData.append("logo", logo);

    axios
      .post(`${ServerURL}/api/generate/generateSite`, formData)
      .then((res) => {
        if (!res.data.error) {
          alert(JSON.stringify(res.data));
        } else {
          alert("Data didn't saved bacause:", res.data.error);
        }
      });
  };

  return (
    <>
      <Form encType="multipart/form-data" onSubmit={handleFormSubmit}>
        <FormGroup>
          <Input
            onChange={handleChanges}
            name="name"
            placeholder="Site Name"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input name="slogan" placeholder="Site Slogan"    onChange={handleChanges}></Input>
        </FormGroup>
        <FormGroup style={{ marginTop: "2rem" }}>
          <Button>Select Site Logo</Button>
          <Input
            onChange={handleChanges}
            name="logo"
            placeholder="Site logo"
            type="file"
            accept=".png"
          />
        </FormGroup>
        <Button style={{ float: "right" }} type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Site;
