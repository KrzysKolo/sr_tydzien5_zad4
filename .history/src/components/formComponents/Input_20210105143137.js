import React from 'react';

const Input = ({ type, searchValue, onChange }) => {
    return (
        <>
          <input className="header__search" type={type} value={searchValue} onChange={onChange} placeholder="Search user..." />
        </>
    )
}

export default Input;
