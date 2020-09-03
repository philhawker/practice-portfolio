import React, { Component } from "react"

import BlogTopic from "./blog-topic"

export default class PortfolioContainer extends Component {
  constructor() {
    super()

    console.log("portoflio container has been rendered")
  }
  blogTopic() {
    const data = ["Education", "Mental Health", "Childrearing", "Church"]

    return data.map(topic => {
      return <BlogTopic title={topic} url={"google.com"} />
    })
  }

  render() {
    return (
      <div>
        <h2>Portfolio items go here update...</h2>
        {this.blogTopic()}
      </div>
    )
  }
}