import React from 'react';
import { Button, Input } from './../formComponents/'
const Header = ({ search, handleSubmit, handleChange, handleReset }) => {
   return (
        <div className="header__section">
            <h1 className="header__title">Search user...</h1>
            <form className="header__search-wrapper" onSubmit={handleSubmit}>
                <Input type="text" search={search} onChange={handleChange} />
                <Button values="Search" onClick ={handleSubmit}/>
                <Button values="Reset" onClick={handleReset} />
            </form>
        </div>
    )
}

export default Header;
