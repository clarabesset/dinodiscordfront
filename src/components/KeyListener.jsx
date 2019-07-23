import React, { Component } from 'react';

export default class KeyListener extends Component {
	handleMovements = (e) => {
		e.preventDefault();
           
            const moves = {
                40: "down",
                39: "right",
                37: "left",
                38: "up"
            };
            this.props.movePlayer(moves[e.keyCode], 1);
		// if (e.keyCode === 40) {
		// 	console.log('P1 Bottom');
		// }
		// if (e.keyCode === 39) {
		// 	console.log('P1 Right');
		// }
		// if (e.keyCode === 37) {
		// 	console.log('P1 Left');
		// }
		// if (e.keyCode === 90) {
		// 	console.log('P2 Up');
		// }
		// if (e.keyCode === 40) {
		// 	console.log('P2 Bottom');
		// }
		// if (e.keyCode === 83) {
		// 	console.log('P2 Right');
		// }
		// if (e.keyCode === 81) {
		// 	console.log('P2 Left');
		// }
	};

	render() {
		// console.log(this.props.currentGrid)
		return <button onKeyUp={this.handleMovements}>Up</button>;
	}
}
