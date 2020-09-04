import React, { Component } from "react"

import BlogTopic from "./blog-topic"

export default class PortfolioContainer extends Component {
  constructor() {
    super()

    this.state = {
      isLoading: false,
      pageTitle: "MISSION STATEMENT",
      data: [
        { title: "For Such a Time As This", category: "Education", slug: 'for-such-a-time-as-this' },
        { title: "Learning The Healers Art", category: "Mental Health", slug: 'learning-the-healers-art' },
        { title: "Praise To The Man", category: "Childrearing", slug: 'praise-to-the-man' },
        { title: "Enemies Part 7 Fear Is A Formidable Foe", category: "Church", slug: 'enemies-part-7-fear-is-a-formidable-foe' }
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
      return <BlogTopic title={topic.title} url={"google.com"} slug={topic.slug} />
    })
  }


  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>
    }
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