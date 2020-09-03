import React, { Component } from "react"

export default class NavigationComponent extends Component {
  constructor() {
    super()

  }

  render() {
    return (
      <div>
        <button>HOME</button>
        <button>BLOG</button>
        <button>ABOUT ME</button>
        <button>MISSION STATEMENT </button>
        <button>OUR FAMILY</button>
        <button>ADD BLOG</button>
      </div>
    )
  }
}