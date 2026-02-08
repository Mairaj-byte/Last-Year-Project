import React, { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const SignInPage = () => {
  const [currentState, setCurrentState] = useState("Login");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [identity, setIdentityLocal] = useState("");

  const { setToken, setIdentity } = useContext(ShopContext);
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
  const url =
    currentState === "Sign Up"
      ? "http://localhost:4000/api/user/register"
      : "http://localhost:4000/api/user/login";

  const payload =
    currentState === "Sign Up"
      ? { name, email, password, identity }
      : { email, password };

  const response = await axios.post(url, payload);
  const data = response.data;

  if (!data.success) {
    toast.error(data.message);
    return;
  }

  // ✅ Save auth data
  localStorage.setItem("token", data.token);
  localStorage.setItem("identity", data.user.identity);

  setToken(data.token);
  setIdentity(data.user.identity);

  toast.success(
    currentState === "Login"
      ? "Login successful 🎉"
      : "Account created successfully 🎉"
  );

  // ✅ Redirect using API identity (NOT state)
  if (data.user.identity === "brand") {
    navigate("/influlist");
  } else if (data.user.identity === "creator") {
    navigate("/brandlist");
  }

} catch (error) {
  toast.error(error.response?.data?.message || error.message);
}

  }

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl font-semibold">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {currentState === "Sign Up" && (
        <input
          type="text"
          placeholder="Name"
          className="w-full px-3 py-2 border border-gray-800"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      )}

      <input
        type="email"
        placeholder="Email"
        className="w-full px-3 py-2 border border-gray-800"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full px-3 py-2 border border-gray-800"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      {currentState === "Sign Up" && (
        <select
          className="w-full px-3 py-2 border border-gray-800"
          value={identity}
          onChange={(e) => setIdentityLocal(e.target.value)}
          required
        >
          <option value="">Select Identity</option>
          <option value="brand">Brand</option>
          <option value="creator">Creator</option>
        </select>
      )}

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer text-gray-600">
          Forgot your password?
        </p>

        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer text-indigo-600"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer text-indigo-600"
          >
            Login here
          </p>
        )}
      </div>

      <button
        type="submit"
        className="bg-black text-white font-light px-8 py-2 mt-4 w-full"
      >
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default SignInPage;
