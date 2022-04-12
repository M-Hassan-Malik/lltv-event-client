import React from "react";
import { Container, Col } from "reactstrap";
import './event-info.css'

const MyInfo = (props) => {
	const {moreinfo} = props;
  return (
    <Container
      style={{
        
        backgroundColor: "#FEFBF3",
        width: "74%",
        paddingBottom: "40px",
        paddingTop: "10px",
      }}
    >
      <Col>
        <h1 style={{ color: "black", textAlign: "center", marginTop:'80px',marginBottom:'50px' }}>Event Info</h1>
		<div id='event-info-p-tag' dangerouslySetInnerHTML={{ __html: moreinfo }} />
      </Col>
    </Container>
  );
};

export default MyInfo;
