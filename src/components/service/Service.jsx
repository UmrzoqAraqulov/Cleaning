import React from "react";
import BtnComponents from "../btnComponents/BtnComponents";
import CardComponents from "../cardComponents/CardComponents";
import style from './service.module.scss';
const data = [
  {
    img: "./serviceImg1.png",
    title: "House cleaning",
    text: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat.",
  },
  {
    img: "./serviceImg2.png",
    title: "Office cleaning",
    text: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat.",
  },
  {
    img: "./serviceImg3.png",
    title: "Industrial cleaning",
    text: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat.",
  },
];

const Service = () => {
  return (
    <div className="container">
      <div id="service" className={style.title}>
        <h2>Our Services</h2>
        <BtnComponents text="Explore services" />
      </div>
      <div className={style.cards}>
        <CardComponents
          img={data[0].img}
          title={data[0].title}
          text={data[0].text}
        />
        <CardComponents
          img={data[1].img}
          title={data[1].title}
          text={data[1].text}
        />
        <CardComponents
          img={data[2].img}
          title={data[2].title}
          text={data[2].text}
        />
      </div>
    </div>
  );
};

export default Service;
