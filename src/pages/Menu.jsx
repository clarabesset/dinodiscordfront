import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import DinoBlue from "./../img/blue_dino_short.gif";
import NavMain from "../components/NavMain";
import Footer from "../components/Footer";
import socketIO from "socket.io-client";
import { AuthConsumer } from "./../auth/Guard";
export default class Menu extends Component {
  /* 	componentDidMount() {
            console.log('here');
            this.socket = socketIO(process.env.REACT_APP_BACKEND_URL+ "/room");
            this.socket.on("message", data => {
                console.log(data)
            })
            setInterval(() => 	this.socket.emit("message", {message: "My position is: ", position:{x: 3, y:2}}), 1000)
        } */

  componentDidMount() {
    this.socket = socketIO(process.env.Front_End_Url);
  }

  render() {
    return (
      <AuthConsumer>
        {({ loginStatus }) => {
          console.log("waazzaaaa", loginStatus);
          return (
            <>
              <NavMain />
              <div className="menu-item-container">
                <div className="menu-item-little-container">
                  <img className="img-menu" src={DinoBlue} alt="dinoBlue" />
                  <NavLink
                    className="menu-btn"
                    to="/game"
                    onClick={() => this.socket.emit("room", "clicked on play")}
                  >
                    Play
                  </NavLink>
                  >
                  <NavLink className="menu-btn otherButton" to="/instructions">
                    Instructions
                  </NavLink>
                  <NavLink className="menu-btn otherButton" to="/leaderboard">
                    Leaderboard
                  </NavLink>
                </div>
              </div>
              <Footer />
            </>
          );
        }}
      </AuthConsumer>
    );
  }
}
