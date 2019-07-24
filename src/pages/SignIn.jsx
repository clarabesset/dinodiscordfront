import React, { Component } from "react";
import { AuthConsumer } from "./../auth/Guard";

export default class SignIn extends Component {
  state = {
    email: "octave@heetch.com",
    password: "123Soleil"
  };

  handleSubmit = (evt, signin) => {
    evt.preventDefault();
    // console.log(evt, signin)

    signin(() => {
      this.props.history.push("/menu");
    }, this.state);
  };

  handleChange = evt => {
    console.log(evt.target);
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { email, password } = this.state;
    return (
      <AuthConsumer>
        {({ signin }) => (
          <div className="signContainer">
            <h1 className="signTitle">Sign In</h1>
            <form
              onSubmit={evt => handleSubmit(evt, signin)}
              onChange={handleChange}
            >
              <div className="formContainerIn">
                <div className="boxSign">
                  <label className="emailLabel" htmlFor="email">
                    Email{""}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@email.com"
                    className="email"
                    defaultValue={email}
                  />
                </div>
                <div className="boxSign">
                  <label className="passwordLabel" htmlFor="email">
                    Password{" "}
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="password"
                    className="password"
                    defaultValue={password}
                  />
                </div>
                <div className="boxButton">
                  <button className="btnSign">SignIn</button>
                </div>
                <div className="linkBox">
                  <a className="linkSignIn" href="/signup">
                    Sign Up
                  </a>
                </div>
              </div>
            </form>
          </div>
        )}
      </AuthConsumer>
    );
  }
}
