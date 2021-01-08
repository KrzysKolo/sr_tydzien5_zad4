import React, { useState, useEffect } from 'react';
import { Header, UserList, Footer, Error } from './userContainerComponents/'


const UsersContainer = () => {

  const UsersAPI = '/users.json';

  const [ users, setUsers ] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);
  const [search, setSearch] = useState("");


  const handleChange = (e) => {
      const value = e.target.value.toLowerCase();
      setSearch(value);
      console.log(value);

    };

    const handleSubmit = (e) => {
        console.log("klikm ;)");
      e.preventDefault();
      console.log(`sent ${search}`);
      };

    const handleReset = () => {
      setSearch('');
    };

  useEffect(() => {
    setLoading(true);
    fetch(UsersAPI)
    .then(res => {
      if (res.ok) {
        return res;
      }
      throw Error(res.status);
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.users);
        setUsers(data.users);
        setLoading(false);
      })
      .catch(error => setIsErr(`The problem is with: ${error}`))
    }, []);

  /*   useEffect(() => {
      setFilteredUsers(
        users.filter((user) =>
          user.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }, [search, users]);
 */
   return (
        <section>
					<Header />
          <UserList loading={loading} users={users}  />
          { isErr && <Error isErr={isErr}/> }
          <Footer />
        </section>
    )
}

export default UsersContainer;
