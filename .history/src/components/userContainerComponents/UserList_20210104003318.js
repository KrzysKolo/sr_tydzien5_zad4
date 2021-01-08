import React from 'react';

const UserList = ( { users }) => {

    const user = users.map(user => (
        <li className="user" key={user.id}><b>{user.title}</b> {user.first} {user.last}</li>
      ))
    return (

        <ul>
            {user}
        </ul>
    )
}

export default UserList;
