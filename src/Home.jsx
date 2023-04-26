import React from "react";
import Trending from "./Trending";

const Home = () => {
  return (
    <>
      <div className="text-white bg-blue-800 px-20 py-28 mb-4">
        <h1 className="text-4xl font-bold">Welcome.</h1>
        <h3 className="text-2xl ">
          Millions of Movies, TV shows and people to discover. Explore now.
        </h3>
        <div className="flex ">
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-3xl text-xl my-5 align-middle px-5 py-2 "
          />
        </div>
      </div>
      <Trending type="movie" path="poster_path" title="Trending Movies" />
      <Trending type="tv" path="poster_path" title="Trending TV Shows" />
      <Trending type="person" path="profile_path" title="Trending People" />
    </>
  );
};

export default Home;
