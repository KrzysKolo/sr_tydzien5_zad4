import React from 'react';
import UserList from './userComponents/UserList';

const UsersContainer = () => {
  return (
    <UserList />
  /*   <section>
			<Header/>
        { loading ? <Loading/> : <UserList users={users}/>}
        { isErr && <Error isErr={setIsErr}/> }
          <Footer />
        </section> */
  )

}

export default UsersContainer;
