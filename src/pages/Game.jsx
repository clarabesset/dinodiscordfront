import React, { Component } from 'react';
import Board from './../components/Board';
import socketIO from 'socket.io-client';

export default class Game extends Component {
	componentDidMount() {
    
		console.log('here');
		this.socket = socketIO(process.env.REACT_APP_BACKEND_URL + '/room');
		this.socket.on('message', (data) => {
			console.log(data);
		});
/* 		setInterval(() => this.socket.emit('message', { message: 'My position is: ', position: { x: 3, y: 2 } }), 1000);
 */	}

	render() {
		return (
			<div className="gameContainer">
				<div class="titleGame">Dino Discord</div>
				<div class="boardContainer">
					<Board />
				</div>
			</div>
		);
	}
}
