import React, { useEffect, useState } from "react";
import useFetch from "../UseFetch";
import { useNavigate, useParams } from "react-router-dom";
import NoResults from "../Components/NoResults";
import { URL, apikey, image200 } from "../Constants";

const PeopleResult = () => {
  const { query } = useParams();
  const url = `${URL}search/person?api_key=${apikey}&language=en-US&query=${query}&page=1`;
  const { data } = useFetch(url);
  const navigate = useNavigate();
  const [PeopleResult, setPeopleResult] = useState(null);
  useEffect(() => {
    if (data) {
      setPeopleResult(data.results);
    }
  }, [data]);

  return (
    PeopleResult &&
    (PeopleResult.length !== 0 ? (
      <div className="">
        <h2 className="m-5 font-bold"> Results for {query} in people</h2>
        {PeopleResult.map((person) => (
          <div key={person.id} className="mx-5 flex">
            <img
              src={image200 + person.profile_path}
              alt=""
              className="w-24 h-24 object-cover object-top rounded-lg mb-5 mr-5"
            />
            <div className="">
              <h2
                className="font-medium cursor-pointer"
                onClick={() => {
                  navigate(`/people/${person.id}`);
                }}
              >
                {person.name}
              </h2>
              <h4 className="">{person.known_for_department}</h4>
              {person.known_for.map((item, index) => (
                <p key={item.id} className="inline truncate line-clamp-1">
                  {item.title +
                    (index != person.known_for.length - 1 ? ", " : "")}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    ) : (
      <NoResults type="people" query={query} />
    ))
  );
};

export default PeopleResult;
