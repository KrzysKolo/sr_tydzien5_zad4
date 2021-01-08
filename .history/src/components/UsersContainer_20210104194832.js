import React, { useState, useEffect } from 'react';
import { Header, UserList, Footer, Error } from './userContainerComponents/'


const UsersContainer = () => {

  const UsersAPI = '/users.json';

  const [ users, setUsers ] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);


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
      filter(users, search);
      } else {
        setIsErr("Enter username!!");
      }
      };

    const handleReset = () => {
      setSearch('');
    };



   return (
        <section>
					<Header handleChange={handleChange} handleSubmit={handleSubmit} handleReset={handleReset} search={search} />
          <UserList loading={loading} users={users}  />
          { isErr && <Error isErr={isErr}/> }
          <Footer />
        </section>
    )
}

export default UsersContainer;
