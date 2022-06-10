import React, { useState } from "react";
import Followers from "./components/Followers/Followers";
import Overview from "./components/Overview/Overview";
import Switch from "./components/Switch";
import "./app.css";

const App = () => {
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="app" data-theme={theme}>
      <main className="container">
        <header className="header">
          <div className="header__text">
            <h1>Social Media Dashboard</h1>
            <h3 className="header__subtitle">Total Followers: 23,004</h3>
          </div>

          <Switch switchTheme={switchTheme} theme={theme}>
            Switch
          </Switch>
        </header>
        <Followers theme={theme} />
        <Overview theme={theme} />

        <footer className="footer">
          <div className="attribution">
            Challenge by
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by
            <a href="https://github.com/rongshuang-gao" target="_blank">
              Ginny Gao
            </a>
            .
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
