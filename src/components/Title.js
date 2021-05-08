import React from "react"

// takes in a title pro as a parameter
const Title = ({ title }) => {
  return (
    <div className="section-title">
      {/* whatever title youre passing in as a prop and if the title doesn't exist
      use "default title" */}
      <h2>{title || "default title"}</h2>
      <div className="underline"></div>
    </div>
  )
}

export default Title
