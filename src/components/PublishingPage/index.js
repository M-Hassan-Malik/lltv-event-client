import { useState} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Col,Button } from "reactstrap";
import Site from "./site.js";
import Social from "./social.js";

import React from "react";

const PublishingPage = () => {
  const [page, setPage] = useState(1);
  const handlePageChange = (e) => {
    e.preventDefault();
    const { name } = e.target;
    switch (name) {
      case "site":
        setPage(1);
        break;
      case "social":
        setPage(2);
        break;

      default:
        break;
    }
  };
  return (
    <>
      <CssBaseline />
      <Container style={{ padding: "5rem" }} fixed>
        <Col
          style={{
            border: "1px solid white",
            backgroundColor: "transparent",
            padding: "5%",
          }}
        >
          <Button name="site" onClick={handlePageChange}>
            Site
          </Button>
          <Button name="social" onClick={handlePageChange}>
            Social
          </Button>

          {page === 1 && <Site />}
          {page === 2 && <Social />}
        </Col>
      </Container>
    </>
  );
};

export default PublishingPage;
