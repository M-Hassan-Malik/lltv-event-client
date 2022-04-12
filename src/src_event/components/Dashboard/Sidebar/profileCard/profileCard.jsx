import React from "react";
import { Card, Avatar, Image, Typography } from "antd";
import "./profileCard.css";
import favicon from "../../../../images/favicon.png";
function profileCard(props) {
  const {user} = props;
  const { Meta } = Card;
  const { Link } = Typography;
  return (
    <div className="profile__card">
      <div className="profile__img">
        <Image
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          preview={false}
        />
      </div>
      <div className="profile__desc">
        <Typography>
          <Link href="#">{user.fname +' '+ user.lname}</Link>
          <p>@{user.fname}</p>
        </Typography>
      </div>
    </div>
  );
}

export default profileCard;
