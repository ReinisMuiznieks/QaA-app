import React, { useState, useEffect } from "react";
import "./questionCard.scss";

import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import Button from "@mui/material/Button";
import ReplyCard from "../replyCard/replyCard";
import ReplyForm from "../replyForm/replyForm";

function QuestionCard({ userId, date, content }) {
  const [expanded, setExpanded] = useState(false);
  const [reply, setReply] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await fetch(
          `http://localhost:5267/api/user/${userId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch username");
        }
        const userData = await response.json();
        setUsername(userData.username);
      } catch (error) {
        console.error("Error fetching username:", error.message);
      }
    };

    fetchUsername();
  }, [userId]);

  const toggleReplies = () => {
    setExpanded(!expanded);
  };

  const toggleReply = () => {
    setReply(!reply);
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <div className="card">
        <div className="card-header">
          <div className="card-avatar">
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {username.charAt(0).toUpperCase()}
            </Avatar>
          </div>
          <div className="card-subheader">
            <div className="card-name">{username}</div>
            <div className="card-date">{date}</div>
          </div>
        </div>
        <div className="card-body">{content}</div>
        <div className="card-footer">
          <div className="replies" onClick={toggleReplies}>
            <div className="replies-icon">
              {expanded ? (
                <span className="material-symbols-outlined">expand_less</span>
              ) : (
                <span className="material-symbols-outlined">expand_more</span>
              )}
            </div>
            <div className="replies-text">2 replies</div>
          </div>
          <div className="reply" onClick={toggleReply}>
            <Button variant="outlined" id="reply">
              Reply
            </Button>
          </div>
        </div>
      </div>
      {reply ? <ReplyForm /> : <></>}
      {expanded ? <ReplyCard /> : <></>}
    </>
  );
}

export default QuestionCard;
