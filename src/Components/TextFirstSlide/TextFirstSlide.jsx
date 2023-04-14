import React from "react";

import style from "./TextFirstSlide.module.css";

const TextFirstSlide = () => {
  return (
    <div className={style.title}>
      <div className={style["header-text"]}>ПРИВЕТ,</div>
      <div className={style.info}>
        <div className={style["info-text"]}>
          <div>
            ЭТО <b>НЕ</b>
          </div>
          <div>КОММЕРЧЕСКОЕ ЗАДАНИЕ</div>
        </div>
      </div>
    </div>
  );
};

export default TextFirstSlide;
