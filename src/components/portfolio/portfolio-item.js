// This is an example of a functional component. meaning this is just for creating a simple function in this file without managing heavy logic and data
import React from "react"
import { Link } from 'react-router-dom'

export default function (props) {
  // render statement is not required in a simple functional component

  const { id, description, thumb_image_url, logo } = props.item
  return (
    <div>
      <div>
        <img src={thumb_image_url} />
        {description}
      </div>
      <Link to={`/portfolio/${id}`} >Link</Link>
    </div>
  )
}