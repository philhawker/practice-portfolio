import React, { Component } from "react"
import axios from 'axios'

import PortfolioItem from "./portfolio-item"

export default class PortfolioContainer extends Component {
  constructor() {
    super()

    this.state = {
      pageTitle: "MISSION STATEMENT",
      isLoading: false,
      data: []
    }

    this.handleFilter = this.handleFilter.bind(this)

  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter
      })
    })
  }

  getPortfolioItems() {
    axios.get("https://philhawker.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        console.log("response data", response)
        this.setState({
          data: response.data.portfolio_items
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem key={item.id} item={item} />
    })
  }

  componentDidMount() {
    this.getPortfolioItems()
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

        {this.portfolioItems()}

      </div>
    )
  }
}