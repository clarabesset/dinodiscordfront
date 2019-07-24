import React, { Component } from "react";

export default class Waiting extends Component {
  render() {
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
        <div className="imagesWait">
          <div className="myDino" />
          <div className="gifWait" />
        </div>
      </div>
    );
  }
}
