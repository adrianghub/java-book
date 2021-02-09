import React from "react";
import { graphql } from "gatsby";

import Layout from '../components/Layout/Layout'
import Post from '../components/Post/Post'

const Blog = ({ data }) => (
  <Layout>
    <h1>Blog</h1>
    { 
      data.allMarkdownRemark.edges.map(post => {
        const { title, author, date, description, path, featured } = post.node.frontmatter;
        return (
          <Post
            title={title}
            author={author}
            date={date}
            description={description}
            key={`${date}__${title}`}
            path={path}
            featured={featured}
          />
        )
      })
    }
  </Layout>
);

export default Blog;

export const AllBlogsQuery = graphql`
query AllBlogPosts {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          date(formatString: "DD MMMM, YYYY")
          title
          author
          path
          description
          featured {
            childImageSharp {
              fluid(maxWidth: 750) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
`