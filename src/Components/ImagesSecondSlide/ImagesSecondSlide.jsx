import React from "react";

import FIRST from "../../images/secondSlide/figure21.png";
import SECOND from "../../images/secondSlide/figure22.png";
import THIRD from "../../images/secondSlide/figure23.png";
import FOURTH from "../../images/secondSlide/figure24.png";
import FIFTH from "../../images/secondSlide/figure25.png";

import style from "./ImagesSecondSlide.module.css";

const ImagesSecondSlide = ({ currentPage }) => {
  return (
    <>
          <img className={`${style["img-first"]} ${currentPage === 1 && style['first-anim']}`} src={FIRST} alt="first" />
          <img className={`${style["img-second"]} ${currentPage === 1 && style['second-anim']}`} src={SECOND} alt="second" />
          <img className={`${style["img-third"]} ${currentPage === 1 && style['third-anim']}`} src={THIRD} alt="third" />
          <img className={`${style["img-fourth"]} ${currentPage === 1 && style['fourth-anim']}`} src={FOURTH} alt="fourth" />
          <img className={`${style["img-fifth"]} ${currentPage === 1 && style['fifth-anim']}`} src={FIFTH} alt="fifth" />
    </>
  );
};

export default ImagesSecondSlide;
