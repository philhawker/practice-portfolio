import React, { Component } from 'react';
import Time from "./time"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Hawker Family Blog</h1>
        <h2>Christ | Covenants | Faith</h2>
        <Time />
      </div>
    );
  }
}
