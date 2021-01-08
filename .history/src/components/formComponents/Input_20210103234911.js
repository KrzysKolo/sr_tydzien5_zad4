import React from 'react';

const Input = ({ type, values, onChange }) => {
    return (
        <>
          <input type={type} values={values} onChange={onChange} placeholder="Enter name..." />
        </>
    )
}

export default Input;
