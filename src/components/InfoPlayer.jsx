import React, { Component } from 'react';
export default class InfoPlayer extends Component {
	state = {
		users: []
	};
	render() {
		console.log(this.props.user);
		return (
			<div>
				<div className="infoBoard">
					<h2>{this.props.user.username}</h2>
					<br />
				{/* 	<h2>Score: {this.props.user.score} </h2> */}
			</div>
			</div>
		);
	}
}
