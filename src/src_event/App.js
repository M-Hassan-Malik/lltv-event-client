import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "../assets/css/nucleo-icons.css";
import "react-notification-alert/dist/animate.css";
import "../assets/scss/black-dashboard-pro-react.scss?v=1.2.0";
import "../assets/demo/demo.css";
import Cookies from "universal-cookie";
import HomeWhiteLabel from "./pages";

import Signup from "../src_home/pages/Signup";
import Signin from "../src_home/components/SignIn/index";
import AdminLayout from "../layouts/Admin/Admin.js";
import CustomerDasboard from "./pages/CustomerDasboard";
import AllEvents from "../../src/components/Events/index";
import Home from "../src_home/pages/index.js";
import BlogsPage from "../views/pages/blogs/blogsPage";
import About from "../src_home/components/About/about";
import ContactUs from "./components/ContactForm/index";
import Pricing from "../components/Pricing/Cards";
import Ticket from "../components/Ticket/Ticket";


//Super Admin Routes - STARTS
import SuperAdminLayout from "../src_super/layouts/Admin/Admin.js";
//Super Admin Routes - ENDS

import { ServerURL } from "../url";
import FAQ from "components/FAQ/FAQ";

function App() {
	
	const dispatch = useDispatch();
	var cookie = new Cookies();
	const user = useSelector((state) => state.userReducer.user);
	const webURLsAndIDs = useSelector((state) => state.userReducer.webURLsAndIDs);
	useEffect(() => {
		axios.get(`${ServerURL}/api/events/all/getOnlyEventsIDs`).then((res) => {
			dispatch({ type: "PUBLISHING_PAGE", payload: res.data });
		});
	}, []);

	useEffect(() => {
		let Cookie = cookie.get("jwtlogin");
		axios
			.get(`${ServerURL}/api/logging/getToken/authCheck/${Cookie}`, {
				withCredentials: true,
				credentials: "include",
			})
			.then((res) => {
				if (!res.data.message) {
					dispatch({ type: "USER", payload: res.data._doc });
				}
			});
	}, []);

	return (
		<>
			<Router>
				<Switch>
					{webURLsAndIDs.map((obj) => (
						<Route
							exact
							path={`/events/${obj.webURL}`}
							component={() => <HomeWhiteLabel eventId={obj.eventId} />}
						/>
					))}

					<Route path="/ticket" component={()=> <Ticket />  }/>

					<Route path="/" component={Home} exact />
					<Route path="/contact-us" component={()=> <ContactUs hide={false} />  } exact />
					<Route path="/pricing" component={()=> <Pricing hide={false} />  } exact />
					<Route path="/about" component={()=> <About hide={false} />  } exact />
					<Route path="/blog" component={()=> <BlogsPage hide={false} />  } exact />
					<Route path="/faq" component={()=> <FAQ hide={false} />  } exact />
					<Route path="/allevents" component={() => <AllEvents exact />} />
					<Route path="/signin" component={() => <Signin />} exact />
					<Route path="/signup" component={Signup} exact />

					<ProtectedRouteAttendee
						path="/dashboard"
						component={CustomerDasboard}
						userType={user.user_type}
					/>

					{/* Admin's Protected Route */}
					{user.user_type === "organizer" && (
						<Route
							path="/admin"
							render={(props) => <AdminLayout user={user} {...props} />}
						/>
					)}

					{/* Super-Admin's Protected Route */}
					{user.user_type === "super" && (
						<Route
							path="/super-admin"
							render={(props) => <SuperAdminLayout user={user} {...props} />}
						/>
					)}
				</Switch>
			</Router>
		</>
	);
}

const ProtectedRouteAttendee = ({
	component: Component,
	userType,
	user,
	...rest
}) => {
	{console.log(JSON.stringify(userType,null,2))}
	return (
		<Route
			{...rest}
			
			render={(props) =>
				userType === "attendee" && <Component user={user} {...rest} />
			}
		/>
	);
};

export default App;
