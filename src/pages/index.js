import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
      <Link className="menu-links" to="/dev">
        dev
      </Link>
      <Link className="menu-links" to="/page-2/">
        photos
      </Link>
      <Link className="menu-links" to="/page-2/">
        music
      </Link>
    </section>
  </Layout>
)

export default IndexPage
