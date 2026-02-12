

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");

    if (storedUsers) {
     
      setUsers(JSON.parse(storedUsers));
    } else {
      
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          setUsers(res.data);
          localStorage.setItem("users", JSON.stringify(res.data));
        })
        .catch((err) => console.log(err));
    }
  }, []);


  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, [users]);

  const addUser = (newUser) => {
    const userWithId = {
      ...newUser,
      id: Date.now(),
    };

    const updatedUsers = [...users, userWithId];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers)); 
  };

  return (
    <UserContext.Provider value={{ users, addUser }}>
      {children}
    </UserContext.Provider>
  );
};
