import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import EventInfo from "../components/EventInfo/EventInfo";
import InfoSec from "../components/InfoSec/InfoSec";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";
import Services from "../components/Services";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { ServerURL } from "../../url";

import Booking from "../components/Booking/booking.js";
import ContactForm from "../components/ContactForm/index.js";
import Carousel from "../../components/Carousel/Carousel.js";
import Cards from "../../components/Pricing/Cards";
import { Container } from "reactstrap";

function HomeWhiteLabel(props) {
  const eventId = props.eventId;
  const dispatch = useDispatch();

  const event = useSelector((state) => state.userReducer.event); // Event loaded From the web URL
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`${ServerURL}/api/events/getEventsByEventId/${eventId}`)
      .then((res) => {
        res.data === null && res.data.error
          ? alert("Loading Page Error, Can't Get Events From Server!")
          : dispatch({ type: "EVENT", payload: res.data });
      })
      .catch((e) => {
        alert(`Loading Page Error, Can't Get Events From Server Because: ${e}`);
        history.push("/");
      });
  }, []);
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} org_id={event.organizer_id} />
      <HeroSection />
      <InfoSec title={"Primary Description"} description={event.description} start_date={event.start_date} />
      <Carousel org_id={event.organizer_id} heading={""} />
      {/* <Cards hide={true} /> */}
      <Booking />
      <Services />
      <EventInfo moreinfo={event.moreinfo} />
      <ContactForm hide={true} />
      <Footer org_id={event.organizer_id} />
    </>
  );
}

export default HomeWhiteLabel;
