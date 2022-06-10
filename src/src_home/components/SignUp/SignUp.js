import "./SignUp.css";
import React, { useMemo, useState, useEffect } from "react";
import { useHistory } from "react-router";
import Axios from "axios";
import { ServerURL } from "../../../url";
import Select from "react-select";
import countryList from "react-select-country-list";

export default function SignUp() {
  const history = useHistory();
  const options = useMemo(() => countryList().getData(), []);
  const [verified, setVerified] = useState(false);
  const [otpSession, setOtpSession] = useState("");
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
  const [country, setCountry] = useState({});
  const [agree, setAgree] = useState(false);
  const [render, setRerender] = useState(false);
  var errorShower = [];

  const signupConstrains = () => {
    let regix = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );

    if (regix.test(password) === false) {
      errorShower.push(
        "Password must have min length 8 with:1 atleast upper case letter\n2 atleast lower case letter\n3 atleast one special character\n4 atleast one number\n"
      );
    }
    if (email.includes("@") === false) {
      errorShower.push("Invalid email\n");
    }
    if (password !== confirm_pasword) {
      errorShower.push("~Password and confirm password should be the same\n");
    }
    if (agree === false) {
      errorShower.push("Please Agree our terms\n");
    }
    if (fname.length < 3 || lname.length < 3) {
      errorShower.push("Enter real name\n");
    }
    if (errorShower.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    alert("User Registered");
    if (signupConstrains() === false) {
      alert(errorShower);
      setRerender(!true);
    } else {
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
        country: country,
        agree: agree,
        created_at: new Date(),
        updated_at: new Date(),
        month: new Date().getMonth() + 1, // start from 0 to 11
      };

      Axios.post(`${ServerURL}/api/logging/registration`, {
        data: JSON.stringify(data),
      }).then((res) => history.push("/"));
    }
  };

  const handleVerification = (e) => {
    e.preventDefault();
    if (email.includes("@") === false) {
      alert("Invalid email\n");
    } else {
      Axios.post(`${ServerURL}/api/logging/verify`, {
        email: email,
      })
        .then((res) => {
          if (res.data.result) {
            alert(res.data.result.msg);
            setOtpSession(res.data.result.otp);
            console.log("OTP: ",res.data.result.otp)
          } else alert(res.data.error);
        })
        .catch((e) => alert(e));
    }
  };

  const handleChanges = (e) => {
    const { value, name } = e.target;
    switch (name) {
      case "otp":
        console.log("value: ", value);
        console.log("otpSession: ", otpSession);
        if (value != "" && otpSession == value) {
          setVerified(true);
        }
        break;
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
      {verified == false ? (
        <div
          className="otp"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "40%",
            bottom: "40%",
            left: "20%",
            right: "20%",
          }}
        >
          <h1>🔒</h1>
          <h2>
            Verification <span> Form</span>
          </h2>
          <form className="otp-form">
            <div
              className="input__control__sign"
              style={{
                minWidth: "300px",
              }}
            >
              <input
                onChange={handleChanges}
                name="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <button
              onClick={handleVerification}
              type="submit"
              style={{
                backgroundColor: "#01bf71",
                margin: "1px 0px 20px 0px",
                padding: "5px",
                borderRadius: "5px",
              }}
            >
              Send OTP
            </button>

            <div
              className="input__control__sign"
              style={{
                minWidth: "300px",
              }}
            >
              <input
                onChange={handleChanges}
                type="number"
                name="otp"
                placeholder="For E.g: 29237"
              />
            </div>
          </form>
        </div>
      ) : (
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
              <input
                onChange={handleChanges}
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <Select
                options={options}
                value={country}
                onChange={(value) => setCountry(value)}
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
      )}
    </div>
  );
}
