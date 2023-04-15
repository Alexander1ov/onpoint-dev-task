import React from "react";

import Button from "../Parts/Button/Button";
import CALENDAR from "../../images/thirdSlide/icon1.png";
import NUTRITION from "../../images/thirdSlide/icon2.png";
import { text } from "../../text/text";

import style from "./ThirdSlideHome.module.css";

const ThirdSlideHome = ({ handleDetails }) => {
  return (
    <div className={style.wrapper}>
      <h2>КЛЮЧЕВОЕ СООБЩЕНИЕ</h2>
      <div className={style.table}>
        <div className={`${style.nutrition} ${style.container}`}>
          <img src={NUTRITION} alt="nutrition" />
          {text.textThirdSlideHome[0]}
        </div>
        <div className={style["calendar-wrapper"]}>
          <div className={`${style.calendar} ${style.container}`}>
            <img src={CALENDAR} alt="calendar" />
            {text.textThirdSlideHome[1]}
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
