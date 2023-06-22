import React from "react";
import style from './cardComponents.module.scss'

function CardComponents(props) {
  return (
    <div className={style.card}>
      <img src={props.img} alt="" />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default CardComponents;
