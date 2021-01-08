import React from 'react';
import SearchUser from './../searchComponents/';

const Header = ({ search, handleSubmit, handleChange, handleReset }) => {
   return (
        <div className="header__section">
            <h1 className="header__title">Search user...</h1>
            <SearchUser />
        </div>
    )
}

export default Header;
