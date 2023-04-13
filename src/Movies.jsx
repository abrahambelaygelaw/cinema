import React from "react";
import { useNavigate } from "react-router-dom";
const Movies = ({ moviesList }) => {
  const navigate = useNavigate();
  const image = "https://image.tmdb.org/t/p/w200";
  return (
    <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8  ">
      {moviesList?.map((movie) => (
        <div key={movie.id} className="rounded-lg bg-gray-200">
          <img
            src={image + movie.poster_path}
            className="w-full  rounded-t-lg"
          />
          {
            <div className="p-2">
              <h1
                className="font-bold cursor-pointer"
                onClick={() => {
                  navigate("/movie/" + movie.id);
                }}
              >
                {movie.original_title}
              </h1>
            </div>
          }
        </div>
      ))}
    </div>
  );
};

export default Movies;
