import "./Body.css";
import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import AllEvents from "../../../../components/Events/index.js";
import Community from "../../../../components/Commnunity/community.js";
import MyEvents from "../../../../components/My Events/MyEvents.js";

function Body(props) {
	const { activeComponent, user } = props;
	const [rerender, setRerender] = useState(false);
	useEffect(() => {
		setRerender(!rerender);
	}, [activeComponent]);
	return (
		<div className="body-attendee">
			{activeComponent === "feed" && (
				<Container style={{ paddingTop: "2rem" }}>
					<AllEvents />
				</Container>
			)}
			{activeComponent === "myEvents" && (
				<Container style={{ paddingTop: "2rem" }}> 
          <MyEvents  attendee={user}/>
        </Container>
			)}
			{activeComponent === "community" && (
				<Container style={{ paddingTop: "2rem" }}>
					<Community  attendee={user} />
				</Container>
			)}
		</div>
	);
}

export default Body;
