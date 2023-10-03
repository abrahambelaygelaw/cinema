import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./UseFetch";
const TV = () => {
  const { id } = useParams();
  const [tvData, setTvData] = useState(null);
  const image = "https://image.tmdb.org/t/p/w500";
  const { data } = useFetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=2b061481ea9265b28385f24c7f0b5125&language=en-US`
  );
  if (data) {
    if (tvData == null) setTvData(data);
  }
  return (
    <>
      {tvData && (
        <div
          style={{
            backgroundImage: `url(${image + tvData.backdrop_path})`,
          }}
          className="bg-cover h-screen"
        >
          <div className="bg-black opacity-70">
            <div className="flex h-screen  max-w-screen-2xl m-auto z-2 text-white ">
              <div className="flex-shrink-0">
                <img src={image + tvData.poster_path} className="" />
              </div>
              <div className="m-7">
                <h1 className="text-2xl font-bold">{tvData.original_name}</h1>
                <span>{tvData.genres[0].name}</span>
                <h3 className="italic">{tvData.tagline}</h3>
                <h1 className="text-lg font-bold">Overview</h1>
                <p>{tvData.overview}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TV;
