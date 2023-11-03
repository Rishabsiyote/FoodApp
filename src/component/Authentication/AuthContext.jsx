import React, { createContext, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Login from "../Login";
import { useStateContext } from "../StateContext";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);};

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const { login, setLogin } = useStateContext();

  const navigate = useNavigate();
  const value = { isAuth, setIsAuth };


  if (isAuth)
    return (
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
    else {

      // return navigate("/login",{ replace: true })
      return <AuthContext.Provider value={value}>{<Login />}</AuthContext.Provider>;
      // return <Navigate to ={"login"} replace/>
    }
};
