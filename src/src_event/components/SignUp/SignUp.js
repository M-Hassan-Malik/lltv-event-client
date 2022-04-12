import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./SignUp.css";
import Axios from "axios";
import { ServerURL } from '../../../url'


export default function SignUp(props) {
  const history = useHistory();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_pasword, setConfirm_password] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDOB] = useState();
  const [postal, setPostal] = useState(0);
  const [contact, setContact] = useState("");
  const [company, setCompany] = useState("");
  const [agree, setAgree] = useState(false);

  // let check = { props };

  const handleSignup = (e) => {
    e.preventDefault();
    history.push("/");
    let data = {
      user_type: "attendee",
      fname: fname,
      lname: lname,
      email: email,
      password: password,
      confirm_pasword: confirm_pasword,
      address: address,
      dob: dob,
      postal: postal,
      contact: contact,
      company: company,
      agree: agree,
    };
    Axios.post(`${ServerURL}/api/logging/registration`, {
      data: JSON.stringify(data),
    }).then((res) => console.log("res ha", res));
  };

  const handleChanges = (e) => {
    const { value, name } = e.target;
    switch (name) {
      case "fname":
        setFname(value);
        break;
      case "lname":
        setLname(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirm_password(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "dob":
        setDOB(value);
        break;
      case "postal_code":
        setPostal(value);
        break;
      case "contact":
        setContact(value);
        break;
      case "company":
        setCompany(value);
        break;
      case "agree":
        setAgree(!agree);
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <div className="sign">
        <h1>
          Sign Up <span> Form</span>
        </h1>

        <form className="form__control__sign">
          <div className="input__control__sign">
            <div
              style={{
                width: "49%",
              }}
            >
              <input
                onChange={handleChanges}
                type="text"
                name="fname"
                placeholder="First Name"
              />
            </div>
            <div
              style={{
                width: "49%",
              }}
            >
              <input
                onChange={handleChanges}
                name="lname"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="input__control__sign">
            <input
              onChange={handleChanges}
              name="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="input__control__sign">
            <input
              onChange={handleChanges}
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="input__control__sign">
            <input
              onChange={handleChanges}
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <div className="input__control__sign">
            <input
              onChange={handleChanges}
              name="address"
              type="address"
              placeholder="Address"
            />
          </div>
          <div className="input__control__sign">
            <div
              style={{
                width: "49%",
              }}
            >
              <input
                onChange={handleChanges}
                name="dob"
                type="date"
                placeholder="Date of Birth"
              />
            </div>
            <div
              style={{
                width: "49%",
              }}
            >
              <label>
                <input
                  onChange={handleChanges}
                  name="postal_code"
                  type="number"
                  placeholder="Postal Code"
                />
              </label>
            </div>
          </div>
          <div className="input__control__sign">
            <input
              onChange={handleChanges}
              name="contact"
              type="number"
              placeholder="Contact Number"
            />
          </div>
          <div className="input__control__sign">
            <input
              onChange={handleChanges}
              name="company"
              type="text"
              placeholder="Company Name"
            />
          </div>
          <div className="checkbox__form">
            <input
              name="agree"
              onChange={handleChanges}
              type="checkbox"
            ></input>

            <span
              style={{
                paddingLeft: "10px",
              }}
            >
              Agree to all terms and Conditions?
            </span>
          </div>
          <div>
            <button
              onClick={handleSignup}
              type="submit"
              style={{ backgroundColor: "#01bf71" }}
            >
              Sign Up
            </button>
          </div>
          <div>
            <p>
              Have an account with us?
              <a href="/signin"> Login here </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
