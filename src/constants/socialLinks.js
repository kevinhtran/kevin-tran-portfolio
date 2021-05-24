import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaDribbbleSquare,
  FaBehanceSquare,
  FaTwitterSquare,
  FaTheRedYeti,
  FaGithubSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/kevin-tran-a8652586/",
  },
  {
    id: 2,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/kevinhtran",
  },
  {
    id: 3,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/kev_developer",
  },
  // {
  //   id: 4,
  //   icon: <FaDribbbleSquare className="social-icon"></FaDribbbleSquare>,
  //   url: "https://www.twitter.com",
  // },
  // {
  //   id: 5,
  //   icon: <FaBehanceSquare className="social-icon"></FaBehanceSquare>,
  //   url: "https://www.twitter.com",
  // },
]

// iterating over the array for each and every item i'm returning the list item with the key
// there's an href which return the html element and there's a class for styling
// within the link there is an icon
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} target="_blank" className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

// if you want to apply specific stlying to a place you're displaying these links, we pass in the styleClass,
export default ({ styleClass }) => {
  return (
    // if the styleClass is there, we use whatever value we pass and if it's not there, we pass in an empty value
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
