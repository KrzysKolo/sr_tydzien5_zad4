import React, {useContext, useState} from 'react';
import { UserContext } from './../../contexts/UserContext';
import { Button, Input } from './../formComponents/'

const UserFormSearch = () => {
    const { users, searchValue } = useContext(UserContext);
    return (
        <div>

        </div>
    )
}

export default UserFormSearch;
