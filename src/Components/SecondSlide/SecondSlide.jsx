import React, { useRef, useState } from "react";

import ImagesSecondSlide from "../ImagesSecondSlide/ImagesSecondSlide";
import { text } from "../../text/text";

import style from "./SecondSlide.module.css";

const SecondSlide = ({ currentPage }) => {
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
      <ImagesSecondSlide currentPage={currentPage} />
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
            <b>{text.textSecondSlide.name}</b>
            {text.textSecondSlide.title}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSlide;
