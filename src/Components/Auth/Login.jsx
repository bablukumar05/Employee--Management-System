import React, { useState } from "react";

const Login = ({handleLogin}) => {
    


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password)
    // console.log("email is ", email);
    // console.log("password is ", password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form onSubmit={submitHandler} className="flex flex-col items-center justify-center">
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className=" outline-none bg-transparent border-2 border-emerald-600 text-xl py-4 px-5 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-4 px-5 mt-4 rounded-full  placeholder:text-gray-400"
            type="password"
            placeholder="Enter password"
          />
          <button
            className=" text-white mt-4 outline-none bg-emerald-600 text-xl py-4 px-5 rounded-full"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
