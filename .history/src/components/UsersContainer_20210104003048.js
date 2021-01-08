import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import UserList from './UserList';


const UsersContainer = () => {

  const UsersAPI = '/users3.json';

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

   return (
        <section>
					<Header />
          <UserList users={users}/>
          <Footer />
        </section>
    )
}

export default UsersContainer;
