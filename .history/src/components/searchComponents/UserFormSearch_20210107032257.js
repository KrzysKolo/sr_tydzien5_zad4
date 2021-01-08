import React, {useContext, useState} from 'react';
import { UserContext } from './../../contexts/UserContext';
import { Button, Input } from './../formComponents/';
import Error from './../userContainerComponents/Error';

const UserFormSearch = () => {
	const { users, setIsErr, isErr } = useContext(UserContext);

	const [searchValue, setSearchValue] = useState("");

	const handleChange = (e) => {
		const value = e.target.value.toLowerCase();
		setSearchValue(value);
		console.log(value);
		};

	const handleSubmit = (e) => {
		e.preventDefault();
		if(searchValue === "")
		{
			console.log("bleble");
			setIsErr("Brak imienia")
			{ isErr && <Error isErr={setIsErr}/> }
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

		<form className="header__search-wrapper" onSubmit={handleSubmit}>
      <Input type="text" value={searchValue} onChange={handleChange}  />
     	<Button values="Search" onClick={handleSubmit} />
     	<Button values="Reset" onClick={handleReset} />
    </form>
    )
}

export default UserFormSearch;
