import React from 'react';

const Input = ({ type, searchValue, onChange }) => {
    return (
        <>
          <input className="header__search" type={type} value={searchValue} onChange={onChange} placeholder="Enter the user's first or last name..." />
        </>
    )
}

export default Input;
