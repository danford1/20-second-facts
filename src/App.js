import React, { Component } from "react";

import Timer from "./components/timer";

import "./style.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>
            Wash hands, learn things.
          </h1>
          <p className="subtitle">
          #20secondfacts
          </p>
          <div className="timer">
              <Timer />
          </div>
      </div>
    );
  }
}

export default App;
