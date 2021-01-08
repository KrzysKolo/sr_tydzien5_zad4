import React from 'react';
import { Button, Input } from './../formComponents/'
const SearchUser = ({ handleChange, handleSubmit, handleReset, search }) => {
    return (
        <>
					<form className="header__search-wrapper" onSubmit={handleSubmit}>
          	<Input type="text" onChange={handleChange} value={search}/>
            <Button values="Search" onClick={handleSubmit} />
            <Button values="Reset" onClick={handleReset} />
          </form>
        </>
    )
}

export default SearchUser;
