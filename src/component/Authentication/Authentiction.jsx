import React from "react";
import { useStateContext } from "../StateContext";
import { Navigate } from "react-router-dom";

const Authentiction = ({ children }) => {
  const { isAuth } = useStateContext();

  if (!isAuth) {
    <Navigate to={"/login"} replace />;
  } else {
    return children;
  }
  //   return (
  //     <div>Authentiction</div>
  //   )
};

export default Authentiction;
