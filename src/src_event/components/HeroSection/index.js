import "./HeroElements.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "../ButtonElements";
import { useHistory } from "react-router";
import Axios from "axios";
import Swal from "sweetalert2";

// import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import Ticket from "../../../components/Ticket/Ticket.js";
import { ServerURL } from "../../../url";

function HeroSection() {
  const [hover, setHover] = useState(false);
  const [showticketPopup, setShowticketPopup] = useState(false);
  const [ticketInfo, setTicketInfo] = useState({
    response: {
      ticketRes: {
        ticket_no: "",
      },
      eventRes: {
        organizer_id: "",
        venue_address: "",
        start_date: "",
        tickets_sold: "",
      },
    },
    user: "",
  });

  const user = useSelector((state) => state.userReducer.user);
  const event = useSelector((state) => state.userReducer.event);
  const history = useHistory();

  const handleBooking = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Book this event, Confirm!",
      text: "You won't be able to revert this!",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Book it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.post(`${ServerURL}/api/generate/genTicket`, {
          org_id: JSON.stringify(event.organizer_id),
          event_id: JSON.stringify(event._id),
          user_id: JSON.stringify(user._id),
          country: JSON.stringify(user.country),
        }).then((r) => {
          if (r.data === false) {
            alert("You have alrady booked this event");
          } else {
            setShowticketPopup(true);
            setTicketInfo({
              response: r.data,
              user: user.fname + " " + user.lname,
            });
          }
        });
      }
    });
  };

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      {showticketPopup ? (
        <Ticket
          setShowticketPopup={setShowticketPopup}
          ticketInfo={ticketInfo}
        />
      ) : (
        <HeroContainer id="home">
          <HeroBg>
            <img
              style={{ width: "100%" }}
              src={`${ServerURL}/${event.organizer_id}/${event.webURL}/${
                event.images !== null ? event.images[0].filename : ""
              }`}
            ></img>
          </HeroBg>
          <HeroContent>
            <HeroH1>{event.title}</HeroH1>
            <HeroP>{event.venue + ", " + event.venue_address}</HeroP>
            <HeroBtnWrapper>
              {user.user_type === "attendee" ? (
                <button
                  id="handleID"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  primary="true"
                  dark="true"
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  onClick={handleBooking}
                >
                  Book Your Event
                  {hover ? <ArrowForward /> : <ArrowRight />}
                </button>
              ) : user.user_type === "organizer" ? (
                <button
                  id="handleID"
                  onClick={() => alert("You're logged in as an Organizer")}
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                >
                  Book Your Event {hover ? <ArrowForward /> : <ArrowRight />}
                </button>
              ) : user.user_type === "super" ? (
                <button
                  id="handleID"
                  onClick={() => alert("You're logged in as an Super-Admin")}
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                >
                  Book Your Event {hover ? <ArrowForward /> : <ArrowRight />}
                </button>
              ) : (
                <button
                  id="handleID"
                  onClick={() => history.push("/signin")}
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                >
                  Book Your Event*
                  {hover ? <ArrowForward /> : <ArrowRight />}
                </button>
              )}

              <button
                id="handleID"
                to="signup"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                primary="true"
                dark="true"
                onMouseEnter={onHover}
                onMouseLeave={onHover}
              >
                Download the App Now!{" "}
                {hover ? <ArrowForward /> : <ArrowRight />}
              </button>
            </HeroBtnWrapper>
          </HeroContent>
        </HeroContainer>
      )}
    </>
  );
}

export default HeroSection;
