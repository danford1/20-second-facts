import React, { Component } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

class Timer extends Component {
  state = {
    isPlaying: false,
    durationSeconds: 6,
    colors: [["#dadfe0", 1]]
  };

  selectRandom = () => {
    // load fact mp3 files as array
    let baseURL = "https://d3oyjle1domoyz.cloudfront.net/";

    let playlist = [
      baseURL + "0.mp3",
      baseURL + "1.mp3",
      baseURL + "2.mp3"];

    // determine last played fact, then play different fact
    let lastSong = null;
    let selection = null;
    let player = document.getElementsByClassName("audioplayer")[0]; // Get audio element
    player.autoplay = false;

    while (selection === lastSong) {
      // Repeat until different song is selected
      selection = Math.floor(Math.random() * playlist.length);
    }

    lastSong = selection; // Remember last fact that was played
    player.src = playlist[selection]; // Tell HTML the location of the new audio
    player.play(); // Start audio
  };

  startTimer = () => {
    this.selectRandom();

    this.setState({
      isPlaying: true,
      durationSeconds: 6,
      colors: [["#ee5253", 0.33], ["#feca57", 0.33], ["#1abc9c"]]
    });
  };

  stopAudio = () => {
    let player = document.getElementsByClassName("audioplayer")[0]; // Get audio element
    player.pause();

    // this.setState({
    //
    // });
  };

  endTimer = () => {
    this.stopAudio();

    // this.setState({
    //   isPlaying: false,
    //   colors: [["#dadfe0", 1]],
    //   durationSeconds: 6
    // });
  };

  resetTimer = () => {
    this.selectRandom();

    this.setState({
      isPlaying: true,
      durationSeconds: 6,
      colors: [["#ee5253", 0.33], ["#feca57", 0.33], ["#1abc9c"]]
    });
  };

  renderTime = time => {
    if (time === 0) {
      return (
        <div className="timer">
          <button className="btn-white" onClick={this.resetTimer}>
            Again
          </button>
        </div>
      );
    }

    if (time === 6) {
      return (
        <div className="timer">
          <button className="btn-white" onClick={this.startTimer}>
            Start
          </button>
        </div>
      );
    }

    if (time <= 5) {
      return (
        <div className="timer">
          <div className="value">{time}</div>
        </div>
      );
    }
  };

  render() {
    return (
      <CountdownCircleTimer
        isPlaying={this.state.isPlaying}
        size={240}
        durationSeconds={this.state.durationSeconds}
        colors={this.state.colors}
        trailColor={"#dadfe0"}
        strokeWidth={20}
        renderTime={this.renderTime.bind(this)}
        onComplete={() => {
          this.endTimer();
        }}
      />
    );
  }
}

export default Timer;
