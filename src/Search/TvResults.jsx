import React, { useEffect, useState } from "react";
import useFetch from "../UseFetch";
import { URL, apikey, image200 } from "../Constants";
import { useNavigate, useParams } from "react-router-dom";
import NoResults from "../Components/NoResults";

const TvResults = () => {
  const { query } = useParams();
  const url = `${URL}search/tv?api_key=${apikey}&language=en-US&query=${query}&page=1&include_adult=false`;
  const { data } = useFetch(url);
  const navigate = useNavigate();
  const [result, setResult] = useState([]);
  useEffect(() => {
    if (data) {
      setResult(data.results);
    }
  }, [data]);

  return result.length !== 0 ? (
    <div className="">
      <h2 className="m-5 font-bold"> Results for {query} in tv shows</h2>
      {result &&
        result.map((item) => (
          <div key={item.id} className="h-40 flex rounded-md border  m-5">
            <img
              className="h-full rounded-tl-md shadow rounded-bl-md"
              src={image200 + item.poster_path}
              alt=""
            />
            <div className="m-3 flex flex-col">
              <h2
                className="font-medium cursor-pointer"
                onClick={() => {
                  navigate(`/tv/${item.id}`);
                }}
              >
                {item.name}
              </h2>
              <p className=" overflow-hidden whitespace-pre-wrap truncate line-clamp-2">
                {item.overview}
              </p>
            </div>
          </div>
        ))}
    </div>
  ) : (
    <NoResults query={query} type="tv-shows" />
  );
};

export default TvResults;
