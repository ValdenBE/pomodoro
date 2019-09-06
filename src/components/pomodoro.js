import React, {Component} from "react";
import Buttons from "./buttons";

const format = time => {
    return [Math.floor(time / 60), time % 60];
};
export default class pomodoro extends Component {
    constructor(props) {
        super(props);
        this.onStart = this.onStart.bind(this);
        this.onPause = this.onPause.bind(this);
        this.onReset = this.onReset.bind(this);
        this.onIncrease = this.onIncrease.bind(this);
        this.onDecrease = this.onDecrease.bind(this);
        this.state = {
            clock: false,
            time: 60 * 25,
        };
    }

    onStart() {
        this.setState({clock: true});
        this.setInterval = setInterval(() => {
            if (this.state.time <= 0) {
                clearInterval(this.setInterval);
            } else {
                this.setState(prevState => ({time: --prevState.time}));
            }
        }, 1000);
    }
    onPause() {
        this.setState({clock: false});
        clearInterval(this.setInterval);
    }
    onReset() {
        this.setState({clock: false});
        this.setState(() => ({time: 25 * 60}));
        clearInterval(this.setInterval);
    }
    onIncrease() {
        if (!this.state.clock) {
            this.setState(prevState => ({time: prevState.time + 60}));
        }
    }
    onDecrease() {
        if (!this.state.clock) {
            if (this.state.time - 60 < 0) {
                this.setState(() => ({time: 0}));
            } else {
                this.setState(prevState => ({time: prevState.time - 60}));
            }
        }
    }

    render() {
        const start = !this.state.clock ? (
            <Buttons
                handleButton={this.onStart}
                value={"START"}
                className={"button is-large is-success is-rounded is-start"}
            />
        ) : null;

        const pause = this.state.clock ? (
            <Buttons
                handleButton={this.onPause}
                value={"PAUSE"}
                className={"button is-large is-success is-rounded is-start"}
            />
        ) : null;

        return (
            <div className={"container"}>
                <p id={"timer"}>
                    <span>{}</span>
                    <span id={"timer-mins"}>
                        {`${format(this.state.time)[0]}`}
                    </span>
                    <span className={"label"}>{"MIN(S)"}</span>
                    <span id={"timer-secs"}>
                        {`${format(this.state.time)[1]}`}
                    </span>
                    <span className={"label"}>{"SEC(S)"}</span>
                    <Buttons
                        handleButton={this.onIncrease}
                        value={"+"}
                        className={"button is-medium is-link is-rounded incDec"}
                    />
                    {start}
                    {pause}
                    <Buttons
                        handleButton={this.onReset}
                        value={"RESET"}
                        className={
                            "button is-large is-warning is-rounded is-reset"
                        }
                    />
                    <Buttons
                        handleButton={this.onDecrease}
                        value={"-"}
                        className={"button is-medium is-link is-rounded incDec"}
                    />
                </p>
            </div>
        );
    }
}
