import React, { useContext } from 'react';
import { UserContext } from './../../contexts/UserContext';
import UserDetails from './UserDetails';

const UserList = () => {
  const { users } = useContext(UserContext);
  console.log(users);
  return (
    <ul>
      aaa
    </ul>
  )
}

export default UserList;
