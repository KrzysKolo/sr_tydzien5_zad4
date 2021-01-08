import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {

  const UsersAPI = 'm/users.json';
	const [users, setUsers ] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isErr, setIsErr] = useState(false);

	useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    let timer = setTimeout(() => {
      fetch(UsersAPI)
      .then(res => {
        if (res.ok) {
        return res;
        }
        throw Error(res.status);
        })
      .then(res => res.json())
      .then(data => {
        console.log(data.users);
        setUsers(data.users);
        setIsLoading(false);
        clearTimeout(timer);
      })
      .catch(error => setIsErr(`The problem is with: ${error}`));
    }, 500);
	};
	return (
		<UserContext.Provider value= {{users, isLoading, setIsErr, isErr}} >
			{ props.children }
		</UserContext.Provider>
	)

}
export default UserContextProvider;