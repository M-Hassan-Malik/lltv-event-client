import Tables from "layouts/All/table.js";
import Ticket from "components/Ticket/Ticket.js";
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

const Services = () => {
  React.useEffect(() => {
    document.body.classList.toggle("events-page");
    return function cleanup() {
      document.body.classList.toggle("events-page");
    };
  });
  return (
    <>
      <div className="content">
        <Container>
          <h1>Services Page</h1>
        </Container>
      </div>
    </>
  );
};

export default Services;
