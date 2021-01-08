import React, {useContext, useState} from 'react';
import { UserContext } from './../../contexts/UserContext';
import { Button, Input } from './../formComponents/';
import Error from './../userContainerComponents/Error';

const UserFormSearch = () => {
	const { users, setIsErr, isErr, searchValue, setSearchValue } = useContext(UserContext);

	const handleChange = (e) => {
		const value = e.target.value.toLowerCase();
		setSearchValue(value);
		console.log(value);
		};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (searchValue === "") {
			setIsErr("Brak imienia")
		} else { setIsErr(''); console.log(`send ${searchValue}`)};
	};

	const handleReset = () => {
		/* resetUsers(); */
		console.log("reset");
		setSearchValue('');
		setIsErr('');

	}
  return (
	<>
	<form className="header__search-wrapper" onSubmit={handleSubmit}>
      <Input type="text" value={searchValue} onChange={handleChange} require  />
      <Button values="Search" onClick={handleSubmit} />
      <Button values="Reset" onClick={handleReset} />
    </form>
	{ isErr && <Error props={isErr}/>}
	</>
    )
}

export default UserFormSearch;
