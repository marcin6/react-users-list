import React, {Component} from 'react';

class UsersList extends Component {   
    
    createUser = (user) => {
        return(
            <li key={user.key} onClick={() => this.removeUser(user.key) } >{user.userName}</li>
        )
    }

    removeUser = (userKey) => {
        this.props.removeUser(userKey);
    }
    
    render() {

        let usersList = this.props.usersList;
        let usersLi = usersList.map(this.createUser);

        return(
            <ul className="the-list">
               {usersLi}
            </ul>
        )
    }
}



export default UsersList;