import React, {Component} from 'react';
import UsersList from './UsersList';
import './Users.css'

class Users extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            userList: [],
        }
    }

    addUser = (e) => {
        e.preventDefault();
        
                let newUser = {
                    key: Date.now(),
                    userName: this.fileInput.value, 
                }
                    this.setState( (prevState) => {
                        return({
                            userList: prevState.userList.concat(newUser),
                        })
                    })
                    
                    this.fileInput.value = "";
    }

    render() {
        return (
            <div className = "users-main">
                <h1>User's List</h1>
                <form onSubmit={this.addUser}>
                    <input ref={(input) => this.fileInput = input} type="text" placeholder="Enter name"></input>
                    <button type="submit">Add users</button>
                </form>
                <UsersList usersList={this.state.userList} />
           </div>
        )
    }
}

export default Users;