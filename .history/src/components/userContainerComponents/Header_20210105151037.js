import React from 'react';
import { SearchUser } from './../searchComponents/';

const Header = ({isErr }) => {
   return (
        <div className="header__section">
            <h1 className="header__title">Search user...</h1>
            <SearchUser isErr={isErr} />
        </div>
    )
}

export default Header;
