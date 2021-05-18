import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"

// start by destructuring where we get the props from the object that i'm passing in
// because if you remember in the blogs component, we used the spread operator on blog ({...blog}) to spread out all the properties that the blog had therefore in this blog component i can access them as i want to
const Blog = ({ id, title, image, date, category, slug, description }) => {
  // as far as the return, we want to return as a gatsby link
  // once i click on a particular card, i want it to navigate to a particular page for that specific blog
  // when we have worked with pages that have been created programatically, then we use slug
  // for each and every page, we're going to navigate here
  // since we're rendering the list, we also have to use key here
  return (
    <Link to={`/blogs/${slug}`} className="blog" key={id}>
      <article>
        <Image fluid={image.childImageSharp.fluid} className="blog-img" />
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

Blog.propTypes = {}

export default Blog
