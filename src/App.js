import React from "react";
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./style.css";

const renderTime = value => {
  if (value === 0) {
    return <div className="timer">All clean!</div>;
  }

  return (
    <div className="timer">
      <div className="value">{value}</div>
      <div className="text">Keep</div>
      <div className="text">washing!</div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>
        Wash hands, learn things.
      </h1>
      <p className="subtitle">
      #20secondfacts
      </p>
      <CountdownCircleTimer
        isPlaying
        size={240}
        durationSeconds={20}
        colors={[["#ee5253", 0.33], ["#feca57", 0.33], ["#1abc9c"]]}
        strokeWidth={20}
        renderTime={renderTime}
        onComplete={() => [false]}
      />
  <div className="info">
        Wash again...
    </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
