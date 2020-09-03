import React, { Component } from "react"
import { NavLink } from "react-router-dom"

export default class NavigationComponent extends Component {
  constructor() {
    super()

  }

  render() {
    return (
      <div>
        <NavLink exact to="/">
          HOME
        </NavLink>

        <NavLink to="/about-me">
          ABOUT ME
        </NavLink>

        <button>BLOG</button>
        <button>MISSION STATEMENT </button>
        <button>OUR FAMILY</button>
        {true ? <button>ADD BLOG</button> : null}
      </div>
    )
  }
}