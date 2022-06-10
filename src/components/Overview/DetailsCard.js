import React from "react";
import Trend from "../Trend";
import MediaIcon from "../MediaIcon";

const DetailsCard = ({ entry, theme }) => {
  return (
    <div className="card">
      <div className="detail-card__title">
        <div className="detail-card__data-type">{entry.dataType}</div>
        <MediaIcon media={entry.media} />
      </div>
      <div className="detail-card__content">
        <div className="detail-card__data">{entry.data}</div>
        <Trend trend={entry.trend} number={entry.data} unit="%" />
      </div>
    </div>
  );
};

export default DetailsCard;
