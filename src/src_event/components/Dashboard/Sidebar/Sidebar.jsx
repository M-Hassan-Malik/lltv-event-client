import React from "react";
import "./Sidebar.css";
import {
	AppstoreOutlined,
	TeamOutlined,
	ScheduleOutlined,
	YoutubeOutlined,
	GlobalOutlined,
} from "@ant-design/icons";
import ProfileCard from "./profileCard/profileCard";
import NavCards from "./NavCards/NavCards";
import EventCard from "./EventsFollowed/EventCard";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
	const { user ,setActiveComponent} = props;
	const navDetails = [
		{ 
			icon: (
				<AppstoreOutlined
					style={{
						fontSize: "25px",
						color: "grey",
					}}
		
				/>
			),
			title: "Feed",
			link: "#",
		},
		{
			icon: (
				<TeamOutlined
					style={{
						fontSize: "25px",
						color: "grey",
					}}
				
				/>
			),
			title: "Community",
			link: "#",
		},
		{
			icon: (
				<ScheduleOutlined
					style={{
						fontSize: "25px",
						color: "grey",
					}}
				
				/>
			),
			title: "My Events",
			link: "#",
		},
		{
			icon: (
				<YoutubeOutlined
					style={{
						fontSize: "25px",
						color: "grey",
					}}
				/>
			),
			title: "Watched Videos",
			link: "#",
		},
		{
			icon: (
				<GlobalOutlined
					style={{
						fontSize: "25px",
						color: "grey",
					}}
				/>
			),
			title: "Market Place",
			link: "#",
		},
	];
	return (
		<div className="Sidebar">
			<ProfileCard user={user} />
			<Link onClick={()=>setActiveComponent('feed')} >
				<NavCards details={navDetails[0]} />
			</Link>
			<Link 	onClick={()=>setActiveComponent('community')} >
				<NavCards  details={navDetails[1]} />
			</Link>
			<Link 	onClick={()=>setActiveComponent('myEvents')} >
				<NavCards details={navDetails[2]} />
			</Link>
			<Link >
				<NavCards details={navDetails[3]} />
			</Link>
			<Link>
				<NavCards details={navDetails[4]} />
			</Link>
			<p className="desc">Events You Follow</p>
			<EventCard />
		</div>
	);
};

export default Sidebar;
