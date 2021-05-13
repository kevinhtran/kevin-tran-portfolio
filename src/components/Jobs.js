import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        company
        date
        position
        description {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  return <h2>jobs component</h2>
}

export default Jobs
