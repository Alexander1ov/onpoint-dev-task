import React, { useRef } from "react";

import FirstSlide from "../FirstSlide/FirstSlide";
import SecondSlide from "../SecondSlide/SecondSlide";
import ThirdSlide from "../ThirdSlide/ThirdSlide";

import style from "./Slides.module.css";

const Slides = ({ currentPage, setCurrentPage }) => {
  const coordinateX = useRef(0);

  const handleStart = (e) => {
    const touchStart = Math.ceil(e.changedTouches[0].clientX);
    coordinateX.current = touchStart;
  };

  const handleEnd = (e) => {
    const touchEnd = Math.ceil(e.changedTouches[0].clientX);
    let xDifference = coordinateX.current - touchEnd;
    if (xDifference > 50 && currentPage <= 1) {
      setCurrentPage(currentPage + 1);
    }
    if (xDifference < -50 && currentPage >= 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div
      className={style.slides}
      style={{
        transform: `translateX(${currentPage * -100}vw)`,
        transition: "transform 1000ms ease",
      }}
      onTouchStart={handleStart}
      onTouchEnd={handleEnd}
    >
      <FirstSlide setCurrentPage={setCurrentPage} />
      <SecondSlide currentPage={currentPage} />
      <ThirdSlide />
    </div>
  );
};

export default Slides;
