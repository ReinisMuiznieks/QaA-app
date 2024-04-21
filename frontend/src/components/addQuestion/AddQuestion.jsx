import React, { useState } from "react";
import "./question.scss";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";

function AddQuestion() {
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

  const [contentError, setContentError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!content) {
      setContentError(true);
    } else {
      setContentError(false);
      const questionData = {
        content,
      };
      console.log(questionData);
    }
  };

  return (
    <>
      <h2 id="question-title">Ask anything!</h2>
      <form id="question-form" onSubmit={handleSubmit}>
        <div className="question-input">
          <TextField
            id="outlined-multiline-flexible"
            label="Question"
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
        <Button variant="outlined" type="submit" id="submit-question-form">
          Ask
        </Button>
      </form>
    </>
  );
}

export default AddQuestion;
