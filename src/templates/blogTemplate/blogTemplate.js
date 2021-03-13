import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"

import javaSmallLogo from "../../images/java-without-bg.png"
import classes from "./blogTemplate.module.scss"

import CodeBlock from '../../components/CodeBlock/CodeBlock'

import Layout from "../../components/Layout/Layout"

const Toc = styled.ul`
  position: absolute;
  left: calc(50% + 450px);
  top: 500px;
  max-height: 70vh;
  width: 310px;
  display: flex;
  li {
    line-height: 1.2;
    margin-top: 15px;
  }
`

const InnerScroll = styled.div`
  overflow: hidden;
  overflow-y: scroll;
`

const components = {
  code: CodeBlock
}

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
        <h2>Table of contents</h2>
        {post?.tableOfContents?.items &&
          post.tableOfContents.items.map(i => (
            <li key={i.url}>
              <a href={i.url} key={i.url}>
                {i.title}
              </a>
            </li>
          ))}
        <MDXRenderer components={components} className={classes.blogTemplate__content}>
          {post.body}
        </MDXRenderer>
        <p className={classes.blogTemplate__authorBottom}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <span style={{ fontSize: "16px", marginRight: "5px" }}>
              ~ {author}
            </span>
            <img
              style={{ maxWidth: "16px" }}
              src={javaSmallLogo}
              alt="small red java"
            />
          </div>
        </p>
      </Layout>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPost($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }, excerpt: {}, timeToRead: {}) {
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
