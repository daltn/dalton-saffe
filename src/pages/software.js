import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SoftwarePage = () => (
  <Layout>
    <SEO title="software" />
    <h1>software</h1>
    <section>
      <h2 className="title">
        {" "}
        <a href="http://artcamplibrary.com/">Art Camp Library</a>
      </h2>
      <p className="about">
        Randomized art generator. <br /> Design by  <a href="https://www.madeatartcamp.com/">Art Camp</a>
      </p>
    </section>
    <section>
      <h2 className="title">
        {" "}
        <a href="https://www.listening-point.com/">Listening Point</a>
      </h2>
      <p className="about">
        Bar / Sauna splash page. <br />  Design by  <a href="https://www.madeatartcamp.com/">Art Camp</a>
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
