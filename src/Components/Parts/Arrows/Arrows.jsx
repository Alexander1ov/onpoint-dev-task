import React from "react";

import style from "./Arrows.module.css";

const Arrows = ({ sumPage, currentPage, setCurrentPage }) => {
  const pagination = [];
  for (let i = 1; i <= sumPage; i++) {
    pagination.push(i);
  }

  const handlePage = (direction) => {
    if ((direction === "left") & (currentPage > 1)) {
      setCurrentPage(currentPage - 1);
    }
    if ((direction === "right") & (currentPage < sumPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className={style.arrow}>
      <button
        className={style.left}
        onClick={() => {
          handlePage("left");
        }}
      />
      {pagination.map((elem, id) => {
        if (elem === currentPage) {
          return (
            <div
              key={id}
              className={`${style.pagination}  ${style.active} `}
              onClick={() => {
                setCurrentPage(elem);
              }}
            />
          );
        } else {
          return (
            <div
              key={id}
              className={`${style.pagination}`}
              onClick={() => {
                setCurrentPage(elem);
              }}
            />
          );
        }
      })}
      <button
        className={style.right}
        onClick={() => {
          handlePage("right");
        }}
      />
    </div>
  );
};

export default Arrows;
