import React,{useState} from "react";
import Header from "./Header/Header";
import SidebarLeft from "./Sidebar/Sidebar";
import SidebarRight from "./RightSidebar/RightSidebar";
import Body from "./Body/Body";
import "./Dashboard.css";
import { useSelector } from "react-redux";

const Dashboard = () => {
	const user = useSelector((state) => state.userReducer.user);
	const [activeComponent, setActiveComponent] = useState("feed");
	return (
		<div className="dashboard">
			<div className="dashboard__header">
				<Header />
				<div className="dashboard__body">
					<SidebarLeft setActiveComponent={setActiveComponent} user={user} />
					<Body activeComponent={activeComponent} user={user} />
				</div>
			</div>
		</div>
	);
};
export default Dashboard;
