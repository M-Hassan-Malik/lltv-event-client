import React from "react";
import { Card, Avatar, Image, Typography } from "antd";
import "./NavCards.css";
import { AppstoreOutlined } from "@ant-design/icons";

function NavCards(props) {
  const { details } = props;
  const { Link } = Typography;
  return (
    <div className="nav__card">
      <div className="nav__img" >{details.icon}</div>
      <div className="nav__desc">
        <Typography>
          <Link href={details.link}>{details.title}</Link>
        </Typography>
      </div>
    </div>
  );
}

export default NavCards;
