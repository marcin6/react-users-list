import React from 'react';

export default function UserList({ usersList, removeUser }) {
    const remove = (userKey) => { removeUser(userKey); }
    return (
        <ul className="the-list">
            {usersList.map((user,idx) =>
                <li key={idx}>{user.userName}<button key={user.key} onClick={() => remove(user.key)}>delete</button></li>
            )}
        </ul>
    )
}