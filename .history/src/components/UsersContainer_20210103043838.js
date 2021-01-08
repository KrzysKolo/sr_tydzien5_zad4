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

    return (
        <div>
					{users.map(user => (
						<div key={user.id}>{user.first}</div>
					))}
        </div>
    )
}

export default UsersContainer;
