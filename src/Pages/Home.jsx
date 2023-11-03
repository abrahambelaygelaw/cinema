import React, { useContext, useEffect } from "react";
import { Context } from "../Context";

import Trending from "../Components/Trending";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const { query, setQuery } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Watchit";
  }, []);
  useEffect(() => {
    window.addEventListener("keyup", handleEnter);
    return () => removeEventListener("keyup", handleEnter);
  });
  const handleEnter = (e) => {
    if (e.key == "Enter") {
      handleSearch();
    }
  };
  const handleSearch = () => {
    if (query) {
      navigate(`/search/movie/${query.toLowerCase().replace(/\s/g, "-")}`);
    }
  };
  return (
    <>
      <div className="m-auto max-w-screen-2xl mt-12">
        <div
          className="text-white  "
          style={{
            backgroundImage: `url(${"https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`,
          }}
        >
          <div className="bg-black bg-opacity-40 px-20 py-28 mb-4 w-full">
            <h1 className="text-4xl font-bold">Welcome.</h1>
            <h3 className="text-2xl ">
              Millions of Movies, TV shows and people to discover. Explore now.
            </h3>
            <div className="flex ">
              <input
                type="text"
                placeholder="Search"
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                className="w-full rounded-3xl text-black text-xl my-5 align-middle px-5 py-2 "
              />
            </div>
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
