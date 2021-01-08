import React, { useState } from 'react';
import UsersContainer from './components/UsersContainer';
import './App.css';

const UsersAPI = '/users.json';
const App = () => {
  const [ users, setUsers ] = useState([]);
  fetch(UsersAPI)
    .then(res => res.json())
    .then(data => {
      console.log(data.user);
      setUsers(data.user);
    })


  return (
    <>
      <h1>Hello</h1>
      { users ? <UsersContainer users={users} /> : "Ładuje...." }
    </>
  )
}

export default App;
