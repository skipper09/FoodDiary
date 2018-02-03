import React, { Component } from 'react';
import { Header } from './components/header/header.js';
import Body from './components/body/body.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
