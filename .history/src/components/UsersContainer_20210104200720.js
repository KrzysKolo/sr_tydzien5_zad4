import React, { useState, useEffect } from 'react';
import { Header, UserList, Footer, Error } from './userContainerComponents/'


const UsersContainer = () => {

  const UsersAPI = '/users.json';

  const [ users, setUsers ] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);


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

    if (users) {
      let filter = users.filter((user) => {
        const fullName = `${user.name} ${user.surname}`;
        return fullName
          .toLowerCase()
          .split(" ")
          .join("")
          .includes(searchTerm.toLowerCase().split(" ").join(""));
      });

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
      console.log(`filter = ${filter}`)

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
          <UserList loading={loading} users={users} filter={filter} />
          { isErr && <Error isErr={isErr}/> }
          <Footer />
        </section>
    )
}

export default UsersContainer;