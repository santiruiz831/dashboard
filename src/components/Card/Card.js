import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="character-card">
      <img src={`${props.cover}`} alt="" />
      <h4> {props.name} </h4>
      <p>{props.description}</p>
      <a href="#">Ver más</a>
    </div>
  );
}

export default Card;
