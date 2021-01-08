import React from 'react';
const Error = ({ isErr }) => {
    return (
            <p className="error">{isErr}</p>
     );
}

export default Error;