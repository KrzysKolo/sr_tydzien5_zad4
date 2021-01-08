import React, {useContext, useState} from 'react';
import { UserContext } from './../../contexts/UserContext';
import { Button, Input } from './../formComponents/';

const UserFormSearch = () => {

	const { setIsErr, searchValue, setSearchValue } = useContext(UserContext);
  const [value, setValue] = useState("");

	const handleChange = (e) => {
		setValue(e.target.value.toLowerCase());
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (value === "") {
			setIsErr("Enter the user's first or last name!")
		} else {
      setSearchValue(value);
      setIsErr('');
    };
	};

	const handleReset = () => {
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
