import React, { useState } from 'react';
import UsersContainer from './components/UsersContainer';
import './App.css';

const UsersAPI = './../public/users.json';
const App = () => {
  const [ users, setUsers ] = useState([]);
  return (
    <>
      <h1>Hello</h1>
      { users ? <UsersContainer users={users} /> :"Ładuje...." }
    </>
  )
}

export default App;
