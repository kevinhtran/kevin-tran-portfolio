import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import { FaTheaterMasks } from "react-icons/fa"

// we destructure, take our allStrapiProjects object and within that, we look for nodes and give it an alias of 'projects'
const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  return (
    // we're using our layout component which contains all the necessary stlying for us already
    // within the Layout, we're going to make a section with the Projects component with projects prop with all projects beecause our query is now different
    // it's more useful to setup projects as a seperate component that is only looking for some kind of prop. so that we don't have to look for some sort of query because we can't control it entirely.
    // instead we can pass in whatever projects we want and the project component is only going to render that data.
    <Layout>
      <section className="projects-page">
        <Projects projects={projects} title="all projects" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects {
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

export default ProjectsPage
