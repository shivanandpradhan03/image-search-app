import { createContext, useContext, useEffect, useState } from "react";
import { DEFAULT_SEARCH_WORD } from "./constants";

// Create a context for the global app state
// This context will be used to provide global state to the entire application
const GlobalAppContext = createContext();

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const storedDarkMode = localStorage.getItem("darkMode");

  // Check if the user has previously set a preference in localStorage
  // If so, use that preference
  if (storedDarkMode !== null) {
    return storedDarkMode;
  }
  // If the user has previously set a preference, use that
  return prefersDarkMode;
};
export const GlobalAppProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(getInitialDarkMode());
  const [searchWord, setSearchWord] = useState(DEFAULT_SEARCH_WORD);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkMode);
  }, [isDarkMode]);

  return (
    // The GlobalAppProvider component wraps its children with the GlobalAppContext.Provider component
    // This allows any component that is a descendant of GlobalAppProvider to access the context value
    <GlobalAppContext.Provider
      value={{ isDarkMode, toggleDarkMode, searchWord, setSearchWord }}
    >
      {children}
    </GlobalAppContext.Provider>
  );
};

// Custom hook to use the GlobalAppContext
// This hook allows us to access the context value in any component that is a descendant of the GlobalAppProvider
export const useGlobalAppContext = () => {
  return useContext(GlobalAppContext);
};
