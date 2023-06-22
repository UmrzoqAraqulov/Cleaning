import React from 'react'
import style from './cardArticle.module.scss'

const CardArticle = (props) => {
  return (
    <div className={style.card}>
        <img src={props.img} alt="" />
        <div className={style.info}>
          <h2>{props.title}</h2>
          <p>{props.text}</p>
          <h4>{props.date}</h4>
          <div className={style.square}></div>
        </div>
    </div>
  )
}

export default CardArticle