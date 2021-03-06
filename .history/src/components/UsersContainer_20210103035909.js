import React from 'react';

const UsersContainer = ({users}) => {
    return (
        <div>
					{users.map(user => (
						<div key={user.id}>{user.first}</div>
					))}
        </div>
    )
}

export default UsersContainer;
