import React, { Component } from 'react';
import DinoRed from './../img/red_dino_short.gif';

export default class LeaderBoard extends Component {
	render() {
		return (
			<div className="leaderboard">
				<h1>Leaderboard</h1>
				<table className="table">
					<thead>
						<tr>
							<th><img src={DinoRed} alt="dino"/></th>
							<th>Player</th>
							<th>Points</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>Dino </td>
							<td>6789 points</td>
						</tr>
                        <tr>
							<td>1</td>
							<td>Dino </td>
							<td>6789 points</td>
						</tr>
                        <tr>
							<td>1</td>
							<td>Dino </td>
							<td>6789 points</td>
						</tr>
                        <tr>
							<td>1</td>
							<td>Dino </td>
							<td>6789 points</td>
						</tr>
                        <tr>
							<td>1</td>
							<td>Dino </td>
							<td>6789 points</td>
						</tr>
                        <tr>
							<td>1</td>
							<td>Dino </td>
							<td>6789 points</td>
						</tr>
                        
					</tbody>
				</table>
			</div>
		);
	}
}
