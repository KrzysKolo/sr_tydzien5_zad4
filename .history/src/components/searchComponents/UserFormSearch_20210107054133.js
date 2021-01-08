import React, {useContext, useState} from 'react';
import { UserContext } from './../../contexts/UserContext';
import { Button, Input } from './../formComponents/';

const UserFormSearch = () => {

	const { setIsErr, searchValue, setSearchValue, isLoading } = useContext(UserContext);
  const [value, setValue] = useState("");

	const handleChange = (e) => {
		setValue(e.target.value.toLowerCase());
		console.log(value);
		};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (value === "") {
			setIsErr("Enter your first or last name!")
		} else {
      setSearchValue(value);
      console.log(value);
      setIsErr('');
      console.log(`send ${value}`);
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
      <Button values="Reset" onClick={handleReset} />
    </form>
  )
}

export default UserFormSearch;
