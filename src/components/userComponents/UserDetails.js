import React from 'react';

const UserDetails = ({ user }) => {
  return (
		<li className="user">
			{user.title} {user.firstname} {user.lastname}
    </li>
    )
}

export default UserDetails;
