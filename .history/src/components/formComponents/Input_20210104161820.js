import React from 'react';

const Input = ({ type, search, onChange }) => {
    return (
        <>
          <input className="header__search" type={type} values={search} onChange={onChange} placeholder="Search user..." />
        </>
    )
}

export default Input;
