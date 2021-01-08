import React, { useState, useEffect } from 'react';
import { Header, UserList, Footer, Error, Loading } from './userContainerComponents/'


const UsersContainer = () => {

  const UsersAPI = '/users.json';

  const [users, setUsers ] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isErr, setIsErr] = useState(false);
  const [searchValue, setSearchValue] = useState("");

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
      setSearchValue(value);
      console.log(value);
      };

    const handleSubmit = (e) => {
        console.log("klikm ;)");
      e.preventDefault();
      setIsErr("")
      if (searchValue !== "") {
      console.log(`sent ${searchValue}`);
      setSearchValue("")
      } else {
        setIsErr("Enter username!!");
      }
      };

    const handleReset = () => {
      console.log("reset");
      console.log(searchValue);
      setSearchValue("cxa");
      console.log(searchValue+"---");
      getUsers(setUsers);
      setLoading(true);
    };



   return (
        <section>
					<Header handleChange={handleChange} handleSubmit={handleSubmit} handleReset={handleReset}   />
          { loading ? <Loading/> : <UserList users={users}/>}
          { isErr && <Error isErr={isErr}/> }
          <Footer />
        </section>
    )

}

export default UsersContainer;
