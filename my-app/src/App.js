import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Now i am enter in React Js world.</h1>
        </header>
        <p className="App-intro">
          It's my first React js App waoo.
        </p>
      </div>
    );
  }
}

export default App;
