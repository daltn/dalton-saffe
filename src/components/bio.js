import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

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
              Hi! I'm a full stack developer & designer who loves working with
              JavaScript, Python, data visualization, & typography. I'm
              currently looking for a full-time dev role in NYC so feel free to{" "}
              {` `}
              <a href={`mailto:daltonsaffe@gmail.com`}>email me</a>
              {` `}:)
            </p>
            {/* <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt="dalton-saffe"
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                width: 100,
                borderRadius: `50%`,
                display: `block`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            /> */}
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
