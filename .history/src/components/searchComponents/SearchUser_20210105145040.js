import React, { useState } from 'react';
import { Button, Input } from './../formComponents/'
const SearchUser = ({findUsers, resetUsers}) => {

	const [searchValue, setSearchValue] = useState("");

	const handleChange = (e) => {
		const value = e.target.value.toLowerCase();
		setSearchValue(value);
		console.log(value);
		};

	const handleSubmit = (e) => {
		console.log("klikm ;)");
		e.preventDefault();
	};

	const handleReset = () => {
		resetUsers();
		setSearchValue('');
}

    return (
        <>
					<form className="header__search-wrapper" onSubmit={handleSubmit}>
          	<Input type="text" onChange={handleChange} value={searchValue} />
            <Button values="Search" onClick={handleSubmit} />
            <Button values="Reset" onClick={handleReset} />
          </form>
        </>
    )
}

export default SearchUser;
