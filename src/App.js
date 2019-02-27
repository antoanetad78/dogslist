import React, { Component } from 'react';
import './App.css';
import DogsListContainer from './components/DogsListContainer'
import { Route } from 'react-router-dom'
import DogBreedImagesContainer from './components/DogBreedImagesContainer';




//DO NOT FORGET THAT WHATWEVER WE WANT TO SHOW TO THE BROWSER WINDOW SHOULD BE INSTANTIATED HERE!!!
//WE WANT TO SHOW THA PARENT CONTAINER, IN THIS CASE THIS IS DogsListContainer!!!!!!!!!!!!!!!!!!!!

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component = {DogsListContainer} />
        <main>
          <Route path = '/dog-breeds/:breed' component = {DogBreedImagesContainer} />
          
        </main>
      </div>

    );
  }
}

export default App;
