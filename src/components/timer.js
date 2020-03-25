import React, { Component } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

class Timer extends Component {
    state = {
        isPlaying: false,
        durationSeconds: 21,
        renderTime: 21,
        colors: [["#dadfe0", 1]]
    };

    startTimer = () => {
        this.setState({
            isPlaying: true,
            colors: [["#ee5253", 0.33], ["#feca57", 0.33], ["#1abc9c"]]
        });

        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
    };

    resetTimer = () => {
        if (this.state.isPlaying === false) {
            this.setState({
                isPlaying: true,
                renderTime: this.state.renderTime,
                colors: [["#ee5253", 0.33], ["#feca57", 0.33], ["#1abc9c"]]
            });
        }
    };

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
                )}

                if (value === 21) {
                    return (
                        <div className="timer">
                        <button className="btn-white" onClick={this.startTimer}>Start</button>
                        <audio className="audio-element">
                            <source src="https://api.coderrocketfuel.com/assets/pomodoro-times-up.mp3"></source>
                        </audio>
                        </div>
                    )}

                    if (value <= 20) {
                        return (
                            <div className="timer">
                            <div className="value">{value}</div>
                            </div>
                        )}
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
