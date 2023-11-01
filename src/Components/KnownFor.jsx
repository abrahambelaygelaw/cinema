import React, { useState } from "react";
import useFetch from "../UseFetch";
import { useNavigate, useParams } from "react-router-dom";
import { URL, apikey, image200 } from "../Constants";
const KnownFor = () => {
  const { id } = useParams();
  const url = `${URL}/person/${id}/movie_credits?api_key=${apikey}&language=en-US`;
  const { data } = useFetch(url);
  const [moviesList, setMovieList] = useState(null);
  const navigate = useNavigate();
  if (data) {
    if (moviesList === null) {
      setMovieList(data.cast);
    }
  }
  return (
    <>
      <h1 className="my-3 font-semibold text-xl">Movie Credits</h1>
      {moviesList && (
        <div className="grid 2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-x-3 gap-y-5 ">
          {moviesList.map((movie) => (
            <div key={movie.id} className="rounded-lg  border">
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
