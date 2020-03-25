import React, { Component } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

class Timer extends Component {
    state = {
        isPlaying: false,
        durationSeconds: 20,
        colors: [["#dadfe0", 1]]
    };

    startTimer = () => {
        this.setState({
            isPlaying: true,
            colors: [["#ee5253", 0.33], ["#feca57", 0.33], ["#1abc9c"]]
        });
    };

    resetTimer = () => {
        this.setState({
            isPlaying: true,
            durationSeconds: 20,
            colors: [["#ee5253", 0.33], ["#feca57", 0.33], ["#1abc9c"]]
        });

    };

    render() {
        const isPlaying = this.state.isPlaying;

        const durationSeconds = this.state.durationSeconds;

        const colors = this.state.colors;

        const renderTime = value => {
            if (value === 0) {
                return (
                <div className="timer">
                    <button className="btn-white" onClick={this.resetTimer}>Wash again</button>
                </div>
            )}

            if (value === 20) {
                return (
                <div className="timer">
                    <button className="btn-white" onClick={this.startTimer}>Start</button>
                </div>
            )}

            return (
                <div className="timer">
                    <div className="value">{value}</div>
                </div>
            );
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
