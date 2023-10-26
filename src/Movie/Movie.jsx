import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../UseFetch";
import { image400, image500, apikey, URL } from "../Constants";
import Cast from "./Cast";
import SimilarMovies from "./SimilarMovies";
import Review from "./Review";

const Movie = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);
  const { data } = useFetch(
    `${URL}movie/${id}?api_key=${apikey}&language=en-US`
  );

  if (data) {
    if (movieData === null) {
      setMovieData(data);
    }
    console.log(movieData);
  }
  return (
    <>
      {movieData && (
        <div
          style={{
            backgroundImage: `url(${image500 + movieData.backdrop_path})`,
          }}
          className="bg-cover "
        >
          <div className="bg-black opacity-70 p-12">
            <div className="flex flex-col md:flex-row max-w-screen-2xl m-auto z-2 text-white ">
              <div className="flex-shrink-0">
                <img src={image400 + movieData.poster_path} className="" />
              </div>
              <div className="m-7">
                <h1 className="text-2xl font-bold">
                  {movieData.original_title}
                </h1>
                <span>{movieData.release_date + "  ."} </span>
                {movieData.genres.map((item, index) => (
                  <span key={item.id}>
                    {`${item.name}${
                      index != movieData.genres.length - 1 ? ", " : "  ."
                    }`}
                  </span>
                ))}
                <span>{movieData.runtime + " minutes  ."} </span>

                <h3 className="italic">{movieData.tagline}</h3>
                <h1 className="text-lg font-bold">Overview</h1>
                <p>{movieData.overview}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="mx-3">
        <Cast id={id} />
        <Review id={id} />
        <SimilarMovies id={id} />
      </div>
    </>
  );
};

export default Movie;
