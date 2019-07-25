import React, { Component } from "react";
import MusicWin from "../components/MusicWin";
import blue from './../img/blue_dino_short.gif';
import green from './../img/green_dino_short.gif';
import yellow from './../img/yellow_dino_short.gif';
import red from './../img/red_dino_short.gif';

const colors = {
  blue, red, yellow, green
}

export default class Result extends Component {
  render() {
    return (
      <div className="resultContainer">
        <MusicWin />
        {this.props.result && <React.Fragment>
        <div className="titleResult">* Player {this.props.result.winner} you win!!</div>
        <div className="containerWinDino">
          <div class="box1 sb7">with {this.props.result[this.props.result.winner]} points bitch</div>
          <div className="gifWinner">
              <img src={colors[this.props.result.winnerColor]} alt="la win frère"/>
            </div>
        </div>
        </React.Fragment>
        }
      </div>
    );
  }
}
