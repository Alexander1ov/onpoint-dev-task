import React from "react";

import Button from "../Parts/Button/Button";
import CALENDAR from "../../images/thirdSlide/icon1.png";
import NUTRITION from "../../images/thirdSlide/icon2.png";

import style from "./ThirdSlideHome.module.css";

const ThirdSlideHome = ({ handleDetails }) => {
  return (
    <div className={style.wrapper}>
      <h2>КЛЮЧЕВОЕ СООБЩЕНИЕ</h2>
      <div className={style.table}>
        <div className={`${style.nutrition} ${style.container}`}>
          <img src={NUTRITION} alt="nutrition" />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
          molestias deserunt ab laborum dolore facilis sunt labore sed aliquid
          perspiciatis ipsam delectus illum quasi nemo.
        </div>
        <div className={style["calendar-wrapper"]}>
          <div className={`${style.calendar} ${style.container}`}>
            <img src={CALENDAR} alt="calendar" />
            Lorem ipsum dolor sit amet consecte
          </div>
          <Button
            className={style.button}
            text="Подробнее"
            arrow={false}
            onclick={handleDetails}
          />
        </div>
      </div>
    </div>
  );
};

export default ThirdSlideHome;
