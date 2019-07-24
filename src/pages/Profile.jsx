import React, { Component } from "react";
import NavMain from "../components/NavMain";
import Footer from "../components/Footer";
import axios from "axios";

export default class Profile extends Component {
  state = {
    username: "",
    email: "",
    score: null
  }
  componentDidMount() {
    axios.get(`http://localhost:3001/api/User/${this.props.match.params.id}`).then(res => {
      console.log(res.data)
      this.setState({ username: res.data.username, email: res.data.email, score: res.data.score })
    }).catch(dbErr => console.log(dbErr.response))


  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(this.state)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios.patch(`http://localhost:3001/api/User/${this.props.match.params.id}`, this.state)
      .then(res => {
        console.log(res, "update")
      }).catch(dbErr => console.log(dbErr.response))
  }

  deleteAccount = (e) => {
    axios.delete(`http://localhost:3001/api/User/${this.props.match.params.id}`).then(res => {
      console.log(res.data)
      this.setState({ username: res.data.username, email: res.data.email })
    }).catch(dbErr => console.log(dbErr.response))
  }

  render() {
    console.log(this.props.match.params)
    return (
      <div>
        <NavMain />
        <div className="profileContainer">
          <h1 className="profileTitle">My Profile</h1>
          <div className="smallerProfile">
            <form onChange={(e) => this.handleChange(e)} >
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
                    value={this.state.username}
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
                    value={this.state.email}
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
                <div className="buttons">
                  <div className="boxButtonProfile" onClick={(e) => this.handleSubmit(e)}>
                    <a className="btnSign" href="/menu">
                      Save
                  </a>
                  </div>
                  <div className="boxButtonProfile" onClick={(e) => this.deleteAccount(e)}>
                    <a className="btnSign" href="/">
                      Delete
                  </a>
                          </div>
                        </div>
                      </div>
                    </form>
                      <div className="dinoCool" />
                      <div className="scoreBox">
                        <h2 className="editProfile">Score</h2>
              <p>You currently have a score of {this.state.score}</p>
            </div>
          </div>
        </div>
        <Footer />
      </div >
    );
  }
}
