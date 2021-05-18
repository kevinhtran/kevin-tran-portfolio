import React from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

// the layout is the closest parent so we'll do our logic in the layout

const Layout = ({ children }) => {
  // isOpen = state variable, setIsOpen = function, React.useState() = hook, false = default value
  const [isOpen, setIsOpen] = React.useState(false)
  // we're going to set it up as one function to toggle
  // if the isOpen is false, once i click on isOpen, it will be set to true - vice versa
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar />
      {/* doesn't really matter where you place the sidebar because it is using position-fixed */}
      <Sidebar />
      {/* contents of the page */}
      {children}
      <Footer />
    </>
  )
}

export default Layout
