import React from "react";

const Login = () => {
  return (
    <div className=" h-screen">
      <h1 className="text-center font-bold text-6xl text-success mt-6 mb-24">
        Login Now
      </h1>
      <form className="flex flex-col  items-center gap-4 w-full h-screen">
        <input
          type="email"
          placeholder="Type email here"
          className="input input-bordered input-success w-full max-w-xs"
        />
        <input
          type="password"
          placeholder="Type password here"
          className="input input-bordered input-success w-full max-w-xs"
        />
        <button className="btn btn-success text-white">Login</button>
      </form>
    </div>
  );
};

export default Login;
