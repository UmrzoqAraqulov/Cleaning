import React from 'react'
import CardComponents from '../cardComponents/CardComponents'
import style from './aboutUs.module.scss'
import BtnComponents from '../btnComponents/BtnComponents';

const data = [
  {
    img: "./kalendar.png",
    title: "1. Schedule online",
    text: "Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.",
  },
  {
    img: "./pkastCard.png",
    title: "2. Pay online easily",
    text: "Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.",
  },
  {
    img: "./plesos.png",
    title: "3. Get your house",
    text: "Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus.",
  },
];

const AboutUs = () => {
  return (
    <section id="about" className={`container ${style.about}`}>
      <h2>About Us</h2>
      <img src="" alt="" />
      <p className={style.title}>
        Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque
        nisi felis non ultrices massa id egestas quam velit pretium nu.
      </p>
      <div className={style.cards}>
        <CardComponents
          text={data[0].text}
          title={data[0].title}
          img={data[0].img}
        />
        <CardComponents
          text={data[1].text}
          title={data[1].title}
          img={data[1].img}
        />
        <CardComponents
          text={data[2].text}
          title={data[2].title}
          img={data[2].img}
        />
      </div>
      <div className={style.btns}>
        <BtnComponents text="Get a free quote" />
        <BtnComponents text="Explore services" />
      </div>
    </section>
  );
}

export default AboutUs