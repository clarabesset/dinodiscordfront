import React, { Component } from "react";
import axios from "axios";

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: "gggg",
      email: "jjj@g.com",
      password: "toto"
      // passwordcheck: ''
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/signup`, this.state)
      .then(dbRes => {
        console.log();
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

  // handleFormSubmit = (e) => {
  // 	e.preventDefault();
  // 	this.setState({
  // 		username: '',
  // 		email: '',
  // 		password: '',
  // 		passwordcheck: ''
  // 	});
  // };

  render() {
    return (
      <div className="signContainer">
        <h1 className="signTitleUp">Sign Up!</h1>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <div className="formContainer">
            <div className="boxSign">
              <label className="usernameLabelU">Username:</label>
              {/* 	<input type="text" name="username" value={this.state.username} /> */}
              <input className="usernameU" type="text" name="username" />
            </div>
            <div className="boxSign">
              <label className="emailLabelU">Email:</label>
              {/* <input type="text" name="email" value={this.state.email} /> */}
              <input className="emailU" type="text" name="email" />
            </div>
            <div className="boxSign">
              <label className="passwordLabelU">Password:</label>
              {/* 					<input type="password" name="password" value={this.state.password} /> */}
              <input className="passwordU" type="password" name="password" />
            </div>
            <div className="boxSign">
              <label className="passwordLabelCU">Confirm your password:</label>
              {/* 		<input type="password" name="passwordcheck" value={this.state.passwordcheck} /> */}
              <input
                className="passwordCU"
                type="password"
                name="passwordcheck"
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
