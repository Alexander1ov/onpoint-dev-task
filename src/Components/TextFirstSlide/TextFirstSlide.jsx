import React from "react";

import style from "./TextFirstSlide.module.css";

const TextFirstSlide = () => {
  return (
    <div className={style.title}>
      <div className={style["header-text"]}>ПРИВЕТ,</div>
      <div className={style.info}>
        ЭТО <b>НЕ</b>
        <br />
        КОММЕРЧЕСКОЕ ЗАДАНИЕ
      </div>
    </div>
  );
};

export default TextFirstSlide;
