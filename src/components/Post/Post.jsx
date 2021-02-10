import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image"

import classes from "./Post.module.css";

const Post = ({ title, author, date, excerpt, path, featured, timeToRead }) => (
  <div className={classes.post}>
    <h2 className={classes.post__title}>{ title }</h2>
    <p className={classes.post__meta}>
      Written by { author } on { date } <span> / </span>{" "} { timeToRead } min read
    </p>
    {featured && (
    <Img
      className={classes.post__featured}
      fluid={featured.childImageSharp.fluid}
      alt={title}
    />
    )}
    <p className={classes.post__excerpt}>{ excerpt }</p>
    <Link className={classes.post__button} to={ path }>Read more</Link>
  </div>
);

export default Post;