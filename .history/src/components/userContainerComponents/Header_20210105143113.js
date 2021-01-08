import React from 'react';
import { SearchUser } from './../searchComponents/';

const Header = ({ handleChange, handleSubmit, handleReset, searchValue }) => {
   return (
        <div className="header__section">
            <h1 className="header__title">Search user...</h1>
            <SearchUser handleChange={handleChange} handleSubmit={handleSubmit} handleReset={handleReset} searchValue={searchValue} />
        </div>
    )
}

export default Header;
