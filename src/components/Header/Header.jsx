import React from "react"
import { Link } from "gatsby"

import Nav from "../Nav/Nav"
import headerStyles from "./header.module.scss"
import javaLogo from "../../images/java-logo.png"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.overlay}></div>
      <div className={headerStyles.heroContent}>
        <p className={headerStyles.brand}>
          <Link className={headerStyles.heroLink} to="/">
            <img
              style={{marginRight: '10px'}}
              src={javaLogo}
              alt=""
              width="100"
              className={headerStyles.heroImg}
            />
            Java Book
          </Link>
        </p>
        <p className={headerStyles.description}>
          Refresh your knowledge or jump right into new programming journey
        </p>
      </div>
      <Nav />
    </header>
  )
}

export default Header
