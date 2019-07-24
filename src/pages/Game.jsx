import React, { Component } from "react";
import Board from "./../components/Board";
import socketIO from "socket.io-client";
// import { runInThisContext } from "vm";
export default class Game extends Component {
  state = {
    socketResponse: null,
    socket: null,
    playersFromServer: [],
    currentGrid: null
  };
  componentDidMount() {
    console.log("here");
    this.setState(
      { socket: socketIO(process.env.REACT_APP_BACKEND_URL + "/room") },
      () => {
        this.state.socket.on("confirm-player-join", players => {
          console.log("players from server ?", players);
          this.setState({ playersFromServer: players });
        });

        this.state.socket.on("set-grid-model", gridModel => {
          console.log("ici", gridModel);
          this.setState({currentGrid: gridModel})
        });

        // this.state.socket.on("message", data => {
        //   console.log("ici", data);
        // });
      }
    );

    /*      setInterval(() => this.socket.emit('message', { message: 'My position is: ', position: { x: 3, y: 2 } }), 1000);
     */
  }
  render() {
    return (
      <div className="gameContainer">
        <div class="titleGame">Dino Discord</div>
        <div class="boardContainer">
          <Board
            currentGrid={this.state.currentGrid}
            playersFromServer={this.state.playersFromServer}
            socket={this.state.socket}
          />
        </div>
      </div>
    );
  }
}
