import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import PortfolioContainer from './portfolio/portfolio-container'
import NavigationContainer from './navigation/navigation-container'
import Home from './pages/home'
import AboutMe from './pages/about-me'

export default class App extends Component {
  render() {
    return (
      <div className='app'>

        <Router>
          <div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={AboutMe} />
            </Switch>

          </div>
        </Router>

        <h1>Hawker Family Blog</h1>
        <h2>Christ | Covenants | Faith</h2>
        <PortfolioContainer />
      </div>
    );
  }
}
