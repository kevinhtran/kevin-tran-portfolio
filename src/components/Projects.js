// this is going to be one of those components where we use a seperate component for the Project component
// keep in mind Project and Projects are two seperate components
// Same setup will apply for the blog and blogs components later

import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"

// passing in the same props from index.js
const Projects = ({ projects, title, showLink }) => {
  return (
    <section className="section projects">
      {/* passing title as a prop so whatever you pass into the homepage, it is going to be displayed */}
      <Title title={title} />
      {/* within this div we iterate over our project */}
      <div className="section-center projects-center">
        {/* passing in index because it displays a nice number on each of projects card section */}
        {projects.map((project, index) => {
          // we are passing in the spread operator because we can to pass in all of our properties that we requested in our graphql
          // we can set them up one by one, but in our case, we can spread out all of our properties we want in the particular project
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
      {/* outside the div, we display our link button*/}
      {/* if showLink is true, then whatever I pass in on the right side is going to
      be rendered and if undefined then don't render it */}
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          projects
        </Link>
      )}
    </section>
  )
}

export default Projects
