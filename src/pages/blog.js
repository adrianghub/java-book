import React from "react";
import { graphql } from "gatsby";

import Layout from '../components/Layout/Layout'

const Blog = ({ data }) => (
  <Layout>
    <h1>Blog</h1>
    {console.log(data)}
  </Layout>
);

export default Blog;

export const AllBlogsQuery = graphql`
query AllBlogPosts {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          date
          title
          author
          path
          description
        }
      }
    }
  }
}
`