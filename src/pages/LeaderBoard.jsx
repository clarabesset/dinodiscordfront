import React, { Component } from "react";
import NavMain from "../components/NavMain";
import Board from "../components/LeaderBoard";
import Footer from "../components/Footer";

export default class LeaderBoard extends Component {
  render() {
    return (
      <div className="leaderContainer">
        <NavMain />
        <Board />
        <Footer />
      </div>
    );
  }
}
