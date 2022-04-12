import Axios from "axios";
import ScrollToTop from "../ScrollToTop";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  Container,
  FormWrap,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SigninElements";
import { ServerURL } from "../../../url";
import Cookie from "universal-cookie";

const SignIn = () => {
  const history = useHistory();
  const [invalidUser, setInvalidUser] = useState("");

  var cookie = new Cookie();

  const dispatch = useDispatch();
  let formSubmit = {
    isEmail: "",
    isPassword: "",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    var regix = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );

    regix.test(formSubmit.isPassword) == false
      ? setInvalidUser(
          "Password must have min length 8 with:1 atleast upper case letter\n2 atleast lower case letter\n3 atleast one special character\n4 atleast one number"
        )
      : Axios.post(
          `${ServerURL}/api/logging/signin`,
          {
            email: JSON.stringify(formSubmit.isEmail),
            password: JSON.stringify(formSubmit.isPassword),
          },
          {
            withCredentials: true,
            credentials: "include",
          }
        ).then((res) => {
          if (res.data !== false) {
            dispatch({ type: "USER", payload: res.data.user });
            cookie.set("log", 22)
            res.data.user.user_type === "organizer"
              ? history.push("admin/dashboard")
              : history.push("/dashboard");
          } else setInvalidUser("User not found!");
        });
  };

  return (
    <>
      <ScrollToTop />
      <Container>
        <FormWrap>
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
                required
              />
              <FormButton type="submit">Continue</FormButton>
              <label
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "5px",
                }}
              >
                <i style={{ color: "yellow" }}>{invalidUser}</i>
              </label>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};
export default SignIn;
