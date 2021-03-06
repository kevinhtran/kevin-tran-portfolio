import React from "react"
import { Link } from "gatsby"
import logo from "../assets/kt_initials_logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"

// since i'm getting my prop, i will need to destructure it
const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          {/* this button will have onClick. once you click the button, run the function toggleSidebar */}
          {/* only shows when the page is scaled down */}
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
