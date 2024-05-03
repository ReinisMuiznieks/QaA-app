import React, { useState } from "react";

function ReplyForm() {
  const [formData, setFormData] = useState({
    questionId: 8,
    content: "",
    // userID: 12,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5267/api/reply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to create a reply");
      }

      console.log("Reply created successfully");
    } catch (error) {
      console.error("Error creating a reply:", error.message);
    }
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Content:
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Submit Reply</button>
    </form>
  );
}

export default ReplyForm;
