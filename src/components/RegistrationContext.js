import React, { createContext, useState } from 'react';
 
export const RegistrationContext = createContext();
 
export const RegistrationProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
 
  const addUser = (user) => {
    setUsers([...users, user]);
  };
 
  const editUser = (index, updatedUser) => {
    const updatedUsers = [...users];
    updatedUsers[index] = updatedUser;
    setUsers(updatedUsers);
  };
 
  const deleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };
 
  return (
    <RegistrationContext.Provider value={{ users, addUser, editUser, deleteUser }}>
      {children}
    </RegistrationContext.Provider>
  );
};