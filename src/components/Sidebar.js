import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaTimes } from "react-icons/fa"

// destructure both of the things we need for our sidebar/toggle
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    // we use template strings for the aside tag because we toggle one class (show sidebar). We have two classes and two states - open and close
    // show-sidebar is the class responsible for toggling
    // styleClass is a specific prop responsible for passing in the css class
    <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
      <button className="close-btn" onClick={toggleSidebar}>
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
