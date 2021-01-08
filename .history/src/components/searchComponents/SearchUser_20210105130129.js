import React from 'react';
import { Button, Input } from './../formComponents/'
const SearchUser = ({ handleChange, handleSubmit, handleReset, search }) => {
    return (
        <>
					<form className="header__search-wrapper" onSubmit={handleSubmit}>
          	<Input type="text"/>
            <Button values="Search"/>
            <Button values="Reset" />
          </form>
        </>
    )
}

export default SearchUser;
