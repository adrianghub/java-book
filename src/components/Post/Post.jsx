import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image"

import classes from "./Post.module.css";

const Post = ({ title, author, date, excerpt, description, path, featured, timeToRead }) => (
  <div className={classes.post}>
    <h3 className={classes.post__title}>{ title }</h3>
    {featured && (
    <Img
      fluid={featured.childImageSharp.fluid}
      alt={title}
    />
    )}
    <p className={classes.post__description}>{ excerpt }</p>
    <p className={classes.post__author}>
      Written by { author } on { date } <span> / </span>{" "} { timeToRead } min read
    </p>
    <Link to={ path }>Read more</Link>
  </div>
);

export default Post;