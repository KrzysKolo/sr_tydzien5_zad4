import React from 'react';
import { Button, Input } from './../formComponents/'
const SearchUser = () => {

	const [searchValue, setSearchValue] = useState("");

	const handleSubmit = (e) => {
		console.log("klikm ;)");
		e.preventDefault();
	};

    return (
        <>
					<form className="header__search-wrapper" onSubmit={handleSubmit}>
          	<Input type="text" onChange={handleChange}/>
            <Button values="Search" onClick={handleSubmit} />
            <Button values="Reset" onClick={handleReset} />
          </form>
        </>
    )
}

export default SearchUser;
