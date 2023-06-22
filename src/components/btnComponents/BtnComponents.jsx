import React from 'react'
import style from './btnComponents.module.scss'

const BtnComponents = ({text}) => {
  return (
    <button className={style.btn}>{text}</button>
  )
}

export default BtnComponents