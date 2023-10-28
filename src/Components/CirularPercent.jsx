import React from "react";
import PropTypes from "prop-types";

const CircularPercent = ({
  percent,
  size,
  strokeWidth,
  strokeColor,
  fillColor,
  textColor,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        style={{
          strokeDasharray: circumference,
          strokeDashoffset: offset,
        }}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        style={{
          fill: textColor,
          fontSize: `${size / 5}px`,
          fontWeight: "bold",
        }}
      >
        {`${percent}%`}
      </text>
    </svg>
  );
};

CircularPercent.propTypes = {
  percent: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number,
  strokeColor: PropTypes.string,
  fillColor: PropTypes.string,
  textColor: PropTypes.string,
};

CircularPercent.defaultProps = {
  strokeWidth: 10,
  strokeColor: "#ccc",
  fillColor: "transparent",
  textColor: "#000",
};

export default CircularPercent;
