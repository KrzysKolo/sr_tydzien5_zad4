import React, { useState, useEffect } from 'react';
import { Header, UserList, Footer } from './userContainerComponents/'


const UsersContainer = () => {

  const UsersAPI = '/users.json';

  const [ users, setUsers ] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    fetch(UsersAPI)
    .then(res => {
      if (res.ok) {
        return res;
      }
      throw setIsError(true)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.users);
        setUsers(data.users);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(true);
      })
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
