import React from "react";

import FIRST from "../../images/firstSlide/figure1.png";
import SECOND from "../../images/firstSlide/figure2.png";
import THIRD from "../../images/firstSlide/figure3.png";
import FOURTH from "../../images/firstSlide/figure4.png";
import FIFTH from "../../images/firstSlide/figure5.png";
import SIXTH from "../../images/firstSlide/figure6.png";
import SEVENTH from "../../images/firstSlide/figure7.png";
import EIGHTH from "../../images/firstSlide/figure8.png";
import NINTH from "../../images/firstSlide/figure9.png";

import style from "./ImagesFirstSlide.module.css";

const ImagesFirstSlide = () => {
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

export default ImagesFirstSlide;
