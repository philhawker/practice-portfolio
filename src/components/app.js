import React, { Component } from 'react';

import PortfolioContainer from './portfolio/portfolio-container'
import NavigationContainer from './navigation/navigation-container'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavigationContainer />
        <h1>Hawker Family Blog</h1>
        <h2>Christ | Covenants | Faith</h2>
        <PortfolioContainer />
      </div>
    );
  }
}
