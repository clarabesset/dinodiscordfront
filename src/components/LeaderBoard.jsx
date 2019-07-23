import React, { Component } from "react";
import DinoRed from "./../img/red_dino_short.gif";
import axios from "axios";
export default class LeaderBoard extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    axios.get("http://localhost:3001/api/User").then(res => {
      console.log(res);
      this.setState({ users: res.data });
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
                <td>1</td>
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
