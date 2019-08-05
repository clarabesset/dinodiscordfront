import React, { Component } from 'react';
import { AuthConsumer } from '../auth/Guard';
import Board from './../components/Board';
import socketIO from 'socket.io-client';
import blue from './../img/blue_dino_short.gif';
import green from './../img/green_dino_short.gif';
import yellow from './../img/yellow_dino_short.gif';
import red from './../img/red_dino_short.gif';

export default class Game extends Component {
	state = {
		socketResponse: null,
		socket: null,
		playersFromServer: [],
		currentGrid: [],
		ready: false,
		result: null,
		dinos: [
			{ color: 'red', img: red },
			{ color: 'blue', img: blue },
			{ color: 'green', img: green },
			{ color: 'yellow', img: yellow }
		]
	};

	setAvailableDinos = (pickedColor) => {
		const remainingDinos = this.state.dinos.filter((d) => d.color !== pickedColor);
		this.setState({ dinos: remainingDinos });
	}; // fait disparaître le dino choisi par le joueur 1

	componentDidMount() {
		this.setState({ socket: socketIO.connect(process.env.REACT_APP_BACKEND_URL + '/room') }, () => {
			this.state.socket.on('confirm-player-join', (players) => {
				console.log('player has join the waiting room', players);
				this.setState({ playersFromServer: players });
			});

			this.state.socket.on('error-log', (error) => {
				console.warn(error);
			});
			this.state.socket.on('remove-one-dino', (color) => {
				this.setAvailableDinos(color);
			});

			this.state.socket.on('ready-to-play', (data) => {
				this.setState({ currentGrid: data.gridModel, playersFromServer: data.players })
			});

			this.state.socket.on('update-grid', (updatedGrid) => {
				this.setState({ currentGrid: updatedGrid });
			});

			this.state.socket.on('set-result', (result) => {
				this.setState({ result: result });
			});
		});
	}
	render() {
		return (
			<div className="gameContainer">
				<div class="titleGame">Dino Discord</div>
				<div class="boardContainer">
					<AuthConsumer>
						{({ user }) => {
							return (user &&
								<Board
									result={this.state.result}
									user={user}
									availableDinos={this.state.dinos}
									ready={this.state.ready}
									currentGrid={this.state.currentGrid}
									playersFromServer={this.state.playersFromServer}
									socket={this.state.socket}
								/>
							);
						}}
					</AuthConsumer>
				</div>
			</div>
		);
	}
}
