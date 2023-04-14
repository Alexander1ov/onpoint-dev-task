import React from "react";

import ARROW from "../../../images/button/arrowRight.png";

import style from "./Button.module.css";

const Button = ({ text, onclick, className, arrow }) => {
  return (
    <div className={className}>
      <button className={style.button} onClick={onclick}>
        <div className={style.circle}>
          {arrow ? <img src={ARROW} alt="arrow" /> : <p>+</p>}
        </div>
        <div className={style.text}>{text}</div>
      </button>
    </div>
  );
};

export default Button;
