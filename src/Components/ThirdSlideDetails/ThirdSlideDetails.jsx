import React, { useState } from "react";

import Arrows from "../Parts/Arrows/Arrows";
import { text } from "../../text/text";

import style from "./ThirdSlideDetails.module.css";

const ThirdSlideDetails = ({ handleDetails }) => {
  const [page, setPage] = useState(1);
  const maxElem = 3;
  const sumPage = Math.ceil(text.textThirdSlide.length / maxElem);
  const lastElem = page * maxElem;
  const firstElem = lastElem - maxElem;
  const sliceText = text.textThirdSlide.slice(firstElem, lastElem);

  return (
    <>
      <div className={style.cover} />
      <div className={style.wrapper}>
        <h2>ПРЕИМУЩЕСТВА</h2>
        <div className={style.close} onClick={handleDetails}></div>
        <div className={style.container}>
          {sliceText.map((elem) => (
            <div key={elem.id}>
              <div className={style.number}>{elem.id}</div>
              <div>{elem.title}</div>
            </div>
          ))}
        </div>
        <Arrows sumPage={sumPage} currentPage={page} setCurrentPage={setPage} />
      </div>
    </>
  );
};

export default ThirdSlideDetails;
