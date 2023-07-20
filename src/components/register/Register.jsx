import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase.init.js";
import authErrors from "../../firebase.errorCode.js";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const Register = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleOnSubmit = (event) => {
    setError("");
    setSuccess("");
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        console.log(user);
        setSuccess("User Created Successfully");
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
        Register Now
      </h1>
      <form
        onSubmit={handleOnSubmit}
        className="flex flex-col  items-center gap-4 w-full h-screen"
      >
        <input
          type="email"
          name="email"
          placeholder="Type email here"
          className="input input-bordered input-success w-full max-w-xs"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Type password here"
          className="input input-bordered input-success w-full max-w-xs"
          required
        />
        <button className="btn btn-success text-white">Register</button>
        <p className="text-error text-xl font bold">{error}</p>
        <p className="text-success text-xl font bold">{success}</p>
      </form>
    </div>
  );
};

export default Register;
