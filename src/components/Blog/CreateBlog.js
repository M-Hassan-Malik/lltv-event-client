import "./blog.css";
import React, { useState,useEffect } from "react";
import { Container, Form, FormGroup, Button, Input } from "reactstrap";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import axios from "axios";
import { useSelector } from "react-redux";
import { ServerURL } from "../../url.js";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
  const history = useHistory();
  const user = useSelector((state) => state.userReducer.user);
  const [editor, setEditor] = useState(() => EditorState.createEmpty());
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      org_id: user._id,
      title: title,
      subtitle: subtitle,
      details: draftToHtml(convertToRaw(editor.getCurrentContent())),
    };
    axios
      .post(`${ServerURL}/api/generate/generateBlog`, {
        data: JSON.stringify(data),
      })
      .then((res) => {
        if (res.data.result) {
          history.push("/admin/dashboard");
          alert(res.data.result);
        } else if (res.data.error) {
          alert(res.data.error);
        } else console.log("error", res.data.error);
      });
  };

  return (
    <Container lg="auto" className="main-blog">
      <h3>Create BLog</h3>
      <Form>
      <FormGroup>
          <Input
            lg="auto"
            className="title"
            placeholder="Title here..."
            value={title}
            onChange={(e) => {
              e.preventDefault();
              setTitle(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Input
            lg="auto"
            className="subtitle"
            placeholder="Sub-title here..."
            value={subtitle}
            onChange={(e) => {
              e.preventDefault();
              setSubtitle(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Editor
        toolbar={{
          options: [
            "inline",
            "blockType",
            "fontSize",
            "fontFamily",
            "list",
            "textAlign",
            "link",
            "embedded",
            "emoji",
            "image",
            "remove",
            "history",
          ],
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: false },
        }}
            editorState={editor}
            placeholder="Type here..."
            onEditorStateChange={setEditor}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
          />
        </FormGroup>
      </Form>
      <Button onClick={handleSubmit}>Post Blog</Button>
    </Container>
  );
};

export default CreateBlog;
