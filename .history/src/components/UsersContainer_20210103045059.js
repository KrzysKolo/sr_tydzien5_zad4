import React, { useState, useEffect } from 'react';


const UsersContainer = () => {

  const UsersAPI = '/users.json';

  const [ users, setUsers ] = useState([]);

  useEffect(() => {

    fetch(UsersAPI)
      .then(res => res.json())
      .then(data => {
        console.log(data.users);
        setUsers(data.users);
      })
    }, []);

    const users = users.map(user => (
      <li key={user.id}>{user.title} {user.first} {user.last}</li>
    ))
    return (
        <ul>
					{users}
        </ul>
    )
}

export default UsersContainer;
