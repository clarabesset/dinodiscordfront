import React, { Component } from 'react';
import Board from './../components/Board';
import socketIO from 'socket.io-client';
import blue from "./../img/blue_dino_short.gif";
import green from "./../img/green_dino_short.gif";
import yellow from "./../img/yellow_dino_short.gif";
import red from "./../img/red_dino_short.gif";

export default class Game extends Component {
	state = {
		socketResponse: null,
		socket: null,
		playersFromServer: [],
    currentGrid: [],
    ready: false,
    dinos: [
      { color: "red", img: red },
      { color: "blue", img: blue },
      { color: "green", img: green },
      { color: "yellow", img: yellow }
    ]
  };
  
  setAvailableDinos = pickedColor => {
    console.log(pickedColor);
    const remainingDinos = this.state.dinos.filter(d => d.color !== pickedColor);
    this.setState({ dinos: remainingDinos });
  };

	componentDidMount() {
		this.setState({ socket: socketIO(process.env.REACT_APP_BACKEND_URL + '/room') }, () => {

			this.state.socket.on('confirm-player-join', (players) => {
				console.log('player has join the waiting room', players);
				this.setState({ playersFromServer: players });
			});

			this.state.socket.on('remove-one-dino', (color) => {
				this.setAvailableDinos(color);
      })

			this.state.socket.on('ready-to-play', (data) => {
        console.log('grid has been served', data);
				this.setState({ currentGrid: data.gridModel, playersFromServer: data.players }, () => {
					console.log(this.state.playersFromServer);
					console.log(this.state.currentGrid);
				});
			});

		});
	}
	render() {
		return (
			<div className="gameContainer">
				<div class="titleGame">Dino Discord</div>
				<div class="boardContainer">
          <Board
            availableDinos={this.state.dinos}
						ready={this.state.ready}
						currentGrid={this.state.currentGrid}
						playersFromServer={this.state.playersFromServer}
						socket={this.state.socket}
					/>
				</div>
			</div>
		);
	}
}
