import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [identity, setIdentity] = useState(localStorage.getItem("identity"));
  const [brandId, setBrandId] = useState(localStorage.getItem("brandId"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("identity");
    localStorage.removeItem("brandId");

    setToken(null);
    setIdentity(null);
    setBrandId(null);

    navigate("/");
  };

  return (
    <ShopContext.Provider
      value={{
        token,
        setToken,
        identity,
        setIdentity,
        brandId,
        setBrandId,
        logout,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;