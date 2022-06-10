import React from "react";
import Follower from "./Follower";

const followersOfSocialMedia = [
  {
    media: "facebook",
    account: "@nathanf",
    totalFollowers: "1987",
    trend: "increase",
    todayFollowers: 12,
  },
  {
    media: "twitter",
    account: "@nathanf",
    totalFollowers: "1044",
    trend: "increase",
    todayFollowers: 99,
  },
  {
    media: "instagram",
    account: "realnathanf",
    totalFollowers: "11k",
    trend: "increase",
    todayFollowers: 1099,
  },
  {
    media: "youtube",
    account: "Nathan F.",
    totalFollowers: "8239",
    trend: "decrease",
    todayFollowers: 144,
  },
];

const Followers = ({ theme }) => {
  return (
    <div className="card-wrapper">
      {followersOfSocialMedia.map((media) => (
        <Follower key={media.media} media={media} theme={theme} />
      ))}
    </div>
  );
};

export default Followers;
