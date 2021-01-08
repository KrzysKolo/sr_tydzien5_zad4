import React from 'react';
import { UserFormSearch } from './../searchComponents/';

const Header = () => {
   return (
    <div className="header__section">
      <h1 className="header__title">Search user...</h1>
      <UserFormSearch />
      { isErr && <Error props={isErr}/>}
    </div>
    )
}

export default Header;
