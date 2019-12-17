import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SoftwarePage = () => (
  <Layout>
    <SEO title="software" />
    <h1>software</h1>
    <section>
      <h2 className="title">
        {" "}
        <a href="https://www.gatheringgrowth.com/">Gathering Growth</a>
      </h2>
      <p>Gatsby, Netlify CMS</p>

      <p className="about">
        An archive of Champion Trees in the United States by photographer /
        archivist <a href="http://www.briankelley.nyc/">Brian Kelley</a> & Sara
        Meghdari.
      </p>
    </section>
    <section>
      <h2 className="title">
        <a href="https://www.moneycatrecs.com/">Money Cat Records</a>
      </h2>
      <p>Gatsby, Netlify CMS</p>
      <p className="about">Site for Brooklyn dance music label</p>
    </section>
    <section>
      <h2 className="title">
        <a href="http://www.m0n0synth.com/">m0n0synth</a>
      </h2>
      <p>React, Web Audio API, Tone.js</p>
      <p className="about">
        Synthesizer & Oscilloscope built on the Web Audio API
      </p>
    </section>
    <section>
      <h2 className="title">
        <a href="https://nudityforbeginners.com/">Nudity For Beginners</a>
      </h2>
      <p>React, CSS Animations, Vimeo API</p>
      <p className="about">Interactive music video</p>
    </section>
    <section>
      <h2 className="title">
        <a href="http://www.light-speed.space">Lightspeed</a>
      </h2>
      <p>Three.js, React, Redux, Node</p>
      <p className="about">3D space flight video game</p>
    </section>
  </Layout>
)

export default SoftwarePage
