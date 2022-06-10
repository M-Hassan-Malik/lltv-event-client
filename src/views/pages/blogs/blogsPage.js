import React from "react";
import { Col } from "reactstrap";
import bg3 from "../../../assets/img/bg3.jpg";
import bg4 from "../../../assets/img/bg4.jpg";
import "./blog.css";
import { ServerURL } from "../../../url.js";
import { useEffect, useState } from "react";
import axios from "axios";
import img from "../../../assets/img/bg1.jpg";
import { useHistory } from "react-router";
import Sidebar from "src_home/components/Sidebar";
import Navbar from "src_home/components/Navbar";
import Footer from "src_home/components/Footer";
import ContactForm from "src_event/components/ContactForm";

const BlogPage = (props) => {
  const { hide } = props;
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const [blog, setBlog] = useState([
    {
      title: "",
      subtitle: "",
      details: "",
    },
  ]);
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  useEffect(() => {
    axios.get(`${ServerURL}/api/blogs/all/getBlogs`).then((res) => {
      if (res.data.result) {
        setBlog(res.data.result);
      } else if (res.data.error) {
        alert(res.data.error);
      } else console.log("error at blogpage @else");
    });
  }, []);

  return (
    <div className="parent">
      {hide === false && <Sidebar isOpen={isOpen} toggle={toggle} />}
      {hide === false && <Navbar toggle={toggle} />}

      <div className="img-div" hidden={hide}>
        <img id="faq-image" src={img} />
        <span id="img-text">
          <strong id="strong">Blog</strong>
          <br />
          <br />
          <a
            style={{
              color: "#FEFBF3",
              borderBottom: "1px solid red",
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.preventDefault();
              history.push("/");
            }}
          >
            Home
          </a>
          &nbsp;&nbsp;&nbsp;{">"}
          <span>&nbsp;&nbsp; Blog</span>
        </span>
      </div>
      <h1 id="heading-blog">Blogs</h1>
      <div className="table">
        {(() => {
          var end = blog.length;
          var start = 0;
          var htmlArray = [];
          while (start < end) {
            {
              blog[start] !== undefined &&
                htmlArray.push(
                  <div className="row">
                    <Col className="box">
                      <img id="image" src={bg3} />
                      <h3 style={{ color: "black" }}>
                        {blog[start] !== undefined ? blog[start].title : ""}
                      </h3>
                      <p id="paragraph">
                        {blog[start] !== undefined ? blog[start].subtitle : ""}
                      </p>
                      {/* <p
                        id="paragraph"
                        dangerouslySetInnerHTML={{
                          __html:
                            blog[start] !== undefined
                              ? blog[start].subtitle
                              : "",
                        }}
                      /> */}
                    </Col>
                    <p hidden>{start++}</p>
                    {blog[start] !== undefined && (
                      <Col className="box">
                        <img id="image" src={bg4} />
                        <h3 style={{ color: "black" }}>
                          {blog[start] !== undefined ? blog[start].title : ""}
                        </h3>
                        <p id="paragraph">
                          {blog[start] !== undefined
                            ? blog[start].subtitle
                            : ""}
                        </p>
                      </Col>
                    )}
                    <p hidden>{start++}</p>
                    {blog[start] !== undefined && (
                      <Col className="box">
                        <img id="image" src={bg3} />
                        <h3 style={{ color: "black" }}>
                          {blog[start] !== undefined ? blog[start].title : ""}
                        </h3>
                        <p id="paragraph">
                          {blog[start] !== undefined
                            ? blog[start].subtitle
                            : ""}
                        </p>
                      </Col>
                    )}

                    <p hidden>{start++}</p>
                  </div>
                );
            }
          }
          return htmlArray;
        })()}
      </div>
      <div style={{ textAlign: "center" }}></div>
      {hide === false && <ContactForm hide={true} />}
      {hide === false && <Footer />}
    </div>
  );
};

export default BlogPage;
