import React from "react";

import Header from "../Header/Header";
import Scroll from "../Scroll/Scroll";
import Footer from "../Footer/Footer";
import classes from './Layout.module.scss'
import '../../styles/style.scss'


const Layout = ({ children }) => (
  <>
    <Header />
    <main className={classes.main}>{ children }</main>
    <Scroll showBelow={250} />
    <Footer />
  </>
);

export default Layout;
