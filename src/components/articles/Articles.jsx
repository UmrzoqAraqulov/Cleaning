import React from "react";
import BtnComponents from "../btnComponents/BtnComponents";
import CardArticle from "../cardArticle/CardArticle";
import style from './articles.module.scss'

const data = [
  {
    img: "/articleImg1.png",
    title: "8 best vacuum cleaners to clean any mess for your home in 2022",
    text: "Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.",
    date: "Jan 28, 2022",
  },
  {
    img: "/articleImg2.png",
    title: "How to properly disinfect your phone and other electronics",
    text: "Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.",
    date: "JFeb 1, 2022",
  },
];
const Articles = () => {
  return (
    <div id="article" className="container">
      <div className={style.title}>
        <h2>Articles & resources</h2>
        <BtnComponents text="Browse articles" />
      </div>
      <div className={style.cards}>
          <CardArticle 
          img={data[0].img}
          title={data[0].title}
          text={data[0].text}
          date={data[0].date}
          />
          <CardArticle 
          img={data[1].img}
          title={data[1].title}
          text={data[1].text}
          date={data[1].date}
          />
      </div>
    </div>
  );
};

export default Articles;
