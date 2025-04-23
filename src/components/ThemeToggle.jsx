import React from "react";
import { useGlobalAppContext } from "../context";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useGlobalAppContext();
  return (
    <>
      <section className="toggle-container">
        <button className="dark-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? (
            <BsFillMoonFill className="toggle-icon" />
          ) : (
            <BsFillSunFill className="toggle-icon" />
          )}
        </button>
      </section>
    </>
  );
};

export default ThemeToggle;
