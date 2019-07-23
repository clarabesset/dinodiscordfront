import React, { Component } from "react";

export default class Player extends Component {
  state = {
    numero: 1,
    color: null,
    score: 0,
    direction: "N",
    x: null,
    y: null
  };

  // function generateBoard() {

  // }

  render() {
    return <div className="player" />;
  }
}
