import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import Post from "../components/Post/Post"

const Blog = ({ data }) => (
  <Layout>
    <h1>Blog</h1>
    {data.allMarkdownRemark.edges.map(post => {
      const { title, author, date, path, featured } = post.node.frontmatter
      return (
        <div style={{display:'flex'}}>
          <Post
            title={title}
            excerpt={post.node.excerpt}
            author={author}
            date={date}
            key={`${date}__${title}`}
            path={path}
            featured={featured}
            timeToRead={post.node.timeToRead}
          />
        </div>
      )
    })}
  </Layout>
)

export default Blog

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
            featured {
              childImageSharp {
                fluid(maxWidth: 750) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          timeToRead
          excerpt
        }
      }
    }
  }
`
