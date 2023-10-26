import React, { useState, useEffect } from "react";
import useFetch from "../UseFetch";
import { URL, apikey, image200 } from "../Constants";

const Review = ({ id }) => {
  const { data } = useFetch(
    `${URL}movie/${id}/reviews?api_key=${apikey}&language=en-US&page=1`
  );
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    if (data) {
      setReviews(data.results);
    }
  }, [data]);

  return (
    reviews && (
      <div className="">
        {reviews.length > 0 &&
          reviews.slice(0, Math.min(2, reviews.length)).map((item) => (
            <div
              key={item.id}
              className="flex max-w-screen-2xl m-auto p-10  drop-shadow-xl border border-solid border-inherit rounded-3xl my-10 gap-5"
            >
              <div className=" min-w-fit">
                <img
                  className="w-12 h-12 rounded-full"
                  src={image200 + item.author_details.avatar_path}
                  alt=""
                />
              </div>
              <div>
                <span className="font-medium text-lg mr-5">{item.author}</span>
                <span>{item.author_details.rating}</span>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
      </div>
    )
  );
};

export default Review;
