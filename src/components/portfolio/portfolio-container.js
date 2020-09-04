import React, { Component } from "react"
import axios from 'axios'

import BlogTopic from "./blog-topic"

export default class PortfolioContainer extends Component {
  constructor() {
    super()

    this.state = {
      isLoading: false,
      pageTitle: "MISSION STATEMENT",
      data: []
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

  getBlogTopics() {
    axios.get("https://philhawker.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        this.setState({
          data: response.data.portfolio_items
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  blogTopics() {
    return this.state.data.map(topic => {
      return <BlogTopic title={topic.name} url={topic.url} slug={topic.id} />
    })
  }

  componentDidMount() {
    this.getBlogTopics()
  }


  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>
    }

    this.getBlogTopics()

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