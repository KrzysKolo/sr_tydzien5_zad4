import React, { useContext } from 'react';
import { UserContext } from './../../contexts/UserContext';
import UserDetails from './UserDetails';

const UserList = () => {
    const { users } = useContext(UserContext);
    const user = users.map(user => {
        <UserDetails key={user.id} user={user} />
    })
    return (
        <ul>
            {user}
        </ul>
    )
}

export default UserList;
