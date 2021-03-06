import React, { useState } from 'react';
import { Button, Input } from './../formComponents/'
const Header = ({ users }) => {
    const [search, setSearch] = useState("");

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

   return (
        <div className="header__section">
            <h1 className="header__title">Search user...</h1>
            <form className="header__search-wrapper" onSubmit={handleSubmit}>
                <Input type="text" search={search} onChange={handleChange} />
                <Button value="Search" onClick ={handleSubmit}/>
                <Button value="Reset" onClick={handleReset} />
            </form>
        </div>
    )
}

export default Header;
