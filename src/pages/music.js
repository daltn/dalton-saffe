import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const MusicPage = () => (
  <Layout>
    <SEO title="music" />
    <h1>music</h1>
    <h3>mixes</h3>
    <iframe
      width="100%"
      height="166"
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/791437048&color=%23272728&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    ></iframe>
    <iframe
      title="Dalton Saffe - Ambient 02"
      width="100%"
      height="166"
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/700394209&color=%23272728&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    ></iframe>
    <iframe
      title="Dalton Saffe - Ambient 01"
      width="100%"
      height="166"
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/217405550&color=%23272728&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    ></iframe>
  </Layout>
)

export default MusicPage
