import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase.init";
import authErrors from "../../firebase.errorCode";

const auth = getAuth(app);

const Login = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleOnLoginSubmit = (event) => {
    setError("");
    setSuccess("");
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setSuccess("login succcessfull");
        // ...
      })
      .catch((error) => {
        setError(
          authErrors[error.code.replace("auth/", "")] || "Something went wrong"
        );
      });
  };
  return (
    <div className=" h-screen">
      <h1 className="text-center font-bold text-6xl text-success mt-6 mb-24">
        Login Now
      </h1>
      <form
        onSubmit={handleOnLoginSubmit}
        className="flex flex-col  items-center gap-4 w-full h-screen"
      >
        <input
          type="email"
          name="email"
          placeholder="Type email here"
          className="input input-bordered input-success w-full max-w-xs"
        />
        <input
          type="password"
          name="password"
          placeholder="Type password here"
          className="input input-bordered input-success w-full max-w-xs"
        />
        <button className="btn btn-success text-white">Login</button>
        <p className="text-error text-xl font bold">{error}</p>
        <p className="text-success text-xl font bold">{success}</p>
      </form>
    </div>
  );
};

export default Login;
