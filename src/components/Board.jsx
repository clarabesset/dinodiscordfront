import React, { Component } from 'react';
import Cell from './Cell';
import DinoPicker from './../components/DinoPicker';
import KeyListener from './../components/KeyListener';
import InfoPlayer from './../components/InfoPlayer';
import Waiting from './../components/Waiting';
import Result from '../pages/Result';
import Timer from '../components/Timer';

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

		if (this.state.currentGrid.length && this.state.step === 2) {
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

	stopTimer = () => {
		console.log('je marrete')
		this.setState({step: 4})
	}

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
							<Timer stopTimer={this.stopTimer}/>
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