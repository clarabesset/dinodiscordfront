import React, { Component } from "react";
import NavMain from "../components/NavMain";
import Footer from "../components/Footer";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <NavMain />
        <div className="profileContainer">
          <h1 className="profileTitle">My Profile</h1>
          <div className="smallerProfile">
            <form action="POST">
              <div className="formProfContainer">
                <h2 className="editProfile">Want to make some changes? </h2>
                <div className="boxSignProfile">
                  <label className="usernameLabel" htmlFor="username">
                    Username
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="username"
                    placeholder="username"
                    className="username"
                  />
                </div>
                <div className="boxSignProfile">
                  <label className="emailLabel" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@email.com"
                    className="email"
                  />
                </div>
                <div className="boxSignProfile">
                  <label className="passwordLabel" htmlFor="email">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="password"
                    className="password"
                  />
                </div>
                <div className="boxButtonProfile">
                  <a className="btnSign" href="/menu">
                    Save changes
                  </a>
                </div>
              </div>
            </form>
            <div className="dinoCool" />
            <div className="scoreBox">
              <h2 className="editProfile">Score</h2>
              <p>You currently have a score of *score*</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
