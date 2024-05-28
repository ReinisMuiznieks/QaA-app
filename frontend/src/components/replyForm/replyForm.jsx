import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import "./replyForm.scss";

function ReplyForm() {
  const [formData, setFormData] = useState({
    content: "",
  });
  const { content } = formData;

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [contentError, setContentError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!content) {
      setContentError(true);
      return;
    }
    const replyData = {
      content,
      // userID: 2,
      // questionId: 1,
    };

    try {
      const response = await fetch("http://localhost:5267/api/reply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(replyData),
      });
      console.log(replyData);

      if (!response.ok) {
        throw new Error("Failed to post reply");
      }

      console.log("Reply posted successfully");

      // Optionally, you can reset the form fields after successful submission
      setFormData({ ...formData, content: "" });
    } catch (error) {
      console.error("Error posting reply:", error.message);
    }
  };

  return (
    <>
      <div className="card card-sm">
        <div className="card-body reply-body">
          <div className="card-avatar">
            <Avatar sx={{ bgcolor: red[800] }} aria-label="recipe">
              J
            </Avatar>
          </div>
          <div className="reply-input">
            <form id="question-form" onSubmit={handleSubmit}>
              <div className="reply-field">
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
                {contentError && (
                  <FormHelperText id="content-error-text">
                    Content is required.
                  </FormHelperText>
                )}
              </div>
              <div className="reply-buttons">
                <Button
                  variant="outlined"
                  type="button"
                  className="m-2"
                  id="cancel-reply"
                  onClick={() => setFormData({ ...formData, content: "" })}
                >
                  Clear
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
