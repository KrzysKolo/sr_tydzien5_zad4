import React, { useState, useEffect } from 'react';
import { Header, UserList, Footer, Error, Loading } from './userContainerComponents/'


const UsersContainer = () => {

  const UsersAPI = '/users.json';

  const [users, setUsers ] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isErr, setIsErr] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    let timer = setTimeout(() => {
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
        clearTimeout(timer);
      })
      .catch(error => setIsErr(`The problem is with: ${error}`));
    }, 500);
  }

  const handleChange = (e) => {
      const value = e.target.value.toLowerCase();
      setSearch(value);
      console.log(value);
    };

    const handleSubmit = (e) => {
        console.log("klikm ;)");
      e.preventDefault();
      if (search !== "") {
      console.log(`sent ${search}`);


      } else {
        setIsErr("Enter username!!");
      }
      };

    const handleReset = () => {
      console.log("reset");
      setSearch('');
      setUsers('');
      setLoading(true);
    };

    /* const filterUser=users.filter(user => user.first.toLowerCase().includes(useName) || user.lst.toLowerCase().includes(useName)).map(filterUser => (
      <User key={filterUser.id} data={filterUser} saveUser={ saveUser } />
    )) */

   return (
        <section>
					<Header handleChange={handleChange} handleSubmit={handleSubmit} handleReset={handleReset}  />
          { loading ? <Loading/> : <UserList users={users}/>}
          { isErr && <Error isErr={isErr}/> }
          <Footer />
        </section>
    )

}

export default UsersContainer;
