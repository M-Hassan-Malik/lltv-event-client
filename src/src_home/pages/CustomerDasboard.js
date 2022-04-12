import React from "react";
import { useEffect } from "react";
import Dashboard from "../components/Dashboard/Dashboard";
function CustomerDasboard(props) {
	const { user } = props;
	return (
		<div>
			<Dashboard user={user} />
		</div>
	);
}

export default CustomerDasboard;
