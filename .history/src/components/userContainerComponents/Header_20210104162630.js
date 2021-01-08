import React from 'react';
import { Button, Input } from './../formComponents/'
const Header = ({handleSubmit, handleChange, handleReset }) => {

   return (
        <div className="header__section">
            <h1 className="header__title">Search user...</h1>
            <form className="header__search-wrapper" handleSubmit={handleSubmit}>
                <Input type="text" handleChange={handleChange} />
                <Button values="Search" handleSubmit ={handleSubmit}/>
                <Button values="Reset" handleReset={handleReset} />
            </form>
        </div>
    )
}

export default Header;
