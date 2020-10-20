import React from "react";
import { Link } from "gatsby";
import classes from './Nav.module.css';

const Nav = () => (
  <nav className={classes.nav}>
    <ul className={classes.nav__list}>
      <li className={classes.nav__item}>
        <Link to="/" activeStyle={{ borderBottom: "2px solid #371A2B" }}>Home</Link>
      </li>
      <li className={classes.nav__item}>
        <Link to="/about" activeStyle={{ borderBottom: "2px solid #371A2B" }}>About</Link>
      </li>
      <li className={classes.nav__item}>
        <Link to="/blog" activeStyle={{ borderBottom: "2px solid #371A2B" }}>Blog</Link>
      </li>
      <li className={classes.nav__item}>
        <Link to="/contact" activeStyle={{ borderBottom: "2px solid #371A2B" }}>Contact</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;