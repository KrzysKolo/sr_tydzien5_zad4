import React, {useContext, useState} from 'react';
import { UserContext } from './../../contexts/UserContext';
import { Button, Input } from './../formComponents/';

const UserFormSearch = () => {

	const { setIsErr, searchValue, setSearchValue } = useContext(UserContext);


	const handleChange = (e) => {

		};

	const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.value.toLowerCase();
		setSearchValue(value);
		console.log(value);
		if (searchValue === "") {
			setIsErr("Enter your first or last name!")
		} else {
      setIsErr('');
      console.log(`send ${searchValue}`);
    };
	};

	const handleReset = () => {
		/* resetUsers(); */
		console.log("reset");
		setSearchValue('');
		setIsErr('');
  };

  return (

  	<form className="header__search-wrapper" onSubmit={handleSubmit}>
      <Input type="text" value={searchValue} onChange={handleChange} require  />
      <Button values="Search" onClick={handleSubmit} />
      <Button values="Reset" onClick={handleReset} />
    </form>
  )
}

export default UserFormSearch;
