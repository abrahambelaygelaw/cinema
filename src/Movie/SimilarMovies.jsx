import React, { useEffect, useState } from "react";
import Movies from "../Movies";
import useFetch from "../UseFetch";
import { apikey, URL } from "../Constants";

const SimilarMovies = ({ id }) => {
  const [movies, setMovies] = useState(null);
  const { data } = useFetch(
    `${URL}movie/${id}/similar?api_key=${apikey}&language=en-US&page=1`
  );

  useEffect(() => {
    if (data) {
      setMovies(data.results);
    }
  }, [data]);
  return <Movies moviesList={movies} title="You May Also Like" />;
};

export default SimilarMovies;
