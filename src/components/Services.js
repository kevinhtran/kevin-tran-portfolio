import React from "react"
import Title from "./Title"
import services from "../constants/services"
import { Link } from "gatsby"

const Services = () => {
  return (
    <section className="section bg-grey">
      {/* this is the title prop from title.js that will show as "services" and if there was no title, show as "default title" */}
      <Title title="Skills" />
      {/* we have our list and iterate over our services array with those objects for our service cardsand render them */}
      <div className="section-center services-center">
        {/* we take the imported services constant, map over it */}
        {services.map(service => {
          // destructuring all of the properties out with const which all come from service
          const { id, icon, title, text } = service
          return (
            // return an article that has the key prop with id because react requires it
            <article key={id} className="service">
              {/* we first access the icon */}
              {icon}
              {/* then we access the title */}
              <h4>{title}</h4>
              {/* here we have the underline style object */}
              <div className="underline"></div>
              {/* and then we access our text value */}
              <p>{text}</p>
            </article>
          )
        })}
      </div>
      <Link to="/about" className="btn center-btn">
        About me
      </Link>
    </section>
  )
}

export default Services
