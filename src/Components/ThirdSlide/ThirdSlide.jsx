import React, { useState } from "react";

import ImagesThirdSlide from "../ImagesThirdSlide/ImagesThirdSlide";
import ThirdSlideHome from "../ThirdSlideHome/ThirdSlideHome";
import ThirdSlideDetails from "../ThirdSlideDetails/ThirdSlideDetails";

import style from "./ThirdSlide.module.css";

const ThirdSlide = () => {
  const [details, setDetails] = useState(false);
  const handleDetails = () => {
    setDetails(!details);
  };
  return (
    <section className={style.slide}>
      <ImagesThirdSlide />
      <h2 className={style.brand}>
        BREND<b>XY</b>
      </h2>
      {details ? (
        <ThirdSlideDetails handleDetails={handleDetails} />
      ) : (
        <ThirdSlideHome handleDetails={handleDetails} />
      )}
    </section>
  );
};

export default ThirdSlide;
