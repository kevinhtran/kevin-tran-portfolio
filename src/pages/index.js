import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"

// we have this data prop as a parameter now
export default ({ data }) => {
  // destructuring
  // looking for allStrapiProjects, it is an object and within the object i'm looking for the nodes and give it an alias of projects.
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs />
      {/* passing 3 props*/}
      {/* title - we want our title to show featured projects */}
      {/* showLink - displays the link if it's there */}
      <Projects projects={projects} title="featured projects" showLink />
    </Layout>
  )
}

// we place this projects content query here because we just pass this query into a the projects component as a prop
// later in the projects page, we run the query in our projects component but without the featured filter
// instead of setting the query in the project, i'll set the query in the pages - index.js where i'll display those projects
export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`
