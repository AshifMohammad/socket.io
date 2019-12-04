import React, { Component } from 'react';
import './App.css';
import {subscribeToTimer} from "./api"


class App extends Component {
    state={
        timestamp: "no timestamp is set"
    }

    componentDidMount() {
        subscribeToTimer(timestamp=>{this.setState({timestamp})})

    }

    render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Socket.io Application By Ashif Zafar</h2>
        </div>
        Watch by Socket.io : {this.state.timestamp}
      </div>
    );
  }
}


export default App;
