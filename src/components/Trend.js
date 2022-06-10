import React from "react";

const Trend = ({ trend, number, unit }) => {
  return (
    <div className={`trend--${trend} trend-wrapper`}>
      <img
        className="trend__icon"
        src={`./images/icon-${trend === "increase" ? "up" : "down"}.svg`}
        alt="trend"
      />
      <div className="trend__number">{number}</div>
      <div className="trend__unit">{unit}</div>
    </div>
  );
};

export default Trend;
