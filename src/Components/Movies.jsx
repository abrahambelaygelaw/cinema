import React from "react";
import { useNavigate } from "react-router-dom";
import { image200 } from "../Constants";
const Movies = ({ moviesList, title, type }) => {
  const navigate = useNavigate();

  return (
    moviesList.length != 0 && (
      <div className="max-w-screen-2xl m-auto">
        <h1 className="text-xl font-medium mb-3">{title}</h1>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 ">
          {moviesList?.map((movie) => (
            <div key={movie.id} className="rounded-lg border">
              <img
                src={image200 + movie.poster_path}
                className="w-full  rounded-t-lg"
              />
              {
                <div className="p-2">
                  <h1
                    className="font-medium truncate line-clamp-2 cursor-pointer"
                    onClick={() => {
                      navigate(`/${type}/` + movie.id);
                    }}
                  >
                    {movie.original_title || movie.original_name}
                  </h1>
                </div>
              }
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default Movies;
