import React, { Component } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

class Timer extends Component {
    state = {
        isPlaying: false,
        durationSeconds: 31,
        colors: [["#dadfe0", 1]]
    };

    startTimer = () => {
        this.setState({
            isPlaying: true,
            colors: [["#ee5253", 0.33], ["#feca57", 0.33], ["#1abc9c"]]
        });

    };

    resetTimer = () => {
        if (this.state.isPlaying === false) {
            this.setState({
                isPlaying: true,
                colors: [["#ee5253", 0.33], ["#feca57", 0.33], ["#1abc9c"]]
            });
        }
    };

    playAudio() {
      const audioEl = document.getElementsByClassName("audio-element")[0]
      audioEl.play()
    }

    playFact = () => {
        playAudio();
        this.startTimer;
    }

    sound = () => {
        this.myRef = React.createRef();
        const audioSource = "http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3"
        return (
            <audio ref={this.myRef} src={audioSource} autoPlay/>
        )
    }

    // playFact = () => {
    //     const audioEl = document.getElementsByClassName("audio-element")[0]
    //     audioEl.play();
    // }

    render() {
        const isPlaying = this.state.isPlaying;

        const durationSeconds = this.state.durationSeconds;

        const colors = this.state.colors;

        const renderTime = value => {
            if (value === 0) {
                return (
                    <div className="timer">
                    <button className="btn-white" onClick={this.resetTimer}>Start</button>
                    </div>
                )
            }

            if (value === 31) {
                return (
                    <div className="timer">
                    <button className="btn-white" onClick={this.startTimer}>Start</button>
                    </div>
                )
            }

            if (value <= 30) {
                this.sound();
                return (
                    <div className="timer">
                        <div className="value">{value}</div>
                        <audio className="audio-element">
                            <source src={this.audioSource}></source>
                        </audio>
                    </div>
                )
            }
        };

        return (
            <CountdownCircleTimer
            isPlaying={isPlaying}
            size={240}
            durationSeconds={durationSeconds}
            colors={colors}
            trailColor={"#dadfe0"}
            strokeWidth={20}
            renderTime={renderTime}
            onComplete={() => [false]}
            />
        );
    }
}

    export default Timer;
