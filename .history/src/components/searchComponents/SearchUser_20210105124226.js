import React from 'react';
import { Button, Input } from './../formComponents/'
const SearchUser = () => {
    return (
        <>
					<form className="header__search-wrapper">
          	<Input type="text"/>
            <Button values="Search"/>
            <Button values="Reset" />
          </form>
        </>
    )
}

export default SearchUser;
