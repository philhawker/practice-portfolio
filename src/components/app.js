import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


import NavigationContainer from './navigation/navigation-container'
import Home from './pages/home'
import AboutMe from './pages/about-me'
import Blog from './pages/blog'
import Mission from './pages/mission'
import OurFamily from './pages/our-family'
import Contact from './pages/contact'
import PortfolioDetail from './portfolio/portfolio-detail'
import NoMatch from './pages/no-match'

export default class App extends Component {
  constructor() {
    super()

    this.getPortfolioItems = this.getPortfolioItems.bind(this)
  }

  getPortfolioItems() {
    axios.get("https://philhawker.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        console.log("response data", response);
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    this.getPortfolioItems()
    return (
      <div className='app'>

        <Router>
          <div>
            <h1>Hawker Family Blog</h1>
            <h2>Christ | Covenants | Faith</h2>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/mission" component={Mission} />
              <Route path="/about-me" component={AboutMe} />
              <Route path="/blog" component={Blog} />
              <Route path="/our-family" component={OurFamily} />
              <Route path="/contact" component={Contact} />
              <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={NoMatch} />
            </Switch>

          </div>
        </Router>

      </div>
    );
  }
}
