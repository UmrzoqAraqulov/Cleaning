import React from "react";
import style from "./header.module.scss";
import logo from "../../assets/images/logo.png";
import BtnComponents from "../btnComponents/BtnComponents";

const Header = () => {
  

  return (
    <header className={style.header}>
      <div className={`${style["header-menu"]} container`}>
        <div className={style.left}>
          <img src={logo} alt="" />
          <input type="checkbox" id="check" />
          <ul className={style.menu} id="menuBar">
            <li className="item">
              <a href="#home">Home</a>
            </li>
            <li className="item">
              <a href="#about">About</a>
            </li>
            <li className="item">
              <a href="#service">Services</a>
            </li>
            <li className="item">
              <a href="#article">Articles</a>
            </li>
            <li className="item">
              <a href="#contact">Contact</a>
            </li>
            <label htmlFor="check" className={`${style.close} close`}>
              <i class="fa-solid fa-x"></i>
            </label>
          </ul>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div className={style.right}>
            <a href="#card">Cart (0)</a>
            <BtnComponents text="Get a free quote" />
          </div>
          <label htmlFor="check" className={`${style.bar} open`}>
            <i class="fa-solid fa-bars"></i>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
