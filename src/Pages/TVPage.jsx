import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../UseFetch";
import CircularPercent from "../Components/CirularPercent";
import Cast from "../Components/Cast";
import Review from "../Components/Review";
import SimilarMovies from "../Components/SimilarMovies";
import { URL, apikey, image500 } from "../Constants";
const TV = () => {
  const { id } = useParams();
  const [tvData, setTvData] = useState();
  const { data } = useFetch(`${URL}tv/${id}?api_key=${apikey}&language=en-US`);

  useEffect(() => {
    if (data) {
      setTvData(data);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [data]);
  useEffect(() => {
    document.title = tvData ? tvData.original_name : "Loading";
  }, [tvData]);
  return (
    <>
      {tvData && (
        <div
          style={{
            backgroundImage: `url(${image500 + tvData.backdrop_path})`,
          }}
          className="bg-cover relative mt-12"
        >
          <div className="bg-black bg-opacity-60">
            <div className=" flex flex-col md:flex-row max-w-screen-2xl 2xl:m-auto mx-3  text-white py-6 ">
              <div className="md:flex-shrink-0 flex justify-center">
                <img
                  src={image500 + tvData.poster_path}
                  className="w-48 md:w-96"
                />
              </div>
              <div className="m-7">
                <h1 className="text-2xl font-bold">{tvData.original_name}</h1>
                {tvData.genres.map((item, index) => (
                  <span key={item.id}>
                    {`${item.name}${
                      index != tvData.genres.length - 1 ? ", " : "  ."
                    }`}
                  </span>
                ))}
                <h3 className="italic">{tvData.tagline}</h3>
                <div className="flex items-center gap-3 my-3">
                  <CircularPercent
                    percent={parseInt(tvData.vote_average * 10)}
                    size={60}
                    fillColor="#333"
                    strokeWidth={4}
                    strokeColor="#00ff00"
                    textColor="#fff"
                  />
                  <h2 className="font-semibold">User Score</h2>
                </div>
                <h1 className="text-lg font-bold">Overview</h1>
                <p>{tvData.overview}</p>
                <h3 className="font-semibold">
                  {tvData.number_of_seasons} Seasons{" "}
                </h3>

                <h3 className="font-semibold">
                  {tvData.number_of_episodes} Episodes
                </h3>
                <div className="flex justify-between max-w-screen-sm my-5">
                  {tvData.created_by &&
                    tvData.created_by.map((creater) => (
                      <div key={creater.id}>
                        <h1 className="font-semibold ">{creater.name}</h1>
                        <h1 className=" ">Creater</h1>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="mx-3">
        <Cast id={id} type="tv" />
        <Review id={id} type="tv" />
        <SimilarMovies id={id} type="tv" />
      </div>
    </>
  );
};

export default TV;
