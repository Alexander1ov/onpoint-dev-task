import React from "react";

import HOME from "../../images/header/home.png";

import style from "./Header.module.css";

const Header = ({ setCurrentPage }) => {
  return (
    <header className={style.header}>
      <nav
        className={style.nav}
        onClick={() => {
          setCurrentPage(0);
        }}
      >
        <img src={HOME} alt="home" />
      </nav>
    </header>
  );
};

export default Header;
