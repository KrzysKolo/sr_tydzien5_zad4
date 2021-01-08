import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {

  const UsersAPI = '/users.json';
  const [users, setUsers ] = useState([]);

}
export default UserContextProvider;