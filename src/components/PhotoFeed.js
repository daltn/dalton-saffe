import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PhotoFeed = () => {
  const data = useStaticQuery(graphql`
    query PhotoDir {
      allFile(
        filter: { extension: { regex: "/(jpg)/" } }
        sort: { fields: name }
      ) {
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
  return (
    <section>
      {images.map(image => (
        <Img
          key={image.node.childImageSharp.fluid.src}
          fluid={image.node.childImageSharp.fluid}
          className="photo"
          alt="dalton saffe photo"
        />
      ))}
    </section>
  )
}

export default PhotoFeed
