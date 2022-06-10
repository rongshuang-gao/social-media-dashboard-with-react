import React from "react";

const MediaIcon = ({ media }) => {
  return (
    <div>
      <img src={`./images/icon-${media}.svg`} alt={`${media}-icon`} />
    </div>
  );
};

export default MediaIcon;
