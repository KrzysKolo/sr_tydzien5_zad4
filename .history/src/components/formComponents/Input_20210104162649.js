import React from 'react';

const Input = ({ type, handleChange }) => {
    return (
        <>
          <input className="header__search" type={type} value={search} onChange={handleChange} placeholder="Search user..." />
        </>
    )
}

export default Input;
