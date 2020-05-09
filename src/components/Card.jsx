import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img class="circle-img" src={props.link} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p classname="info">{props.tel}</p>
        <p className="info">{props.mail}</p>
      </div>
    </div>
  );
}

export default Card;
