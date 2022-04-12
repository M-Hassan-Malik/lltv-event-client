import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Axios from "axios";
//import SignIn from "../components/SignIn";
import ScrollToTop from "../components/ScrollToTop";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "../components/SignIn/SigninElements";

function SigninPage(props) {
  const { setUserType } = props;

  const [invalidUser, setInvalidUser] = useState("");
  //fields

  let formSubmit = {
    isEmail: "",
    isPassword: "",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(`http://localhost:5000/api/logging/signin`, {
      email: JSON.stringify(formSubmit.isEmail),
      password: JSON.stringify(formSubmit.isPassword),
    }).then((res) => {
      if (res.data !== "attendee") {
        let pre = res.data.user_type;
       
      } else setInvalidUser("User not found!");
    });
  };

  return (
    <>
      <ScrollToTop />
      <Container>
        <FormWrap>
          <Icon to="/">dolla</Icon>
          <FormContent>
            <Form onSubmit={handleSubmit} action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                onChange={(e) => (formSubmit.isEmail = e.target.value)}
                name="email"
                type="email"
                required
              />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                onChange={(e) => (formSubmit.isPassword = e.target.value)}
                name="password"
                type="password"
              />
              <FormButton type="submit">Continue</FormButton>
              <label>{invalidUser}</label>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
      {/* <SignIn /> */}
    </>
  );
}

export default SigninPage;
