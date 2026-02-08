import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, identity, logout } = useContext(ShopContext);

  const handleGetStarted = () => {
    navigate("/signinpage");
  };

  // Redirect after logout
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token ]);

  return (
    <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
      <h1
        className="text-2xl font-bold text-indigo-600 cursor-pointer"
        onClick={() => navigate("/")}
      >
        Influexa
      </h1>

      {/* ✅ Links shown ONLY when logged in */}
      {token && (
        <div className="space-x-6 hidden md:flex items-center">
          <NavLink to="/brandlist" className="hover:text-indigo-600">
            Brands
          </NavLink>

          <NavLink to="/influlist" className="hover:text-indigo-600">
            Creators
          </NavLink>

          {/* Role-based dashboard */}
          {identity === "brand" && (
            <NavLink to="/branddash" className="hover:text-indigo-600">
              Dashboard
            </NavLink>
          )}

          {identity === "creator" && (
            <NavLink to="/influencerdash" className="hover:text-indigo-600">
              Dashboard
            </NavLink>
          )}

          <button
            onClick={logout}
            className="hover:text-red-500 font-medium"
          >
            Logout
          </button>
        </div>
      )}

      {/* ✅ Button shown ONLY when logged out */}
      {!token && (
        <button
          onClick={handleGetStarted}
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700"
        >
          Get Started
        </button>
      )}
    </nav>
  );
};

export default Navbar;
