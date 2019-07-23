import React, { Component } from "react";
import MusicWin from "../components/MusicWin";

export default class Result extends Component {
  render() {
    return (
      <div className="resultContainer">
        <MusicWin />
        <div className="titleResult">*Winning Player* you win!!</div>
        <div className="containerWinDino">
          <div class="box1 sb7">with 430 points bitch</div>
          <div className="gifWinner" />
        </div>
      </div>
    );
  }
}
