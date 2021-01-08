import React, { useContext, useState } from 'react';
import { UserContext } from './../contexts/UserContext';
import UserList from './userComponents/UserList';
import Header from './userContainerComponents/Header';
import Error from './userContainerComponents/Error';

const UsersContainer = () => {
  const { isErr } = useContext(UserContext);
  return (
    <section>
      <Header />
      { isErr && <Error props={isErr}/>}
      <UserList />

    </section>
  /*   <section>
			<Header/>
        { loading ? <Loading/> : <UserList users={users}/>}
        { isErr && <Error isErr={setIsErr}/> }
          <Footer />
        </section> */
  )

}

export default UsersContainer;
