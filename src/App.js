import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Maze from './components/Maze';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Maze />
      </div>
    );
  }
}

export default App;
