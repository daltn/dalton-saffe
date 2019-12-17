import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import img from "../images/86870013.jpg"

const PhotosPage = () => (
  <Layout>
    <SEO title="photos" />
    <h1>photos</h1>
    <p></p>
    <Image />
    <img src={img} />
    <p>lots more soon :)</p>
  </Layout>
)

export default PhotosPage
