import React, { Component } from "react"

import BlogTopics from "./blog-topics"

export default class PortfolioContainer extends Component {
  constructor() {
    super()
    console.log("portoflio container has been rendered")
  }
  blogTopics() {
    const data = ["Education", "Mental Health", "Childrearing", "Church"]

    return data.map(topic => {
      return <BlogTopics title={topic} />
    })
  }

  render() {
    return (
      <div>
        <h2>Portfolio items go here update...</h2>
        {this.blogTopics()}
      </div>
    )
  }
}