import React, {Component} from 'react';

class UsersList extends Component {   
    
    createUser = (user) => {
        return(
            <li key={user.key}>{user.userName}</li>
        )
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