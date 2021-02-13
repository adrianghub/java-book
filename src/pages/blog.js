import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import Post from "../components/Post/Post"
import classes from "../styles/blog.module.scss"

const Blog = ({ data }) => {
  const allPosts = data.allMarkdownRemark.edges;

  const emptyQuery = "";

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = e => {
    const query = e.target.value

    const posts = data.allMarkdownRemark.edges || []

    const filteredData = posts.filter(post => {
      const { description, title, tags } = post.node.frontmatter
      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        (description && description.toLowerCase().includes(query.toLowerCase())) ||
        (tags && tags.toLowerCase().includes(query.toLowerCase()))
      )
    })

    setState({
      query,
      filteredData,
    })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

  return (
    <Layout>
      
      <div className={classes.searchBox}>
        <input
          className={classes.searchInput}
          type="text"
          aria-label="Search"
          placeholder="Search through posts..."
          onChange={handleInputChange}
        />
      </div>
      <h1>Blog</h1>
      <div className={classes.wrapper}>
        {posts.map(post => {
          const {
            title,
            author,
            date,
            path,
            featured,
            tags,
          } = post.node.frontmatter
          return (
            <Post
              title={title}
              excerpt={post.node.excerpt}
              author={author}
              date={date}
              key={`${date}__${title}`}
              path={path}
              featured={featured}
              timeToRead={post.node.timeToRead}
              tags={tags}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default Blog

export const AllBlogsQuery = graphql`
  query AllBlogPosts {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          timeToRead
          excerpt(pruneLength: 80)
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            description
            author
            path
            tags
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
