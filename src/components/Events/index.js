import "./feed.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Container, Row, Card, CardText } from "reactstrap";

import { useHistory } from "react-router-dom";
import { ServerURL } from "../../url";
const AllEvents = () => {
  const history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
      zipcode: "000000",
      country: "",
    },
  ]);
  useEffect(() => {
    Axios.get(`${ServerURL}/api/events/all/getEvents`).then((res) => {
      setEvents(res.data);
    });
  }, []);

  const handleBooking = (url) => {
    history.push(`/events/${url}`);
  };
  return (
    <>
      <div className="feed-main">
        <Row className="row-box">
          {events.map((e, i) => (
            <div
              key={i}
              className="feed-card"
              onClick={() => handleBooking(e.webURL)}
            >
              <img
                style={{ width: "100%", height: "200px" }}
                src={`${ServerURL}/${e.organizer_id}/${e.webURL}/${
                  e.images !== null ? e.images[0].filename : ""
                }`}
                alt={
                  e.images !== null
                    ? e.images[0].originalname
                    : "You have not set any Thumbnail"
                }
              />

              <div id="text-div">
                <strong>{e.start_date.split("T")[0]}</strong>

                <span style={{ marginInline: "2%", color: "#FEFBF3" }}>|</span>
                <strong>{e.end_date.split("T")[0]}</strong>
                <span style={{ marginInline: "2%", color: "#FEFBF3" }}>|</span>
                <strong>{e.title}</strong>
              </div>
              <br />

              <h4
                dangerouslySetInnerHTML={{
                  __html: e.description.substring(0, 20) + " .....",
                }}
              ></h4>
            </div>
          ))}
        </Row>
      </div>
    </>
  );
};

export default AllEvents;
