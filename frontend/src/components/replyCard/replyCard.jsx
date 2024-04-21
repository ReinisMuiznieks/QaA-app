import React from "react";
import "../questionCard/questionCard.scss";

import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";

function ReplyCard() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <div className="card card-sm">
        <div className="card-header">
          <div className="card-avatar">
            <Avatar sx={{ bgcolor: red[800] }} aria-label="recipe">
              J
            </Avatar>
          </div>
          <div className="card-subheader">
            <div className="card-name">Janis Liepins</div>
            <div className="card-date">20.03.2024</div>
          </div>
        </div>
        <div className="card-body">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
          dignissimos vel mollitia labore quos.
        </div>
      </div>
    </>
  );
}

export default ReplyCard;
