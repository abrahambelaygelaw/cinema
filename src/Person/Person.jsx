import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../UseFetch";

const Person = () => {
  const { id } = useParams();
  const url = `https://api.themoviedb.org/3/person/${id}?api_key=2b061481ea9265b28385f24c7f0b5125&language=en-US`;
  const { data } = useFetch(url);
  const [personData, setPersonData] = useState(null);
  if (data) {
    if (personData === null) setPersonData(data);
  }
  const image = "https://image.tmdb.org/t/p/w200";
  return (
    <div className="max-w-2xl m-3 flex">
      <div>
        {personData && (
          <img src={image + personData.profile_path} className="w-72" alt="" />
        )}
      </div>
    </div>
  );
};

export default Person;
