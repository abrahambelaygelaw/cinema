import React from "react";

const Header = () => {
  const show = (id) => {
    document.getElementById(id).style.display = "block";
  };
  const hide = (id) => {
    document.getElementById(id).style.display = "none";
  };
  return (
    <div className="w-screen bg-blue-500">
      <div className="max-w-screen-2xl m-auto flex justify-between h-12">
        <h1 className="text-5xl font-mono font-bold">CINEMA</h1>
        <div className="flex mt-3 mx-4 z-10">
          <div
            className="w-32"
            onMouseLeave={() => {
              hide("movies");
            }}
          >
            <span
              className="font-medium"
              onMouseEnter={() => {
                show("movies");
              }}
            >
              Movies
            </span>
            <div
              className="bg-white rounded-md px-3 hidden cursor-pointer mb-1"
              id="movies"
            >
              <h1>popular</h1>
              <h1>Now Playing</h1>
              <h1>Latest</h1>
              <h1>upcoming</h1>
              <h1>Top Rated</h1>
            </div>
          </div>
          <div
            className="w-32"
            onMouseLeave={() => {
              hide("tv");
            }}
          >
            <span
              className="font-medium"
              onMouseEnter={() => {
                show("tv");
              }}
            >
              TV Shows
            </span>
            <div
              className="bg-white rounded-md px-3 hidden cursor-pointer mb-1"
              id="tv"
            >
              <h1>popular</h1>
              <h1>Now Playing</h1>
              <h1>Latest</h1>
              <h1>upcoming</h1>
              <h1>Top Rated</h1>
            </div>
          </div>
          <div
            className="w-32"
            onMouseLeave={() => {
              hide("people");
            }}
          >
            <span
              className="font-medium"
              onMouseEnter={() => {
                show("people");
              }}
            >
              People
            </span>
            <div
              className="bg-white rounded-md px-3 hidden cursor-pointer mb-1"
              id="people"
            >
              <h1>popular</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
