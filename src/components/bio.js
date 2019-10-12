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
            <p>Hi! I'm a software developer, artist, & musician.</p>
            <h3 style={{ marginBottom: `0.5rem` }}>Enjoys:</h3>
            <ul style={{ listStyle: `none`, marginLeft: `5rem` }}>
              <li>synthesizers</li>
              <li>house && techno</li>
              <li>javascript || python</li>
              <li>generative art</li>
            </ul>
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
