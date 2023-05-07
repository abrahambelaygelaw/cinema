import React, { useState } from "react";
import useFetch from "../UseFetch";
import { image200 } from "../Constants";
import { useNavigate } from "react-router-dom";

const MovieResults = () => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=2b061481ea9265b28385f24c7f0b5125&language=en-US&query=avengers&page=1&include_adult=false`;
  const { data } = useFetch(url);
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  if (data) {
    if (result === null) {
      setResult(data.results);
    }
  }
  return (
    <div className="flex-1">
      {result &&
        result.map((item) => (
          <div className="h-40 flex m-5">
            <img className="h-full" src={image200 + item.poster_path} alt="" />
            <div className="m-3 flex flex-col">
              <h2
                className="font-medium cursor-pointer"
                onClick={() => {
                  navigate(`/movie/${item.id}`);
                }}
              >
                {item.title}
              </h2>
              <h4 className="mb-2">{item.release_date.slice(0, 4)}</h4>
              <p className=" overflow-hidden whitespace-pre-wrap" style={{}}>
                {item.overview}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MovieResults;
