import React, { useState } from "react";
import useFetch from "../UseFetch";
import { useNavigate, useParams } from "react-router-dom";
import { image200 } from "../Constants";
const KnownFor = () => {
  const { id } = useParams();
  const url = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=2b061481ea9265b28385f24c7f0b5125&language=en-US`;
  const { data } = useFetch(url);
  const [moviesList, setMovieList] = useState(null);
  const navigate = useNavigate();
  if (data) {
    if (moviesList === null) {
      setMovieList(data.cast);
      console.log(moviesList);
    }
  }
  return (
    <>
      <h1 className="my-3 font-semibold text-xl">Movie Credits</h1>
      {moviesList && (
        <div className="grid 2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-x-3 gap-y-5 ">
          {moviesList.map((movie) => (
            <div key={movie.id} className="rounded-lg  bg-gray-200">
              <img
                src={image200 + movie.poster_path}
                className="w-full  rounded-t-lg"
              />
              {
                <div className="p-2">
                  <h1
                    className=" cursor-pointer truncate line-clamp-2"
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
      )}
    </>
  );
};

export default KnownFor;
