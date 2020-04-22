import React, { Component } from "react";
import Title from "./components/title";
import Timer from "./components/timer";
import Audio from "./components/audio";
import "./style.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <div className="timer">
          <Timer />
        </div>
        <Audio />
      </div>
    );
  }
}

export default App;
