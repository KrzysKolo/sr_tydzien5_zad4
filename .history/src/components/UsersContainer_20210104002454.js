import React, { useState, useEffect } from 'react';
import Header from './Header';


const UsersContainer = () => {

  const UsersAPI = '/users.json';

  const [ users, setUsers ] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(UsersAPI)
    .then(res => {
      if (res.ok) {
        return res;
      }
      throw Error(res.status)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.users);
        setUsers(data.users);
        setLoading(false);
      })
      .catch(error => console.log(error))
    }, []);

    if (loading) {
      return <p>Loading countries...</p>;
    }

    const user = users.map(user => (
      <li className="user" key={user.id}><b>{user.title}</b> {user.first} {user.last}</li>
    ))
    return (
        <section>
					{user}
        </section>
    )
}

export default UsersContainer;
