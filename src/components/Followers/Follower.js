import React from "react";
import MediaIcon from "../MediaIcon";
import Trend from "../Trend";

const Follower = ({ media, theme }) => {
  return (
    <div className={`card__top-border card-${media.media} `} data-theme={theme}>
      <div className="card card__inner">
        <div className="follower__title">
          <MediaIcon media={media.media} />
          <div className="follower__name">{media.account}</div>
        </div>

        <div className="follower__number">{media.totalFollowers} </div>
        <div className="follower__text">Followers</div>
        <div>
          <Trend
            trend={media.trend}
            number={media.todayFollowers}
            unit={"Today"}
          />
        </div>
      </div>
    </div>
  );
};

export default Follower;
