import React, { useEffect } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useNavigate,
  useParams,
} from "react-router-dom";

const Search = () => {
  const { query } = useParams();
  useEffect(() => {
    document.title = query;
  }, [query]);
  return (
    <div className="md:flex-row flex-col flex max-w-screen-2xl m-auto pr-10 mt-12">
      <div className="mx-5 justify-evenly w-full md:hidden flex border shadow rounded-lg bg-slate-600 text-white">
        <NavLink
          className="font-medium m-1 cursor-pointer"
          to={`/search/people/${query}`}
        >
          People
        </NavLink>
        <NavLink
          className="font-medium m-1 cursor-pointer"
          to={`/search/tv/${query}`}
        >
          TV Shows
        </NavLink>
        <NavLink
          className="font-medium m-1 cursor-pointer"
          to={`/search/movie/${query}`}
        >
          Movies
        </NavLink>
      </div>
      <div className="m-6 rounded-xl border shadow hidden md:block h-fit">
        <h1 className="py-3 text-white px-12 text-lg font-medium  bg-slate-600 rounded-t-xl">
          Search Results
        </h1>
        <div className="flex flex-col border-t-4 border-solid border-white p-4">
          <NavLink
            className="font-medium m-1 cursor-pointer"
            to={`/search/people/${query}`}
          >
            People
          </NavLink>
          <NavLink
            className="font-medium m-1 cursor-pointer"
            to={`/search/tv/${query}`}
          >
            TV Shows
          </NavLink>
          <NavLink
            className="font-medium m-1 cursor-pointer"
            to={`/search/movie/${query}`}
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
