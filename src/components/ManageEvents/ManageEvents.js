import "./manage-events.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { Table, Row, Button, Container } from "reactstrap";
import { useHistory } from "react-router-dom";

import Swal from "sweetalert2";
import { ServerURL } from "../../url";
const ManageEvents = () => {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [events, setEvents] = useState([
    {
      _id: "",
      title: "",
      category: "",
      start_date: "",
      end_date: "",
      updated_at: "",
      webURL: "",
    },
  ]);
  const [rerender, setRerender] = useState("false");
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  useEffect(() => {
    let org_id = user._id;
    Axios.get(`${ServerURL}/api/events/getEventsByOrganizerId/${org_id}`).then(
      (res) => {
        setEvents(res.data.result);
      }
    );
  }, [rerender]);

  const handleClick = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    switch (name) {
      case "view":
        history.push(`/events/${value}`);
        break;
      case "edit":
        console.log(JSON.parse(value));
        dispatch({ type: "MANAGE_EVENT", payload: JSON.parse(value) });
        history.push("/admin/create-event");
        break;
      case "delete":
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            let event_id = value;
            Axios.delete(
              `${ServerURL}/api/events/deleteEventById/${event_id}/`
            ).then((res) => {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              setRerender(!rerender);
            });
          }
        });

        break;

      default:
        break;
    }
  };

  return (
    <div className="main-manage-event">
      <Table>
        <thead>
          <tr id="thead-row">
            <th>Title</th>
            <th>Category Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Publish</th>
            <th>Status</th>
            <th>Updated At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((e) => (
            <tr key={e._id} id="table-row">
              <td>{e.title}</td>
              <td>{e.category}</td>
              <td>{e.start_date.split("T")[0]}</td>
              <td>{e.end_date.split("T")[0]}</td>
              <td>Published</td>
              <td>Enabled</td>
              <td>{e.updated_at.split("T")[0]}</td>
              <td>
                <Container id="container">
                  <Button
                    size="sm"
                    value={e.webURL}
                    name="view"
                    onClick={handleClick}
                  >
                    View
                  </Button>
                  <Button
                    size="sm"
                    value={JSON.stringify(e)}
                    name="edit"
                    onClick={handleClick}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    value={e._id}
                    name="delete"
                    onClick={handleClick}
                  >
                    Delete
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
