import "./view.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ServerURL } from "../../url.js";
import { Table, Button } from "reactstrap";
import { useHistory } from "react-router-dom";

const View = () => {
	const history = useHistory();
	const bookingsViewandEditData = useSelector(
		(state) => state.userReducer.bookingsViewandEditData
	);
	const [booking, setBooking] = useState({
		event_id: {
			title: "",
			category: "",
			start_date: "",
			end_date: "",
			start_time: "",
			end_time: "",
		},
		attendee_id: {
			lname: "",
			fname: "",
			email: "",
			end_date: "",
			start_time: "",
			end_time: "",
		},
		created_at: "",
	});
	useEffect(() => {
		window.scrollTo(0, 0);

		axios
			.get(`${ServerURL}/api/tickets/getTicket/${bookingsViewandEditData}`)
			.then((res) => {
				res.data.result
					? setBooking(res.data.result)
					: alert("error retriving booking", res.data.error);
			});
	}, []);

	const handleClick = (e) => {
		e.preventDefault();
		const { name } = e.target;
		switch (name) {
			case "edit":
				console.log("ol");
				break;
			case "delete":
				//_id of ticket
				axios
					.delete(
						`${ServerURL}/api/tickets/deleteTicket/${bookingsViewandEditData}`
					)
					.then((res) => {
						if (res.data.result) {
							alert("Booking removed", res.data.result);
							history.push(`/admin/bookings`);
						} else if (res.data.result) {
							alert("error deleting booking", res.data.error);
						} else alert("error deleting booking at else", res.data.error);
					});
				break;
		}
	};

	return (
		<>
			<div className="main">
				<div className="details-div">
					<div id="buttons">
						<b style={{ margin: "0px", paddingRight: "15px" }}>
							Viewing booking:
						</b>
						<Button
							style={{ background: "#82CAFA" }}
							name="edit"
							onClick={handleClick}
						>
							Edit
						</Button>
						<Button
							style={{ background: "#E2252B" }}
							name="delete"
							onClick={handleClick}
						>
							Delete
						</Button>
					</div>
					<Table>
						<thead>
							<tr id="view-tr">
								<th id="view-th">Order No.</th>
								<td id="view-td">{bookingsViewandEditData}</td>
							</tr>
							<tr id="view-tr">
								<th id="view-th">Event Title</th>
								<td id="view-td">
									{booking.event_id !== null
										? booking.event_id.title
										: "Relative event not found!"}
								</td>
							</tr>
							<tr id="view-tr">
								<th id="view-th">Event Category</th>
								<td id="view-td">
									{booking.event_id !== null
										? booking.event_id.category
										: "Relative event not found!"}
								</td>
							</tr>
							<tr id="view-tr">
								<th id="view-th">Quantity</th>
								<td id="view-td">1</td>
							</tr>
							<tr id="view-tr">
								<th id="view-th">Price</th>
								<td id="view-td">0.00</td>
							</tr>
							<tr id="view-tr">
								<th id="view-th">Event Start Date</th>
								<td id="view-td">
									{booking.event_id !== null &&
										booking.event_id.start_date.split("T")[0]}
								</td>
							</tr>
							<tr id="view-tr">
								<th id="view-th">Event End Date</th>
								<td id="view-td">
									{booking.event_id !== null &&
										booking.event_id.end_date.split("T")[0]}
								</td>
							</tr>
							<tr id="view-tr">
								<th id="view-th">Event Start Time</th>
								<td id="view-td">
									{booking.event_id !== null &&
										booking.event_id.start_time.split("T")[0]}
								</td>
							</tr>
							<tr id="view-tr">
								<th id="view-th">Event End Time</th>
								<td id="view-td">
									{booking.event_id !== null &&
										booking.event_id.end_time.split("T")[0]}
								</td>
							</tr>
							<tr id="view-tr">
								<th id="view-th">Customer Name</th>
								<td id="view-td">
									{booking.attendee_id !== null &&
										booking.attendee_id.fname +
											" " +
											booking.attendee_id.lname}{" "}
								</td>
							</tr>
							<tr id="view-tr">
								<th id="view-th">Customer Email</th>
								<td id="view-td">
									{booking.attendee_id !== null && booking.attendee_id.email}
								</td>
							</tr>
							<tr id="view-tr">
								<th id="view-th">Status</th>
								<td id="view-td">enable/disable</td>
							</tr>
							<tr id="view-tr">
								<th id="view-th">Crated/Updated At</th>
								<td id="view-td">{booking.created_at.split("T")[0]}</td>
							</tr>
						</thead>
					</Table>
				</div>
			</div>
		</>
	);
};

export default View;
