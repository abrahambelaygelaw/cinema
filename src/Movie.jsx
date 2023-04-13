import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./UseFetch";
const Movie = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);
  const image = "https://image.tmdb.org/t/p/w300";
  const { data } = useFetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=2b061481ea9265b28385f24c7f0b5125&language=en-US`
  );
  if (data) {
    if (movieData == null) setMovieData(data);
  }
  return (
    <div>
      {movieData && (
        <div className="flex">
          <div clas>
            <img src={image + movieData.poster_path} />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{movieData.original_title}</h1>
            <span>{movieData.genres[0].name}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;
