import React, { useState } from "react";

const ReadMore = ({ text }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <h2 className="font-semibold mt-5">Biography</h2>
      <p
        className={`whitespace-pre-wrap ${
          expanded ? "overflow-auto" : "overflow-hidden"
        }`}
      >
        {expanded ? text : `${text.slice(0, 500)}...`}
      </p>
      {!expanded && (
        <button
          className="text-blue-500 hover:text-blue-700"
          onClick={toggleExpand}
        >
          Read More
        </button>
      )}
    </div>
  );
};

export default ReadMore;
