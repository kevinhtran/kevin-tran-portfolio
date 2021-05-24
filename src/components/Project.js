// keep in mind Project and Projects are two seperate components
// Same setup will apply for the blog and blogs components later

import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
// destructured all these things from the query
const Project = ({ description, title, github, stack, url, image, index }) => {
  return (
    <article className="project">
      {/* we are looking for the fluid image, so we have to pass in fluid prop with the correct path to fluid */}
      {/* these will be the project images inside of Strapi*/}
      <Image fluid={image.childImageSharp.fluid} className="project-img" />
      {/* this is the project info */}

      <div className="project-info">
        {/* this is the project number which is displayed through the index */}
        <span className="project-number">0{index + 1}</span>
        {/* this is the title with the title prop passed in */}
        <h3>{title}</h3>
        {/* this is the description with the description prop passed in */}
        <p className="project-desc">{description}</p>
        {/* within this stack, we'll iterate over it */}
        <div className="project-stack">
          {stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
        </div>
        {/* these are the two href links using react-icons */}
        <div className="project-links">
          <a href={github} target="_blank">
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url} target="_blank">
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {}

export default Project
