import React, { useState, useEffect} from 'react';
import { Button, Input } from './../formComponents/'
const Header = ({ users }) => {
    const [search, setSearch] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value.toLowerCase();
        setSearch(value);
        console.log(value);
      };

      const handleSubmit = (e) => {
          console.log("klikm ;)");
        e.preventDefault();
        console.log(`sent ${search}`);
        };

      const handleReset = () => {
        setSearch('');
      };
      useEffect(() => {
        setFilteredUsers(
          users.filter((user) =>
            user.name.toLowerCase().includes(search.toLowerCase())
          )
        );
      }, [search, users]);

   return (
        <div className="header__section">
            <h1 className="header__title">Search user...</h1>
            <form className="header__search-wrapper" onSubmit={handleSubmit}>
                <Input type="text" search={search} onChange={handleChange} />
                <Button values="Search" onClick ={handleSubmit}/>
                <Button values="Reset" onClick={handleReset} />
            </form>
        </div>
    )
}

export default Header;
