import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  useEffect(() => {
    document.title = "Not Found";
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen z-50 inset-0">
      <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-black">
        {" "}
        Go back to
        <Link to="/" className="text-blue-500">
          {" "}
          Home
        </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
