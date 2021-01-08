import React from 'react';

const UserDetails = ({ user }) => {
  return (
		<li>
			{user.title} {user.firstname} {user.lastname}
    </li>
    )
}

export default UserDetails;
