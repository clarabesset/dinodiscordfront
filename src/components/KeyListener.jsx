import React, { Component } from 'react';

export default class KeyListener extends Component {
	constructor(props) {
		super(props);
		this.handleMovements();
		console.log("----------------");
		
		console.log(this.props)
	}

	handleMovements = () => {
		// e.preventDefault();
		window.addEventListener("keyup", (e) => {
			const moves = {
				40: 'down',
				39: 'right',
				37: 'left',
				38: 'up'
			};

			const possibleKeys = Object.keys(moves).map(k => Number(k));

			if (possibleKeys.includes(e.keyCode)) this.props.movePlayer(moves[e.keyCode], this.props.user._id);
		})

	};

	render() {
		return <></>;
	}
}
