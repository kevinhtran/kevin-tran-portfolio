import React from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children }) => {
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
