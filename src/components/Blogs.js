import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
export const Blogs = ({ blogs, title, showLink }) => {
  // we want to iterate over blogs and return the single blog component
  return (
    // this will be the blog section
    <section className="section">
      {/* this will be the title with whatever title we're getting from the index.js (homepage) */}
      <Title title={title} />
      {/* we then have the div have all the blogs inside of import PropTypes from
      'prop-types' also within this blog we iterate over our blogs since we can
      access each and every item within our callback function, we pass in blog
      as a parameter as far as our return, we will return our blog component
      where we use our key with the blog.id we then have the object spread
      operator which spreads out all of the properties we have inside our blog */}
      <div className="section-cetner blogs-center">
        {blogs.map(blog => {
          return <Blog key={blog.id} {...blog} />
        })}
      </div>
      {/* if the showLink is undefined then don't show anything. if it is defined and passed then display my link */}
      {showLink && (
        // link navigates to the blog page
        <Link to="/blog" className="btn center-btn">
          blog
        </Link>
      )}
    </section>
  )
}
export default Blogs
