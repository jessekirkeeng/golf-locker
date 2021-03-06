import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

export const MyContext = React.createContext({});

export const useUserContext = () => {
  return useContext(MyContext);
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get("/api/auth/me")
      .then(({ data }) => {
        return setUser(data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <MyContext.Provider value={{ user, setUser }}>
      {children}
    </MyContext.Provider>
  );
};

export default UserProvider;
