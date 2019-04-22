import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt="dalton-saffe"
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `50%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p>
              Hi! I'm a software developer who loves working across the stack
              with JavaScript & Python. I'm also a designer and musician who's
              excited by data visualization, typography, & synthesizers.
              {` `}
              <a href={`https://twitter.com/${social.twitter}`}>twitter</a>
              <br />
              <a href={`https://github.com/daltn`}>github</a>
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/teal-icon.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
