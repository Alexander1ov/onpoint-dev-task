import React from "react";

import FIRST from "../../images/thirdSlide/figure31.png";
import SECOND from "../../images/thirdSlide/figure32.png";
import THIRD from "../../images/thirdSlide/figure33.png";
import FOURTH from "../../images/thirdSlide/figure34.png";
import FIFTH from "../../images/thirdSlide/figure35.png";
import SIXTH from "../../images/thirdSlide/figure36.png";
import SEVENTH from "../../images/thirdSlide/figure37.png";
import EIGHTH from "../../images/thirdSlide/figure38.png";
import NINTH from "../../images/thirdSlide/figure39.png";

import style from "./ImagesThirdSlide.module.css";

const ImagesThirdSlide = () => {
  return (
    <>
      <img className={style["img-first"]} src={FIRST} alt="first" />
      <img className={style["img-second"]} src={SECOND} alt="second" />
      <img className={style["img-third"]} src={THIRD} alt="third" />
      <img className={style["img-fourth"]} src={FOURTH} alt="fourth" />
      <img className={style["img-fifth"]} src={FIFTH} alt="fifth" />
      <img className={style["img-sixth"]} src={SIXTH} alt="sixth" />
      <img className={style["img-seventh"]} src={SEVENTH} alt="seventh" />
      <img className={style["img-eighth"]} src={EIGHTH} alt="eighth" />
      <img className={style["img-ninth"]} src={NINTH} alt="ninth" />
    </>
  );
};

export default ImagesThirdSlide;
