/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useContext, useState } from 'react';

type IThemeContext = {
  isDarkMode: boolean;
  toggleDarkMode?: () => void;
};

const defaultState = {
  isDarkMode: true,
};
const ThemeContext = React.createContext<IThemeContext>(defaultState);

export function useTheme() {
  return useContext(ThemeContext);
}

const ThemeContextProvider = function (props: { children: any }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode((prevDarkMode) => !prevDarkMode);
  };
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
