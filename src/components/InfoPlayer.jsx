import React, { Component } from 'react';
import blue from './../img/blue_dino_short.gif';
import green from './../img/green_dino_short.gif';
import yellow from './../img/yellow_dino_short.gif';
import red from './../img/red_dino_short.gif';

const colors = {
	blue,
	red,
	yellow,
	green
};

export default class InfoPlayer extends Component {
	render() {
		console.log(this.props.player);
		return (
			<div>
				<div className="infoBoard">
					<h2>{this.props.user.username}</h2>
					<img src={colors[this.props.player.color]} alt="player dino" />
					<br />
				</div>
			</div>
		);
	}
}
