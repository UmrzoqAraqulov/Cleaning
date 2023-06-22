import React from 'react'
import callIcon from '../../assets/images/call.png'
import style from './callComponents.module.scss'

const CallComponents = (callColor) => {
  return (
    <div className={style.call}>
      <img src={callIcon} alt="" />
      <div className="text">
        <p>Call us now</p>
        <h3>(414) 567 - 2109</h3>
      </div>
    </div>
  );
}

export default CallComponents