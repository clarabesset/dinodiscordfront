import React from 'react';

export default class Timer extends React.Component {
	constructor() {
		super();
		this.state = {
			breakRemainingSeconds: 3
		};
	}

	countDown = () => {
		setInterval(() => {
			this.setState({ breakRemainingSeconds: this.state.breakRemainingSeconds - 1 });
			if (this.state.breakRemainingSeconds === 0) {
				this.props.stopTimer()
			}
		}, 1000);
	};
	render() {
        var divStyle = {
            color: 'white',
            fontSize: 20,
          };
        // console.log(this.props);
		return (
			<div  style={divStyle}>
				<button onClick={this.countDown}>START</button>
				{this.state.breakRemainingSeconds}
			</div>
		);
	}
}
