import React from "react";
import style from "./contact.module.scss";
import CallComponents from "../callComponents/CallComponents";
import BtnComponents from "../btnComponents/BtnComponents";

const Contact = () => {
  return (
    <section id="contact" className={style.contact}>
      <div className="container">
        <div className={style.contact_wrapper}>
          <div className={style.contact_info}>
            <h1>Request a free cleaning quote today</h1>
            <p>
              In dignissim euismod pretium amet enim a eu nam ut urna accumsan
              pellentesque lacus duis pharetra eutortor.
            </p>
            <CallComponents />
            <div className={style.line}></div>
            <h3>Not convinced yet?</h3>
            <p>
              Massa bibendum consectetur maurisid gravida purus, dolor dui amet
              morbi non nunc urna purus diam.
            </p>
            <BtnComponents text="Browse our packages" />
          </div>
          <div className="wrapper_form">
            <form className={style.form}>
              <div className={style.form_group}>
                <div className={style.wrap}>
                  <label htmlFor="">Full Name</label>
                  <input type="text" placeholder="Full Name" />
                </div>
                <div className={style.wrap}>
                  <label htmlFor="">Last Name</label>
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>
              <div className={style.form_group}>
                <div className={style.wrap}>
                  <label htmlFor="">Address</label>
                  <input type="text" placeholder="Address" />
                </div>
                <div className={style.wrap}>
                  <label htmlFor="">Email</label>
                  <input type="text" placeholder="Email" />
                </div>
              </div>
              <div className={style.form_group}>
                <div className={style.wrap}>
                  <label htmlFor="">Requested service</label>
                  <input type="text" />
                </div>
                <div className={style.wrap}>
                  <label htmlFor="">Day of service</label>
                  <input type="text" />
                </div>
              </div>
              <div className={style.text_area}>
                <label htmlFor="">Add a note</label>
                <textarea
                  name="text"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Text here ...."
                ></textarea>
              </div>
              <BtnComponents text="Submit message"/>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
