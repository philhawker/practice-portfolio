import React, { Component } from "react"
import { NavLink } from "react-router-dom"

export default class NavigationComponent extends Component {
  constructor() {
    super()

  }

  render() {
    return (
      <div>
        <NavLink exact to="/">HOME</NavLink>
        <NavLink to="/mission">OUR MISSION</NavLink>
        <NavLink to="/about-me">ABOUT ME</NavLink>
        <NavLink to="/blog">BLOG</NavLink>
        <NavLink to="/our-family">OUR FAMILY</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>

        {false ? <button>ADD BLOG</button> : null}
      </div>
    )
  }
}