import React, { Component } from 'react';
import IntroText from '../components/IntroText';
import MusicDino from '../components/MusicDino';
import { Link } from 'react-router-dom';
import dinoRunY from '../img/yellow_dino_running.gif';
import dinoRunB from '../img/blue_dino_running.gif';
import dinoRunG from '../img/green_dino_running.gif';
import dinoRunR from '../img/red_dino_running.gif';

export default class Intro extends Component {
	state = {
		currentIndex: 0,
		texts: [
			{
				text: 'Somewhere on Earth, about 65.2 million years ago...'
			},
			{
				text: 'ignoring the meteorites crashing all around...'
			},
			{
				text: 'some dumb dinosaurs are fighting over their territories'
			},
			{ text: 'and unfortunately, you are one of them.' }
		]
	};

	getInitialState() {
		let state = {};
		React.Children.forEach(this.props.children, (child, index) => {
			state[index] = false;
		});
		return state;
	}

	componentDidMount() {
		setTimeout(() => {
			const intervarlId = setInterval(() => {
				const x = this.state.currentIndex + 1;
				if (x <= 3) this.setState({ currentIndex: x });
				else {
					clearInterval(intervarlId);
					this.props.history.push('/menu');
				}
			}, 10000);
		}, 0);
	}

	render() {
		return (
			<div className="bigIntro">
				<div className="intro">
					<MusicDino />
					{this.state.currentIndex === 0 && <IntroText text={this.state.texts[0].text} />}
					{this.state.currentIndex === 1 && <IntroText text={this.state.texts[1].text} />}
					{this.state.currentIndex === 2 && <IntroText text={this.state.texts[2].text} />}
					{this.state.currentIndex === 3 && <IntroText text={this.state.texts[3].text} />}
				</div>
				<div className="bottomIntro">
					<Link to="/signup">
						<div id="skipImage" />
					</Link>
					<div className="animDino1">
						<img alt="" src={dinoRunY} class="object van move-righ" />
					</div>
					<div className="animDino2">
						<img alt="" src={dinoRunG} class="object van move-righ" />
					</div>
					<div className="animDino3">
						<img alt="" src={dinoRunR} class="object van move-righ" />
					</div>
					<div className="animDino4">
						<img alt="" src={dinoRunB} class="object van move-righ" />
					</div>
				</div>
			</div>
		);
	}
}
