import React, { useState } from 'react';
import UsersList from './UsersList';
import '../styles/Users.css'

export default function Users() {
    const [userList, setUserList] = useState([]);
    const [value, setValue] = useState("");
    const [errorMsg, setErrorMsg] = useState("")

    const addUser = e => {
        e.preventDefault();
        if (validate(value)) {
            let newUser = {
                key: Date.now(),
                userName: value,
            }
            setUserList([...userList, newUser]);
            setValue("");
            setErrorMsg("");
        } else {
            setErrorMsg("Enter name!!");
        }
    }

    const removeUser = (userKey) => {
        let filteredUser = userList.filter((user) => user.key !== userKey);
        setUserList(filteredUser);
     }

    const validate = (item) => {
        if (item === "") {
            console.log("false")
            return false
        } else {
            console.log("true")
            return true
        }
    }

    return (
        <div className="users-main">
            <h1>User's List</h1>
            <form onSubmit={addUser}>
                <input value={value} onChange={e => setValue(e.target.value)} type="text" placeholder="Enter name"></input>
                <button type="submit">Add users</button>
            </form>
            <div className="error-msg">{errorMsg}</div>
            <UsersList removeUser={removeUser} usersList={userList} />
        </div>
    )
}