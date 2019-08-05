import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
	render() {
		return (
			<div className="homeContainer">
				<div>
					<h1 className="titleHome">DINO DISCORD</h1>
				</div>
				<div className="adventure">
					<Link to="/intro">
						<p className=" btnHome">Begin the adventure</p>
					</Link>
				</div>
				<div className="iknow">
					<Link to="/signin">
						<p className=" btnHome">I've been here before</p>
					</Link>
				</div>
			</div>
		);
	}
}
