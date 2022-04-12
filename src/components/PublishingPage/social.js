import React, { useState, useEffect } from "react";

import axios from "axios";

import { Input, Form, FormGroup, Button } from "reactstrap";
import { useSelector } from "react-redux";
import { ServerURL } from "../../url";


const Social = () => {
  const user = useSelector((state) => state.userReducer.user);

  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedIn, setLinkedIn] = useState("");

  const handleChanges = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    switch (name) {
      case "facebook":
        setFacebook(value);
        break;
      case "instagram":
        setInstagram(value);
        break;
      case "youtube":
        setYoutube(value);
        break;
      case "twitter":
        setTwitter(value);
        break;
      case "linkedIn":
        setLinkedIn(value);
        break;

      default:
        break;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let data = {
      id: user._id,
      facebook: facebook,
      instagram: instagram,
      youtube: youtube,
      twitter: twitter,
      linkedIn: linkedIn,
    };

    axios
      .post(`${ServerURL}/api/generate/generateSite/social`, {
        data: JSON.stringify(data),
      })
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
      <Form onSubmit={handleFormSubmit}>
        <FormGroup>
          <Input
            onChange={handleChanges}
            name="facebook"
            placeholder="Enter Your Facebook URL"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            onChange={handleChanges}
            name="instagram"
            placeholder="Enter Your Instagram URL"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            onChange={handleChanges}
            name="youtube"
            placeholder="Enter Your YouTube URL"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            onChange={handleChanges}
            name="twitter"
            placeholder="Enter Your Twitter URL"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            onChange={handleChanges}
            name="linkedIn"
            placeholder="Enter Your LinkedIn URL"
          ></Input>
        </FormGroup>

        <Button style={{ float: "right" }} type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Social;
