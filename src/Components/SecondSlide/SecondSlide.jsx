import React, { useRef, useState } from "react";

import { text } from "../../text/text";
import IMAGE from "../../images/secondSlide/imgSecondSlide.png";

import style from "./SecondSlide.module.css";

const SecondSlide = () => {
  const [valueInput, setValueInput] = useState(0);
  const scroll = useRef();

  const handleScroll = (e) => {
    let value = e.target.value;
    const hiddenPart =
      scroll.current.scrollHeight - scroll.current.clientHeight;

    let scrolling = (hiddenPart * value) / 100 - scroll.current.scrollTop;

    scroll.current.scrollBy({
      top: scrolling,
    });
    setValueInput(value);
  };
  return (
    <section className={style.slide}>
      <img src={IMAGE} alt="" />
      <div className={style["header-text"]}>ТЕКСТ СООБЩЕНИЯ</div>
      <div className={style.info}>
        <input
          className={style.input}
          type="range"
          value={valueInput}
          onInput={handleScroll}
        />
        <div className={style.container} ref={scroll}>
          <div className={style.text}>
            <b>Lorem ipsum dolor sit amet,</b>
            {text.textSecondSlide}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSlide;
