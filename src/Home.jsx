import React, { useState, useEffect } from "react";
import Trending from "./Trending";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [query, setQuery] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("keyup", handleEnter);
    return () => removeEventListener("keyup", handleEnter);
  });
  const handleEnter = (e) => {
    if (e.key == "Enter") {
      toggleSearch();
    }
  };
  const toggleSearch = () => {
    if (query) {
      navigate(`/search/movie/${query.toLowerCase().replace(/\s/g, "-")}`);
    }
  };
  return (
    <>
      <div className="m-auto max-w-screen-2xl">
        <div className="text-white bg-blue-800 px-20 py-28 mb-4 w-full">
          <h1 className="text-4xl font-bold">Welcome.</h1>
          <h3 className="text-2xl ">
            Millions of Movies, TV shows and people to discover. Explore now.
          </h3>
          <div className="flex ">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => {
                setQuery((prev) => e.target.value);
              }}
              className="w-full rounded-3xl text-black text-xl my-5 align-middle px-5 py-2 "
            />
          </div>
        </div>
        <Trending
          type="movie"
          image_path="poster_path"
          title="Trending Movies"
          link="movie"
        />
        <Trending
          type="tv"
          image_path="poster_path"
          title="Trending TV Shows"
          link="tv"
        />
        <Trending
          type="person"
          image_path="profile_path"
          title="Trending People"
          link="people"
        />
      </div>
    </>
  );
};

export default Home;
