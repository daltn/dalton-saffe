import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PhotoFeed = () => {
  const data = useStaticQuery(graphql`
    query PhotoDir {
      allFile(filter: { extension: { regex: "/(jpg)/" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(maxWidth: 1400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const images = data.allFile.edges
  console.log(images)
  return (
    <>
      {images.map(image => (
        <Img
          key={image.node.childImageSharp.fluid.src}
          fluid={image.node.childImageSharp.fluid}
          style={{ margin: "3rem 0" }}
          alt="dalton saffe photo"
        />
      ))}
    </>
  )
}

export default PhotoFeed
