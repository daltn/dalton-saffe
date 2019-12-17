import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
      <Link className="menu-links" to="/software">
        <h1>software</h1>
      </Link>
      <span style={{ fontSize: `3rem` }}> / </span>
      <Link className="menu-links" to="/photos">
        <h1>photos</h1>
      </Link>
      <span style={{ fontSize: `3rem` }}> / </span>
      <Link className="menu-links" to="/music">
        <h1>music</h1>
      </Link>
    </section>
  </Layout>
)

export default IndexPage
