import React, { Component } from "react";

export default class Player extends Component {
  state = {
    numero: 1, // numéro de joueur pendant la partie
    color: null, // couleur du joueur
    score: 0, // score de la partie
    x: null,
    y: null
  };

  render() {
    return <div className="player" />;
  }
}
