import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import NavigationContainer from './navigation/navigation-container'
import Home from './pages/home'
import AboutMe from './pages/about-me'
import Blog from './pages/blog'
import Mission from './pages/mission'
import OurFamily from './pages/our-family'
import Contact from './pages/contact'

export default class App extends Component {
  render() {
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
            </Switch>

          </div>
        </Router>

      </div>
    );
  }
}
