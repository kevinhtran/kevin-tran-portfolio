import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

// this query was taken from graphql using strapi cms data
const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        strapiId
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
  // in order to use the query variable:
  // you have to use the useStaticQuery hook
  // you create a variable with the useStaticQuery Hook and pass in the query variable from above the component
  const data = useStaticQuery(query)

  // now, we can start destructuring
  // set the const {} object equal to data
  // within {}, we will pull out from the query variable - allStrapiJobs
  // since it is an object, I want to pull out nodes and give it an alias - jobs
  const {
    allStrapiJobs: { nodes: jobs },
  } = data

  // functionality:
  // hard-coded:
  // when we click on the buttons with the company titles, we just want to grab one item from that array (nodes: jobs)
  // the item is going to depend on the index as we have sorted in our query
  // you'll always get a different result depending on the index of the job because this is the hard-coded version
  // const { company, position, date, description } = jobs[0]
  // dynamically:
  // in order to set it dynamically, you would want to use useState hook
  // useState hook always returns an array
  // [ value, setValue ] is array destructuring
  // React.useState(0) - default value of zero
  // we're using useState hook with a default value and we're getting back two things in our array which are destructured
  // I can name them whatever I want but in this case, I've named them [value, setValue]
  // setValue is the function that controls it and value represents whatever I have on React.useState(0) which atm is is 0
  const [value, setValue] = React.useState(0)
  // now we are taking the current value of the useState and it will dynamically change when setValue is invoked
  const { company, position, date, description } = jobs[value]

  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        {/* btn container */}
        {/* here we have a div */}
        {/* we want to iterate over our jobs array and for each and every item, we want to display a button */}
        <div className="btn-container">
          {/* using a map function with the parameters of job and the index of it */}
          {/* and then we want it to return the button with the job title */}
          {/* key={job.strapiId} helps react identify which items have changed, are
        added, or are removed. */}
          {/* {job.company} is the item that will have the company field which each value/button */}
          {/* the className is dynamic. we set up template strings with the className of job-btn but if the index will match the index/value of the current state (jobs[value]) then it will set this up as an active button using the className */}
          {jobs.map((job, index) => {
            return (
              // ternary: if index is equal to whatever the value is then add also an 'active-btn' class
              <button
                key={job.strapiId}
                // at the moment the active button will always be the 0 index
                // So we can change that by using onClick, whatever index you have for that item, once you click on a new button, the arrow functions runs and it changes the value (jobs[value])
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {job.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {/* description is an array so we need to do more than just normal tags and passing in of the object */}
          {/* since description is an array, we want to map over it and take each item within the current iteration and return it as a div container */}
          {/* this div container will have a key since react needs help with the identification of the id and a class */}
          {/* within the div there is an imported icon from react-icons and a <p> tag containing the description which in this case is name */}
          {description.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>
      </div>
      {/* this will be a link as a button that redirects us to the about me page */}
      {/* <Link to="/about" className="btn center-btn">
        more info
      </Link> */}
    </section>
  )
}

export default Jobs
