import "./info.css";
import React from "react";
import { Container, Row, Col } from "reactstrap";
import img from "../../../assets/img/bg14.jpg";
import './info.css'

const InfoSec = (props) => {
	const { title, description } = props;

	return (
		<Row className="info-main" style={{ margin: "0px" }}>
			<Col id="child1">
				<Container
					style={{
						backgroundImage: `url(${img})`,
						borderRadius: "50%",
						height: "300px",
						width: "300px",
						justifyContent: "center",
						display: "flex", 
						alignItems: "center",
						flexDirection: "column",
					}}
				>
					<h1 style={{ margin: "0%", fontSize: "150px", fontWeight: "bold" }}>
						01
					</h1>
					<strong style={{ margin: "0%", fontSize: "40px" }}>Oct-2021</strong>
				</Container>
			</Col>
			<Col id="child2">
				<h1 id="title">{title !== null || title !== undefined ? title : ""}</h1>
				<div
					id="info-area"
					dangerouslySetInnerHTML={{
						__html:
							description !== null || description !== undefined
								? description
								: "empty",
					}}
				/>
			</Col>
		</Row>
	);
};

export default InfoSec;
