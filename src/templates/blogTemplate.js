import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/Layout/Layout";

export default function Template({ data }) {
  const post = data.markdownRemark;
  const { title, author, date } = post.frontmatter;
};

export const postQuery = graphql`
query BlogPost($path: String!) {
  markdownRemark(frontmatter: {path: {eq: $path}}) {
    frontmatter {
      title
      path
      author
      date
    }
    html
  }
}
`
