import React, { useState } from "react";
import "./questionCard.scss";

import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import Button from "@mui/material/Button";
import ReplyCard from "../replyCard/replyCard";

function QuestionCard() {
  const [expanded, setExpanded] = useState(false);

  const toggleReplies = () => {
    setExpanded(!expanded);
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
              R
            </Avatar>
          </div>
          <div className="card-subheader">
            <div className="card-name">Reinis Muiznieks</div>
            <div className="card-date">20.03.2024</div>
          </div>
        </div>
        <div className="card-body">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
          dignissimos vel mollitia labore quos. Aspernatur eligendi
          exercitationem voluptas dolores consequuntur. Obcaecati voluptatibus
          doloribus aliquam veritatis ipsum aut ipsa accusamus perferendis.
        </div>
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
          <div className="reply">
            <Button variant="outlined" id="reply">
              Reply
            </Button>
          </div>
        </div>
      </div>
      {expanded ? <ReplyCard /> : <></>}
    </>
  );
}

export default QuestionCard;
