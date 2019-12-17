import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PhotosPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>photos</h1>
    <p>Shot on a minolta zoom 130c</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PhotosPage
