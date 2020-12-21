import React from "react";
import {
  navbar__wrapper,
  navbar,
  navlink,
  navlink__left,
  navbar__right,
} from "./NavBar.module.scss";
import cx from "classnames";

const NavBar = (props) => (
  <div className={navbar__wrapper}>
    <nav className={navbar}>
      <a className={cx(navlink__left, navlink)}>Link1</a>
      <div className={navbar__right}>
        <a className={navlink} href="#">
          Inicio
        </a>
        <a className={navlink} href="#">
          Sobre nós
        </a>
        <a className={navlink} href="#">
          fazer PedidoS
        </a>
      </div>
    </nav>
  </div>
);
export default NavBar;
