import React, { Component } from "react";
import blue from "./../img/blue_dino_short.gif";
import green from "./../img/green_dino_short.gif";
import yellow from "./../img/yellow_dino_short.gif";
import red from "./../img/red_dino_short.gif";
import Dino from "./OneDino";
export default class DinoPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dinos: [
        { color: "red", img: red },
        { color: "blue", img: blue },
        { color: "green", img: green },
        { color: "yellow", img: yellow }
      ]
    };
  }
  handleDinoPicking = pickedDino => {
    console.log(pickedDino);
    const remainingDinos = this.state.dinos.filter(d => d.color !== pickedDino);
    this.setState({ dinos: remainingDinos }, () => {
      this.props.setPlayer(pickedDino);
    });
    // remonte au parent pour updte le player avec son dino
  };
  render() {
    return (
      <div>
        <h1 className="titlePicker">Pick your color, little dino!</h1>
        <div className="dinoPicker">
          {this.state.dinos.map((dino, i) => (
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
