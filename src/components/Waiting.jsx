import React, { Component } from "react";

import blue from './../img/blue_dino_short.gif';
import green from './../img/green_dino_short.gif';
import yellow from './../img/yellow_dino_short.gif';
import red from './../img/red_dino_short.gif';

const colors = {
  blue, red, yellow, green
}

export default class Waiting extends Component {
  render() {
    console.log(this.props)
    return (
      <div class="waitingContainer">
        <div class="titleWait">Waiting for your opponent...</div>
        <div class="textWait">
          {
            !this.props.ready ?
            <p>No worries, any second now, some dino will want to fight you</p>
            :
            <p>chono here ;)</p>
          }
          
        </div>
        <div className="imagesWait"><img src={colors[this.props.player[0].color]} alt="waiting dino"/>
        <div className="myDino" /> 
          <div className="gifWait" />
        </div>
      </div>
    );
  }
}
