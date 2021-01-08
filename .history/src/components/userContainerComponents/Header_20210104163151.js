import React from 'react';
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
            <form className="header__search-wrapper" handleSubmit={handleSubmit}>
                <Input type="text" search={search} handleChange={handleChange} />
                <Button values="Search" handleSubmit ={handleSubmit}/>
                <Button values="Reset" handleReset={handleReset} />
            </form>
        </div>
    )
}

export default Header;
