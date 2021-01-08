import React from 'react';
import Button from './formComponents/Button';
const Header = () => {
    return (
        <div className="header__section">
            <h1 className="header__title">Search user...</h1>
            <form className="header__search-wrapper">
                <input className="header__search" type="text" />
                <Button values="Search" />
                <Button values="Reset" />
            </form>
        </div>
    )
}

export default Header;
