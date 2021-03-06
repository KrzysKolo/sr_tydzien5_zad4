import React, { useState } from 'react';
import UsersContainer from './components/UsersContainer';
import './App.css';

const UsersAPI = '/users.jsonb';
const App = () => {
  const [ users, setUsers ] = useState([]);
  fetch(UsersAPI)
    .then(res => {
      if (res.ok) {
        console.log(res);
        return res;
      }
      throw Error(res.status);
    })
    .then()
    .catch(error => console.log(error));

  return (
    <>
      <h1>Hello</h1>
      { users ? <UsersContainer users={users} /> :"Ładuje...." }
    </>
  )
}

export default App;
