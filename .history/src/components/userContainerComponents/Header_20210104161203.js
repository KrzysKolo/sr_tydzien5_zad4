import React, { useState } from 'react';
import { Button, Input } from './../formComponents/'
const Header = () => {
    const [values, setValues] = useState("")

    const handleChange = (e) => {
        const value = e.target.value.toLowerCase();
        setValues(value);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`sent ${values}`);
        };

      const handleReset = () => {
        setValues('');
      };
   return (
        <div className="header__section">
            <h1 className="header__title">Search user...</h1>
            <form className="header__search-wrapper" onSubmit={handleSubmit}>
                <Input type="text" value={values} onChange={handleChange} />
                <Button values="Search" />
                <Button values="Reset" onClick={handleReset} />
            </form>
        </div>
    )
}

export default Header;
