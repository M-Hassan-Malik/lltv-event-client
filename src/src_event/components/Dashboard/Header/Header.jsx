import React from "react";
import { useDispatch } from "react-redux";
import Cookie from "universal-cookie";

import { Image, Typography, Input } from "antd";
import favicon from "../../../images/favicon.png";
import "./Header.css";
import {
  SearchOutlined,
  BellOutlined,
  LogoutOutlined,
  AudioOutlined,
} from "@ant-design/icons";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { ServerURL } from "../../../../url";
const Header = () => {
  var cookie = new Cookie();

  const hisotry = useHistory();
  const dispatch = useDispatch();
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );

  const { Title } = Typography;

  const handleLogout = (e) => {
    e.preventDefault();
    Axios.post(`${ServerURL}/api/logging/logout`, {
      withCredentials: true,
      credentials: "include",
    }).then((res) => {
      cookie.set(res.data.cookie, res.data.token, res.data.options);
      dispatch({
        type: "USER",
        payload: {
          _id: "",
          user_type: "",
          fname: "",
          lname: "",
          email: "",
          password: "",
          address: "",
          dob: "",
          postal: 0,
          contact: 0,
          company: "",
        },
      });
    });
    hisotry.push("/");
  };

  return (
    <div className="header">
      <div className="header__left">
        <Image height={77} width={70} src={favicon} preview={false} />
        <Title className="logo-text" level={3}>
          Logo
        </Title>
      </div>
      <div className="header__center">
        <Input placeholder="Search" />
      </div>
      <div className="header__right">
        <BellOutlined
          style={{ color: "grey", fontSize: "170%", padding: "0px 15px" }}
        />
        <button onClick={handleLogout} className="logout">
          <LogoutOutlined style={{ color: "grey", fontSize: "170%" }} />
          <span>&nbsp;</span>
          Log out
        </button>
      </div>
    </div>
  );
};

export default Header;
