import React, { useContext } from 'react';
import { UserFormSearch } from './../searchComponents/';
import Error from './Error';
import { UserContext} from './../../contexts/UserContext';

const Header = () => {
  const {isErr} = useContext(UserContext);
   return (
    <div className="header__section">
      <h1 className="header__title">Search user...</h1>
      <UserFormSearch />
      { isErr && <Error props={isErr}/>}
    </div>
    )
}

export default Header;
