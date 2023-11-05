import { createContext, useState } from "react";

const ValueContext = createContext();
const product = new Map();
const pricing = new Map();
export const MyProvider = ({ children }) => {
    const [cartCount,setCartCount] = useState(0);
    const [total,setTotal] = useState(0);
    return (
      <ValueContext.Provider value={{cartCount,setCartCount,total,setTotal,product,pricing}}>
        {children}
      </ValueContext.Provider>
    );
  };



export default ValueContext