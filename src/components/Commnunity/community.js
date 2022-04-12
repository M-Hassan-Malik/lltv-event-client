import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { ServerURL } from "../../url";
import "./community.css";

const Community = (props) => {
  const { attendee } = props;
  const [fellowAttendees, setFellowAttendees] = useState([
    {
      _id: "",
      address: "",
      company: "",
      contact: "",
      dob: "",
      email: "",
      fname: "",
      lname: "",
      postal: "",
    },
  ]);
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  useEffect(() => {
    attendee._id !== undefined &&
      axios
        .get(
          `${ServerURL}/api/dashboard/getFellowAttendeesByAttendeeID/${attendee._id}`
        )
        .then((res) => {
          if (res.data.response) {
            console.log(res.data);
            setFellowAttendees(res.data.response);
          } else if (res.data.error) {
            console.log(res.data.error);
          } else {
            console.log("Error in community.js");
          }
        });
  }, [attendee]);

  return (
    <div className='community'  >
      <h1 >
        <b>Community</b>
      </h1>
      
      <Table lg={9}>
        <thead>
          <tr>
            <th id="th">#</th>
            <th id="th">Name</th>
            <th id="th">Email</th>
            <th id="th">Contact</th>
            <th id="th">Address</th>
            <th id="th">Relation</th>
          </tr>
        </thead>
        <tbody>
          {fellowAttendees.map((attendeeData, i) => (
            <tr key={attendeeData._id}>
              <td id="td">{i + 1}</td>
              <td id="td">{attendeeData.fname + " " + attendeeData.lname}</td>
              <td id="td">{attendeeData.email}</td>
              <td id="td">{attendeeData.contact}</td>
              <td id="td">{attendeeData.address}</td>
              <td id="td">
                {attendeeData._id !== attendee._id ? "Co-Attendees" : "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Community;
