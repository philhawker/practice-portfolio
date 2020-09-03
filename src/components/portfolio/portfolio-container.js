import React, { Component } from "react"

import BlogTopic from "./blog-topics"

export default class PortfolioContainer extends Component {
  constructor() {
    super()

    this.state = {
      pageTitle: "Welcome to the blog bitch",
      data: [
        { title: "Education" },
        { title: "Mental Health" },
        { title: "Childrearing" },
        { title: "Church" }
      ]
    }
  }
  blogTopics() {
    return this.state.data.map(topic => {
      return <BlogTopic title={topic.title} url={"google.com"} />
    })
  }

  render() {
    return (
      <div>
        <h2>{this.state.pageTitle}</h2>
        {this.blogTopics()}
      </div>
    )
  }
}