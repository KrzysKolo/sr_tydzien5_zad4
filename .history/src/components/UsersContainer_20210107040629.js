import React, { useContext } from 'react';
import { UserContext } from './../contexts/UserContext';
import UserList from './userComponents/UserList';
import { Header, Error, Footer } from './userContainerComponents/';

const UsersContainer = () => {
  const { isErr } = useContext(UserContext);
  return (
    <section>
      <Header />
      <UserList />
      { isErr && <Error props={isErr}/>}
      <Footer />

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
