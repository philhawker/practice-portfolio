// This is an example of a functional component. meaning this is just for creating a simple function in this file without managing heavy logic and data
import React from "react"

export default function (props) {
  // render statement is not required in a simple functional component
  return (
    <div>
      <h3>{props.title}</h3>
      <h4>{props.url}</h4>
    </div>
  )
}