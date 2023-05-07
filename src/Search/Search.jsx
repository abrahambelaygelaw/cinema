import React from "react";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const { query } = useParams();
  return (
    <div className="flex max-w-screen-2xl m-auto">
      <div className="m-6 rounded-xl bg-red-100 h-fit">
        <h1 className="py-3 text-white px-12 text-lg font-medium bg-blue-600 rounded-t-xl">
          Search Results
        </h1>
        <div className="flex flex-col border-t-4 border-solid border-white p-4">
          <NavLink
            className="font-medium m-1 cursor-pointer"
            onClick={() => {
              navigate(`/people/${query}`);
            }}
          >
            People
          </NavLink>
          <NavLink
            className="font-medium m-1 cursor-pointer"
            onClick={() => {
              navigate(`/tv-shows/${query}`);
            }}
          >
            TV Shows
          </NavLink>
          <NavLink
            className="font-medium m-1 cursor-pointer"
            onClick={() => {
              navigate(`/movies/${query}`);
            }}
          >
            Movies
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Search;
