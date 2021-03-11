import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import javaSmallLogo from "../../images/java-without-bg.png"
import Layout from "../../components/Layout/Layout"
import classes from "./blogTemplate.module.scss"

export default function Template({ data }) {
  const post = data.mdx
  const { title, author, date } = post.frontmatter

  return (
    <div className={classes.blogTemplate}>
      <Layout>
        <Link to="/blog" className={classes.blogTemplate__link}>
          Back to all blogs
        </Link>
        <h1 className={classes.blogTemplate__title}>{title}</h1>
        <p className={classes.blogTemplate__author}>
          Posted by {author} on {date} <span> / </span> {post.timeToRead} min
          read
        </p>
        <MDXRenderer className={classes.blogTemplate__content}>
          {post.body}
        </MDXRenderer>
        <p className={classes.blogTemplate__authorBottom}>
          <div style={{display: 'flex', justifyContent: "flex-end"}}>
          <span style={{fontSize: '16px', marginRight: '5px'}}>~ {author}</span><img style={{maxWidth: '16px'}}src={javaSmallLogo} alt="small red java" />
          </div></p>
      </Layout>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPost($path: String!) {
    mdx(
      frontmatter: { path: { eq: $path } }
      excerpt: {}
      timeToRead: {}
    ) {
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
      body
      excerpt
      timeToRead
      tableOfContents
    }
  }
`
