import React, { useEffect } from "react";
import useFetch from "../UseFetch";
import { useState } from "react";
import Movies from "../Movies";
import { URL, apikey } from "../Constants";

const MoviesPage = ({ sort_by }) => {
  const [movies, setMovies] = useState(null);
  const { data } = useFetch(
    `${URL}discover/movie?api_key=${apikey}&language=en-US&sort_by=${sort_by}.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
  );
  useEffect(() => {
    if (data) {
      setMovies(data.results);
    }
  }, [data]);
  return <Movies moviesList={movies} />;
};

export default MoviesPage;
