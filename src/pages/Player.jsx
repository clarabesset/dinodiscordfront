import React, { Component } from "react";

export default class Player extends Component {
  state = {
    numero: 1,
    color: null,
    score: 0,
    x: null,
    y: null
  };

  render() {
    return <div className="player" />;
  }
}
