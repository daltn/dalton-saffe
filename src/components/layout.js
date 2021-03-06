/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="container">{children}</main>
      <footer className="container footer">
        <a
          href="mailto:daltonsaffe@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          contact
        </a>{" "}
        /{" "}
        <a
          href="https://github.com/daltn"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
