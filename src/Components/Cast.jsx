import React, { useEffect, useState } from "react";
import { apikey, URL, image200 } from "../Constants";
import useFetch from "../UseFetch";
import { useNavigate } from "react-router-dom";

const Cast = ({ id, type }) => {
  const [castList, setCastList] = useState(null);
  const navigate = useNavigate();
  const { data } = useFetch(
    `${URL + type}/${id}/credits?api_key=${apikey}&language=en-US`
  );
  useEffect(() => {
    if (data) {
      setCastList(data.cast);
    }
  }, [data]);
  return (
    castList && (
      <div className="max-w-screen-2xl m-auto mt-5">
        <h1 className="text-xl font-medium mb-2">Full Cast & Crew</h1>
        <div className="flex overflow-scroll scrollbar gap-5 ">
          {castList?.map((item) => (
            <div
              key={item.id}
              className="min-w-fit rounded-lg drop-shadow-xl border border-solid border-inherit"
            >
              <img
                src={image200 + item.profile_path}
                alt=""
                className="w-40 rounded-t-lg mb-1"
              />
              <div className="w-40 px-2 mb-1 text-sm">
                <p
                  className=" font-medium cursor-pointer"
                  onClick={() => {
                    navigate(`/people/${item.id}`);
                  }}
                >
                  {item.original_name}
                </p>
                <p className="">
                  {item.character ? item.character : item.department}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default Cast;
