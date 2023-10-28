import React, { useState } from "react";
import useFetch from "../UseFetch";
import { useNavigate } from "react-router-dom";
import { URL, apikey, image200 } from "../Constants";

const Trending = ({ type, image_path, title, link }) => {
  const [items, setItems] = useState(null);
  const navigate = useNavigate();
  const { data } = useFetch(`${URL}trending/${type}/day?api_key=${apikey}`);
  if (data) {
    if (items === null) setItems(data.results);
  }
  return (
    items && (
      <div className="mx-3 2xl:mx-auto">
        <h1 className="text-xl font-bold">{title}</h1>
        <div className="flex overflow-scroll gap-3  mt-5 scrollbar ">
          {items?.map((item) => (
            <div id={item.id} className="min-w-fit ">
              <img
                src={image200 + item[image_path]}
                className="w-40 rounded-xl mb-2"
              />
              <div className=" w-40">
                <h4
                  className="cursor-pointer"
                  onClick={() => {
                    navigate(`/${link}/${item.id}`);
                  }}
                >
                  {item.title ? item.title : item.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default Trending;
