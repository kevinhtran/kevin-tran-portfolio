import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
  {
    file(relativePath: { eq: "coding_guy.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  // useStaticQuery is a react hook to retrieve data (from query) with GraphQL and takes a render prop
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    // hero will add the color and dimensions of the background
    <header className="hero">
      <div className="section-center hero-center">
        {/* the two columns */}
        {/* this site contains the title, subtitle, button */}
        <article className="hero-info">
          {/* <article> */}
          <div>
            <div className="underline"></div>
            <h1>I'm Kevin</h1>
            <h4>Full-Stack Developer</h4>
            <Link to="/contact" className="btn">
              Contact me
            </Link>
            {/* in this case, we just pass in the generic SocialLinks component without a styling class */}
            <SocialLinks />
          </div>
        </article>
        {/* this side contains the image */}
        {/* Image component from gatsby which applies all the given transformations */}
        {/* fluid prop querying for fluid image and passing in fluid which comes from the destructuring file from childImageSharp */}
        <Image fluid={fluid} className="hero-img" />
      </div>
      <div></div>
    </header>
  )
}

export default Hero
