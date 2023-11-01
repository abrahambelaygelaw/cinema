import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../UseFetch";
import { image200, image400, image500, apikey, URL } from "../Constants";
import Cast from "../Components/Cast";
import SimilarMovies from "../Components/SimilarMovies";
import Review from "../Components/Review";
import CircularPercent from "../Components/CirularPercent";

const Movie = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState();
  const { data } = useFetch(
    `${URL}movie/${id}?api_key=${apikey}&language=en-US`
  );
  useEffect(() => {
    document.title = movieData ? movieData.original_title : "Loading";
  }, [movieData]);
  useEffect(() => {
    if (data) {
      setMovieData(data);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [data]);
  return (
    <>
      {movieData && (
        <div
          style={{
            backgroundImage: `url(${image500 + movieData.backdrop_path})`,
          }}
          className="bg-cover relative mt-12"
        >
          <div className=" bg-black bg-opacity-60">
            <div className=" flex flex-col md:flex-row max-w-screen-2xl 2xl:m-auto mx-3  text-white py-6 ">
              <div className="md:flex-shrink-0 flex justify-center">
                <img src={image400 + movieData.poster_path} className="w-96" />
              </div>
              <div className="m-7 p-5 rounded-lg">
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
                <div className="flex items-center gap-3 my-3">
                  <CircularPercent
                    percent={parseInt(movieData.vote_average * 10)}
                    size={60}
                    fillColor="#333"
                    strokeWidth={4}
                    strokeColor="#00ff00"
                    textColor="#fff"
                  />{" "}
                  <h2 className="font-semibold">User Score</h2>
                </div>

                <h3 className="italic">{movieData.tagline}</h3>
                <h1 className="text-lg font-bold">Overview</h1>
                <p>{movieData.overview}</p>
                <div className="flex justify-between max-w-screen-sm">
                  <h1 className="font-semibold ">
                    Status : {movieData.status}
                  </h1>
                  <h1 className="font-semibold ">
                    Budget :{" "}
                    {movieData.budget != 0
                      ? new Intl.NumberFormat().format(movieData.budget)
                      : "Unknown"}
                  </h1>
                  <h1 className="font-semibold ">
                    Revenue :{" "}
                    {movieData.revenue != 0
                      ? new Intl.NumberFormat().format(movieData.revenue)
                      : "Unknown"}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="mx-3">
        <Cast id={id} type="movie" />
        <Review id={id} type="movie" />
        <SimilarMovies id={id} type="movie" />
      </div>
    </>
  );
};

export default Movie;
