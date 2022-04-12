import React from "react";

// reactstrap components
import {
  Container,
} from "reactstrap";

const Events = () => {
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
          <h1>hahsha</h1>
        {/* <Tables/>
      <Ticket/> */}
        </Container>
      </div>
    </>
  );
};

export default Events;