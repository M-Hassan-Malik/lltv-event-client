import "./manage-events-category.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { Table, Button, Container } from "reactstrap";
import { useHistory } from "react-router-dom";

import { ServerURL } from "../../url";
const ManageEvents = () => {
  const user = useSelector((state) => state.userReducer.user);
  const history = useHistory();
  const [rerender, setRerender] = useState("false");

  const [events, setEvents] = useState([
    {
      images: [
        {
          filename: "",
          originalname: "",
        },
      ],
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
      city: "",
      state: "",
      zipcode: "",
      country: "",
      updated_at: "",
    },
  ]);
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
    }
  };

  return (
    <Container className="main-manage-event-category"  >
      <Table id='table'>
        <thead>
          <tr id="thead-row">
            <th>ID</th>
            <th>Name</th>
            <th>Thumbnail</th>
            <th>Updated At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((e, i) => (
            <tr key={e._id} id="table-row">
              <td>{i++}</td>
              <td>{e.category}</td>
              <td id="img-td">
                {
                  <img
                    style={{ maxHeight: "10vh", maxWidth: "15vw" }}
                    src={`${ServerURL}/${e.organizer_id}/${e.webURL}/${
                      e.images !== null
                        ? e.images[0].filename
                        : "You haven't set any Thumbnail"
                    }`}
                    alt={
                      e.images !== null
                        ? e.images[0].originalname
                        : "You haven't set any Thumbnail"
                    }
                  />
                }
              </td>
              <td>{e.updated_at.split("T")[0]}</td>
              <td>
                <Button
                  size="sm"
                  value={e.webURL}
                  name="view"
                  onClick={handleClick}
                >
                  View
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ManageEvents;
