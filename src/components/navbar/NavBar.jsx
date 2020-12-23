import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  navbar__wrapper,
  navbar,
  navlink,
  navlink__left,
  navbar__right,
  navbar__right__active,
  active,
  toggleNav,
} from "./NavBar.module.scss";
import cx from "classnames";
import LogoTitle from "../logo-title/LogoTitle";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const [navigation, setNavigation] = useState(false);
  const [responsive, setResponsive] = useState(false);
  const handleToggleNav = () => {
    setResponsive(!responsive);
  };
  const handleClick = () => {
    console.log(window.location.pathname);
    setNavigation(true);
    if (responsive) setResponsive(!responsive);
  };
  const handleClick1 = () => {
    console.log(window.location.pathname);
    setNavigation(false);
    if (responsive) setResponsive(!responsive);
  };
  const changeBackground = () => {
    // console.log(window.location);
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
        <div
          className={cx(
            navbar__right,
            responsive ? navbar__right__active : null
          )}
        >
          <Link onClick={handleClick1} className={navlink} to="/">
            Inicio
          </Link>
          <Link onClick={handleClick} className={navlink} to="/about">
            Sobre nós
          </Link>
          <Link onClick={handleClick} className={navlink} to="/order">
            fazer Pedido
          </Link>
        </div>
        <div className={toggleNav} onClick={handleToggleNav}>
          {responsive ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
