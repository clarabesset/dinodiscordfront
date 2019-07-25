import React, { Component } from "react";
import NavMain from "../components/NavMain";
import Leaderboard from "../components/LeaderBoardCompo";
import Footer from "../components/Footer";

export default class LeaderBoard extends Component {
  render() {
    return (
      <div className="leaderContainer">
        <NavMain />
        <Leaderboard />
        <Footer />
      </div>
    );
  }
}
