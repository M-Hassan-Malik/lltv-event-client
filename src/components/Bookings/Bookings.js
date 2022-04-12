import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./bookings.css";
import Axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { Table, Button, Container } from "reactstrap";
import { useHistory } from "react-router-dom";

import { ServerURL } from "../../url";

const ManageEvents = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();

  const history = useHistory();
  const [bookings, setBookings] = useState([
    {
      created_at: "",
      _id: "",
      organizer_id: "",
      attendee_id: {
        _id: "",
        user_type: "",
        fname: "",
        lname: "",
        email: "",
        password: "",
        address: "",
        dob: "",
        postal: "",
        contact: "",
        company: "",
        __v: 0,
      },
      event_id: {
        _id: "",
        organizer_id: "",
        title: "",
        category: "",
        webURL: "",
        description: "",
        moreinfo: "",
        start_date: "",
        end_date: "",
        start_time: "",
        end_time: "",
        venue: "",
        venue_address: "",
        country: "Pakistan",
        updated_at: "",
      },
      ticket_no: "",
      month: "",
    },
  ]);

  useEffect(() => {
    let org_id = user._id;
    Axios.get(
      `${ServerURL}/api/tickets/getBookingDetailsByOrg_id/${org_id}`
    ).then((res) => {
      res.data.result
        ? res.data.result !== null && setBookings(res.data.result)
        : alert("error", res.data.error);
    });
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    switch (name) {
      case "view":
        dispatch({ type: "BOOKING_VIEW_EDIT", payload: value });

        history.push(`/admin/booking/view`);
        break;
      case "edit":
        dispatch({ type: "BOOKING_VIEW_EDIT", payload: value });
        history.push(`/admin/booking/view`);
        break;
    }
  };

  return (
    <div className="main-booking">
      <Table>
        <thead>
          <tr id="thead-row">
            <th>ID</th>
            <th>Order no.</th>
            <th>Event Title</th>
            <th>Quantity</th>
            <th>Net Price</th>
            <th>Customer Email</th>
            <th>Status</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings !== null &&
            bookings.map((b, i) => (
              <tr key={b._id} id="table-row">
                <td>{++i}</td>
                <td>{b.ticket_no}</td>
                <td>
                  {b.event_id !== null
                    ? b.event_id.title
                    : "Relative event not found!"}
                </td>
                <td>1</td>
                <td>0.00</td>
                <td>{b.attendee_id.email}</td>
                <td>(enable/disable)</td>
                <td>{b.created_at.split("T")[0]}</td>
                <td>
                  <Container id="container">
                    <Button
                      size="sm"
                      value={b._id}
                      name="view"
                      onClick={handleClick}
                    >
                      View
                    </Button>
                    <Button
                      size="sm"
                      value={b._id}
                      name="edit"
                      onClick={handleClick}
                    >
                      Edit
                    </Button>
                  </Container>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageEvents;
