import React, { useContext } from 'react';
import { UserContext } from './../../contexts/UserContext';
import UserDetails from './UserDetails';
import Loading from './../userContainerComponents/Loading';

const UserList = () => {
  const { users, isLoading } = useContext(UserContext);
  const user = users.map(user => {
        return <UserDetails key={user.id} user={user} />
    })
  return (
    <ul>
      {user}
    </ul>
  )
}

export default UserList;
