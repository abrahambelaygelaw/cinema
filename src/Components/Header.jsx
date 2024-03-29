import React, { useEffect, useContext } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Context } from "../Context";
const Header = () => {
  const navigate = useNavigate();
  const { query, setQuery } = useContext(Context);
  const handleSearch = () => {
    if (query) {
      navigate(`/search/movie/${query.toLowerCase().replace(/\s/g, "-")}`);
    }
  };
  useEffect(() => {
    window.addEventListener("keyup", handleEnter);
    return () => removeEventListener("keyup", handleEnter);
  });
  const handleEnter = (e) => {
    if (e.key == "Enter") {
      handleSearch();
    }
  };
  return (
    <>
      <div className="w-full fixed bg-white z-40">
        <div className="md:m-auto mx-3 max-w-screen-2xl flex justify-between h-12   items-center ">
          <h2
            src="../../cinema.svg"
            className="text-5xl font-bold mx-3 cursor-pointer md:block hidden font"
            onClick={() => {
              navigate("/");
            }}
          >
            watchIt
          </h2>
          <img
            src="../../cinema.svg"
            className="md:hidden text-5xl w-10 font-bold mx-3 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
          <div className="relative mx-auto flex-1 ">
            <input
              type="text"
              value={query}
              className="w-full px-4 py-1 text-gray-900 bg-white border-b-blue-500 border-b-2 focus:outline-none "
              placeholder="search"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            <button onClick={handleSearch}>
              <svg
                className="absolute w-5 h-5 text-gray-400 top-2 right-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
