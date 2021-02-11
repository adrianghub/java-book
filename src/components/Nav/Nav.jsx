import React from "react"
import { Link } from "gatsby"
import headerStyles from "./Nav.module.scss"

const Nav = () => (
  <nav className={headerStyles.navContainer}>
    <ul className={headerStyles.navList}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog/">Blog</Link>
      </li>
      <li>
        <Link to="/about/">About</Link>
      </li>
      <li>
        <Link to="/contact/">Contact</Link>
      </li>
    </ul>
  </nav>
)

export default Nav
