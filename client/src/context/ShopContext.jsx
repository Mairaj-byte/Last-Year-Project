import { createContext, useState } from "react";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [identity, setIdentity] = useState(localStorage.getItem("identity"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("identity");
    setToken(null);
    setIdentity(null);
    navigate("/")
  };

  return (
    <ShopContext.Provider
      value={{ token, setToken, identity, setIdentity, logout }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
