import React, { useContext } from 'react';
import { UserContext } from './../contexts/UserContext';
import UserList from './userComponents/UserList';
import { Header, Error, Footer } from './userContainerComponents/';

const UsersContainer = () => {
  const { isErr } = useContext(UserContext);
  return (
    <section>
      <Header />
      { isErr && <Error props={isErr}/>}
      <UserList />
      <Footer />
    </section>
  )
}

export default UsersContainer;
