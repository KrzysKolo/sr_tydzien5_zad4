import React, { useState, useRef } from 'react';
import { Button, Input } from './../formComponents/'
const SearchUser = () => {

	const [searchValue, setSearchValue] = useState("");

	const handleChange = (e) => {
		const value = e.target.value.toLowerCase();
		setSearchValue(value);
		console.log(value);
		};

	const handleSubmit = (e) => {
		e.preventDefault();
	  console.log("klikm ;)");
		console.log(`send ${searchValue}`);

	};

	const nameInput = useRef();
	const handleReset = () => {
		/* resetUsers(); */
		console.log("reset");
		setSearchValue('');
		nameInput.current.focus();
		nameInput.current.value = "Wpisz dane";
		nameInput.current.style.color = '#f00'
}

    return (
        <>
					<form className="header__search-wrapper" onSubmit={handleSubmit}>
          	<Input type="text" onChange={handleChange} value={searchValue} />
            <Button values="Search" onClick={handleSubmit} />
            <Button values="Reset" onClick={handleReset} />
						<p ></p>
          </form>
        </>
    )
}

export default SearchUser;
