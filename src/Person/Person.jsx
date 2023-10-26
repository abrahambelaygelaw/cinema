import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../UseFetch";
import ReadMore from "./ReadMore";
import KnownFor from "./KnownFor";

const Person = () => {
  const { id } = useParams();
  const url = `https://api.themoviedb.org/3/person/${id}?api_key=2b061481ea9265b28385f24c7f0b5125&language=en-US`;
  const { data } = useFetch(url);
  const [personData, setPersonData] = useState(null);
  if (data) {
    if (personData === null) setPersonData(data);
    console.log(personData);
  }
  const image = "https://image.tmdb.org/t/p/w400";
  return (
    personData && (
      <div className=" max-w-screen-2xl  m-auto flex flex-col md:flex-row">
        <div className="flex-shrink-0 m-5 flex md:flex-col">
          <img
            src={image + personData.profile_path}
            className="w-72 rounded-lg"
            alt=""
          />
          <div className="mx-3">
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
          <ReadMore text={personData.biography} />
          <KnownFor />
        </div>
      </div>
    )
  );
};

export default Person;
