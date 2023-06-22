import React from "react";
import BtnComponents from "../btnComponents/BtnComponents";
import style from './footer.module.scss';
import image from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className={`${style.footer} container`}>
      <div className={style.first}>
        <h2>Quality cleaning for your home</h2>
        <p>
          Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.
        </p>
        <div className="icons"></div>
      </div>
      <div className={style.second}>
        <h3>Contact us</h3>
        <p>1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
        <p>(414) 567 - 2109</p>
        <p>contact@cleaning.com</p>
      </div>
      <div className={style.third}>
        <h3>Hours</h3>
        <h4>Monday to Friday</h4>
        <p>6:00 AM - 9:00 PM</p>
        <h4>Saturday & Sunday</h4>
        <p>8:00 AM - 8:00 PM</p>
      </div>
      <div className={style.fourth}>
        <h3>Get a free estimate</h3>
        <h4>(414) 567 - 2109</h4>
        <p>
          Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod.
        </p>
        <BtnComponents text="Request a free quote" />
      </div>
      <div className={style["footer-bottom"]}>
        <img src={image} alt="" />
        <p>
          Copyright © Cleaning X | Designed by <span>BRIX Templates</span>-
          Powered by <span>- Powered by</span>
          <span>Licenses</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
