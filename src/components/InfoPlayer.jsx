import React, { Component } from 'react'
import axios from 'axios';

export default class InfoPlayer extends Component {
    state = {
        users: []
    };
    componentDidMount() {
        axios.get(`http://localhost:3001/api/User/5d370c14d5d180d07b892e84`).then(res => {
            this.setState({ users: res.data })
        })
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <div className="infoBoard">
                    <h2>Avatar:</h2>
                    <h2>Player Information: {this.state.users.username} </h2>
                    <h2>Score:{this.state.users.score} </h2>
                </div>
            </div>
        )
    }
}
