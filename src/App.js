import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {

  state = {
    username : [
      {Name : "roshan"},
      {Name : "rachilies"}
    ]
  };

  usernameHandler = () => {
    this.setState({
      username : [
        {Name : "rachilies"},
        {Name : "roshan"}
      ]
    })
  };

  inputChangeHandler = (event) => {
    this.setState({
      username : [
        {Name: "rachilies"},
        {Name: event.target.value}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <p>First assignment in React</p>
        <UserInput changed = {this.inputChangeHandler.bind(this)}></UserInput>
        <UserOutput username = {this.state.username[0].Name} click = {this.usernameHandler}></UserOutput>
        <UserOutput username = {this.state.username[1].Name} click = {this.usernameHandler}></UserOutput>
      </div>
    );
  }
}

export default App;
