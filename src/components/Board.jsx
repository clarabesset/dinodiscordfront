import React, { Component } from 'react';
import Cell from './Cell';
import DinoPicker from './../components/DinoPicker';
import KeyListener from './../components/KeyListener';
import InfoPlayer from './../components/InfoPlayer';
import Waiting from './../components/Waiting';
import Result from '../pages/Result';


export default class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentGrid: [],
			players: [],
			ready: false,
			step: 1 // changer la vue pour les différentes étapes du jeu
		};
	}
	componentDidUpdate() {
		console.log('updated !!!', this.state.players);
		if (this.state.players.length === 1 && this.state.step !== 2) {
			this.setState({ ready: true, step: 2 });
		}

		if (this.state.players.length === 2 && this.state.step === 1 && !this.state.ready) {
			this.setState({ ready: true, step: 2 }, () => {
				this.props.socket.emit('generate-grid');
			});
		}

		if (this.state.currentGrid.length && this.state.step !== 3) {
			console.log('here ... good to go :)');
			this.setState({ step: 3 });
			// return this.launchGame();
		}
	}

	static getDerivedStateFromProps(newProps, state) {
		console.log('@getdirevedstatefrompropsnewProps => ', newProps, state);
		// if (newProps.playersFromServer.length !== state.players) {
		return {
			currentGrid: newProps.currentGrid.length ? newProps.currentGrid : state.currentGrid,
			players:
				newProps.playersFromServer.length !== state.players.length ? newProps.playersFromServer : state.players,
			ready: newProps.ready && newProps.ready === true ? true : false
		};
		// }
		// if (newProps.currentGrid !== null) {
		// 	return {
		// 		currentGrid: newProps.currentGrid
		// 	};
		// } else return null;
	}

	prepareGame() {
		// this.setState({ step: 2 }, () => {
		this.props.socket.emit('generate-grid');
		// });
	}

	launchGame() {
		console.log('to the next step', this.state.players);
		this.setState({ step: 3 });
	}

	setPlayer = (color) => {
		this.props.socket.emit('player-join', {userInfos: this.props.user, color});
	};

	movePlayer = (direction, playerId) => {
		console.log(direction, playerId);
		this.props.socket.emit('player-move', { direction, playerId });
		//this.props.socket.broadcast.emit('player-move', {direction, playerId});
	};

	countPoints = () => {};
	render() {
		return (
			<React.Fragment>
				this.state.step === 3 && (
				<KeyListener user={this.props.user} currentGrid={this.state.currentGrid} movePlayer={this.movePlayer} />
				) );
				{this.state.step === 1 && (
					<DinoPicker availableDinos={this.props.availableDinos} setPlayer={this.setPlayer} />
				)}
				{this.state.step === 2 && <Waiting ready={this.state.ready} />}
				{this.state.step === 3 && (
					<div className="smallGameContainer">
						<React.Fragment>
							<InfoPlayer user={this.props.user} />
							<div className="board">
								{this.state.currentGrid.length &&
									this.state.currentGrid.map((cell, i) => {
										return <Cell player={cell.player} key={i} cell={cell} />;
									})}
							</div>
							<InfoPlayer />
						</React.Fragment>
					</div>
				)}
				{this.state.step === 4 && <Result />}
			</React.Fragment>
		);
	}
}

// setPlayerPositionInGrid(player, cellNumber) {
// 	const gridCopy = [ ...this.state.currentGrid ];
// 	gridCopy[cellNumber].player = player;
// 	this.setState({
// 		currentGrid: gridCopy
// 	});
// }

// launchGame() {
//   console.log('to the next step', this.state.players);

//   // this.props.socket.emit('generate-grid');
//   // this.setPlayerPositionInGrid(this.state.players[0], 0);
//   // this.setPlayerPositionInGrid(this.state.players[1], 99);
//   this.setState({ step: 3 });
// }

// movePlayer = (direction, playerNumber) => {
// 	console.log('player ' + playerNumber + ' moved ' + direction);
// 	const copiedGrid = [ ...this.state.currentGrid ];
// 	const currentCell = copiedGrid.filter((cell) => cell.player && cell.player.nb === playerNumber)[0].nb;
// 	const takenCell = copiedGrid.filter((cell) => cell.taken === true);
// 	const findNextCell = (currentCellNb, nextDirection) => {
// 		const moves = {
// 			up: -10,
// 			right: 1,
// 			down: 10,
// 			left: -1
// 		};
// 		if (true) {
// 			for (let i = 0; i < takenCell.length; i++) {
// 				if (nextDirection === 'up') {
// 					if (currentCellNb - 10 < 0 || currentCellNb - 10 === takenCell[i].nb) return false;
// 				} else if (nextDirection === 'down') {
// 					if (currentCellNb + 10 > 99 || currentCellNb + 10 === takenCell[i].nb) return false;
// 				} else if (nextDirection === 'left') {
// 					const forbiden = [ 0, 10, 20, 30, 40, 50, 60, 70, 80, 90 ];
// 					if (forbiden.includes(currentCellNb) || currentCellNb - 1 === takenCell[i].nb) return false;
// 				} else if (nextDirection === 'right') {
// 					const forbiden = [ 9, 19, 29, 39, 49, 59, 69, 79, 89, 99 ];
// 					if (forbiden.includes(currentCellNb) || currentCellNb + 1 === takenCell[i].nb) return false;
// 				}
// 			}
// 		}
// 		const nextIndex = currentCellNb + moves[nextDirection];
// 		console.log('CURRENT CELL', currentCellNb);
// 		return nextIndex;
// 	};
// 	const findPreviousCell = (currentCellNb, nextDirection) => {
// 		if (nextDirection === 'up') {
// 			let previousCell = currentCellNb + 10;
// 			console.log('previous cell ???', previousCell);
// 			console.log(' currentCell ???', currentCell);
// 			return previousCell;
// 		} else if (nextDirection === 'down') {
// 			let previousCell = currentCellNb - 10;
// 			console.log('previous cell ???', previousCell);
// 			return previousCell;
// 		} else if (nextDirection === 'left') {
// 			let previousCell = currentCellNb + 1;
// 			console.log('previous cell ???', previousCell);
// 			return previousCell;
// 		} else if (nextDirection === 'right') {
// 			let previousCell = currentCellNb - 1;
// 			console.log('previous cell ???', previousCell);
// 			return previousCell;
// 		}
// 		console.log('currentCellNb ???', currentCellNb);
// 	};
// 	const nextCell = findNextCell(currentCell, direction);
// 	const previousCell = findPreviousCell(currentCell, direction);
// 	console.log('previous cell', previousCell);

// 	if (nextCell) {
// 		copiedGrid[currentCell].player = null;
// 		copiedGrid[currentCell].taken = false;
// 		copiedGrid[currentCell].color = this.state.players[0].color;
// 		copiedGrid[nextCell].player = this.state.players[playerNumber - 1];
// 		copiedGrid[nextCell].taken = true;
// 		copiedGrid[nextCell].color = this.state.players[0].color;
// 		this.setState({ currentGrid: copiedGrid }, () => {
// 			console.log(this.props.socket); // use socket to broadcast player's move
// 			// this.props.socket.emit("player-move", {})
// 			// socket.emit('news', { hello: 'world' });
// 		});
// 	}

// 	return;