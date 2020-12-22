import React, { useState } from "react";
import {
  navbar__wrapper,
  navbar,
  navlink,
  navlink__left,
  navbar__right,
  active,
} from "./NavBar.module.scss";
import cx from "classnames";
import LogoTitle from "../logo-title/LogoTitle";

const NavBar = (props) => {
  const [navigation, setNavigation] = useState(false);
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 60) setNavigation(true);
    else setNavigation(false);
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div className={cx(navbar__wrapper, navigation ? active : null)}>
      <nav className={navbar}>
        <div className={navlink__left}>
          <LogoTitle />
        </div>
        {/* <a className={cx(navlink__left, navlink)}>Link1</a> */}
        <div className={navbar__right}>
          <a className={navlink} href="#">
            Inicio
          </a>
          <a className={navlink} href="#">
            Sobre nós
          </a>
          <a className={navlink} href="#">
            fazer Pedido
          </a>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
