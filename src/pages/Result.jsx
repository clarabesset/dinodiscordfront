import React, { Component } from "react";
import MusicWin from "../components/MusicWin";
import blue from "./../img/blue_dino_short.gif";
import green from "./../img/green_dino_short.gif";
import yellow from "./../img/yellow_dino_short.gif";
import red from "./../img/red_dino_short.gif";
import { Link } from "react-router-dom";
import axios from "axios";

const colors = {
  blue,
  red,
  yellow,
  green
};

export default class Result extends Component {
  state = {};

  // componentDidMount() {
  // 	axios
  //     .patch(`${process.env.REACT_APP_BACKEND_URL}/api/User/${this.props.match.params.id}`, this.state)
  //     // this.props.players[this.props.result.winner - 1].details._id
  // 		.then((res) => {
  // 			console.log(res, 'update');
  // 		})
  // 		.catch((dbErr) => console.log(dbErr.response));
  // }

  static getDerivedStateFromProps(newProps, state) {
    console.log(newProps);
    return null;
  }

  render() {
    return (
      <div className="resultContainer">
        <MusicWin />
        {this.props.result && (
          <React.Fragment>
            <div className="titleResult">
              Dino{" "}
              {
                this.props.players[this.props.result.winner - 1].details
                  .username
              }{" "}
              you win!!
            </div>
            <div className="containerWinDino">
              <div className="crowntext">
                <div className="crown" />
                <div class="box1 sb7">
                  with {this.props.result[this.props.result.winner]} points
                  bitch
                </div>
              </div>
              <div className="gifWinner">
                <img
                  src={colors[this.props.result.winnerColor]}
                  alt="la win frère"
                />
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
