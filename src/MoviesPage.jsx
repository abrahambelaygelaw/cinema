import React from "react";
import useFetch from "./UseFetch";
import { useState } from "react";
import Movies from "./Movies";

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const { data } = useFetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=2b061481ea9265b28385f24c7f0b5125&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
  );
  if (data) {
    if (movies === null) setMovies(data.results);
  }
  return <Movies moviesList={movies} />;
};

export default MoviesPage;
