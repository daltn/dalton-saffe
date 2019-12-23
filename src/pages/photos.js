import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PhotoFeed from "../components/PhotoFeed"

const PhotosPage = () => {
  return (
    <Layout>
      <SEO title="photos" />
      <h1>photos</h1>
      <ul>
        <li>minolta zoom 130c</li>
        <li>canon ae-1</li>
        <li>fujifilm xf10</li>
      </ul>
      <PhotoFeed />
    </Layout>
  )
}

export default PhotosPage
