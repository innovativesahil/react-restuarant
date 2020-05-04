import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import RestaurantCard from './components/RestaurantCard'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <RestaurantCard />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
