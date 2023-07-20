import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-700 flex justify-center items-center gap-8 p-3 drop-shadow-2xl">
      <Link
        to="/"
        className="text-white font-bold hover:text-green-500 duration-500"
      >
        Home
      </Link>
      <Link
        to="/login"
        className="text-white font-bold hover:text-green-500 duration-500"
      >
        Login
      </Link>
      <Link
        to="/register"
        className="text-white font-bold hover:text-green-500 duration-500"
      >
        Register
      </Link>
    </div>
  );
};

export default Navbar;
