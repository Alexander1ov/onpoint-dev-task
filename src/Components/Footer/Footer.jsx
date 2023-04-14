import React from "react";

import LOGO from "../../images/footer/onpoint.png";

import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.logo}>
        <img src={LOGO} alt="logo" />
      </div>
    </footer>
  );
};

export default Footer;
