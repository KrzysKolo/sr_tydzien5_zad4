import React, { useState } from 'react';
import { Button, Input } from './../formComponents/'
const Header = () => {
    const [value, setValue] = useState("")

    const handleChange = (e) => {
        const value = e.target.value.toLowerCase();
        setState(setValue);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`sent ${value}`);
        };

      const handleReset = () => {
        setState('');
      };
   return (
        <div className="header__section">
            <h1 className="header__title">Search user...</h1>
            <form className="header__search-wrapper" onSubmit={handleSubmit}>
                <Input type="text" value={value} />
                <Button values="Search" />
                <Button values="Reset" />
            </form>
        </div>
    )
}

export default Header;
