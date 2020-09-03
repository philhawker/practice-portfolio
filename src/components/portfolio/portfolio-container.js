import React, { Component } from "react"

import PortfolioItem from "./portfolio-item"

export default class PortfolioContainer extends Component {
  constructor() {
    super()
    console.log("portoflio container has been rendered")
  }
  render() {
    return (
      <div>
        <h2>Portfolio items go here update...</h2>

        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
      </div>
    )
  }
}