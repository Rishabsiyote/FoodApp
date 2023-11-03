import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const useStateContext = () => {
  return useContext(StateContext);
};

export const StateProvider = ({ children }) => {
  const [total, setTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  // const [login,setLogin] = useState(false)

  const value = {
    total,
    setTotal,
    cartCount,
    setCartCount,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
