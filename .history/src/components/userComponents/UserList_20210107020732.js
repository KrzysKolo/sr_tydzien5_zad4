import React, { useContext } from 'react';
import { UserContext } from './../../contexts/UserContext';
import UserDetails from './UserDetails';

const UserList = () => {
    const { users } = useContext(UserContext);
    return (
        <div>

        </div>
    )
}

export default UserList;
