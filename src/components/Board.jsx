import React, { Component } from 'react';
import Cell from './Cell';
import DinoPicker from './../components/DinoPicker';
import KeyListener from './../components/KeyListener';
import InfoPlayer from './../components/InfoPlayer';
import Waiting from './../components/Waiting';
import Result from '../pages/Result';
import Timer from './Timer';
import MusicGame from '../components/MusicGame';

export default class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentGrid: [],
			players: [],
			ready: false,
			launched: false,
			step: 1 // changer la vue pour les différentes étapes du jeu
		};
	}
	componentDidUpdate() {
		if (this.state.players.length === 1 && this.state.step !== 2) {
			this.setState({ ready: true, step: 2 });
		}
		if (this.state.players.length === 2 && this.state.step === 1 && !this.state.ready) {
			this.setState({ ready: true, step: 2 }, () => {
				this.props.socket.emit('generate-grid');
			});
		}
		if (this.state.currentGrid.length && this.state.step === 2) {
			this.setState({ step: 3 });
		}
	}

	static getDerivedStateFromProps(newProps, state) {
		// console.log('@getdirevedstatefrompropsnewProps => ', newProps, state);
		return {
			currentGrid: newProps.currentGrid.length ? newProps.currentGrid : state.currentGrid,
			players:
				newProps.playersFromServer.length !== state.players.length ? newProps.playersFromServer : state.players,
			ready: newProps.ready && newProps.ready === true ? true : false
		};
	}

	timer = () => {
		this.child.current.countDown();
	};

	prepareGame() {
		// this.setState({ step: 2 }, () => {
		this.props.socket.emit('generate-grid');
		// });
	}

	launchGame() {
		// console.log('to the next step', this.state.players);
		this.setState({ step: 3 });
	}

	setPlayer = (color) => {
		this.props.socket.emit('player-join', { userInfos: this.props.user, color });
	};

	movePlayer = (direction, playerId) => {
		// console.log(direction, playerId);
		this.props.socket.emit('player-move', { direction, playerId });
		//this.props.socket.broadcast.emit('player-move', {direction, playerId});
	};

	// setGameCountDown = () => {
	// 	console.log("@setgamecountDown")
	// 	// this.setState = { go: true };
	// 	setInterval(() => {
	// 		console.log('this is being called from the board');
	// 	}, 1000);
	// };

	startGame = () => {
		console.log('je start game', this.setState);
		this.setState({ launched: true });
	};

	stopGame = () => {
		console.log('je marrete', this.setState);
		this.setState({ step: 4 }, () => {
			this.props.socket.emit('get-result', this.state.players);
		});
	};

	render() {
		return (
			<React.Fragment>
				{this.state.step === 3 && (
					<div>
						<KeyListener
							user={this.props.user}
							currentGrid={this.state.currentGrid}
							movePlayer={this.movePlayer}
						/>
						<MusicGame />
					</div>
				)}
				{this.state.step === 1 && (
					<DinoPicker availableDinos={this.props.availableDinos} setPlayer={this.setPlayer} />
				)}
				{this.state.step === 2 && <Waiting ready={this.state.ready} player={this.state.players} />}
				{this.state.step === 3 && (
					<div className="smallGameContainer">
						<React.Fragment>
							{this.state.launched === false && <Timer
								limit={3}
								go={Boolean(this.state.currentGrid.length)}
								clbk={this.startGame}
							/>}
							{this.state.launched === true && <Timer
								limit={10}
								go={Boolean(this.state.currentGrid.length)}
								clbk={this.stopGame}
							/>}
							<InfoPlayer user={this.props.user} points={this.countPoints} />
							<div className="board">
								{this.state.currentGrid.length &&
									this.state.currentGrid.map((cell, i) => {
										return <Cell player={cell.player} key={i} cell={cell} />;
									})}
							</div>
							<InfoPlayer user={this.state.players[0].details} />
						</React.Fragment>
					</div>
				)}
				{this.state.step === 4 && <Result result={this.props.result} />}
			</React.Fragment>
		);
	}
}
