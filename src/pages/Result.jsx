import React, { Component } from "react";
import MusicWin from "../components/MusicWin";

export default class Result extends Component {
  render() {
    return (
      <div className="resultContainer">
        <MusicWin />
        {this.props.result && <React.Fragment>
        <div className="titleResult">*Winning Player {this.props.result.winner} you win!!</div>
        <div className="containerWinDino">
          <div class="box1 sb7">with {this.props.result[this.props.result.winner]} points bitch</div>
          <div className="gifWinner" />
        </div>
        </React.Fragment>
        }
      </div>
    );
  }
}
