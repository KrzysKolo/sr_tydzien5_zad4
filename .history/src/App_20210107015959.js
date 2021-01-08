import React from 'react';
import UsersContainer from './components/UsersContainer';
import UserContextProvider from './contexts/UserContext';
import './App.css';


const App = () => {

  return (
    <UserContextProvider>
      <UsersContainer/>
    </UserContextProvider>
  )
}

export default App;
