import './my-events.css'
import { useEffect, useState } from "react";
import Axios from "axios";
import { Container, Row, Card, strong } from "reactstrap";

import { useHistory } from "react-router-dom";
import { ServerURL } from "../../url";

const MyEvents = (props) => {
  const { attendee } = props;
  const history = useHistory();
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
    },
  ]);

  useEffect(() => {
    console.log("rendered ");
    attendee._id !== undefined &&
      Axios.get(
        `${ServerURL}/api/events/getEventsByAttendeeId/${attendee._id}`
      ).then((res) => {
        res.data.error && alert("error", res.data.error);
        res.data.result && setEvents(res.data.result);
      });
  }, [attendee]);
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  return (
    <>
      <Container>
        <Row style={{ justifyContent: "center" }}>
          {events.map((e, i) => (
            <div
            className='my-event-card'
              key={i}
              onClick={(ev) => {
                ev.preventDefault();
                 history.push(`/events/${e.webURL}`);
				
              }}
            >
              <img
                style={{ height: "200px", width: "100%" }}
                src={`${ServerURL}/${e.organizer_id}/${e.webURL}/${e.images[0].filename}`}
                alt={e.images[0].originalname}
              />

              <div style={{ display: "flex",justifyContent:'center' }}>
                <strong>{e.start_date.split("T")[0]}</strong>

                <span style={{ marginInline: "3%" }}>|</span>
                <strong>{e.end_date.split("T")[0]}</strong>
                <span style={{ marginInline: "3%" }}>|</span>
                <strong>{e.title}</strong>
              </div>

              <h4 style={{ textAlign: "center", bottom: "0" }}>{e.category}</h4>
            </div>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default MyEvents;
