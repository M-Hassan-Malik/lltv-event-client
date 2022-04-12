import "./booking.css";
import React, { useState } from "react";
import { Container, Button } from "reactstrap";
import Axios from "axios";
import Swal from "sweetalert2";
import { ServerURL } from "../../../url";
import { useSelector } from "react-redux";
import Ticket from "../../../components/Ticket/Ticket";

const Booking = () => {
  const handleBooking = (e) => {
    e.preventDefault();
    const btn = document.getElementById("handleID");
    btn.click();
  };

  return (
    <div className="main-book">
      <h1>Get your ticket now</h1>
      <Container>
        <button id='btn' onClick={handleBooking}>
          Get Ticket
        </button>
      </Container>
    </div>
  );
};

export default Booking;
