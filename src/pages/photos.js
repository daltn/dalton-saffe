import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PhotoFeed from "../components/PhotoFeed"

const PhotosPage = () => {
  return (
    <Layout>
      <SEO title="photos" />
      <h1>photos</h1>
      <p></p>
      <PhotoFeed />
      <p>lots more soon</p>
    </Layout>
  )
}

export default PhotosPage
