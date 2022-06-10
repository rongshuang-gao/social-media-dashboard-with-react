import React from "react";

const Switch = ({ switchTheme, theme }) => {
  return (
    <div className="switch">
      <div className="switch__label">Dark Mode</div>
      <div className="switch__checkbox">
        <input type="checkbox" id="switch" onClick={switchTheme} />
        <label htmlFor="switch">Toggle</label>
      </div>
    </div>
  );
};

export default Switch;
