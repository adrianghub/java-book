import React from "react";
import { Link } from "gatsby";

import classes from "./Post.module.css";

const Post = ({ title, author, date, description, path }) => (
  <div className={classes.post}>
    <h3 className={classes.post__title}>{ title }</h3>
    <p className={classes.post__description}>{ description }</p>
    <p className={classes.post__author}>
      Written by { author } on { date }
    </p>
    <Link to={ path }>Read more</Link>
  </div>
);

export default Post;