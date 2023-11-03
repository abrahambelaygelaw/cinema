import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../UseFetch";
import ReadMore from "../Components/ReadMore";
import MovieCredits from "../Components/MovieCredits";
import TvCredits from "../Components/TvCredits";
import { URL, apikey } from "../Constants";

const Person = () => {
  const { id } = useParams();
  const url = `${URL}person/${id}?api_key=${apikey}&language=en-US`;
  const { data } = useFetch(url);
  const [personData, setPersonData] = useState(null);
  if (data) {
    if (personData === null) setPersonData(data);
  }
  useEffect(() => {
    document.title = personData ? personData.name : "Loading";
  }, [personData]);

  const image = "https://image.tmdb.org/t/p/w400";
  return (
    personData && (
      <div className=" max-w-screen-2xl  m-auto flex flex-col md:flex-row mt-12">
        <div className="flex-shrink-0 flex m-5 md:flex-col ">
          <img
            src={image + personData.profile_path}
            className="md:w-72 w-40 object-cover h-auto rounded-lg"
            alt=""
          />
          <div className="mx-3  max-w-[250px] ">
            <h1 className="font-bold text-xl mt-3">Personal Info</h1>
            <div className="mt-3">
              <h2 className="text-lg font-semibold">Known for</h2>
              <h3 className="">{personData.known_for_department}</h3>
            </div>
            <div className="mt-3">
              <h2 className="text-lg font-semibold">Place of Birth</h2>
              <h3 className="">{personData.place_of_birth}</h3>
            </div>{" "}
            <div className="mt-3">
              <h2 className="text-lg font-semibold">Presence</h2>
              <h3 className="">{`${personData.birthday} - ${
                personData.deathday ? personData.deathday : "Present"
              }`}</h3>
            </div>{" "}
            <div className="mt-3">
              <h2 className="text-lg font-semibold">Gender</h2>
              <h3 className="">{personData.gender == 1 ? "Female" : "Male"}</h3>
            </div>
          </div>
        </div>
        <div className="mx-3">
          <h1 className="text-2xl mt-5 font-bold text-gray-800">
            {personData.name}
          </h1>
          <div>
            <h2 className="font-semibold mt-5">Biography</h2>

            <ReadMore text={personData.biography} />
          </div>
          <MovieCredits />
          <TvCredits />
        </div>
      </div>
    )
  );
};

export default Person;
