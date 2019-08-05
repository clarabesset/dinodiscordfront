import React, { Component } from "react";
import axios from "axios";

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/signup`, this.state)
      .then(dbRes => {
        this.props.history.push("/menu");
        console.log(dbRes);
      })
      .catch(dbErr => console.log(dbErr.response));
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value // the value of the input
    });
  };

  render() {
    return (
      <div className="signContainer">
        <h1 className="signTitleUp">Sign Up!</h1>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <div className="formContainer">
            <div className="boxSign">
              <label className="usernameLabelU">Username:</label>
              <input
                placeholder="username"
                className="usernameU"
                type="text"
                name="username"
              />
            </div>
            <div className="boxSign">
              <label className="emailLabelU">Email:</label>
              <input
                placeholder="email@email.com"
                className="emailU"
                type="text"
                name="email"
              />
            </div>
            <div className="boxSign">
              <label className="passwordLabelU">Password:</label>
              <input
                placeholder="password"
                className="passwordU"
                type="password"
                name="password"
              />
            </div>
            <div className="boxSign">
              <label className="passwordLabelCU">Confirm your password:</label>
              <input
                className="passwordCU"
                type="password"
                name="password"
                placeholder="password"
              />
            </div>
            <div className="boxButtonUpS">
              <button className="btnSign">Submit</button>
            </div>
            <div className="linkBoxUp">
              <a className="linkSign" href="/signin">
                Sign In
              </a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
