import React, { Component } from "react";

class Audio extends Component {
  state = {
    playlist: [],
    time: this.props.time,
    prevAudio: null,
    selectedAudio: null
  };

  createPlaylist = () => {
    // load fact mp3 files as array
    let baseURL = "https://d3oyjle1domoyz.cloudfront.net/";

    let playlist = [
        baseURL + "0.mp3",
        baseURL + "1.mp3",
        baseURL + "2.mp3"
    ];

    this.setState({playlist: playlist})
  }

  selectRandom = () => {
      // load fact mp3 files as array
      let baseURL = "https://d3oyjle1domoyz.cloudfront.net/";

      let playlist = [
          baseURL + "0.mp3",
          baseURL + "1.mp3",
          baseURL + "2.mp3"
      ];

      // determine last played fact, then play different fact
      let lastSong = null;
      let selection = null;
      let player = document.getElementsByClassName("audioplayer")[0]; // Get audio element
      player.autoplay = false;

      while(selection === lastSong){ // Repeat until different song is selected
          selection = Math.floor(Math.random() * playlist.length);
      }

      lastSong = selection; // Remember last fact that was played
      player.src = playlist[selection]; // Tell HTML the location of the new audio
      player.play(); // Start audio
  };

  stopAudio = () => {
      let player = document.getElementsByClassName("audioplayer")[0]; // Get audio element
      player.pause();
  }

  playAudio = () => {
      if (this.renderTime === 0) {
          this.stopAudio()
      }

      if (this.renderTime < 6) {
          this.selectRandom()
      }
  };

  render() {
    return <audio className="audioplayer"></audio>;
  }
}

export default Audio;
