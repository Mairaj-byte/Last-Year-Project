import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [identity, setIdentity] = useState(localStorage.getItem("identity"));
  const [userId, setUserId] = useState(localStorage.getItem("userId"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("identity");
    localStorage.removeItem("userId");

    setToken(null);
    setIdentity(null);
    setUserId(null);

    navigate("/");
  };

  return (
    <ShopContext.Provider
      value={{
        token,
        setToken,
        identity,
        setIdentity,
        userId,
        setUserId,
        logout,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;