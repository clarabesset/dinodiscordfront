import React, { Component } from 'react';

export default class TimerBeforeGame extends Component {
	constructor() {
		super();
		this.state = {
            go: false,
			breakRemainingSeconds: 5
        };
        this.countDown()
	}

	static getDerivedStateFromProps(newProps, state) {
		return {
			go: newProps.go
		};
	}

	countDown = () => {
		setInterval(() => {
            if (this.state.go) {
                this.setState({ breakRemainingSeconds: this.state.breakRemainingSeconds - 1 });
                if (this.state.breakRemainingSeconds === 0) {
                    this.props.stopTimer();
                }
            }
	
		}, 1000);
	};

	render() {
		var divStyle = {
			color: 'white',
			fontSize: 20
		};
		// console.log(this.props);
		return <div style={divStyle}>{this.state.breakRemainingSeconds}</div>;
	}
}
