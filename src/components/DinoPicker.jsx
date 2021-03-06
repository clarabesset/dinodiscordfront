import React, { Component } from "react";
import Dino from "./OneDino";

export default class DinoPicker extends Component {
  handleDinoPicking = pickedColor => {
    console.log(pickedColor);
    // const remainingDinos = this.state.dinos.filter(d => d.color !== pickedDino);
    // this.setState({ dinos: remainingDinos }, () => {
      this.props.setPlayer(pickedColor);
  };

  render() {
    return (
      <div>
        <h1 className="titlePicker">Pick your color, little dino!</h1>
        <div className="dinoPicker">
          {this.props.availableDinos.map((dino, i) => (
            <Dino
              img={dino.img}
              key={i}
              color={dino.color}
              handleDinoPicking={this.handleDinoPicking}
            />
          ))}
        </div>
      </div>
    );
  }
}
