import React, { useState } from "react";
import useFetch from "./UseFetch";
import { useNavigate } from "react-router-dom";

const Trending = ({ type, image_path, title, link }) => {
  const [items, setItems] = useState(null);
  const navigate = useNavigate();
  const image = "https://image.tmdb.org/t/p/w200";
  const { data } = useFetch(
    `https://api.themoviedb.org/3/trending/${type}/day?api_key=2b061481ea9265b28385f24c7f0b5125`
  );
  if (data) {
    if (items === null) setItems(data.results);
  }
  return (
    <>
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="flex overflow-scroll gap-3  mt-5 scrollbar ">
        {items?.map((item) => (
          <div id={item.id} className="min-w-fit ">
            <img
              src={image + item[image_path]}
              className="w-40 rounded-xl mb-5"
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
    </>
  );
};

export default Trending;
