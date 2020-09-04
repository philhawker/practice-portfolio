import React, { Component } from "react"
import { NavLink } from "react-router-dom"

export default class NavigationComponent extends Component {
  constructor() {
    super()

  }

  render() {
    return (
      <div>
        <NavLink exact to="/" activeClassName="nav-link-active">HOME</NavLink>
        <NavLink to="/mission" activeClassName="nav-link-active">OUR MISSION</NavLink>
        <NavLink to="/about-me" activeClassName="nav-link-active">ABOUT ME</NavLink>
        <NavLink to="/blog" activeClassName="nav-link-active">BLOG</NavLink>
        <NavLink to="/our-family" activeClassName="nav-link-active">OUR FAMILY</NavLink>
        <NavLink to="/contact" activeClassName="nav-link-active">CONTACT</NavLink>

        {false ? <button>ADD BLOG</button> : null}
      </div>
    )
  }
}