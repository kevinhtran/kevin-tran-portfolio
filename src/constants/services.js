import React from "react"
import { FaCode, FaServer, FaPencilAlt } from "react-icons/fa"

// this is the array of objects that you will be exporting

export default [
  // whatever is placed over here will render on the screen
  {
    id: 1,
    // you notice here that you can place your imported icon in here as well as a class for styling it
    icon: <FaCode className="service-icon" />,
    title: "Front-End",
    text: `These are my front-end skills.`,
  },
  {
    id: 2,
    // icon: <FaSketch className="service-icon" />,
    icon: <FaServer className="service-icon" />,
    title: "Back-End",
    text: `These are my back-end skills.`,
  },
  {
    id: 3,
    icon: <FaPencilAlt className="service-icon" />,
    title: "Design",
    text: `These are my design skills.`,
  },
]
