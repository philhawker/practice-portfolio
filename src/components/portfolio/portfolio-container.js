import React, { Component } from "react"

import BlogTopic from "./blog-topics"

export default class PortfolioContainer extends Component {
  constructor() {
    super()

    this.state = {
      pageTitle: "MISSION STATEMENT",
      data: [
        { title: "For Such a Time As This", category: "Education" },
        { title: "Learning The Healer's Art", category: "Mental Health" },
        { title: "Praise To The Man", category: "Childrearing" },
        { title: "Enemies, Part 7: Fear Is A Formidable Foe", category: "Church" }
      ]
    }

    this.handleFilter = this.handleFilter.bind(this)
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(topic => {
        return topic.category === filter
      })
    })
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

        <button onClick={() => this.handleFilter('Education')} >Education</button>
        <button onClick={() => this.handleFilter('Mental Health')}>Mental Health</button>
        <button onClick={() => this.handleFilter('Childrearing')}>Childrearing</button>
        <button onClick={() => this.handleFilter('Church')}>Church</button>
        {this.blogTopics()}


      </div>
    )
  }
}