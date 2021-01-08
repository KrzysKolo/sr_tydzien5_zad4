import React from 'react';

const Input = ({ type, values, onChange }) => {
    return (
        <>
          <input className="header__search" type={type} values={values} onChange={onChange} placeholder="Search user..." />
        </>
    )
}

export default Input;
