import React, { useContext } from 'react';
import UserList from './userComponents/UserList';
import Header from './userContainerComponents/Header';

const UsersContainer = () => {
  return (
    <>
      <Header />
      <UserList />
    </>
  /*   <section>
			<Header/>
        { loading ? <Loading/> : <UserList users={users}/>}
        { isErr && <Error isErr={setIsErr}/> }
          <Footer />
        </section> */
  )

}

export default UsersContainer;
