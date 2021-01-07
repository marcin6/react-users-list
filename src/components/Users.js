import React, { Component } from 'react';
import UsersList from './UsersList';
import '../styles/Users.css'

export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: [],
        }
    }

    addUser = (e) => {
        e.preventDefault();
        if (this.validate(this.fileInput)) {
            let newUser = {
                key: Date.now(),
                userName: this.fileInput.value,
            }
            this.setState((prevState) => {
                return ({
                    userList: prevState.userList.concat(newUser),
                    errorMsg: "",
                })
            })
            this.fileInput.value = "";
        } else {
            this.setState({
                errorMsg: "Enter name!!",
            });
        }   
    }

    removeUser = (userKey) => {
        let filteredUser = this.state.userList.filter((user) => user.key !== userKey);
        this.setState({
            userList: filteredUser,
        });
    }

    validate = (item) => {
        if (item.value === "") {
            return false;
        } else {
            return true;
        }
    }

    render() {
        return (
            <div className="users-main">
                <h1>User's List</h1>
                <form onSubmit={this.addUser}>
                    <input ref={(input) => this.fileInput = input} type="text" placeholder="Enter name"></input>
                    <button type="submit">Add users</button>
                </form>
                <div className="error-msg">{this.state.errorMsg}</div>
                <UsersList removeUser={this.removeUser} usersList={this.state.userList} />
            </div>
        )
    }
}