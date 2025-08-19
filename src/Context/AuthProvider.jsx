import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../Utils/LocalStorage";

// Create context
export const AuthContext = createContext();

// AuthProvider component
const AuthProvider = ({ children }) => {

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage();
    const {employees} = getLocalStorage();
    setUserData(employees);
  
  }, []);

  return (
    <AuthContext.Provider value={[userData,setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
