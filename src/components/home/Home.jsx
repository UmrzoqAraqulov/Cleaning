import React from "react";
import style from "./home.module.scss";
import BtnComponents from "../btnComponents/BtnComponents";
import CallComponents from "../callComponents/CallComponents";
import HomeImg from "../../assets/images/home.png";

export const Home = ({ text }) => {
  return (
    <div id="home" className={style.home}>
      <div className={style["home-left"]}>
        <h1>Quality cleaning for your home</h1>
        <p className={style.text}>
          Condimentum mauris sit cursus amet id non neque pharetra nulla ornare
          sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et
          nulla magna lacus penatibus.
        </p>
        <div className={style.connect}>
          <BtnComponents text="Get a free quote" />
          <CallComponents />
        </div>
      </div>
      <div className={style.right}>
        <img src={HomeImg} alt="" />
      </div>
    </div>
  );
};
