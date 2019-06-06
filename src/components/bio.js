import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(1),
            }}
          >
            <p>
              Hi! I'm a software developer, designer, & musician who loves
              working with JavaScript, Python, React, & GraphQL. I'm always open
              to chatting about interesting projects, DJing, & synthesizers so
              feel free to {` `}
              <a href={`mailto:daltonsaffe@gmail.com`}>email me</a>
              {` `}:)
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
  }
`

export default Bio
