import React from "react";

import Nav from "../Nav/Nav";

const Layout = ({ children }) => (
  <>
    <Nav />
    <main>{ children }</main>
  </>
);

export default Layout;
