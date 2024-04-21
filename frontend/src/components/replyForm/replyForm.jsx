import React from "react";
import "../questionCard/questionCard.scss";

import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import "./replyForm.scss";

function ReplyForm() {
  const [formData, setFormData] = useState({
    content: "",
  });
  const { content } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!content) {
      console.log("Content is required.");
    } else {
      const questionData = {
        content,
      };
      console.log(questionData);
    }
  };
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <div className="card card-sm">
        <div className="card-body reply-body">
          <div className="card-avatar">
            <Avatar sx={{ bgcolor: red[800] }} aria-label="recipe">
              J
            </Avatar>
          </div>
          <div className="reply-input">
            <form id="question-form" onSubmit={handleSubmit}>
              <TextField
                id="outlined-multiline-flexible"
                label="Reply"
                multiline
                maxRows={4}
                variant="outlined"
                type="text"
                autoComplete="off"
                value={content}
                onChange={onChange}
                name="content"
                className="question-textfield"
              />
              <div className="reply-buttons">
                <Button
                  variant="outlined"
                  type="submit"
                  className="m-2"
                  id="cancel-reply"
                >
                  Cancel
                </Button>
                <Button variant="outlined" type="submit" id="send-reply">
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReplyForm;
