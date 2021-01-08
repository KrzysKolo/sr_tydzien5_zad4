import React, {useContext, useState} from 'react';
import { UserContext } from './../../contexts/UserContext';
import { Button, Input } from './../formComponents/'

const UserFormSearch = () => {
	const { users } = useContext(UserContext);

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

		<form className="header__search-wrapper" onSubmit={handleSubmit}>
      <Input type="text" onChange={handleChange} value={searchValue} />
     	<Button values="Search" onClick={handleSubmit} />
     	<Button values="Reset" onClick={handleReset} />
    </form>
    )
}

export default UserFormSearch;
