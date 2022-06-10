import React from "react";
import DetailsCard from "./DetailsCard";

const entries = [
  {
    dataType: "Page View",
    media: "facebook",
    data: "87",
    trend: "increase",
    percentage: 3,
  },
  {
    dataType: "Likes",
    media: "facebook",
    data: "52",
    trend: "decrease",
    percentage: 2,
  },
  {
    dataType: "Likes",
    media: "instagram",
    data: "5462",
    trend: "increase",
    percentage: 2257,
  },
  {
    dataType: "Profile Views",
    media: "instagram",
    data: "52k",
    trend: "increase",
    percentage: 1375,
  },
  {
    dataType: "Retweets",
    media: "twitter",
    data: "117",
    trend: "increase",
    percentage: 303,
  },
  {
    dataType: "Likes",
    media: "twitter",
    data: "507",
    trend: "increase",
    percentage: 553,
  },
  {
    dataType: "Likes",
    media: "youtube",
    data: "107",
    trend: "decrease",
    percentage: 19,
  },
  {
    dataType: "Total Views",
    media: "youtube",
    data: "1407",
    trend: "decrease",
    percentage: 12,
  },
];

const Overview = ({ theme }) => {
  return (
    <div className="section">
      <h2>Overview - Today</h2>
      <div className="card-wrapper">
        {entries.map((entry) => (
          <DetailsCard
            key={`${entry.media}-${entry.dataType}`}
            entry={entry}
            theme={theme}
          />
        ))}
      </div>
    </div>
  );
};

export default Overview;
