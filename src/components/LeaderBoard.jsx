import React, { Component } from "react";
import DinoRed from "./../img/red_dino_short.gif";
import axios from "axios";
var count = 0;
export default class LeaderBoard extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    axios.get("http://localhost:3001/api/User").then(res => {
      console.log(res);
      const sorted = res.data.sort((a, b) => {
        return parseFloat(b.score) - parseFloat(a.score);
      });
      this.setState({ users: sorted });
    });
  }
  render() {
    return (
      <div className="leaderboard">
        <h1>Leaderboard</h1>
        <table className="table">
          <thead>
            <tr>
              <th>
                <img src={DinoRed} alt="dino" />
              </th>
              <th>Player</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(users => (
              <tr>
                <td>{(count = count + 1)}</td>
                <td>{users.username} </td>
                <td>{users.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
