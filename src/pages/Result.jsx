import React, { Component } from 'react';
import MusicWin from '../components/MusicWin';
import blue from './../img/blue_dino_short.gif';
import green from './../img/green_dino_short.gif';
import yellow from './../img/yellow_dino_short.gif';
import red from './../img/red_dino_short.gif';
import { Link } from 'react-router-dom';
import axios from 'axios';

const colors = {
	blue,
	red,
	yellow,
	green
};

export default class Result extends Component {
	static getDerivedStateFromProps(newProps, state) {
		console.log(newProps);
		return null;
	}

	componentDidUpdate() {
		// console.log(this.props.result);
		// console.log(this.props.players[this.props.result.winner - 1].id);
		axios
			.patch(
				`${process.env.REACT_APP_BACKEND_URL}/api/User/winner/${this.props.players[this.props.result.winner - 1]
					.id}`,
				{ $inc: { score: `${this.props.result[this.props.result.winner]}` } }
			)
			.then((res) => {
				console.log(res, 'update');
			})
			.catch((dbErr) => console.log(dbErr));
	}

	render() {
		//   console.log(this.props.players[this.props.result.winner - 1].id)
		return (
			<div className="resultContainer">
				<MusicWin />
				{this.props.result && (
					<React.Fragment>
						<div className="titleResult">
							Dino {this.props.players[this.props.result.winner - 1].details.username} you win!!
						</div>
						<div className="containerWinDino">
							<div className="crowntext">
								<div className="crown" />
								<div class="box1 sb7">
									with {this.props.result[this.props.result.winner]} points bitch
								</div>
							</div>
							<div className="metaphore">
								{' '}
								But little dinos, aren't there more important things than competing for the most
								territory? Don't you think these burning rocks coming from the sky are a bit worring?
								No?? Alright I give up.
							</div>
							<div className="gifWinner">
								<img src={colors[this.props.result.winnerColor]} alt="la win frère" />
							</div>
							<Link to="/menu" className="playAgain">
								Play Again dude
							</Link>
						</div>
					</React.Fragment>
				)}
			</div>
		);
	}
}
