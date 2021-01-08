import React from 'react';
import { SearchUser } from './../searchComponents/';

const Header = ({ handleChange, handleSubmit, handleReset }) => {
   return (
        <div className="header__section">
            <h1 className="header__title">Search user...</h1>
            <SearchUser handleChange={handleChange} handleSubmit={handleSubmit} handleReset={handleReset} />
        </div>
    )
}

export default Header;
