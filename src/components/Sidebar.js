import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaTimes } from "react-icons/fa"

const Sidebar = () => {
  const isOpen = false
  // we use template strings for the aside tag because we toggle one class (show sidebar). We have two classes and two states - open and close
  // show sidebar will be in between those two classes
  return (
    // show-sidebar is the class responsible for toggling
    // styleClass is a specific prop responsible for passing in the css class
    <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
      <button className="closed-btn">
        <FaTimes />
      </button>
      <div className="side-container">
        <Links styleClass="sidebar-links" />
        <SocialLinks styleClass="sidebar-icons" />
      </div>
    </aside>
  )
}

export default Sidebar
