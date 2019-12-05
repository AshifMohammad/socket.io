import React, { Component } from 'react';
import './App.css';
import DrawingForm from "./drawingForm";
import DrawingList from "./drawingList";

class App extends Component {

  state = {
    timestamp: 'no timestamp yet'
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Our awesome drawing app</h2>
        </div>
        <DrawingForm />
        <DrawingList />

      </div>
    );
  }
}

export default App;
