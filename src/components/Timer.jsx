import React, { Component } from "react";

export default class TimerBeforeGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      go: false,
      remainingSeconds: this.props.limit
    };
    this.countDown();
  }

  static getDerivedStateFromProps(newProps, state) {
    return {
      go: newProps.go
    };
  }

  countDown = () => {
    const intervalId = setInterval(() => {
      if (this.state.go) {
        this.setState({ remainingSeconds: this.state.remainingSeconds - 1 });
        if (this.state.remainingSeconds === 0) {
          clearInterval(intervalId);
          this.props.clbk();
        }
      }
    }, 1000);
  };

  render() {
    return <div className="timerBoard">{this.state.remainingSeconds}</div>;
  }
}
