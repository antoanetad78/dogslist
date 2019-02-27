import React, { Component } from 'react';
import './App.css';
import DogsList from './components/DogsList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <DogsList />
      </div>
    );
  }
}

export default App;
