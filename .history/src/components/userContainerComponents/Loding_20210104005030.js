import React from 'react';
import spinner from './../../images/spinner.gif'
const Loading = () => {
    return (
        <img src={spinner} style={{width: 200, margin: 'auto', display: 'block'}} alt="Loading"/>
     );
}

export default Loading;