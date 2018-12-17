import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ruleset from './Ruleset';


// Root component 
class App extends Component {
  render() {
    return (
      <div id="App">
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to VS-Color Picker!</h1>
          </header>
        </div>
        <Ruleset />
      </div>
    );
  }
}

export default App;
