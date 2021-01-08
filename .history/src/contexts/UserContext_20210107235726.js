import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {

  const UsersAPI = '/users.json';
	const [users, setUsers ] = useState([]);
	const [filteredUsers, setFilteredUsers] = useState([]);
	const [searchValue, setSearchValue] = useState("");
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

	useEffect(() => {
    if (searchValue.trim() === "") {
      setFilteredUsers(users);
      return;
    }
    setFilteredUsers(
      (users.filter((user) =>
        user.firstname.toLowerCase().includes(searchValue.trim()));
		)
    );
  }, [searchValue, users]);
	return (
		<UserContext.Provider value= {{users, filteredUsers, isLoading, setIsLoading, setIsErr, isErr, searchValue, setSearchValue}} >
			{ props.children }
		</UserContext.Provider>
	)

}
export default UserContextProvider;