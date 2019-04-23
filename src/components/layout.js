import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import style from "../styles/all.css"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(2),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            fontWeight: 700,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h1
          style={{
            ...scale(1),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(25),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          <a href={`https://github.com/daltn`}>github</a>
          {` / `}
          <a href={`https://twitter.com/daltonsaffe`}>twitter</a>
          {` / `}
          <a href={`https://www.linkedin.com/in/daltonsaffe/`}>linkedin</a>
        </footer>
      </div>
    )
  }
}

export default Layout
