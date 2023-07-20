import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="bg-red-100 w-screen h-screen flex flex-col gap-5 justify-center items-center">
      <h1 className="text-red-500 font-bold text-6xl md:text-9xl ">
        Not Found
      </h1>
      <Link className="bg-green-500 hover:bg-green-600 duration-500 px-6 py-3 text-white font-bold rounded hover:drop-shadow-2xl">
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
