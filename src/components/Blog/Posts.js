import "./posts.css";
import React, { useState, useEffect } from "react";
import { Container, Table, Button } from "reactstrap";
import axios from "axios";
import { ServerURL } from "../../url";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
const Posts = () => {

  const history = useHistory();
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  const [blogs, setBlogs] = useState([
    {
      title: "",
      details: "",
      updated_at: "",
    },
  ]);
  const user = useSelector((state) => state.userReducer.user);
  useEffect(() => {
    (user._id !== null || user._id !== undefined) &&
      axios
        .get(`${ServerURL}/api/blogs/getBlogByOrg_id/${user._id}`)
        .then((res) => {
          if (res.data.result) {
            console.log(res.data.result);
            setBlogs(res.data.result);
          } else if (res.data.error) {
            alert(res.data.error);
          } else console.log(res.data);
        });
  }, []);

  const handleActions = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    switch (name) {
      case "view":
        history.push('/blog')
        break;

      case "delete":
        console.log("delete");
        axios
          .delete(`${ServerURL}/api/blogs/deleteBlogByID/${value}`)
          .then((res) => {
            if (res.data.result) {
              alert(res.data.result);
            } else if (res.data.error) {
              alert(res.data.error);
            } else console.log(res.data);
          });
        break;
    }
  };

  return (
    <Container lg="md" className="main-blog">
      <Table className="table">
        <thead>
          <tr id="thead-row">
            <th>#</th>
            <th>Title</th>
            <th>Publish</th>
            <th>Updated At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs !== null &&
            blogs.map((data, i) => (
              <tr key={i} id="table-row">
                <td>{++i}</td>
                <td>{data.title}</td>
                <td>Published</td>
                <td>{data.updated_at.split("T")[0]}</td>
                <td>
                  <Container lg="auto" sx="auto" id="container">
                    <Button
                      size="sm"
                      name="view"
                      value={data._id}
                      onClick={handleActions}
                    >
                      View
                    </Button>
                    <Button
                      size="sm"
                      name="delete"
                      value={data._id}
                      onClick={handleActions}
                    >
                      Delete
                    </Button>
                  </Container>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Posts;
