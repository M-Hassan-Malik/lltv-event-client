import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";
import "./Ticket.css";
import axios from "axios";
import { ServerURL } from "../../url";
const Ticket = (props) => {
  const event = useSelector((state) => state.userReducer.event);
  const { setShowticketPopup, ticketInfo } = props;

  var org_id;
  const [ticket, setTicket] = useState({
    ticketno: "",
    name: "",
    address: "",
    date: "",
    event: "",
    email: "",
    contact: "",
    country: "",
    watchtime: "",
  });

  useEffect(() => {
    axios.get(`${ServerURL}/api/logging/${event.organizer_id}`).then((res) => {
      setTicket({
        ticketno: ticketInfo.response.ticketRes.ticket_no,
        name: ticketInfo.user,
        address: ticketInfo.response.eventRes.venue_address,
        date: ticketInfo.response.eventRes.start_date,
        event: ticketInfo.response.eventRes.tickets_sold,
        email: res.data.email,
        contact: res.data.contact,
      });
    });
  }, [ticketInfo]);

  const containerRef = useRef();

  const getTicketNo = (num) => {
    return String(num).padStart(6, "0"); // '000015'
  };
  const handlePrint = useReactToPrint({
    content: () => containerRef.current,
  });

  return (
    <div className="ticketBackground">
      <div
        className="ticketContainer"
        style={{ display: "inline", float: "left" }}
      >
        <div>
          <div ref={containerRef} className="ticket_wrapper">
            <div className="ticket_no">
              <p>
                Ticket # <span>&#160;</span>
              </p>
              <p>{ticket.ticketno}</p>
            </div>
            <div className="details_wrapper">
              <div className="details">
                <p>Name</p>
                <h1>{ticket.name}</h1>
              </div>
              <div className="details_two">
                <p>Address</p>
                <h2 className="address">{ticket.address}</h2>
                <p>Date</p>
                <h2>{ticket.date.split("T")[0]}</h2>
                <p>Event</p>
                <h2>{ticket.event}</h2>
                <p>Email</p>
                <h2>{ticket.email}</h2>
                <p>Contact</p>
                <h2>{ticket.contact}</h2>
              </div>
            </div>
          </div>
        </div>
        {/* OBaid */}
        <div className="buttons">
          <div>
            <button
              title="if you close this, you wont't be able to see ticket a"
              className="cancelButton"
              onClick={() => setShowticketPopup(false)}
            >
              Close
            </button>
          </div>
          <div>
            <button
              style={{ marginTop: "10px", padding: "7px" }}
              onClick={handlePrint}
            >
              Print Ticket
            </button>
            <button
              style={{ marginTop: "10px", padding: "7px" }}
              onClick={() => exportComponentAsPNG(containerRef)}
            >
              Download Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ticket;
