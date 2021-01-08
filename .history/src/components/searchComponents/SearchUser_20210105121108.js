import React from 'react';
import { Button, Input } from './../formComponents/'
const SearchUser = () => {
    return (
        <>
					<form className="header__search-wrapper" onSubmit={handleSubmit}>
          	<Input type="text" search={search} onChange={handleChange} />
            <Button values="Search" onClick ={handleSubmit}/>
            <Button values="Reset" onClick={handleReset} />
          </form>
        </>
    )
}

export default SearchUser;
