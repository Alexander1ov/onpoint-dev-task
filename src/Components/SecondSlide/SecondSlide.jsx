import React, { useRef, useState } from "react";

import ImagesSecondSlide from "../ImagesSecondSlide/ImagesSecondSlide";
import { text } from "../../text/text";

import style from "./SecondSlide.module.css";

const SecondSlide = ({ currentPage }) => {
  const scroll = useRef();
  const [scrollValue, setScrollValue] = useState({
    valueInput: 0,
    clientY: 0,
    scrollY: 0,
  });

  const handleScroll = (e) => {
    let value = e.target.value;
    const hiddenPart = scroll.current.scrollHeight - scroll.current.clientHeight;
    let scrolling = (hiddenPart * value) / 100 - scroll.current.scrollTop;

    scroll.current.scrollBy({
      top: scrolling,
    });

    setScrollValue({
      ...scrollValue,
      valueInput: value,
      scrollY: scroll.current.scrollTop,
    });
  };

  const onTouchStart = (e) => {
    setScrollValue({
      ...scrollValue,
      clientY: e.changedTouches[0].clientY,
    });
  };

  const onTouchMove = (e) => {
    const { clientY, scrollY } = scrollValue;
    const hiddenPart = scroll.current.scrollHeight - scroll.current.clientHeight;
    let diff = scrollY + clientY - e.changedTouches[0].clientY;

    if (diff < 0) {
      diff = 0;
    } else if (diff > hiddenPart) {
      diff = hiddenPart;
    }

    scroll.current.scrollTo({
      top: diff,
    });
    
    setScrollValue({
      ...scrollValue,
      valueInput: Math.ceil((scroll.current.scrollTop / hiddenPart) * 100),
      scrollY: diff,
      clientY: e.changedTouches[0].clientY,
    });
  };

  return (
    <section className={style.slide}>
      <ImagesSecondSlide currentPage={currentPage} />
      <div className={style["header-text"]}>ТЕКСТ СООБЩЕНИЯ</div>
      <div className={style.info}>
        <input
          className={style.input}
          type="range"
          value={scrollValue.valueInput}
          onInput={handleScroll}
        />
        <div
          className={style.container}
          ref={scroll}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
        >
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
