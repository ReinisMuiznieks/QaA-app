import React from "react";
import "./question.scss";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

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
      <h2 id="question-title">Ask anything!</h2>
      <form id="question-form" onSubmit={handleSubmit}>
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
        <Button variant="outlined" type="submit" id="submit-question-form">
          Ask
        </Button>
      </form>
    </>
  );
}

export default AddQuestion;
