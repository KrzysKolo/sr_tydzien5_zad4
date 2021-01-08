import React, { useContext } from 'react';
import { UserContext } from './../../contexts/UserContext';
import UserDetails from './UserDetails';
import Loading from './../userContainerComponents/Loading';

const UserList = () => {
  const { filteredUsers, isLoading } = useContext(UserContext);
  const user = filteredUsers.map(user => {
        return <UserDetails key={user.id} user={user} />
    })
  return isLoading ? <Loading /> :(
    <ul>
      {user}
    </ul>
  )
}

export default UserList;
