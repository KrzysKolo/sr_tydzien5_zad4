import React from 'react';

const Header = () => {
    return (
        <div className="header__section">
            <h1>Search user...</h1>
            <div className="header__search-wrapper">
                <input className="header__search" type="text" />
            </div>
        </div>
    )
}

export default Header;
