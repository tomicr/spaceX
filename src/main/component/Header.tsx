/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Switch } from 'antd';
import GlobalStyles from './GlobalStyles';
import rocket from '../style/asetss/rocket.jpg';

const Header = function Header() {
  const [theme, setTheme] = useState('dark');
  const themeToggler = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  const lightTheme = {
    body: '#fff',
    fontColor: '#000',
  };

  const darkTheme = {
    body: '#C0C0C0',
    fontColor: '#fff',
  };

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <div>
        <header>
          <div className="header">
            <img className="logo" src={rocket} alt="logo" />
            <Switch defaultChecked onClick={() => themeToggler()} />
          </div>
        </header>
        <GlobalStyles />
      </div>
    </ThemeProvider>
  );
};
export default Header;
