import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/Layout/Layout"
import classes from "./blogTemplate.module.css"

export default function Template({ data }) {
  const post = data.markdownRemark
  const { title, author, date } = post.frontmatter

  return (
    <div className={classes.blogTemplate}>
      <Layout>
        <Link to="/blog" className={classes.blogTemplate__link}>Back to all blogs</Link>
        <h1 className={classes.blogTemplate__title}>{title}</h1> 
        <p className={classes.blogTemplate__author}>
          Posted by {author} on {date} <span> / </span>{" "}
          { post.timeToRead } min read
        </p>
        <div className={classes.blogTemplate__content} dangerouslySetInnerHTML={{ __html: post.html }} />
       <p className={classes.blogTemplate__authorBottom}> ~ { author } </p>
      </Layout>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path }}, excerpt: {}, timeToRead: {}) {
      frontmatter {
        title
        path
        author
        date(formatString: "DD MMMM, YYYY")
        featured {
          childImageSharp {
            fluid(maxWidth: 750) {
              ...GatsbyImageSharpFluid
            }
          }                                           
        }
      }
      html
      excerpt
      timeToRead
    }
  }
`
