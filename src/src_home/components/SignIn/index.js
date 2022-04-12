import Axios from "axios";
import ScrollToTop from "../ScrollToTop";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Cookies from "universal-cookie";

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
import { ServerURL } from "../../../url.js";

const SignIn = () => {
  var cookie = new Cookies();
  const history = useHistory();
  const [invalidUser, setInvalidUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    var regix = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );

    regix.test(password) === false
      ? setInvalidUser(
          "Password must have min length 8 with:1 atleast upper case letter\n2 atleast lower case letter\n3 atleast one special character\n4 atleast one number"
        )
      : Axios.post(
          `${ServerURL}/api/logging/signin`,
          {
            email: JSON.stringify(email),
            password: JSON.stringify(password),
          },
          {
            withCredentials: true,
            credentials: "include",
          }
        ).then((res) => {
          if (res.data !== false) {
            dispatch({ type: "USER", payload: res.data.user });
            cookie.set(res.data.cookie, res.data.token, res.data.options);
            console.log('tpye he',res.data.user.user_type)
            res.data.user.user_type === "attendee"
              ?history.push("/dashboard")
              : res.data.user.user_type === "organizer"
              ? history.push("/admin/dashboard")
              : alert("logged in as super admin!")  //history.push("/super-admin/dashboard");
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
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                required
              />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                onChange={(e) => setPassword(e.target.value)}
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
