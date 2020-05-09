import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar imgurl={props.link} />
      </div>
      <Detail tel={props.tel} mail={props.mail} />
    </div>
  );
}

export default Card;
