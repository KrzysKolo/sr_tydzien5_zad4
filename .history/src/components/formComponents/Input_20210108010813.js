import React from 'react';

const Input = ({ type, searchValue, onChange }) => {
    return (
        <>
          <input className="header__search" type={type} value={searchValue} onChange={onChange} placeholder="Enter user's firstname or lastname" />
        </>
    )
}

export default Input;
