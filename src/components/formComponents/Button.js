import React from 'react';

const Button = ({ values, onClick }) => {
    return (
        <div className="header__search-btn" onClick={onClick}>
            {values}
        </div>
    )
}

export default Button;
