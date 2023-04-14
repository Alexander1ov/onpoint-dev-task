import React from "react";

import TextFirstSlide from "../TextFirstSlide/TextFirstSlide";
import Button from "../Parts/Button/Button";
import ImagesFirstSlide from "../ImagesFirstSlide/ImagesFirstSlide";

import style from "./FirstSlide.module.css";

const FirstSlide = ({ setCurrentPage }) => {
  return (
    <section className={style.slide}>
      <TextFirstSlide />
      <Button
        className={style.button}
        text="Что дальше?"
        onclick={() => {
          setCurrentPage(1);
        }}
        arrow={true}
      />
      <ImagesFirstSlide />
    </section>
  );
};

export default FirstSlide;
