import React, { useState, useRef } from 'react';
import { Button, Input } from './../formComponents/'
const SearchUser = () => {

	const [searchValue, setSearchValue] = useState("");

	const handleChange = (e) => {
		const value = e.target.value.toLowerCase();
		setSearchValue(value);
		console.log(value);
		};
		const nameInput = useRef();
		const handleFocus = () => {
			nameInput.current.focus();
			nameInput.current.value = "Wpisz dane";
			nameInput.current.style.color = '#f00';
		}
	const handleSubmit = (e) => {
		e.preventDefault();

		if(searchValue === "")
		{
			handleFocus();
			console.log("brak")
		}
		else {
		console.log(`send ${searchValue}`);
		}
	};


	const handleReset = () => {
		/* resetUsers(); */
		console.log("reset");
		setSearchValue('');

}

    return (
        <>
					<form className="header__search-wrapper" onSubmit={handleSubmit}>
          	<Input type="text" onChange={handleChange} value={searchValue} />
            <Button values="Search" onClick={handleSubmit} />
            <Button values="Reset" onClick={handleReset} />
						<Button ref={nameInput}/>
          </form>
        </>
    )
}

export default SearchUser;
