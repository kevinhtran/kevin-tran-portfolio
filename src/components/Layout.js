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
  // now we want to pass isOpen to the sidebar and also toggleSidebar function.
  return (
    <>
      {/* for the Navbar, we only want to pass the function which is toggleSidebar as the prop and {toggleSidebar} as the function reference */}
      <Navbar toggleSidebar={toggleSidebar} />
      {/* doesn't really matter where you place the sidebar because it is using position-fixed */}
      {/* we need both things: isOpen which is responsible for our class and toggleSidebar={toggleSidebar} since we have the closed button as well */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {/* contents of the page */}
      {children}
      <Footer />
    </>
  )
}

export default Layout
