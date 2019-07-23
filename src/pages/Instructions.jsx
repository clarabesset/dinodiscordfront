import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Instructions extends Component {
  render() {
    return (
      <div className="bigInstructions">
        <p>
          <div className="title">
            <h1>Instructions</h1>
          </div>
          <div className="instructions">
            <p>
              You have to conquer more territory than your opponent. One cell of
              your color = one point for you. You can totally steal the cells of
              the other dino!
            </p>
            <div id="commands">
              <p>
                Player One, press Z to go up, S to go down, Q to go left and D
                to go right.
              </p>
              <p>
                Player Two, press Up to go up, Down to go down, Left to go left
                and Right to go right.
              </p>
              <p id="fight">
                Now, <span id="fightReally">fight!</span>
              </p>
            </div>

            <Link to="/menu">
              <p class="btn" href="#">
                Back to Menu
              </p>
            </Link>
          </div>
        </p>
      </div>
    );
  }
}
