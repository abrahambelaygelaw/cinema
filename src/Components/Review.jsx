import React, { useState, useEffect } from "react";
import useFetch from "../UseFetch";
import { URL, apikey, image200 } from "../Constants";
import ReadMore from "./ReadMore";

const Review = ({ id, type }) => {
  const { data } = useFetch(
    `${URL + type}/${id}/reviews?api_key=${apikey}&language=en-US&page=1`
  );
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    if (data) {
      setReviews(data.results);
    }
  }, [data]);

  return (
    reviews &&
    reviews.length != 0 && (
      <div className=" max-w-screen-2xl m-auto">
        <h1 className=" font-medium text-xl">Reviews</h1>
        {reviews.length > 0 &&
          reviews.slice(0, Math.min(2, reviews.length)).map((item) => (
            <div
              key={item.id}
              className="flex  p-10  drop-shadow-xl border border-solid border-inherit rounded-3xl my-5 gap-5"
            >
              <div className=" min-w-fit">
                <img
                  className="w-12 h-12 rounded-full"
                  src={
                    item.author_details.avatar_path
                      ? image200 + item.author_details.avatar_path
                      : "../../avatar.svg"
                  }
                  alt=""
                />
              </div>
              <div>
                <span className="font-medium text-lg mr-5">{item.author}</span>
                <span>{item.author_details.rating}</span>
                <ReadMore text={item.content} />
              </div>
            </div>
          ))}
      </div>
    )
  );
};

export default Review;
