import React from "react";

const NoResults = ({ query, type }) => {
  return (
    <div className="w-full border h-24 flex justify-center mt-6 m-3 items-center rounded-md">
      <p>
        No results found for {query} in {type}
      </p>
    </div>
  );
};

export default NoResults;
