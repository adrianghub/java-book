import React from "react";

import Nav from "../Nav/Nav";
import classes from './Layout.module.css'

const Layout = ({ children }) => (
  <>
    <Nav />
    <main className={classes.main}>{ children }</main>
  </>
);

export default Layout;
