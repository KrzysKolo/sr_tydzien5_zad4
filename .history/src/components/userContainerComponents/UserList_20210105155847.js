import React from 'react';
import Loading from './Loading';

const UserList = ( { loading, users }) => {

    const user = users.map(user => (
        <li className="user" key={user.id}><b>{user.title}</b> {user.firstname} {user.lastname}</li>
      ))
    return (
        loading ? <Loading /> : <ul>{user}</ul>
    )
}

export default UserList;
