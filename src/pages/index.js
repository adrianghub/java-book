import React from "react"

import javaSmallLogo from '../images/java-without-bg.png';

import Layout from "../components/Layout/Layout"

const Home = () => (
  <Layout>
    <div style={{display: "flex",justifyContent: "center"}}>
      <img style={{maxWidth: '100%'}} src={javaSmallLogo} alt=""/>
      </div>
  </Layout>
)

export default Home
