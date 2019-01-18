import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput></UserInput>
        <UserOutput></UserOutput>
      </div>
    );
  }
}

export default App;
