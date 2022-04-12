import React, { useState, useEffect } from "react";
import { UncontrolledCarousel, Container } from "reactstrap";
import axios from "axios";
import { ServerURL } from "../../url.js";
import "./car.css";

const Carousel = (props) => {
  const { org_id } = props;
  const { heading } = props;
  const [items, setItems] = useState([
    {
      src: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
      altText: "Slides Loading...",
      caption: "Slides Loading...",
      header: "Slides Loading...",
      key: "1",
    },
  ]);
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  useEffect(() => {
    var tempItems = [];
    //org_id will be random when CAROUSEL COMPONENT is called from Landing-page, so then to get 10 random event
    if (org_id === "random") {
      axios.get(`${ServerURL}/api/events/getRandomEvents`).then((res) => {
        if (res.data.result) {
          res.data.result.map((e, i) => {
            ++i;
            tempItems.push({
              src: `${ServerURL}/${e.organizer_id}/${e.webURL}/${
                e.images !== null ? e.images[0].filename : ""
              }`,
              altText: `${i} ${e.venue}`,
              caption: `${i} ${e.category}`,
              header: `${i} ${e.title}`,
              key: `${i}`,
            });
          });
          setItems(tempItems);
        }
      });
    } else {
      axios
        .get(`${ServerURL}/api/events/getEventsByOrganizerId/${org_id}`)
        .then((res) => {
          if (res.data.result) {
            res.data.result.map((e, i) => {
              ++i;
              tempItems.push({
                src: `${ServerURL}/${e.organizer_id}/${e.webURL}/${
                  e.images !== null ? e.images[0].filename : ""
                }`,
                altText: `${i} ${e.venue}`,
                caption: `${i} ${e.category}`,
                header: `${i} ${e.title}`,
                key: `${i}`,
              });
            });
            setItems(tempItems);
          }
        });
    }
  }, [org_id]);

  return (
    
    <div className='carousel-main' style={{ margin: "100px" }}>
       
      <h1 id="archives">{heading}</h1>
      <UncontrolledCarousel items={items} />
    </div>
  );
};
export default Carousel;
